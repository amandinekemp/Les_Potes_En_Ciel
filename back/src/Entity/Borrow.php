<?php

/** Entity representing a book loan with associated details **/
namespace App\Entity;

use App\Repository\BorrowRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: BorrowRepository::class)]
class Borrow
{
  #[ORM\Id]
  #[ORM\GeneratedValue]
  #[ORM\Column]
  private ?int $idBorrow = null;

  #[ORM\Column(length: 13)]
  #[Assert\NotBlank(message: "L'ISBN est obligatoire")]
  #[Assert\Length(min: 13, max: 13, minMessage: "L'ISBN doit faire exactement {{ limit }} caractères", maxMessage: "L'ISBN doit faire exactement {{ limit }} caractères")]
  private ?string $isbn = null;

  #[ORM\Column(length: 11)]
  private ?int $idUser = null;

  #[ORM\Column(type: Types::DATETIME_MUTABLE)]
  private ?\DateTimeInterface $borrowDate = null;

  #[ORM\Column(type: Types::DATETIME_MUTABLE)]
  private ?\DateTimeInterface $returnDate = null;

  public function getIdBorrow(): ?int
  {
    return $this->idBorrow;
  }

  public function getIsbn(): ?string
  {
    return $this->isbn;
  }

  public function setIsbn(string $isbn): static
  {
    $this->isbn = $isbn;

    return $this;
  }

  public function getIdUser(): ?int
  {
    return $this->idUser;
  }

  public function setIdUser(int $idUser): static
  {
    $this->idUser = $idUser;

    return $this;
  }

  public function getBorrowDate(): ?\DateTimeInterface
  {
    return $this->borrowDate;
  }

  public function setBorrowDate(\DateTimeInterface $borrowDate): static
  {
    $this->borrowDate = $borrowDate;

    return $this;
  }

  public function getReturnDate(): ?\DateTimeInterface
  {
    return $this->returnDate;
  }

  public function setReturnDate(\DateTimeInterface $returnDate): static
  {
    $this->returnDate = $returnDate;

    return $this;
  }
}
