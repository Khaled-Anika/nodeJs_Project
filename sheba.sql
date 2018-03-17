-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2018 at 09:18 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sheba`
--

-- --------------------------------------------------------

--
-- Table structure for table `buy`
--

CREATE TABLE `buy` (
  `id` int(10) NOT NULL,
  `username` varchar(100) NOT NULL,
  `med_name` varchar(100) NOT NULL,
  `buy_count` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `buy`
--

INSERT INTO `buy` (`id`, `username`, `med_name`, `buy_count`) VALUES
(1, 'khaled', 'Napa Extra', '5'),
(2, 'kamal', 'Thyrox 50mg', '5'),
(3, 'shipa', 'ace', '8'),
(4, 'mustofa', 'Lipopeptides', '6'),
(5, 'reha', 'Atenolol', '8'),
(6, 'ruhu', 'Cephalexin', '10');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(32) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `dob` varchar(100) NOT NULL,
  `blood` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `name`, `email`, `username`, `password`, `gender`, `dob`, `blood`) VALUES
(1, 'Rehana khan', 'RehanaSultana@outlook.com', 'ruhu', '12345678', 'on', '1985-06-25', 'A+'),
(2, 'Rehana khan', 'Rehana@outlook.com', 'reha', 'rehana23', 'female', '2001-10-25', 'A+'),
(3, 'Nahida Shipa ', 'shipakhaled@gmail.com', 'shipa', 'shipa123', 'female', '1978-04-20', 'A+'),
(4, 'Khaled mohammed', 'Khaled@gmail.com', 'khaled', 'khaled', 'male', '1972-09-23', 'O+'),
(5, 'kamal rahman', 'dfldkjvn@yahoo.com', 'kamal', 'kamal123', 'male', '2001-10-25', 'B-'),
(6, 'Anika khaled', 'anikakhaled@yahoo.com', 'khaleda', '963258', 'female', '1972-09-23', 'A+'),
(7, 'mustofa', 'mustofa@yahoo.com', 'mustofa', 'mus12547', 'male', '1965-12-20', 'O+');

-- --------------------------------------------------------

--
-- Table structure for table `donate_blood`
--

CREATE TABLE `donate_blood` (
  `donor_id` int(100) UNSIGNED NOT NULL,
  `donar_name` varchar(100) NOT NULL,
  `donar_BG` varchar(100) NOT NULL,
  `donar_contact` varchar(100) NOT NULL,
  `donar_area` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `donate_blood`
--

INSERT INTO `donate_blood` (`donor_id`, `donar_name`, `donar_BG`, `donar_contact`, `donar_area`) VALUES
(3, 'hasan', 'A+', '1757049684', 'Mirpur'),
(4, 'anika', 'A+', '01584796325', 'Gulshan'),
(5, 'Faysal', 'O+', '01698521478', 'Banani');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(32) NOT NULL,
  `username` varchar(72) NOT NULL,
  `password` varchar(72) NOT NULL,
  `role` varchar(72) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `username`, `password`, `role`) VALUES
(1, 'ruhu', '12345678', 'customer'),
(2, 'reha', 'rehana23', 'customer\r\n'),
(3, 'shipa', 'sami456', 'customer'),
(4, 'khaled', '258', 'customer'),
(5, 'kamal', 'kamal123', 'customer'),
(6, 'khaleda', '963258', 'customer\r\n'),
(7, 'mustofa', '12345678', 'customer'),
(8, 'admin', '123', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `medicine`
--

CREATE TABLE `medicine` (
  `id` int(5) NOT NULL,
  `med_name` varchar(50) NOT NULL,
  `indication` text NOT NULL,
  `generic` varchar(200) NOT NULL,
  `price` int(100) NOT NULL,
  `quantity` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `medicine`
--

INSERT INTO `medicine` (`id`, `med_name`, `indication`, `generic`, `price`, `quantity`) VALUES
(1, 'Thyrox 50mg', 'Thyroide Problem', 'Thyroxin', 17, 35),
(2, 'napa', 'headache', 'paracitamol', 10, 10),
(3, 'Cephalexin', 'Cephalosporin Antibiotic', 'Keflex', 25, 15),
(4, 'Atenolol', 'Antihypertensive', 'Tenormin', 12, 20),
(5, 'ace', 'diabetes', 'Ace', 6, 25),
(6, 'Napa Extra', 'Headache', 'Paracitamol', 7, 30),
(8, 'Lipopeptides', 'Antibiotics', 'Daptomycin', 14, 30);

-- --------------------------------------------------------

--
-- Table structure for table `order_report`
--

CREATE TABLE `order_report` (
  `orderId` int(100) UNSIGNED NOT NULL,
  `orderName` varchar(100) NOT NULL,
  `orderQuantity` int(100) NOT NULL,
  `orderCost` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_report`
--

INSERT INTO `order_report` (`orderId`, `orderName`, `orderQuantity`, `orderCost`) VALUES
(1, 'ace', 5, 30),
(2, 'Zero Cal. Sugar', 1, 200),
(3, 'Tufnil', 15, 0),
(4, 'Tufnil', 2, 10),
(5, 'Tufnil', 5, 25),
(6, 'Tufnil', 5, 25),
(7, 'Tufnil', 5, 25),
(8, 'ace', 5, 30);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `pro_id` int(5) NOT NULL,
  `pro_name` varchar(50) NOT NULL,
  `pro_quan` int(5) NOT NULL,
  `pro_price` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`pro_id`, `pro_name`, `pro_quan`, `pro_price`) VALUES
(1, 'Diet Coke', 10, 340),
(2, 'Zero Cal. Sugar', 5, 200),
(4, 'Kitkat', 5, 60),
(5, 'Sugar Free', 10, 200),
(3, 'Coke', 8, 40),
(6, 'Glucose', 4, 150),
(0, '', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buy`
--
ALTER TABLE `buy`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `donate_blood`
--
ALTER TABLE `donate_blood`
  ADD PRIMARY KEY (`donor_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medicine`
--
ALTER TABLE `medicine`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_report`
--
ALTER TABLE `order_report`
  ADD PRIMARY KEY (`orderId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buy`
--
ALTER TABLE `buy`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `donate_blood`
--
ALTER TABLE `donate_blood`
  MODIFY `donor_id` int(100) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `medicine`
--
ALTER TABLE `medicine`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `order_report`
--
ALTER TABLE `order_report`
  MODIFY `orderId` int(100) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
