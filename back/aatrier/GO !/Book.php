<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BookRepository")
 */
class Book
{
    /**
     * @ORM\Id
     * @ORM\Column(type="string", length=13)
     */
    private $isbn;

    /**
     * @ORM\Column(type="string", length=128)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $author;

    /**
     * @ORM\Column(type="text")
     */
    private $summary;

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_available;

    /**
     * @ORM\Column(type="string", length=128)
     */
    private $genre_list;

    // getters and setters
}
