-- CREATE DATABASE
DROP DATABASE IF EXISTS note_db;
CREATE DATABASE note_db;

USE note_db;

CREATE TABLE notes (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  text TEXT 
);