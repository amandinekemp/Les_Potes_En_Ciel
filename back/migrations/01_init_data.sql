
-- Family

insert into `family` ( `id_family`, `email`, `password`, `address`, `zip_code`, `city`, `phone_number`) values (1, 'test1@exemple.com', 'MotDePass0', '10, rue de la liberté', '59000', 'Lille', '0320000000');
insert into `family` ( `id_family`, `email`, `password`, `address`, `zip_code`, `city`, `phone_number`) values (2, 'test2@exemple.com', 'MotDePass1', '3, rue de la liberté', '59000', 'Lille', '0320000001');
insert into `family` ( `id_family`, `email`, `password`, `address`, `zip_code`, `city`, `phone_number`) values (3, 'test3@exemple.com', 'MotDePass2', '4, rue de la liberté', '59000', 'Lille', '0320000002');

-- Person

insert into `person` (`id_person`, `id_family`, `person_type`, `first_name`, `last_name`, `birth_date`) values (1, 1, "parent", "Jean", "Dupont", "1980-01-01");
insert into `person` (`id_person`, `id_family`, `person_type`, `first_name`, `last_name`, `birth_date`) values (2, 1, "child", "Paul", "Dupont", "2000-01-01");
insert into `person` (`id_person`, `id_family`, `person_type`, `first_name`, `last_name`, `birth_date`) values (3, 2, "parent", "Marie", "Durand", "1980-01-01");
insert into `person` (`id_person`, `id_family`, `person_type`, `first_name`, `last_name`, `birth_date`) values (4, 2, "child", "Luc", "Durand", "2000-01-01");

-- Book

INSERT INTO `book` (`book_isbn`, `title`, `author`, `summary`, `is_available`, `genre_list`) VALUES 
(2317023634, 'Être père: Une place à prendre au quotidien', 'Olivier Foissac', 'S’il est évident que les pères s’investissent toujours plus dans leur parentalité, accueillir un enfant reste un défi considérable. En lutte constante contre l’éducation qu’ils ont reçue, les stéréotypes de genre ou bien tout simplement le regard de la société, les pères s’interrogent aujourd’hui plus que jamais.', TRUE, 'Livre-Santé-Bien-être-Puériculture-Paternité'),
(9782845942486, 'La Naissance en bandes dessinées - Tome I - Découvrez vos super pouvoirs !', 'Lucile Gomez', 'Ce livre est inutile: ce qu’il explique, les femmes le savent déjà. Mais elles ne savent pas qu’elles savent. Leur cerveau conscient, intelligent, leur néocortex surdéveloppé d’être humain, rempli de peurs depuis des siècles, les poussent à accepter une surmédicalisation de la naissance. Considérées comme le « sexe faible », elles ont fini par croire qu’accoucher était forcément douloureux, dangereux, violent… et qu’elles en étaient incapables sans médecins.', TRUE, 'Livre-BDEtHumour'),
(9782957698929, 'Le petit illustré des conceptions, de l&aposadoption, des familles, de la parentalité, etc.', 'Tiphaine Dieumegard', 'Les petits illustrés de l’intimité sont les tout premiers livres engagés, inclusifs et sans tabou pour parler aux enfants d’anatomie et d’intimité. Ce troisième tome est composé de deux parties : Une partie anatomique et scientifique (avec de la fécondation, le développement du bébé, la gémellité, les différentes techniques de PMA, la naissance, l’allaitement, l’adoption, le deuil périnatal, etc.) Et une partie plus sociologique (avec les différentes familles, l’éducation, les droits de l’enfant, etc.) Ainsi qu’un lexique et une page listant les contacts d’associations.Ce tome a également reçu le label de la chaire UNESCO santé sexuelle et droits humains.', TRUE, 'Livre-LivreJeunesse'),
(9782092783726, 'Le sommeil conseils et astuces au quotidien', 'Madeleine Deny', 'Un livre futé, truffé de conseils pour aider les parents à surmonter les problèmes de sommeil de leur enfant. Pour chaque âge, des situations quotidiennes analysées pour dédramatiser et bien réagir. Des astuces et des conseils &apostestés et approuvés&apos pour trouver ses solutions. Les réponses précises d&aposexperts à toutes vos questions... sans oublier beaucoup d&aposhumour et de tendresse, les meilleurs alliés d&aposune vie de famille réussie !', TRUE, 'Livre-Santé-LeSommeil'),

-- Borrow

INSERT INTO `borrow` (`book_isbn`, `id_family`, `loan_date`, `return_date`) VALUES 
(2317023634, 1, '2024-07-03', '2024-07-24'),
(9782845942486, 2, '2024-07-05', '2024-07-26'),

-- Workshop

INSERT INTO `workshop` (`id_workshop`, `title`, `start_date`, `end_date`, `description`, `place`, `id_organizer`) VALUES 
(1, 'Ludothéque Parc Matisse', '2024-07-10 14:00:00', '2024-07-10 18:00:00', '', 'Parc Matisse avec le festival "Un air d&aposété".', 1),
(2, 'Pote mobile', '2024-07-10 16:00:00', '2024-07-17:30:00', '', 'Place Caulier Lille', 2),
(3, 'Pote mobile', '2024-07-12 16:00:00', '2024-07-17:30:00', '', 'Ecole Dombrowski à Hellemmes', 2),


-- Workshop_participant

INSERT INTO `workshop_participant` (`id_workshop`, `id_person`) VALUES
(1, 1), -- Ludothéque Parc Matisse, Participant 1
(1, 2), -- Ludothéque Parc Matisse, Participant 2
(2, 2), -- Pote mobile, Participant 2
(3, 3); -- Pote mobile, Participant 3
