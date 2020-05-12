const mysql = require("mysql");
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require('figlet');
const Font = require('ascii-art-font');
const cTable = require('console.table');

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
  console.log("connected as id " + connection.threadId + "\n");
  start();
});

//Initial Start Questions

function start() {
  console.log(chalk.blue('Employee \n Manager \n'));
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      name: "startchoice",
      choices: [
        chalk.magenta("View All Employees"),
        chalk.yellow("Add Employee"),
        chalk.blueBright("Update Employee Role"),
        chalk.greenBright("Finished")
      ]
    }
  ]).then(answer => {
    if (answer.type === chalk.magenta("View All Employees")) {

    } else if (answer.type === chalk.yellow("Add Employee")) {

    } else if (answer.type === chalk.blueBright("Update Employee Role")) {

    } else {

      connection.end();
    }
  })
}


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

