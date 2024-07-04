<?php

namespace App\Controller;

use App\Entity\Book;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/book")
 */
class BookController extends AbstractController
{
    /**
     * @Route("/", name="book_index", methods={"GET"})
     */
    public function index(EntityManagerInterface $em): Response
    {
        $books = $em->getRepository(Book::class)->findAll();
        return $this->json($books);
    }

    /**
     * @Route("/new", name="book_new", methods={"POST"})
     */
    public function new(Request $request, EntityManagerInterface $em): Response
    {
        $data = json_decode($request->getContent(), true);

        $book = new Book();
        $book->setIsbn($data['isbn']);
        $book->setTitle($data['title']);
        $book->setAuthor($data['author']);
        $book->setSummary($data['summary']);
        $book->setIsAvailable($data['is_available']);
        $book->setGenreList($data['genre_list']);

        $em->persist($book);
        $em->flush();

        return $this->json($book, Response::HTTP_CREATED);
    }
}
