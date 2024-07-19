<?php

/** Entity representing a user with personal and login information **/
namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\UniqueConstraint(name: 'UNIQ_IDENTIFIER_EMAIL', fields: ['email'])]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
  #[ORM\Id]
  #[ORM\GeneratedValue]
  #[ORM\Column]
  #[Groups(["getAccountDetails"])]
  private ?int $idUser = null;

  #[ORM\Column(length: 180)]
  #[Groups(["getAccountDetails"])]
  private ?string $email = null;

  /**
   * @var list<string> The user roles
   */
  #[ORM\Column]
  private array $roles = [];

  /**
   * @var string The hashed password
   */
  #[ORM\Column]
  private ?string $password = null;

  #[ORM\Column(length: 255)]
  #[Groups(["getAccountDetails"])]
  private ?string $address = null;

  #[ORM\Column(length: 5)]
  #[Groups(["getAccountDetails"])]
  private ?string $zipCode = null;

  #[ORM\Column(length: 255)]
  #[Groups(["getAccountDetails"])]
  private ?string $city = null;

  #[ORM\Column(length: 15)]
  #[Groups(["getAccountDetails"])]
  private ?string $phoneNumber = null;

  /**
   * Collection<int, Member>
   */
  #[ORM\OneToMany(mappedBy: 'user', targetEntity: Member::class, orphanRemoval: true, cascade: ["PERSIST"])]
  #[Groups(["getAccountDetails"])]
  private $members;

  public function __construct()
  {
    $this->members = new ArrayCollection();
  }

  public function getIdUser(): ?int
  {
    return $this->idUser;
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

  /**
   * A visual identifier that represents this user.
   *
   * @see UserInterface
   */
  public function getUserIdentifier(): string
  {
    return (string) $this->email;
  }

  /**
   * @see UserInterface
   *
   * @return list<string>
   */
  public function getRoles(): array
  {
    $roles = $this->roles;
    // guarantee every user at least has ROLE_USER
    $roles[] = 'ROLE_USER';

    return array_unique($roles);
  }

  /**
   * @param list<string> $roles
   */
  public function setRoles(array $roles): static
  {
    $this->roles = $roles;

    return $this;
  }

  /**
   * @see PasswordAuthenticatedUserInterface
   */
  public function getPassword(): string
  {
    return $this->password;
  }

  public function setPassword(string $password): static
  {
    $this->password = $password;

    return $this;
  }

  /**
   * getUsername method, which returns the field used for authentication.
   *
   * @return string
   */
  public function getUsername(): string
  {
    return $this->getUserIdentifier();
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
      $member->setUser($this);
    }

    return $this;
  }

  public function removeMember(Member $member): static
  {
    if ($this->members->removeElement($member)) {
      // set the owning side to null (unless already changed)
      if ($member->getUser() === $this) {
        $member->setUser(null);
      }
    }

    return $this;
  }

  /**
   * @see UserInterface
   */
  public function eraseCredentials(): void
  {
    // If you store any temporary, sensitive data on the user, clear it here
    // $this->plainPassword = null;
  }
}
