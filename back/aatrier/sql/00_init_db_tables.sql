-- Création de la BDD
CREATE DATABASE IF NOT EXISTS `liste_de_livres`;
USE `liste_de_livres`;

-- Création de la table books
CREATE TABLE IF NOT EXISTS `books` (
    `book_isbn` int(13) NOT NULL AUTO_INCREMENT,
    `title` varchar(128) NOT NULL,
    `summary` TEXT NOT NULL,
    `author` varchar(255) NOT NULL,
    `is_enabled` BOOLEAN NOT NULL,
    'genre_list' varchar(128) NOT NULL,
    PRIMARY KEY (`book_isbn`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Création de la table users
CREATE TABLE IF NOT EXISTS `users` (
    `user_id` int(11) NOT NULL AUTO_INCREMENT,
    `full_name` varchar(64) NOT NULL,
    `email` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `age` INT NOT NULL,
    PRIMARY KEY (`user_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
