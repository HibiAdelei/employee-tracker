DROP DATABASE IF EXISTS employees_DB;

CREATE DATABASE employees_DB;

USE employees_DB;

CREATE TABLE department ( 
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL, --holds dept name
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(100.0) NULL, -- holds salary info
  department_id INT NULL, -- holds ref to dept role belongs to
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL, -- employee first name
  last_name VARCHAR(30) NULL, -- employee last name
  role_id INT NULL, -- ref to role employee has
  manager_id INT NULL, -- holds ref to another empoloyee that manages employee being
  PRIMARY KEY (id)
);