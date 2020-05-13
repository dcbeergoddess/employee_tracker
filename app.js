const mysql = require("mysql");
const inquirer = require("inquirer");
const chalk = require("chalk");
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
  console.log(chalk.blue('================\n  Employee\n  Manager\n================'));
  start();
});


//Initial Start Questions
function start() {
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
    if (answer.startchoice === chalk.magenta("View All Employees")) {
      viewEmployees();
    } else if (answer.startchoice === chalk.yellow("Add Employee")) {
      addEmployee();
    } else if (answer.startchoice === chalk.blueBright("Update Employee Role")) {
      updateEmployee();
    } else {
      connection.end();
    }
  })
}


//VIEW ALL EMPLOYEES FUNCTION
function viewEmployees() {

  //SQL Language for Table Joins
  const allEmployees = "SELECT employees.id, first_name, last_name, title, department_name, salary, manager_id FROM employees INNER JOIN roles ON employees.role_id = roles.id INNER JOIN departments ON roles.department_id = departments.id;";

  connection.query(allEmployees, function (err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
}
//VIEW ALL EMPLOYEES BY DEPARTMENT
//VIEW ALL EMPLOYEES BY MANAGER


//ADD EMPLOYEE


//REMOVE EMPLOYEE




//ADD departments
//ADD roles
//ADD employees

//UPDATE EMPLOYEE ROLE


