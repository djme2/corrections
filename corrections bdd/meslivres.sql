-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 21 mai 2024 à 16:11
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `meslivres`
--

-- --------------------------------------------------------

--
-- Structure de la table `auteur`
--

CREATE TABLE `auteur` (
  `numAut` int(11) NOT NULL,
  `nom` varchar(99) DEFAULT NULL,
  `prenom` varchar(99) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `auteur`
--

INSERT INTO `auteur` (`numAut`, `nom`, `prenom`) VALUES
(1, 'Himess', 'Chester'),
(2, 'Bazin', 'Hervé'),
(3, 'Cohen', 'Albert');

-- --------------------------------------------------------

--
-- Structure de la table `ecrit`
--

CREATE TABLE `ecrit` (
  `numAut` int(11) NOT NULL,
  `numL` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `ecrit`
--

INSERT INTO `ecrit` (`numAut`, `numL`) VALUES
(1, 1),
(1, 4),
(2, 5),
(3, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Structure de la table `edite`
--

CREATE TABLE `edite` (
  `numE` int(11) NOT NULL,
  `numL` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `edite`
--

INSERT INTO `edite` (`numE`, `numL`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(2, 5);

-- --------------------------------------------------------

--
-- Structure de la table `editeur`
--

CREATE TABLE `editeur` (
  `numE` int(11) NOT NULL,
  `nom` varchar(99) DEFAULT NULL,
  `ville` varchar(99) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `editeur`
--

INSERT INTO `editeur` (`numE`, `nom`, `ville`) VALUES
(1, 'Gallimard', 'Paris'),
(2, 'Seuil', 'Lille');

-- --------------------------------------------------------

--
-- Structure de la table `livre`
--

CREATE TABLE `livre` (
  `numLivre` int(11) NOT NULL,
  `titre` varchar(99) DEFAULT NULL,
  `nombrePages` int(11) DEFAULT NULL,
  `anneeImpression` year(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `livre`
--

INSERT INTO `livre` (`numLivre`, `titre`, `nombrePages`, `anneeImpression`) VALUES
(1, 'La reine des pommes', 282, '2003'),
(2, 'Mangeclous', 498, '2004'),
(3, 'Belle du seigneur', 1110, '2002'),
(4, 'Couché dans le pain', 248, '2002'),
(5, 'Le matrimoine', 286, '1976');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `auteur`
--
ALTER TABLE `auteur`
  ADD PRIMARY KEY (`numAut`);

--
-- Index pour la table `ecrit`
--
ALTER TABLE `ecrit`
  ADD PRIMARY KEY (`numAut`,`numL`),
  ADD KEY `numL` (`numL`);

--
-- Index pour la table `edite`
--
ALTER TABLE `edite`
  ADD PRIMARY KEY (`numE`,`numL`),
  ADD KEY `numL` (`numL`);

--
-- Index pour la table `editeur`
--
ALTER TABLE `editeur`
  ADD PRIMARY KEY (`numE`);

--
-- Index pour la table `livre`
--
ALTER TABLE `livre`
  ADD PRIMARY KEY (`numLivre`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `auteur`
--
ALTER TABLE `auteur`
  MODIFY `numAut` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `editeur`
--
ALTER TABLE `editeur`
  MODIFY `numE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `livre`
--
ALTER TABLE `livre`
  MODIFY `numLivre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `ecrit`
--
ALTER TABLE `ecrit`
  ADD CONSTRAINT `ecrit_ibfk_1` FOREIGN KEY (`numAut`) REFERENCES `auteur` (`numAut`),
  ADD CONSTRAINT `ecrit_ibfk_2` FOREIGN KEY (`numL`) REFERENCES `livre` (`numLivre`);

--
-- Contraintes pour la table `edite`
--
ALTER TABLE `edite`
  ADD CONSTRAINT `edite_ibfk_1` FOREIGN KEY (`numE`) REFERENCES `editeur` (`numE`),
  ADD CONSTRAINT `edite_ibfk_2` FOREIGN KEY (`numL`) REFERENCES `livre` (`numLivre`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
