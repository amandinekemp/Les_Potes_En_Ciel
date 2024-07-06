<?php

namespace App\Entity;

use App\Repository\BookRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: BookRepository::class)]
class Book
{
  #[ORM\Id]
  #[ORM\Column]
  #[Assert\NotBlank(message: "L'ISBN est obligatoire")]
  #[Assert\Length(min: 13, max: 13, minMessage: "L'ISBN doit faire exactement {{ limit }} caractères", maxMessage: "L'ISBN doit faire exactement {{ limit }} caractères")]
  private ?int $isbn = null;

  #[ORM\Column(length: 255)]
  #[Assert\NotBlank(message: "Le titre est obligatoire")]
  #[Assert\Length(min: 5, max: 255, minMessage: "Le titre doit faire au moins {{ limit }} caractères", maxMessage: "Le titre ne peut pas faire plus de {{ limit }} caractères")]
  private ?string $title = null;

  #[ORM\Column(length: 255)]
  #[Assert\NotBlank(message: "L'auteur est obligatoire")]
  #[Assert\Length(min: 5, max: 255, minMessage: "L'auteur doit faire au moins {{ limit }} caractères", maxMessage: "L'auteur ne peut pas faire plus de {{ limit }} caractères")]
  private ?string $author = null;

  #[ORM\Column(type: Types::TEXT)]
  #[Assert\NotBlank(message: "Le résumé est obligatoire")]
  #[Assert\Length(min: 20, minMessage: "Le résumé doit faire au moins {{ limit }} caractères")]
  private ?string $summary = null;

  #[ORM\Column]
  private ?bool $isAvailable = null;

  public function getIsbn(): ?int
  {
    return $this->isbn;
  }

  public function setIsbn(int $isbn): static
  {
    $this->isbn = $isbn;

    return $this;
  }

  public function getTitle(): ?string
  {
    return $this->title;
  }

  public function setTitle(string $title): static
  {
    $this->title = $title;

    return $this;
  }

  public function getAuthor(): ?string
  {
    return $this->author;
  }

  public function setAuthor(string $author): static
  {
    $this->author = $author;

    return $this;
  }

  public function getSummary(): ?string
  {
    return $this->summary;
  }

  public function setSummary(string $summary): static
  {
    $this->summary = $summary;

    return $this;
  }

  public function isAvailable(): ?bool
  {
    return $this->isAvailable;
  }

  public function setAvailable(bool $isAvailable): static
  {
    $this->isAvailable = $isAvailable;

    return $this;
  }
}
