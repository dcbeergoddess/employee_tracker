--Initial Database
DROP DATABASE IF EXISTS CMS_DB;
CREATE DATABASE CMS_DB;

USE CMS_DB;

--3 TABLES

--#1 DEPARTMENT TABLE
CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL,
);

-- ROLE TABLE
  -- id (INT PRIMARY KEY)
  -- title (VARCHAR(30))
  -- salary -  DECIMAL to hold role salary
  -- department_id -- FORIEGN KEY (looking up joins)

-- EMPLOYEE TABLE
 -- id - INT PRIMARY KEY
 -- first_name** - VARCHAR(30)
 -- last_name** - VARCHAR(30) 
--  role_id** - INT  - FOREIGN KEYS
-- manager_id** - INT - FOREIGN KEYS

