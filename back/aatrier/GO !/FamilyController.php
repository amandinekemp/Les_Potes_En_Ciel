<?php

namespace App\Controller;

use App\Entity\Family;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/family")
 */
class FamilyController extends AbstractController
{
    /**
     * @Route("/", name="family_index", methods={"GET"})
     */
    public function index(EntityManagerInterface $em): Response
    {
        $families = $em->getRepository(Family::class)->findAll();
        return $this->json($families);
    }

    /**
     * @Route("/new", name="family_new", methods={"POST"})
     */
    public function new(Request $request, EntityManagerInterface $em): Response
    {
        $data = json_decode($request->getContent(), true);

        $family = new Family();
        $family->setEmail($data['email']);
        $family->setPassword($data['password']);
        $family->setAddress($data['address']);
        $family->setZipCode($data['zip_code']);
        $family->setCity($data['city']);
        $family->setPhoneNumber($data['phone_number']);

        $em->persist($family);
        $em->flush();

        return $this->json($family, Response::HTTP_CREATED);
    }
}
