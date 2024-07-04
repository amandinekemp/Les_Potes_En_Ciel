<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BorrowRepository")
 */
class Borrow
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Book")
     * @ORM\JoinColumn(nullable=false)
     */
    private $book;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Family")
     * @ORM\JoinColumn(nullable=false)
     */
    private $family;

    /**
     * @ORM\Column(type="date")
     */
    private $loan_date;

    /**
     * @ORM\Column(type="date")
     */
    private $return_date;

    // getters and setters
}
