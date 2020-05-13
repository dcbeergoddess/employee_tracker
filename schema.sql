-- Initial Database
DROP DATABASE IF EXISTS CMS_DB;
CREATE DATABASE CMS_DB;

USE CMS_DB;

-- 3 TABLES

-- #1 DEPARTMENT TABLE
CREATE TABLE departments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30)
);

-- #2 ROLE TABLE
  CREATE TABLE roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL(10,2),
  department_id INT,
    FOREIGN KEY (department_id)
      REFERENCES departments(id)
  
);

-- EMPLOYEE TABLE
CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  FOREIGN KEY (role_id) 
  REFERENCES roles(id),
  manager_id INT NULL,
  FOREIGN KEY (manager_id)
  REFERENCES roles(id)  
)

-- EXAMPLE OF HOW TO JOIN TABLES FOR app.js viewEmployees function--
/* 
SELECT employees.id, first_name, last_name, title, department_name, salary, manager_id 
FROM employees 
INNER JOIN roles 
ON employees.role_id = roles.id 
INNER JOIN departments 
ON roles.department_id = departments.id;
*/





