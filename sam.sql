-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 12, 2020 at 11:10 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.33

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

CREATE TABLE `info` (
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
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `info`
--

INSERT INTO `info` (`description`, `date`, `sentence`, `hardDisk`, `headphone`, `master`, `myplace`, `number`, `reward`, `title`, `todo`, `what`) VALUES
(' Testing', '2020-10-12', 'null', 'true', 'true', 'true', 'false', '140', '1000', 'Sam', '1', '1'),
('Testing 2', '2020-10-13', 'null', 'true', 'true', 'false', 'false', '150', '2000', 'Ano', '2', '1'),
('Testing 3 ', '2020-10-14', 'Testing Para', 'true', 'true', 'false', 'false', '450', '30000', 'Jackma', '3', '3');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
