-- Initial Database
DROP DATABASE IF EXISTS CMS_DB;
CREATE DATABASE CMS_DB;

USE CMS_DB;

-- 3 TABLES

-- #1 DEPARTMENT TABLE
CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

-- #2 ROLE TABLE
  CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(10,2) NULL,
  department_id INT,
  PRIMARY KEY(id),
    CONSTRAINT fk_departmentrole
    FOREIGN KEY (department_id) 
        REFERENCES departments(id)
  
);

-- EMPLOYEE TABLE
CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_employeerole
  FOREIGN KEY (role_id) 
  REFERENCES roles(id),
  CONSTRAINT fk_employeedepartment
  FOREIGN KEY (manager_id)
  REFERENCES departments(id)
     
)



