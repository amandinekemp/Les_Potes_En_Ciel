<?php

namespace App\Entity;

use App\Repository\FamilyRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: FamilyRepository::class)]
class Family
{
  #[ORM\Id]
  #[ORM\GeneratedValue]
  #[ORM\Column]
  #[Groups(["getFamily"])]
  private ?int $idFamily = null;

  #[ORM\Column(length: 128)]
  #[Groups(["getFamily"])]
  private ?string $email = null;

  #[ORM\Column(length: 255)]
  #[Groups(["getFamily"])]
  private ?string $password = null;

  #[ORM\Column(length: 255)]
  #[Groups(["getFamily"])]
  private ?string $address = null;

  #[ORM\Column(length: 5)]
  #[Groups(["getFamily"])]
  private ?string $zipCode = null;

  #[ORM\Column(length: 255)]
  #[Groups(["getFamily"])]
  private ?string $city = null;

  #[ORM\Column(length: 15)]
  #[Groups(["getFamily"])]
  private ?string $phoneNumber = null;

  #[ORM\OneToMany(mappedBy: 'family', targetEntity: Member::class, orphanRemoval: true, cascade: [])]
  #[Groups(["getFamily"])]
  private $members;

  public function __construct()
  {
    $this->members = new ArrayCollection();
  }

  public function getIdFamily(): ?int
  {
    return $this->idFamily;
  }

  public function getEmail(): ?string
  {
    return $this->email;
  }

  public function setEmail(string $email): static
  {
    $this->email = $email;

    return $this;
  }

  public function getPassword(): ?string
  {
    return $this->password;
  }

  public function setPassword(string $password): static
  {
    $this->password = $password;

    return $this;
  }

  public function getAddress(): ?string
  {
    return $this->address;
  }

  public function setAddress(string $address): static
  {
    $this->address = $address;

    return $this;
  }

  public function getZipCode(): ?string
  {
    return $this->zipCode;
  }

  public function setZipCode(string $zipCode): static
  {
    $this->zipCode = $zipCode;

    return $this;
  }

  public function getCity(): ?string
  {
    return $this->city;
  }

  public function setCity(string $city): static
  {
    $this->city = $city;

    return $this;
  }

  public function getPhoneNumber(): ?string
  {
    return $this->phoneNumber;
  }

  public function setPhoneNumber(string $phoneNumber): static
  {
    $this->phoneNumber = $phoneNumber;

    return $this;
  }

  /**
   * @return Collection<int, Member>
   */
  public function getMembers(): Collection
  {
    return $this->members;
  }

  public function addMember(Member $member): static
  {
    if (!$this->members->contains($member)) {
      $this->members->add($member);
      $member->setFamily($this);
    }

    return $this;
  }

  public function removeMember(Member $member): static
  {
    if ($this->members->removeElement($member)) {
      // set the owning side to null (unless already changed)
      if ($member->getFamily() === $this) {
        $member->setFamily(null);
      }
    }

    return $this;
  }
}
