<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    /**
     * Page d'accueil
     * @Route("/", name="home")
     */
    public function home()
    {
        return new Response("Bienvenue sur la page d'accueil");
    }

    /**
     * Page d'accès à un article
     * @Route("/article/{id}", name="article")
     */
    public function show($articleId)
    {
      // Nous retrouvons la valeur de la variable $articleId à partir de l'URL
      // Par exemple /article/1234 => $articleId = 1234

      // ...
      return new Response("Voici le contenu de l'article avec l'id $articleId");
    }
}
