<?php

namespace App\Controller;

use App\Entity\Person;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/person")
 */
class PersonController extends AbstractController
{
    /**
     * @Route("/", name="person_index", methods={"GET"})
     */
    public function index(EntityManagerInterface $em): Response
    {
        $persons = $em->getRepository(Person::class)->findAll();
        return $this->json($persons);
    }

    /**
     * @Route("/new", name="person_new", methods={"POST"})
     */
    public function new(Request $request, EntityManagerInterface $em): Response
    {
        $data = json_decode($request->getContent(), true);

        $person = new Person();
        $person->setIdFamily($data['id_family']);
        $person->setPersonType($data['person_type']);
        $person->setFirstName($data['first_name']);
        $person->setLastName($data['last_name']);
        $person->setBirthDate(new \DateTime($data['birth_date']));

        $em->persist($person);
        $em->flush();

        return $this->json($person, Response::HTTP_CREATED);
    }
}
