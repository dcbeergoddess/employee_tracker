-- Initial Database
DROP DATABASE IF EXISTS CMS_DB;
CREATE DATABASE CMS_DB;

USE CMS_DB;

-- 3 TABLES

-- #1 DEPARTMENT TABLE
CREATE TABLE departments (
  department_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(department_id)
);

-- #2 ROLE TABLE
  CREATE TABLE roles (
  role_id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(10,2) NULL,
  department_id INT,
    CONSTRAINT fk_department
    FOREIGN KEY (department_id) 
        REFERENCES departments(department_id),
  PRIMARY KEY(role_id)
);

-- EMPLOYEE TABLE
CREATE TABLE employees (
  employee_id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT,
    CONSTRAINT fk_role
    FOREIGN KEY (role_id) 
        REFERENCES roles(department_id),
  manager_id INT NULL,
    CONSTRAINT fk_manager
    FOREIGN KEY (manager_id)
      REFERENCES departments(department_id), 
  PRIMARY KEY (employee_id)    
);