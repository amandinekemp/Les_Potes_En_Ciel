<?php

namespace App\Repository;

use App\Entity\Borrow;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Borrow>
 */
class BorrowRepository extends ServiceEntityRepository
{
  public function __construct(ManagerRegistry $registry)
  {
    parent::__construct($registry, Borrow::class);
  }

  /**
   * @return Borrow[] Returns all borrows for a user
   */
  public function findByUser($idUser): array
  {
    return $this->createQueryBuilder('b')
      ->andWhere('b.idUser = :val')
      ->setParameter('val', $idUser)
      ->orderBy('b.return_date', 'DESC')
      ->setMaxResults(10)
      ->getQuery()
      ->getResult();
  }
}
