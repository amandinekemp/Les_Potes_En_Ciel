<?php

namespace App\Entity;

use App\Repository\MemberRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: MemberRepository::class)]
class Member
{
  #[ORM\Id]
  #[ORM\GeneratedValue]
  #[ORM\Column]
  #[Groups(["getFamily"])]
  private ?int $idMember = null;

  #[ORM\Column(length: 128)]
  #[Groups(["getFamily"])]
  private ?string $memberType = null;

  #[ORM\Column(length: 128)]
  #[Groups(["getFamily"])]
  private ?string $firstName = null;

  #[ORM\Column(length: 128)]
  #[Groups(["getFamily"])]
  private ?string $lastName = null;

  #[ORM\Column(type: Types::DATE_MUTABLE)]
  #[Groups(["getFamily"])]
  private ?\DateTimeInterface $birthDate = null;

  #[ORM\ManyToOne(inversedBy: 'members')]
  #[ORM\JoinColumn(name: "id_family", referencedColumnName: "id_family", nullable: false)]
  private ?Family $family = null;

  public function getIdMember(): ?int
  {
    return $this->idMember;
  }

  public function getMemberType(): ?string
  {
    return $this->memberType;
  }

  public function setMemberType(string $memberType): static
  {
    $this->memberType = $memberType;

    return $this;
  }

  public function getFirstName(): ?string
  {
    return $this->firstName;
  }

  public function setFirstName(string $firstName): static
  {
    $this->firstName = $firstName;

    return $this;
  }

  public function getLastName(): ?string
  {
    return $this->lastName;
  }

  public function setLastName(string $lastName): static
  {
    $this->lastName = $lastName;

    return $this;
  }

  public function getBirthDate(): ?\DateTimeInterface
  {
    return $this->birthDate;
  }

  public function setBirthDate(\DateTimeInterface $birthDate): static
  {
    $this->birthDate = $birthDate;

    return $this;
  }

  public function getFamily(): ?Family
  {
    return $this->family;
  }

  public function setFamily(?Family $family): static
  {
    $this->family = $family;

    return $this;
  }
}