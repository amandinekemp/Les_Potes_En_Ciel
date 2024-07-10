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
      ->addSelect("(CASE WHEN b.returnDate IS NULL THEN 1 ELSE 0 END) AS HIDDEN nullReturnFirst")
      ->andWhere('b.idUser = :idUserValue')
      ->setParameter('idUserValue', $idUser)
      ->orderBy('nullReturnFirst', 'DESC')
      ->addOrderBy('b.returnDate', 'DESC')
      ->setMaxResults(10)
      ->getQuery()
      ->getResult();
  }
}
