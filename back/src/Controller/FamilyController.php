<?php

namespace App\Controller;

use App\Entity\Family;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class FamilyController extends AbstractController
{
  #[Route('/api/families/{id}', name: 'familyDetail', methods: ['GET'])]
  public function getFamilyDetail(Family $bddFamily, SerializerInterface $serializer): JsonResponse
  {
    $jsonFamily = $serializer->serialize($bddFamily, 'json', ['groups' => 'getFamily']);
    return new JsonResponse($jsonFamily, Response::HTTP_OK, ['accept' => 'json'], true);
  }

  #[Route('/api/families', name: "createFamily", methods: ['POST'])]
  public function createFamily(Request $request, SerializerInterface $serializer, EntityManagerInterface $em, ValidatorInterface $validator): JsonResponse
  {
    $family = $serializer->deserialize($request->getContent(), Family::class, 'json');

    // On vérifie les erreurs
    $errors = $validator->validate($family);
    if ($errors->count() > 0) {
      return new JsonResponse($serializer->serialize($errors, 'json'), JsonResponse::HTTP_BAD_REQUEST, [], true);
    }

    $em->persist($family);
    $em->flush();

    $jsonFamily = $serializer->serialize($family, 'json', ['groups' => 'getFamily']);

    return new JsonResponse($jsonFamily, Response::HTTP_CREATED, [], true);
  }

  #[Route('/api/families/{id}', name: "updateFamily", methods: ['PUT'])]
  public function updateFamily(Family $bddFamily, Request $request, SerializerInterface $serializer, EntityManagerInterface $em, ValidatorInterface $validator): JsonResponse
  {
    $updatedFamily = $serializer->deserialize(
      $request->getContent(),
      Family::class,
      'json',
      [AbstractNormalizer::OBJECT_TO_POPULATE => $bddFamily]
    );

    // TODO : gerer la mise à jour des membres

    // On vérifie les erreurs
    $errors = $validator->validate($updatedFamily);
    if ($errors->count() > 0) {
      return new JsonResponse($serializer->serialize($errors, 'json'), JsonResponse::HTTP_BAD_REQUEST, [], true);
    }

    $em->persist($updatedFamily);
    $em->flush();
    return new JsonResponse(null, JsonResponse::HTTP_NO_CONTENT);
  }
}
