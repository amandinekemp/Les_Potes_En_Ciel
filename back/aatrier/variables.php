<?php

// Récupération des variables à l'aide du client MySQL
$usersStatement = $mysqlClient->prepare('SELECT * FROM users');
$usersStatement->execute();
$users = $usersStatement->fetchAll();

$booksStatement = $mysqlClient->prepare('SELECT * FROM recipes WHERE is_enabled is TRUE');
$booksStatement->execute();
$recipes = $booksStatement->fetchAll();