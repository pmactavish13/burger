-- Create the database burgers_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;


-- Create the table burgers.
CREATE TABLE burgers(
  id INTEGER AUTO_INCREMENT,
  burger_name VARCHAR(30) NOT NULL,
  devoured BOOLEAN default false,
  PRIMARY KEY(id)
);



