-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2016 at 03:36 AM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";



data for table `customers`

/* INSERTING VALUES INTO TABLE CUSTOMERS, SUCH AS CUSTOMER_ID, STATUS_CODE, ADDRESS_ID, LAST_NAME, FIRST_NAME. */

INSERT INTO `customers` (`Customer_Id`, `status_code`, `address_id`, `Last_Name`, `First_Name`) VALUES
(1, 3, '1', 'Dolan', 'Joe'),
(2, 2, '2', 'Smith', 'Peter'),
(3, 1, '3', 'Jones', 'Lucy');

/* INSERTING VALUES INTO TABLE CUSTOMER_ADDRESS. */

INSERT INTO `customer_address` (`address_Id`, `number_building`, `street`, `town`, `city`, `country`, `Last_Name`, `First_Name`) VALUES
(1, '50', 'ABBEY ST', 'BRAY', 'CO.WICKLOW', 'IRELAND', 'DOLAN', 'JOE'),
(2, '29', 'Greek St', 'Harringay', 'London', 'UK', 'SMITH', 'PETER'),
(3, '2', 'BUSHY PARK DRIVE', 'GALWAY', 'CO.GALWAY', 'IRELAND', 'JONES', 'LUCY');


