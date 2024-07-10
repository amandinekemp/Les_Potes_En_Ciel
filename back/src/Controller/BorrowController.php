<?php

namespace App\Controller;

use App\Entity\Borrow;
use App\Repository\BorrowRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

# Access to entire controller requires authenticated user (defined in /config/packages/security.yaml)
#[Route('/api/borrows')]
class BorrowController extends AbstractController
{
  #[Route('/user/{idUser}', name: 'borrowList', methods: ['GET'])]
  public function getBorrowList(int $idUser, BorrowRepository $borrowRepository, SerializerInterface $serializer): JsonResponse
  {
    $borrowList = $borrowRepository->findByUser($idUser);

    if (!$borrowList) {
      return new JsonResponse(null, Response::HTTP_NOT_FOUND);
    }

    $jsonBorrowList = $serializer->serialize($borrowList, 'json');
    return new JsonResponse($jsonBorrowList, Response::HTTP_OK, [], true);
  }

  #[Route('/', name: "createBorrow", methods: ['POST'])]
  public function createBorrow(Request $request, SerializerInterface $serializer, EntityManagerInterface $em, ValidatorInterface $validator): JsonResponse
  {
    $borrow = $serializer->deserialize($request->getContent(), Borrow::class, 'json');

    // On vérifie les erreurs
    $errors = $validator->validate($borrow);
    if ($errors->count() > 0) {
      return new JsonResponse($serializer->serialize($errors, 'json'), JsonResponse::HTTP_BAD_REQUEST, [], true);
    }

    $em->persist($borrow);
    $em->flush();

    $jsonBook = $serializer->serialize($borrow, 'json');

    return new JsonResponse($jsonBook, Response::HTTP_CREATED, [], true);
  }

  #[Route('/{id}', name: "updateBorrow", methods: ['PUT'])]
  #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour valider le retour d\'un livre')]
  public function updateBorrow(Borrow $bddBorrow, Request $request, SerializerInterface $serializer, EntityManagerInterface $em, ValidatorInterface $validator): JsonResponse
  {
    $updatedBorrow = $serializer->deserialize(
      $request->getContent(),
      Borrow::class,
      'json',
      [AbstractNormalizer::OBJECT_TO_POPULATE => $bddBorrow]
    );

    // On vérifie les erreurs
    $errors = $validator->validate($updatedBorrow);
    if ($errors->count() > 0) {
      return new JsonResponse($serializer->serialize($errors, 'json'), JsonResponse::HTTP_BAD_REQUEST, [], true);
    }

    $em->persist($updatedBorrow);
    $em->flush();
    return new JsonResponse(null, JsonResponse::HTTP_NO_CONTENT);
  }
}
