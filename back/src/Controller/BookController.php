<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Doctrine\ORM\EntityManagerInterface;

use App\Entity\Book;
use App\Repository\BookRepository;
use Symfony\Component\Security\Http\Attribute\IsGranted;

/** BookController handles CRUD operations for books **/
#[Route('/api/books')]
class BookController extends AbstractController
{
  #[Route('/', name: 'bookList', methods: ['GET'])]
  public function getBookList(BookRepository $bookRepository, SerializerInterface $serializer): JsonResponse
  {
    $bookList = $bookRepository->findAll();

    $jsonBookList = $serializer->serialize($bookList, 'json');
    return new JsonResponse($jsonBookList, Response::HTTP_OK, [], true);
  }

  #[Route('/{id}', name: 'bookDetail', methods: ['GET'])]
  public function getBookDetail(Book $bddBook, SerializerInterface $serializer): JsonResponse
  {
    $jsonBook = $serializer->serialize($bddBook, 'json');
    return new JsonResponse($jsonBook, Response::HTTP_OK, ['accept' => 'json'], true);
  }

  #[Route('/', name: "createBook", methods: ['POST'])]
  #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour créer un livre')]
  public function createBook(Request $request, SerializerInterface $serializer, EntityManagerInterface $em, ValidatorInterface $validator): JsonResponse
  {
    $book = $serializer->deserialize($request->getContent(), Book::class, 'json');

    // Checking for errors
    $errors = $validator->validate($book);
    if ($errors->count() > 0) {
      return new JsonResponse($serializer->serialize($errors, 'json'), JsonResponse::HTTP_BAD_REQUEST, [], true);
    }

    $em->persist($book);
    $em->flush();

    $jsonBook = $serializer->serialize($book, 'json');

    return new JsonResponse($jsonBook, Response::HTTP_CREATED, [], true);
  }

  #[Route('/{id}', name: "updateBook", methods: ['PUT'])]
  #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour modifier un livre')]
  public function updateBook(Book $bddBook, Request $request, SerializerInterface $serializer, EntityManagerInterface $em, ValidatorInterface $validator): JsonResponse
  {
    $updatedBook = $serializer->deserialize(
      $request->getContent(),
      Book::class,
      'json',
      [AbstractNormalizer::OBJECT_TO_POPULATE => $bddBook]
    );

    // Checking for errors
    $errors = $validator->validate($updatedBook);
    if ($errors->count() > 0) {
      return new JsonResponse($serializer->serialize($errors, 'json'), JsonResponse::HTTP_BAD_REQUEST, [], true);
    }

    $em->persist($updatedBook);
    $em->flush();
    return new JsonResponse(null, JsonResponse::HTTP_NO_CONTENT);
  }

  #[Route('/{id}', name: 'deleteBook', methods: ['DELETE'])]
  #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour supprimer un livre')]
  public function deleteBook(Book $bddBook, EntityManagerInterface $em): JsonResponse
  {
    $em->remove($bddBook);
    $em->flush();

    return new JsonResponse(null, Response::HTTP_NO_CONTENT);
  }
}
