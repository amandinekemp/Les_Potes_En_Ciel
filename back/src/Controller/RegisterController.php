<?php

namespace App\Controller;

use App\Entity\Newsletter;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

# Access to controller is public if nothing is specified
#[Route('/api/register')]
class RegisterController extends AbstractController
{
  #[Route('/account', name: "createAccount", methods: ['POST'])]
  public function createAccount(Request $request, SerializerInterface $serializer, EntityManagerInterface $em, ValidatorInterface $validator): JsonResponse
  {
    $user = $serializer->deserialize($request->getContent(), User::class, 'json');

    // On vérifie les erreurs
    $errors = $validator->validate($user);
    if ($errors->count() > 0) {
      return new JsonResponse($serializer->serialize($errors, 'json'), JsonResponse::HTTP_BAD_REQUEST, [], true);
    }

    $em->persist($user);
    $em->flush();

    $jsonUser = $serializer->serialize($user, 'json', ['groups' => 'getAccountDetails']);

    return new JsonResponse($jsonUser, Response::HTTP_CREATED, [], true);
  }

  #[Route('/newsletters', name: "subscribeNewsletter", methods: ['POST'])]
  public function subscribeNewsletter(Request $request, SerializerInterface $serializer, EntityManagerInterface $em, ValidatorInterface $validator): JsonResponse
  {
    $newsletter = $serializer->deserialize($request->getContent(), Newsletter::class, 'json');
    // TODO : si existe déjà, dire ok

    // On vérifie les erreurs
    $errors = $validator->validate($newsletter);
    if ($errors->count() > 0) {
      return new JsonResponse($serializer->serialize($errors, 'json'), JsonResponse::HTTP_BAD_REQUEST, [], true);
    }

    $em->persist($newsletter);
    $em->flush();

    return new JsonResponse(null, Response::HTTP_CREATED, []);
  }

  #[Route('/newsletters/{id}', name: 'deleteNewsletter', methods: ['DELETE'])]
  public function deleteNewsletter(Newsletter $bddNewsletter, EntityManagerInterface $em): JsonResponse
  {
    // TODO : ne pas dire si en BDD ou pas
    $em->remove($bddNewsletter);
    $em->flush();

    return new JsonResponse(null, Response::HTTP_NO_CONTENT);
  }
}
