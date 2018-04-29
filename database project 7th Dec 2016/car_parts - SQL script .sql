NB: PLEASE NOTE THIS IS THE SQL SCRIPT FROM DATABASE 'CAR_PARTS'. PLEASE SEE COMMENTS FOR COMMANDS BELOW SCRIPT.

-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2016 at 01:57 AM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `car_parts`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `brand_Id` int(11) NOT NULL,
  `Brand_name` varchar(50) DEFAULT NULL,
  `Brand_details` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `car_id` int(11) NOT NULL,
  `car_manufacturer_nr` int(11) DEFAULT NULL,
  `car_year_of_manufacturer` int(11) DEFAULT NULL,
  `car_model` varchar(50) DEFAULT NULL,
  `other_car_details` varchar(244) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `Customer_Id` int(11) NOT NULL,
  `status_code` int(11) DEFAULT NULL,
  `address_id` varchar(255) DEFAULT NULL,
  `Last_Name` varchar(50) DEFAULT NULL,
  `First_Name` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customer_address`
--

CREATE TABLE `customer_address` (
  `address_Id` int(11) NOT NULL,
  `number_building` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `town` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `Last_Name` varchar(50) DEFAULT NULL,
  `First_Name` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customer_status`
--

CREATE TABLE `customer_status` (
  `Status_Code` int(11) NOT NULL,
  `Status_Description` varchar(25) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `manufacturers`
--

CREATE TABLE `manufacturers` (
  `car_manufacturer_nr` int(11) NOT NULL,
  `car_manufacturer_name` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `Order_Id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `parts`
--

CREATE TABLE `parts` (
  `partS_Id` int(11) NOT NULL,
  `Brand_Id` int(11) DEFAULT NULL,
  `Supplier_Nr` int(11) DEFAULT NULL,
  `Part_Group_Id` int(11) DEFAULT NULL,
  `Part_Maker_Code` int(11) DEFAULT NULL,
  `Part_Type_Code` int(11) DEFAULT NULL,
  `Part_name` varchar(50) DEFAULT NULL,
  `Main_supplier_name` varchar(50) DEFAULT NULL,
  `Price_to_us` int(11) DEFAULT NULL,
  `Price_to_customer` int(11) DEFAULT NULL,
  `Other_part_details` varchar(244) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `parts_for_cars`
--

CREATE TABLE `parts_for_cars` (
  `part_id` int(11) NOT NULL,
  `car_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `parts_in_orders`
--

CREATE TABLE `parts_in_orders` (
  `Part_in_order_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `part_supplier_id` int(11) DEFAULT NULL,
  `actual_sales_price` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `parts_suppliers`
--

CREATE TABLE `parts_suppliers` (
  `part_supplier_Id` int(11) NOT NULL,
  `Order_Id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `part_makers`
--

CREATE TABLE `part_makers` (
  `part_maker_code` int(11) NOT NULL,
  `part_maker_name` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `suppliers`
--

CREATE TABLE `suppliers` (
  `Supplier_Nr` int(11) NOT NULL,
  `Supplier_Name` varchar(255) DEFAULT NULL,
  `Address_Id` int(11) DEFAULT NULL,
  `Other` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `suppliers_address`
--

CREATE TABLE `suppliers_address` (
  `Address_Id` int(11) NOT NULL,
  `LastName` varchar(255) DEFAULT NULL,
  `FirstName` varchar(255) DEFAULT NULL,
  `Number_building` varchar(255) DEFAULT NULL,
  `City` varchar(255) DEFAULT NULL,
  `Country` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`brand_Id`);

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`car_id`),
  ADD KEY `car_manufacturer_nr` (`car_manufacturer_nr`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`Customer_Id`),
  ADD KEY `status_code` (`status_code`),
  ADD KEY `address_id` (`address_id`);

--
-- Indexes for table `customer_address`
--
ALTER TABLE `customer_address`
  ADD PRIMARY KEY (`address_Id`);

--
-- Indexes for table `customer_status`
--
ALTER TABLE `customer_status`
  ADD PRIMARY KEY (`Status_Code`);

--
-- Indexes for table `manufacturers`
--
ALTER TABLE `manufacturers`
  ADD PRIMARY KEY (`car_manufacturer_nr`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`Order_Id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `parts`
--
ALTER TABLE `parts`
  ADD PRIMARY KEY (`partS_Id`),
  ADD KEY `Brand_Id` (`Brand_Id`),
  ADD KEY `Supplier_Nr` (`Supplier_Nr`);

--
-- Indexes for table `parts_for_cars`
--
ALTER TABLE `parts_for_cars`
  ADD PRIMARY KEY (`part_id`),
  ADD KEY `car_id` (`car_id`);

--
-- Indexes for table `parts_in_orders`
--

ALTER TABLE `parts_in_orders`
  ADD PRIMARY KEY (`Part_in_order_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `part_supplier_id` (`part_supplier_id`);

--
-- Indexes for table `parts_suppliers`
--
ALTER TABLE `parts_suppliers`
  ADD PRIMARY KEY (`part_supplier_Id`),
  ADD KEY `Order_Id` (`Order_Id`);

--
-- Indexes for table `part_makers`
--
ALTER TABLE `part_makers`
  ADD PRIMARY KEY (`part_maker_code`);

--
-- Indexes for table `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`Supplier_Nr`),
  ADD KEY `Address_Id` (`Address_Id`);

--
-- Indexes for table `suppliers_address`
--
ALTER TABLE `suppliers_address`
  ADD PRIMARY KEY (`Address_Id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


                                            COMMANDS USED TO CREATE TABLES IN CAR_PARTS DATABASE

SQL Query ConsoleConsoleClearHistoryOptions
Press Ctrl+Enter to execute query


/*CREATING TABLE CUSTOMER_ADDRESS, MAKING ADDRESS_ID PRIMARY KEY */ CREATE TABLE customer_address ( address_Id int NOT NULL, number_building varchar(255), street varchar(255), town varchar(255), city varchar(255), country varchar(255), PRIMARY KEY (address_id));

/*CREATING TABLE CUSTOMERS, MAKING CUSTOMER_ID PRIMARY KEY. */ CREATE TABLE customers ( Customer_Id int NOT NULL, status_code int, address_id varchar(255), PRIMARY KEY (customer_id), FOREIGN KEY (status_code) REFERENCES customer_status (Status_Code), FOREIGN KEY (address_id) REFERENCES customer_address (Address_Id));

/*CREATING TABLE ORDERS, MAKING ORDER_ID PRIMARY KEY. MAKING CUSTOMER_ID FOREIGN KEY */ CREATE TABLE orders ( Order_Id int NOT NULL, customer_id int, PRIMARY KEY (order_id), FOREIGN KEY (customer_id) REFERENCES customers (Customer_Id));


/*CREATING TABLE PARTS_IN_ORDERS, MAKING PART_IN_ORDER_ID PRIMARY KEY, AND ORDER_ID FOREIGN KEY. */ CREATE TABLE parts_in_orders ( Part_in_order_id int NOT NULL, order_id int, PRIMARY KEY (Part_in_order_id), FOREIGN KEY (order_id) REFERENCES orders (Order_Id));


/*CREATING TABLE SUPPLIER_ADDRESS, MAKING ADDRESS_ID PRIMARY KEY. */ CREATE TABLE Suppliers ( Supplier_Nr int NOT NULL, Supplier_Name varchar(255), Address_Id int, Other varchar(255), PRIMARY KEY (Supplier_Nr), FOREIGN KEY (Address_Id) REFERENCES suppliers_address (Address_Id) );


/*ADDING PART_SUPPLIER_ID, ACTUAL_SALES_PRICE, QUANTITY INTO TABLE PARTS_IN_ORDERS. */ 

/*ALTER TABLE parts_in_orders add column part_supplier_id int, add column actual_sales_price int, add column quantity int, ADD FOREIGN KEY (part_supplier_id) REFERENCES parts_suppliers (Part_Supplier_id). */


/*ALTERING TABLE CUSTOMER_ADDRESS TO ADD LASTNAME & FIRSTNAME. */ ALTER TABLE customer_address ADD COLUMN Last_Name varchar (50), ADD COLUMN First_Name varchar (50);

/*ALTERING TABLE CUSTOMERS TO ADD LASTNAME & FIRSTNAME. */ ALTER TABLE customers ADD COLUMN Last_Name varchar (50), ADD COLUMN First_Name varchar (50);



CREATE TABLE parts_suppliers ( part_supplier_Id int NOT NULL, Order_Id int, PRIMARY KEY (part_supplier_Id), FOREIGN KEY (Order_Id) REFERENCES orders (Order_Id));


/*CREATING TABLE PARTS, WITH PARTS_ID AS PRIMARY KEY AND 5 FOREIGN KEYS.*/ CREATE TABLE parts ( partS_Id int NOT NULL, Brand_Id int, Supplier_Nr int, Part_Group_Id int, Part_Maker_Code int, Part_Type_Code int, Part_name varchar (50), Main_supplier_name varchar (50), Price_to_us int, Price_to_customer int, Other_part_details varchar (244), PRIMARY KEY (parts_Id), FOREIGN KEY (brand_Id) REFERENCES brands (brand_Id), FOREIGN KEY (supplier_Nr) REFERENCES suppliers (supplier_Nr));

/*CREATING TABLE BRANDS WITH PRIMARY KEY BRAND_ID. */ CREATE TABLE brands ( brand_Id int NOT NULL, Brand_name varchar (50), Brand_details varchar (50), PRIMARY KEY (brand_Id));


/*CREATING TABLE MANUFACTURER WITH CAR_MANUFACTURER_NR AS PRIMARY KEY. */ CREATE TABLE manufacturers ( car_manufacturer_nr int NOT NULL, car_manufacturer_name varchar (50), PRIMARY KEY (car_manufacturer_nr));


/*CREATING TABLE CARS WITH CAR_ID AS PRIMARY KEY AND CAR_MANUFACTURER_NR AS FOREIGN KEY. */ CREATE TABLE cars ( car_id int NOT NULL, car_manufacturer_nr int, car_year_of_manufacturer int, car_model varchar (50), other_car_details varchar (244), PRIMARY KEY (car_id), FOREIGN KEY (car_manufacturer_nr) REFERENCES manufacturers (car_manufacturer_nr));

/*CREATING TABLE PARTS_FOR_CARS WITH PART_ID AS PRIMARY KEY AND CAR_ID AS FOREIGN KEY. */ CREATE TABLE parts_for_cars ( part_id int NOT NULL, car_id int, PRIMARY KEY (part_id), FOREIGN KEY (car_id) REFERENCES cars (car_id));

/*CREATING TABLE PART_MAKERS WITH PART_MAKER_CODE AS PRIMARY KEY. */ CREATE TABLE part_makers ( part_maker_code int NOT NULL, part_maker_name varchar (50), PRIMARY KEY (part_maker_code));

/*CREATING TABLE CUSTOMER_ADDRESS, MAKING ADDRESS_ID PRIMARY KEY */
CREATE TABLE customer_address
(
address_Id int NOT NULL,
number_building varchar(255),
street varchar(255),
town varchar(255),
 city varchar(255),
 country varchar(255),
PRIMARY KEY (address_id);
​
