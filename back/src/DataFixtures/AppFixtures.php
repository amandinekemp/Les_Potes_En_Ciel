<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

/** Load initial user data into the database **/
class AppFixtures extends Fixture
{
  private $userPasswordHasher;

  public function __construct(UserPasswordHasherInterface $userPasswordHasher)
  {
    $this->userPasswordHasher = $userPasswordHasher;
  }

  public function load(ObjectManager $manager): void
  {
    // Creating a “normal” user
    $user = new User();
    $user->setEmail("user@lpec.com");
    $user->setRoles(["ROLE_USER"]);
    $user->setPassword($this->userPasswordHasher->hashPassword($user, "userSecure"));
    $user->setAddress("1 rue de la Paix");
    $user->setZipCode("75000");
    $user->setCity("Paris");
    $user->setPhoneNumber("0102030405");
    $manager->persist($user);

    $user = new User();
    $user->setEmail("user2@lpec.com");
    $user->setRoles(["ROLE_USER"]);
    $user->setPassword($this->userPasswordHasher->hashPassword($user, "user2Secure"));
    $user->setAddress("1 rue de la Paix");
    $user->setZipCode("75000");
    $user->setCity("Paris");
    $user->setPhoneNumber("0102030405");
    $manager->persist($user);

    // Creating an admin user
    $userAdmin = new User();
    $userAdmin->setEmail("admin@lpec.com");
    $userAdmin->setRoles(["ROLE_ADMIN"]);
    $userAdmin->setPassword($this->userPasswordHasher->hashPassword($userAdmin, "adminSecure"));
    $userAdmin->setAddress("3, rue de la liberté");
    $userAdmin->setZipCode("59000");
    $userAdmin->setCity("Lille");
    $userAdmin->setPhoneNumber("0311225544");
    $manager->persist($userAdmin);

    $manager->flush();
  }
}
