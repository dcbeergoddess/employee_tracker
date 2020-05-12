-- Initial Database
DROP DATABASE IF EXISTS CMS_DB;
CREATE DATABASE CMS_DB;

USE CMS_DB;

-- 3 TABLES

-- #1 DEPARTMENT TABLE
CREATE TABLE departments (
  department_id INT AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(department_id)
);

-- #2 ROLE TABLE
  CREATE TABLE roles (
  role_id INT AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2),
  department_id INT,
  PRIMARY KEY(role_id),
    CONSTRAINT fk_departmentrole
    FOREIGN KEY (department_id) 
        REFERENCES departments(department_id)
  
);

-- EMPLOYEE TABLE
CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_employeerole
  FOREIGN KEY (role_id) 
  REFERENCES roles(role_id),
  CONSTRAINT fk_employeemanager
  FOREIGN KEY (manager_id)
  REFERENCES roles(role_id)
     
)



