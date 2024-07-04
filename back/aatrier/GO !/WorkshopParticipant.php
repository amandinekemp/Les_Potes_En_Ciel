<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\WorkshopParticipantRepository")
 */
class WorkshopParticipant
{
    /**
     * @ORM\Id
     * @ORM\ManyToOne(targetEntity="App\Entity\Workshop")
     * @ORM\JoinColumn(nullable=false)
     */
    private $workshop;

    /**
     * @ORM\Id
     * @ORM\ManyToOne(targetEntity="App\Entity\Person")
     * @ORM\JoinColumn(nullable=false)
     */
    private $person;

    // getters and setters
}
