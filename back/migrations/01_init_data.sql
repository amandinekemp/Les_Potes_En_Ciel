
-- User

insert into `user` ( `id_user`, `email`, `roles`, `password`, `address`, `zip_code`, `city`, `phone_number`) values (1, 'admin@lpec.com', '["ROLE_ADMIN"]', '$2y$13$tvVpmr4hqzvzIRubVDOSJeKk77jnd3PFOA8gqEY6QKZc8hc.eMJaS', '10, rue de la liberté', '59000', 'Lille', '0320000000');
insert into `user` ( `id_user`, `email`, `roles`, `password`, `address`, `zip_code`, `city`, `phone_number`) values (2, 'user@lpec.com', '["ROLE_USER"]', '$2y$13$kZWQDMnX5sAYKbm6vW0ydu8Pualt7oDvCBCnWUZ67uqeVwYtLEijO', '3, rue de la liberté', '59000', 'Lille', '0320000001');
insert into `user` ( `id_user`, `email`, `roles`, `password`, `address`, `zip_code`, `city`, `phone_number`) values (3, 'user2@lpec.com', '["ROLE_USER"]', '$2y$13$TmX6.SneSyoMI4c07OBaTeecIq.lQdLoQu08O8EhDpsNxcbSp2vK6', '4, rue de la liberté', '59000', 'Lille', '0320000002');

-- Person

insert into `member` (`id_member`, `id_user`, `member_type`, `first_name`, `last_name`, `birth_date`) values (1, 1, "parent", "Jean", "Dupont", "1980-01-01");
insert into `member` (`id_member`, `id_user`, `member_type`, `first_name`, `last_name`, `birth_date`) values (2, 1, "child", "Paul", "Dupont", "2000-01-01");
insert into `member` (`id_member`, `id_user`, `member_type`, `first_name`, `last_name`, `birth_date`) values (3, 2, "parent", "Marie", "Durand", "1980-01-01");
insert into `member` (`id_member`, `id_user`, `member_type`, `first_name`, `last_name`, `birth_date`) values (4, 2, "child", "Luc", "Durand", "2000-01-01");

-- Book

INSERT INTO `book` (`isbn`, `title`, `author`, `summary`, `genres`) VALUES 
('9782317023637', 'Être père: Une place à prendre au quotidien', 'Olivier Foissac', 'S’il est évident que les pères s’investissent toujours plus dans leur parentalité, accueillir un enfant reste un défi considérable. En lutte constante contre l’éducation qu’ils ont reçue, les stéréotypes de genre ou bien tout simplement le regard de la société, les pères s’interrogent aujourd’hui plus que jamais.', 'Livre-Santé-Bien-être-Puériculture-Paternité'),
('9782845942486', 'La Naissance en bandes dessinées - Tome I - Découvrez vos super pouvoirs !', 'Lucile Gomez', 'Ce livre est inutile: ce qu’il explique, les femmes le savent déjà. Mais elles ne savent pas qu’elles savent. Leur cerveau conscient, intelligent, leur néocortex surdéveloppé d’être humain, rempli de peurs depuis des siècles, les poussent à accepter une surmédicalisation de la naissance. Considérées comme le « sexe faible », elles ont fini par croire qu’accoucher était forcément douloureux, dangereux, violent… et qu’elles en étaient incapables sans médecins.', 'Livre-BDEtHumour'),
('9782957698929', 'Le petit illustré des conceptions, de l&aposadoption, des familles, de la parentalité, etc.', 'Tiphaine Dieumegard', 'Les petits illustrés de l’intimité sont les tout premiers livres engagés, inclusifs et sans tabou pour parler aux enfants d’anatomie et d’intimité. Ce troisième tome est composé de deux parties : Une partie anatomique et scientifique (avec de la fécondation, le développement du bébé, la gémellité, les différentes techniques de PMA, la naissance, l’allaitement, l’adoption, le deuil périnatal, etc.) Et une partie plus sociologique (avec les différentes familles, l’éducation, les droits de l’enfant, etc.) Ainsi qu’un lexique et une page listant les contacts d’associations.Ce tome a également reçu le label de la chaire UNESCO santé sexuelle et droits humains.', 'Livre-LivreJeunesse'),
('9782092783726', 'Le sommeil conseils et astuces au quotidien', 'Madeleine Deny', 'Un livre futé, truffé de conseils pour aider les parents à surmonter les problèmes de sommeil de leur enfant. Pour chaque âge, des situations quotidiennes analysées pour dédramatiser et bien réagir. Des astuces et des conseils &apostestés et approuvés&apos pour trouver ses solutions. Les réponses précises d&aposexperts à toutes vos questions... sans oublier beaucoup d&aposhumour et de tendresse, les meilleurs alliés d&aposune vie de famille réussie !', 'Livre-Santé-LeSommeil');

-- Borrow

INSERT INTO `borrow` (`isbn`, `id_user`, `borrow_date`, `return_date`) VALUES 
('9782317023637', 1, '2024-07-03 18:00:00', '2024-07-24 18:00:00'),
('9782957698929', 2, '2023-01-15 18:00:00', '2023-02-15 18:00:00'),
('9782092783726', 2, '2023-02-20 18:00:00', '2023-03-20 18:00:00'),
('9782317023637', 3, '2023-03-25 18:00:00', '2023-04-25 18:00:00'),
('9782092783726', 3, '2023-04-30 18:00:00', '2023-05-30 18:00:00'),
('9782092783726', 2, '2023-05-05 18:00:00', '2023-06-05 18:00:00'),
('9782845942486', 2, '2024-07-05 18:00:00', '2024-07-26 18:00:00');

-- Workshop

INSERT INTO `workshop` (`id_workshop`, `title`, `start_date`, `end_date`, `description`, `place`, `id_organizer`) VALUES 
(1, 'Ludothéque Parc Matisse', '2024-07-10 14:00:00', '2024-07-10 18:00:00', '', 'Parc Matisse avec le festival "Un air d&aposété".', 1),
(2, 'Pote mobile', '2024-07-10 16:00:00', '2024-07-10 17:30:00', '', 'Place Caulier Lille', 2),
(3, 'Pote mobile', '2024-07-12 16:00:00', '2024-07-12 17:30:00', '', 'Ecole Dombrowski à Hellemmes', 2);


-- Workshop_participant

INSERT INTO `workshop_participant` (`id_workshop`, `id_member`) VALUES
(1, 1), -- Ludothéque Parc Matisse, Participant 1
(1, 2), -- Ludothéque Parc Matisse, Participant 2
(2, 2), -- Pote mobile, Participant 2
(3, 3); -- Pote mobile, Participant 3

-- Newsletter

INSERT INTO `newsletter` (`email`) VALUES
('amandinekemp+jaisouscrit@gmail.com'),
('amandinekemp+moiaussi@gmail.com');
