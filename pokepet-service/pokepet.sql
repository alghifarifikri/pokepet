-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 24, 2024 at 04:07 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pokepet`
--

-- --------------------------------------------------------

--
-- Table structure for table `owned`
--

CREATE TABLE `owned` (
  `id` varchar(50) NOT NULL,
  `name` varchar(10) NOT NULL,
  `nickname` varchar(50) NOT NULL,
  `type` varchar(100) NOT NULL,
  `id_pokemon` varchar(10) NOT NULL,
  `count` int(10) NOT NULL,
  `image_url` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `owned`
--

INSERT INTO `owned` (`id`, `name`, `nickname`, `type`, `id_pokemon`, `count`, `image_url`) VALUES
('269d3afe-451c-4f76-a253-da98dfe8e0f6', 'bulbasaur', 'bulbasaur - 3', '[\"grass\",\"poison\"]', '1', 5, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'),
('311d5bc5-8d8c-4efc-ac42-7e8a5d006159', 'charizard', 'Nigga - 1', '[\"fire\",\"flying\"]', '6', 3, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png'),
('f549d68c-e203-4e44-b4d2-f10e698fb112', 'bulbasaur', 'Test - 21', '[\"grass\",\"poison\"]', '1', 9, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `owned`
--
ALTER TABLE `owned`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
