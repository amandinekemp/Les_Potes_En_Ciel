<?php

// src/Controller/HelloController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HelloController extends AbstractController
{
    /**
     * Page d'accueil
     * 
     * @Route("/", name="accueil")
     */
    public function home(ComplexObject $complexObject)
    {
        // $complexObject->doSomething();
    }
}
