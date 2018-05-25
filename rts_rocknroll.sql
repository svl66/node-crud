-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 12, 2018 at 03:01 PM
-- Server version: 5.6.35
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rts_rocknroll`
--

-- --------------------------------------------------------

--
-- Table structure for table `album`
--

CREATE TABLE `album` (
  `id` int(11) NOT NULL,
  `FK_artist` int(11) NOT NULL,
  `titel` varchar(250) NOT NULL,
  `cover` varchar(255) NOT NULL,
  `udgivaar` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `album`
--

INSERT INTO `album` (`id`, `FK_artist`, `titel`, `cover`, `udgivaar`) VALUES
(1, 1, 'Never Mind the Bollocks, Here\'s the Sex Pistols', '1_sex-pistols_.jpg', '1977-02-05'),
(2, 2, 'Chinatown', 'CHINATOWNthinLizzy.jpg', '1981-02-19'),
(5, 5, 'Anything', 'damned_anything_.jpg', '1983-02-20'),
(6, 6, 'Post', 'Bjork-Post.jpg', '2014-02-20'),
(20, 74, 'Viva Hate', 'viva_hate__71233qSh6yL._SL1062_.jpg', '1952-01-01'),
(21, 75, 'Adore', 'adore-coverSmashingPumpkins.jpg', '1957-01-01'),
(22, 81, 'Største Hits', 'no-cover.jpg', '1953-01-01'),
(23, 5, 'The Black Album', 'no-cover.jpg', '1985-01-01');

-- --------------------------------------------------------

--
-- Table structure for table `album_cover`
--

CREATE TABLE `album_cover` (
  `id` int(11) NOT NULL,
  `FK_album` int(11) NOT NULL,
  `cover` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `album_cover`
--

INSERT INTO `album_cover` (`id`, `FK_album`, `cover`) VALUES
(1, 1, '1_sex-pistols_5.jpg'),
(2, 2, 'CHINATOWNthinLizzy.jpg'),
(3, 3, 'cure_DIS.jpg'),
(4, 4, 'ramones-500x500-1.jpg'),
(5, 5, 'Damned_-_Black_Album_500_505.jpg'),
(6, 6, 'mew-nomorestories.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `artist`
--

CREATE TABLE `artist` (
  `id` int(11) NOT NULL,
  `navn` varchar(255) NOT NULL,
  `FK_land` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `artist`
--

INSERT INTO `artist` (`id`, `navn`, `FK_land`) VALUES
(1, 'Sex Pistols', 2),
(2, 'Thin Lizzy', 4),
(5, 'The Damned', 2),
(6, 'Bjørk', 1),
(74, 'Morrissey', 2),
(75, 'Smashing Pumpkins', 3),
(81, ' Flemming Bamse Jørgensen', 1),
(82, 'The Damned', 1);

-- --------------------------------------------------------

--
-- Table structure for table `land`
--

CREATE TABLE `land` (
  `id` int(11) NOT NULL,
  `landenavn` varchar(150) NOT NULL,
  `landecode` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `land`
--

INSERT INTO `land` (`id`, `landenavn`, `landecode`) VALUES
(1, 'Danmark', 'DK'),
(2, 'England', 'GB'),
(3, 'USA', 'US'),
(4, 'Irland', 'IR'),
(5, 'Sverige', 'SE'),
(6, 'Tyskland', 'DE');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `album_cover`
--
ALTER TABLE `album_cover`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `artist`
--
ALTER TABLE `artist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `land`
--
ALTER TABLE `land`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `album`
--
ALTER TABLE `album`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `album_cover`
--
ALTER TABLE `album_cover`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `artist`
--
ALTER TABLE `artist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;
--
-- AUTO_INCREMENT for table `land`
--
ALTER TABLE `land`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
