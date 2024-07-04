<?php

namespace App\Controller;

use App\Entity\WorkshopParticipant;
use App\Entity\Workshop;
use App\Entity\Person;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/workshop_participant")
 */
class WorkshopParticipantController extends AbstractController
{
    /**
     * @Route("/", name="workshop_participant_index", methods={"GET"})
     */
    public function index(EntityManagerInterface $em): Response
    {
        $participants = $em->getRepository(WorkshopParticipant::class)->findAll();
        return $this->json($participants);
    }

    /**
     * @Route("/new", name="workshop_participant_new", methods={"POST"})
     */
    public function new(Request $request, EntityManagerInterface $em): Response
    {
        $data = json_decode($request->getContent(), true);

        $workshop = $em->getRepository(Workshop::class)->find($data['id_workshop']);
        $person = $em->getRepository(Person::class)->find($data['id_person']);

        if (!$workshop || !$person) {
            return $this->json(['error' => 'Workshop or Person not found'], Response::HTTP_NOT_FOUND);
        }

        $workshopParticipant = new WorkshopParticipant();
        $workshopParticipant->setWorkshop($workshop);
        $workshopParticipant->setPerson($person);

        $em->persist($workshopParticipant);
        $em->flush();

        return $this->json($workshopParticipant, Response::HTTP_CREATED);
    }
}
