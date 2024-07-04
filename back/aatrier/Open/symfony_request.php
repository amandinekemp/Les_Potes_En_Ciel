<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$request = Request::createFromGlobals();
$name = $request->get('name');
$response = new Response();

$response->setContent('<html><body>Bonjour '.$name.'</body></html>');

$response->setStatusCode(Response::HTTP_OK);
$response->headers->set('Content-Type', 'text/html');

// retourne une réponse HTTP valide
$response->send();
