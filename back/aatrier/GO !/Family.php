<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\FamilyRepository")
 */
class Family
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=128)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=128)
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=128)
     */
    private $address;

    /**
     * @ORM\Column(type="integer")
     */
    private $zip_code;

    /**
     * @ORM\Column(type="string", length=28)
     */
    private $city;

    /**
     * @ORM\Column(type="string", length=15)
     */
    private $phone_number;

    // getters and setters
}
