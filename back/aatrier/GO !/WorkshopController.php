<?php

namespace App\Controller;

use App\Entity\Workshop;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/workshop")
 */
class WorkshopController extends AbstractController
{
    /**
     * @Route("/", name="workshop_index", methods={"GET"})
     */
    public function index(EntityManagerInterface $em): Response
    {
        $workshops = $em->getRepository(Workshop::class)->findAll();
        return $this->json($workshops);
    }

    /**
     * @Route("/new", name="workshop_new", methods={"POST"})
     */
    public function new(Request $request, EntityManagerInterface $em): Response
    {
        $data = json_decode($request->getContent(), true);

        $workshop = new Workshop();
        $workshop->setTitle($data['title']);
        $workshop->setStartDate(new \DateTime($data['start_date']));
        $workshop->setEndDate(new \DateTime($data['end_date']));
        $workshop->setDescription($data['description']);
        $workshop->setPlace($data['place']);
        $workshop->setIdOrganizer($data['id_organizer']);

        $em->persist($workshop);
        $em->flush();

        return $this->json($workshop, Response::HTTP_CREATED);
    }
}
