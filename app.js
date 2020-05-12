const mysql = require("mysql");
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require('figlet');
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
  figlet('Employee \n Manager', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
  start(); 
});

function start() {
  connection.end;
}

//Initial Start Questions

// function start() {
//   inquirer.prompt([
//     {
//       type: "list",
//       message: "What would you like to do?",
//       name: "",
//       choices: [
//         chalk.magenta("Manager"),
//         chalk.yellow("Engineer"),
//         chalk.blueBright("Intern"),
//         chalk.greenBright("Finished")
//       ]
//     }
//   ]).then(response => {
//     // process all the answers
//     if (response.type === chalk.magenta("Manager")) {
//       createManager("Manager");
//     } else if (response.type === chalk.yellow("Engineer")) {
//       createEngineer("Engineer");
//     } else if (response.type === chalk.blueBright("Intern")) {
//       createIntern("Intern");
//     } else {
//       console.info(chalk.green("All Finished!"))
//       // console.log(teamMembers)
//       // console.log(idArray)
//       connection.end();
//     }
//   })
// }


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

