<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

use App\Entity\Book;
use App\Repository\BookRepository;


class BookController extends AbstractController
{
    #[Route('/api/books', name: 'bookList', methods: ['GET'])]
    public function getBookList(BookRepository $bookRepository, SerializerInterface $serializer): JsonResponse
    {
      $bookList = $bookRepository->findAll();

      $jsonBookList = $serializer->serialize($bookList, 'json');
      return new JsonResponse($jsonBookList, Response::HTTP_OK, [], true);
    }

  //   #[Route('/api/books/{isbn}', name: 'bookDetail', methods: ['GET'])]
  //   public function getBookDetail(int $isbn, BookRepository $bookRepository, SerializerInterface $serializer): JsonResponse
  //   {
  //       $book = $bookRepository->find($isbn);
  //       if ($book) {
  //           $jsonBook = $serializer->serialize($book, 'json');
  //           return new JsonResponse($jsonBook, Response::HTTP_OK, [], true);
  //       }
  //       return new JsonResponse(null, Response::HTTP_NOT_FOUND);
  //  }

    #[Route('/api/books/{isbn}', name: 'bookDetail', methods: ['GET'])]
    public function getBookDetail(Book $book, SerializerInterface $serializer): JsonResponse 
    {
        $jsonBook = $serializer->serialize($book, 'json');
        return new JsonResponse($jsonBook, Response::HTTP_OK, ['accept' => 'json'], true);
    }
}
