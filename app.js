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
  console.log(chalk.blue('================\n  Employee\n  Manager\n================'));
  start();
});


//Initial Start Questions
function start() {
  inquirer.prompt([
    {
      type: "list",
      name: "startchoice",
      message: "What would you like to do?",
      choices: [
        chalk.magenta("View All Employees"),
        chalk.green("View All Roles"),
        chalk.yellow("Add Employee"),
        chalk.blueBright("Update Employee Role"),
        chalk.greenBright("Finished")
      ]
    }
  ]).then(answer => {
    if (answer.startchoice === chalk.magenta("View All Employees")) {
      viewEmployees();
    } else if (answer.startchoice === chalk.green("View All Roles")) {
      viewRoles();
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
  const allEmployees = 'SELECT employees.id, first_name, last_name, title, department_name, salary, manager_id FROM employees INNER JOIN roles ON employees.role_id = roles.id INNER JOIN departments ON roles.department_id = departments.id;';

  connection.query(allEmployees, function (err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
}
//VIEW ALL EMPLOYEES BY DEPARTMENT
//VIEW ALL EMPLOYEES BY MANAGER

function viewRoles() {
  connection.query("SELECT title FROM roles", function (err, res) {
    if (err) throw err;
    console.log(res);
    start();
  });
}

//ADD EMPLOYEE
function addEmployee() {
  inquirer
    .prompt([{
      name: "first_name",
      type: "input",
      message: "Please enter first name.",
    },
    {
      name: "last_name",
      type: "input",
      message: "Please enter last name.",
    },
    {
      name: "role",
      type: "list",
      message: "Please choose a role.",
      choices: [
        'Owner',
        'Director of Operations',
        'Tap Room Manager',
        'Lead Brewer',
        'Sales Director',
        'Tap Room Bartender',
        'Brewer',
        'Sales Rep',
        'HR',
      ]
    },
    ]).then(function (answers) {
      connection.query(
        "INSERT INTO employees SET ?",
        {
          first_name: answers.first_name,
          last_name: answers.last_name,
          // role_id: answers.role,
        },
        function (err, res) {
          if (err) throw err;
          console.log("SUCCESS")
          start();
        }
      )
    });
}

//REMOVE EMPLOYEE




//ADD departments
//ADD roles
//ADD employees

//UPDATE EMPLOYEE ROLE


