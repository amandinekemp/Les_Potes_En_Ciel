<?php

namespace App\Controller;

use App\Entity\Borrow;
use App\Entity\Book;
use App\Entity\Family;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/borrow")
 */
class BorrowController extends AbstractController
{
    /**
     * @Route("/", name="borrow_index", methods={"GET"})
     */
    public function index(EntityManagerInterface $em): Response
    {
        $borrows = $em->getRepository(Borrow::class)->findAll();
        return $this->json($borrows);
    }

    /**
     * @Route("/new", name="borrow_new", methods={"POST"})
     */
    public function new(Request $request, EntityManagerInterface $em): Response
    {
        $data = json_decode($request->getContent(), true);

        $book = $em->getRepository(Book::class)->find($data['book_isbn']);
        $family = $em->getRepository(Family::class)->find($data['id_family']);

        if (!$book || !$family) {
            return $this->json(['error' => 'Invalid book ISBN or family ID'], Response::HTTP_BAD_REQUEST);
        }

        $borrow = new Borrow();
        $borrow->setBookIsbn($book);
        $borrow->setIdFamily($family);
        $borrow->setLoanDate(new \DateTime($data['loan_date']));
        $borrow->setReturnDate(new \DateTime($data['return_date']));

        $em->persist($borrow);
        $em->flush();

        return $this->json($borrow, Response::HTTP_CREATED);
    }
}
