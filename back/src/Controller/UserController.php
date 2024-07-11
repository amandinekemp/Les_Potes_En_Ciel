<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

# Access to entire controller requires authenticated user (defined in /config/packages/security.yaml)
#[Route('/api/users')]
class UserController extends AbstractController
{
  private function getCurrentUser(UserRepository $userRepository)
  {
    $currentUserEmail = $this->getUser()->getUserIdentifier();
    return $userRepository->findOneBy(['email' => $currentUserEmail]);
  }

  #[Route('/me', name: 'userDetail', methods: ['GET'])]
  public function getUserDetail(UserRepository $userRepository, SerializerInterface $serializer): JsonResponse
  {
    $bddUser = $this->getCurrentUser($userRepository);
    $jsonUser = $serializer->serialize($bddUser, 'json', ['groups' => 'getAccountDetails']);
    return new JsonResponse($jsonUser, Response::HTTP_OK, ['accept' => 'json'], true);
  }

  #[Route('/me', name: "updateUser", methods: ['PUT'])]
  public function updateUser(UserRepository $userRepository, Request $request, SerializerInterface $serializer, ValidatorInterface $validator): JsonResponse
  {
    $bddUser = $this->getCurrentUser($userRepository);
    $updatedUser = $serializer->deserialize(
      $request->getContent(),
      User::class,
      'json',
      [AbstractNormalizer::OBJECT_TO_POPULATE => $bddUser]
    );

    // TODO : gerer la mise à jour des membres

    // On vérifie les erreurs
    $errors = $validator->validate($updatedUser);
    if ($errors->count() > 0) {
      return new JsonResponse($serializer->serialize($errors, 'json'), JsonResponse::HTTP_BAD_REQUEST, [], true);
    }

    $userRepository->persist($updatedUser);
    $userRepository->flush();
    return new JsonResponse(null, JsonResponse::HTTP_NO_CONTENT);
  }
}
