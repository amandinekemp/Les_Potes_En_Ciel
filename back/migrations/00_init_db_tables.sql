-- Création de la BDD
CREATE DATABASE IF NOT EXISTS `les_potes_en_ciel`;
USE `les_potes_en_ciel`;

-- Création de la table Family
CREATE TABLE IF NOT EXISTS `family` (
    `id_family` int(11) NOT NULL AUTO_INCREMENT,
    `email` varchar(128) NOT NULL,
    `password` varchar(128) NOT NULL,
    `address` varchar(128) NOT NULL,
    `zip_code` int(11) NOT NULL,
    `city` varchar(28) NOT NULL,
    `phone_number` varchar(15) NOT NULL,
    PRIMARY KEY (`id_family`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Création de la table Person
CREATE TABLE IF NOT EXISTS `person` (
    `id_person` int(11) NOT NULL AUTO_INCREMENT,
    `id_family` int(11) NOT NULL,
    `person_type` varchar(128) NOT NULL,
    `first_name` varchar(128) NOT NULL,
    `last_name` varchar(128) NOT NULL,
    `birth_date` DATE NOT NULL,
    PRIMARY KEY (`id_person`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Création de la table Book
CREATE TABLE IF NOT EXISTS `book` (
    `isbn` char(13) NOT NULL,
    `title` varchar(255) NOT NULL,
    `author` varchar(255) NOT NULL,
    `summary` TEXT NOT NULL,
    `available` BOOLEAN NOT NULL,
    `genre_list` varchar(128) NOT NULL,
    PRIMARY KEY (`isbn`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Création de la table Borrow
CREATE TABLE IF NOT EXISTS `borrow` (
    `id_borrow` int(11) NOT NULL AUTO_INCREMENT,
    `isbn` char(13) NOT NULL,
    `id_family` int(11) NOT NULL,
    `borrow_date` DATETIME NOT NULL,
    `return_date` DATETIME NOT NULL,
    PRIMARY KEY (`id_borrow`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Création de la table Workshop
CREATE TABLE IF NOT EXISTS `workshop` (
    `id_workshop` int(11) NOT NULL AUTO_INCREMENT,
    `title` varchar(128) NOT NULL,
    `start_date` DATETIME NOT NULL,
    `end_date` DATETIME NOT NULL,
    `description` TEXT NOT NULL,
    `place` varchar(128) NOT NULL,
    `id_organizer` int(11) NOT NULL,
    PRIMARY KEY (`id_workshop`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Création de la table Workshop_participant
CREATE TABLE IF NOT EXISTS `workshop_participant` (
    `id_workshop` int(11) NOT NULL,
    `id_person` int(11) NOT NULL,
    PRIMARY KEY (`id_workshop`, `id_person`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Création de la table Newsletter
CREATE TABLE IF NOT EXISTS `newsletter` (
    `email` varchar(128) NOT NULL,
    PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
