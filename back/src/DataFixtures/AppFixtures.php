<?php

namespace App\DataFixtures;

use App\Entity\Book;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        for ($i = 0; $i < 20; $i++) {
          $livre = new Book;
          $livre->setIsbn($i);
          $livre->setTitle('Livre ' . $i);
          $livre->setAuthor('Author ' . $i);
          $livre->setSummary('Quatrième de couverture numéro : ' . $i);
          $livre->setAvailable($i%2==0);
          $manager->persist($livre);
        }

        $manager->flush();
    }
}
