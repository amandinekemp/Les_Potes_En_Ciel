-- Création de la BDD
CREATE DATABASE IF NOT EXISTS `les_potes_en_ciel`;
USE `les_potes_en_ciel`;

-- Création de la table Family
CREATE TABLE IF NOT EXISTS `family` (
    `id_family` INT(11) NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(128) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `zip_code` VARCHAR(5) NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(15) NOT NULL,
    PRIMARY KEY (`id_family`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Création de la table Member
CREATE TABLE IF NOT EXISTS `member` (
    `id_member` INT(11) NOT NULL AUTO_INCREMENT,
    `id_family` INT(11) NOT NULL,
    `member_type` VARCHAR(128) NOT NULL,
    `first_name` VARCHAR(128) NOT NULL,
    `last_name` VARCHAR(128) NOT NULL,
    `birth_date` DATE NOT NULL,
    PRIMARY KEY (`id_member`),
    FOREIGN KEY (`id_family`) REFERENCES `family`(`id_family`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Création de la table Book
CREATE TABLE IF NOT EXISTS `book` (
    `isbn` CHAR(13) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `author` VARCHAR(255) NOT NULL,
    `summary` TEXT NOT NULL,
    `genres` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`isbn`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Création de la table Borrow
CREATE TABLE IF NOT EXISTS `borrow` (
    `id_borrow` INT(11) NOT NULL AUTO_INCREMENT,
    `isbn` CHAR(13) NOT NULL,
    `id_family` INT(11),
    `borrow_date` DATETIME NOT NULL,
    `return_date` DATETIME,
    PRIMARY KEY (`id_borrow`),
    FOREIGN KEY (`isbn`) REFERENCES `book`(`isbn`) ON DELETE CASCADE,
    FOREIGN KEY (`id_family`) REFERENCES `family`(`id_family`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Création de la table Workshop
CREATE TABLE IF NOT EXISTS `workshop` (
    `id_workshop` INT(11) NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(128) NOT NULL,
    `start_date` DATETIME NOT NULL,
    `end_date` DATETIME NOT NULL,
    `description` TEXT NOT NULL,
    `place` VARCHAR(128) NOT NULL,
    `id_organizer` INT(11),
    PRIMARY KEY (`id_workshop`),
    FOREIGN KEY (`id_organizer`) REFERENCES `family`(`id_family`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Création de la table Workshop_participant
CREATE TABLE IF NOT EXISTS `workshop_participant` (
    `id_workshop` INT(11) NOT NULL,
    `id_member` INT(11) NOT NULL,
    PRIMARY KEY (`id_workshop`, `id_member`),
    FOREIGN KEY (`id_workshop`) REFERENCES `workshop`(`id_workshop`) ON DELETE CASCADE,
    FOREIGN KEY (`id_member`) REFERENCES `member`(`id_member`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Création de la table Newsletter
CREATE TABLE IF NOT EXISTS `newsletter` (
    `email` VARCHAR(128) NOT NULL,
    PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
