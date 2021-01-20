-- --------------------------------------------------------
-- Hôte :                        localhost
-- Version du serveur:           8.0.22 - MySQL Community Server - GPL
-- SE du serveur:                Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Listage de la structure de la base pour wordpress
CREATE DATABASE IF NOT EXISTS `wordpress` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `wordpress`;

-- Listage de la structure de la table wordpress. activity_area
CREATE TABLE IF NOT EXISTS `activity_area` (
  `id` smallint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table wordpress.activity_area : ~2 rows (environ)
/*!40000 ALTER TABLE `activity_area` DISABLE KEYS */;
INSERT INTO `activity_area` (`id`, `name`) VALUES
	(1, 'logistic'),
	(2, 'informatic'),
	(3, 'education');
/*!40000 ALTER TABLE `activity_area` ENABLE KEYS */;

-- Listage de la structure de la table wordpress. job
CREATE TABLE IF NOT EXISTS `job` (
  `id` smallint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table wordpress.job : ~2 rows (environ)
/*!40000 ALTER TABLE `job` DISABLE KEYS */;
INSERT INTO `job` (`id`, `name`) VALUES
	(1, 'pilote'),
	(2, 'conducteur engins'),
	(3, 'comptable');
/*!40000 ALTER TABLE `job` ENABLE KEYS */;

-- Listage de la structure de la table wordpress. language
CREATE TABLE IF NOT EXISTS `language` (
  `id` smallint NOT NULL AUTO_INCREMENT,
  `language` varchar(255) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table wordpress.language : ~4 rows (environ)
/*!40000 ALTER TABLE `language` DISABLE KEYS */;
INSERT INTO `language` (`id`, `language`) VALUES
	(1, 'French'),
	(2, 'English'),
	(3, 'German'),
	(4, 'Polish');
/*!40000 ALTER TABLE `language` ENABLE KEYS */;

-- Listage de la structure de la table wordpress. sector_of_activity
CREATE TABLE IF NOT EXISTS `sector_of_activity` (
  `id` smallint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table wordpress.sector_of_activity : ~21 rows (environ)
/*!40000 ALTER TABLE `sector_of_activity` DISABLE KEYS */;
INSERT INTO `sector_of_activity` (`id`, `name`) VALUES
	(1, 'Aéronautique'),
	(2, 'Agroalimentaire – vins & spiritueux'),
	(3, 'Automobile : machines et équipements'),
	(4, 'Banque – assurance'),
	(5, 'Bois – papier – carton – imprimerie, plastique, caoutchouc'),
	(6, 'BTP – matériaux de construction'),
	(7, 'Chimie – parachimie'),
	(8, 'Commerce – négoce – distribution'),
	(9, 'Economie Sociale et Solidaire'),
	(10, 'Edition – communication – multimédia'),
	(11, 'Electronique – électricité'),
	(12, 'Etudes et conseils'),
	(13, 'Industrie pharmaceutique – biotechnologies'),
	(14, 'Informatique – télécoms'),
	(15, 'Métallurgie – travail du métal'),
	(16, 'Public : éducation, justice, armée…'),
	(17, 'Santé – service à la personne'),
	(18, 'Textile – habillement – chaussure'),
	(19, 'Transport – logistique'),
	(20, 'Autres services aux entreprises'),
	(21, 'Autres');
/*!40000 ALTER TABLE `sector_of_activity` ENABLE KEYS */;

-- Listage de la structure de la table wordpress. user
CREATE TABLE IF NOT EXISTS `user` (
  `id` smallint NOT NULL AUTO_INCREMENT,
  `lastname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `firstname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `diploma` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `activity_area_id` smallint NOT NULL,
  `awailability` smallint NOT NULL,
  `mobility` smallint NOT NULL,
  `years_of_experiment` smallint NOT NULL,
  `password` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `mail` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `statut` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `create_at` datetime NOT NULL,
  `update_at` datetime DEFAULT NULL,
  `open_to_formation` bit(1) NOT NULL,
  `cv` varchar(1000) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `linkedin` varchar(1000) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `youtube` varchar(1000) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `picture` varchar(1000) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_user_activity_area` (`activity_area_id`),
  CONSTRAINT `FK_user_activity_area` FOREIGN KEY (`activity_area_id`) REFERENCES `activity_area` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table wordpress.user : ~2 rows (environ)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `lastname`, `firstname`, `description`, `diploma`, `activity_area_id`, `awailability`, `mobility`, `years_of_experiment`, `password`, `mail`, `statut`, `create_at`, `update_at`, `open_to_formation`, `cv`, `linkedin`, `youtube`, `picture`) VALUES
	(1, 'Wagner', 'Christian', 'lorem ipsum', NULL, 1, 0, 1000, 10, '1234', 'fra@hotmail.fr', 'online', '2020-12-30 12:12:12', '2021-01-18 10:15:40', b'0', NULL, NULL, NULL, NULL),
	(2, 'Newman', 'Jack', 'lorem ipsum', 'ingenier', 3, 3, 50, 25, '4567', 'zer@umail.com', 'en attente de validation', '2019-09-20 09:09:09', '2021-01-18 10:15:41', b'1', NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

-- Listage de la structure de la table wordpress. user_job
CREATE TABLE IF NOT EXISTS `user_job` (
  `job_id` smallint NOT NULL DEFAULT '0',
  `user_id` smallint NOT NULL DEFAULT '0',
  KEY `FK_user_job_job` (`job_id`),
  KEY `FK_user_job_user` (`user_id`),
  CONSTRAINT `FK_user_job_job` FOREIGN KEY (`job_id`) REFERENCES `job` (`id`),
  CONSTRAINT `FK_user_job_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table wordpress.user_job : ~2 rows (environ)
/*!40000 ALTER TABLE `user_job` DISABLE KEYS */;
INSERT INTO `user_job` (`job_id`, `user_id`) VALUES
	(1, 1),
	(2, 2);
/*!40000 ALTER TABLE `user_job` ENABLE KEYS */;

-- Listage de la structure de la table wordpress. user_language
CREATE TABLE IF NOT EXISTS `user_language` (
  `user_id` smallint NOT NULL,
  `language_id` smallint NOT NULL,
  KEY `FK_user_language_user` (`user_id`),
  KEY `FK_user_language_language` (`language_id`),
  CONSTRAINT `FK_user_language_language` FOREIGN KEY (`language_id`) REFERENCES `language` (`id`),
  CONSTRAINT `FK_user_language_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table wordpress.user_language : ~2 rows (environ)
/*!40000 ALTER TABLE `user_language` DISABLE KEYS */;
INSERT INTO `user_language` (`user_id`, `language_id`) VALUES
	(1, 1),
	(1, 2),
	(2, 1);
/*!40000 ALTER TABLE `user_language` ENABLE KEYS */;

-- Listage de la structure de la table wordpress. user_sector_of_activity
CREATE TABLE IF NOT EXISTS `user_sector_of_activity` (
  `user_id` smallint NOT NULL DEFAULT '0',
  `sector_of_activity_id` smallint NOT NULL DEFAULT '0',
  KEY `FK_user_skill_user` (`user_id`),
  KEY `FK_user_skill_skill` (`sector_of_activity_id`),
  CONSTRAINT `FK_user_skill_skill` FOREIGN KEY (`sector_of_activity_id`) REFERENCES `sector_of_activity` (`id`),
  CONSTRAINT `FK_user_skill_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table wordpress.user_sector_of_activity : ~2 rows (environ)
/*!40000 ALTER TABLE `user_sector_of_activity` DISABLE KEYS */;
INSERT INTO `user_sector_of_activity` (`user_id`, `sector_of_activity_id`) VALUES
	(1, 3),
	(2, 4);
/*!40000 ALTER TABLE `user_sector_of_activity` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
