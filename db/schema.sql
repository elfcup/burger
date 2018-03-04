/* Create and use the burger db */
CREATE DATABASE  burgers_db;
USE burgers_db;

/* Create a table for all the burgers */
CREATE TABLE burgers (
	id INT AUTO_INCREMENT PRIMARY KEY,
	burger_name VARCHAR(30) NOT NULL,
	devoured BOOLEAN DEFAULT false
);