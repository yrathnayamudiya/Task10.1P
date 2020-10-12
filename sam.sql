-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 12, 2020 at 08:33 AM
-- Server version: 8.0.21
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sam`
--

-- --------------------------------------------------------

--
-- Table structure for table `info`
--

DROP TABLE IF EXISTS `info`;
CREATE TABLE IF NOT EXISTS `info` (
  `description` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `sentence` varchar(255) NOT NULL,
  `hardDisk` varchar(255) NOT NULL,
  `headphone` varchar(255) NOT NULL,
  `master` varchar(255) NOT NULL,
  `myplace` varchar(255) NOT NULL,
  `number` varchar(255) NOT NULL,
  `reward` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `todo` varchar(255) NOT NULL,
  `what` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `info`
--

INSERT INTO `info` (`description`, `date`, `sentence`, `hardDisk`, `headphone`, `master`, `myplace`, `number`, `reward`, `title`, `todo`, `what`) VALUES
('undefined', 'undefined', '', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
('undefined', 'undefined', '', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
('undefined', 'undefined', '', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
('Bandaara', '2020-10-20', '', 'false', 'false', 'true', 'false', '4', '12', 'Thalinda', '1', 'false'),
('null', 'null', '', 'false', 'false', 'false', 'false', '0', '0', 'null', '0', 'false'),
('Testing ', '2020-10-11', '', 'false', 'false', 'true', '1', '3', '3', 'Testing ', '2', 'false'),
('Testing Description', '2020-11-07', '', 'false', 'false', 'true', 'false', '2', '3', 'Testing ', '3', '3'),
('dsddsdsfdsfsdfd', '2020-10-11', '', 'false', 'false', 'false', '1', '5', '4', 'Tesing 2', '2', '2'),
('null', 'null', 'null', 'false', 'false', 'false', 'false', '0', '0', 'null', '0', 'false'),
('null', 'null', 'null', 'false', 'false', 'false', 'false', '0', '0', 'null', '0', 'false'),
('null', 'null', 'null', 'false', 'false', 'false', 'false', '0', '0', 'null', '0', 'false');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
