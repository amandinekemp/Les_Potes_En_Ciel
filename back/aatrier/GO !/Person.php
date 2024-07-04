<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PersonRepository")
 */
class Person
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Family")
     * @ORM\JoinColumn(nullable=false)
     */
    private $family;

    /**
     * @ORM\Column(type="string", length=128)
     */
    private $person_type;

    /**
     * @ORM\Column(type="string", length=128)
     */
    private $first_name;

    /**
     * @ORM\Column(type="string", length=128)
     */
    private $last_name;

    /**
     * @ORM\Column(type="date")
     */
    private $birth_date;

    // getters and setters
}
