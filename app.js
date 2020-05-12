const mysql = require("mysql");
const inquirer = require("inquirer");
const chalk = require("chalk");
//look up 'console.table' - npm package to format data in console

//sql boilerplate
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "CMS_DB"
});

connection.connect(err => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n"); //THIS IS OPTIONAL
  connection.end;  
});
//ADD
  //departments
  //roles
  //employees

//VIEW 
  //deparments
  //roles
  //employees

//Update
  //employee roles

