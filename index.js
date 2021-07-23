// dependencies 
const inquirer = require("inquirer");
const mysql = require("mysql");
require("console.table");

// create connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "employees_DB",
    password: "password",
});

// start program; prompts, then switch cases manage which function is called
function init() {
    inquirer
        .prompt({
            type: "list",
            name: "task",
            message: "What would you like to do?",
            choices: [
                "View Employees",
                "View Employees by Department",  
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Add Role",
                "End"
            ]
        })

        .then(function({task}) { 
            switch (task) {
                case "View Employees":
                  viewEmployees();
                  break;

                case "View Employees by Department":
                  viewEmployeeByDepartment();
                  break;
               
                case "Add Employee":
                  addEmployee();
                  break;

                case "Remove Employees":
                  removeEmployees();
                  break;

                case "Update Employee Role":
                  updateEmployeeRole();
                  break;

                case "Add Role":
                  addRole();
                  break;
        
                case "Close Application":
                  connection.end();
                  break;
              }
            });

}


// TODO:
// function viewEmployees();
// function viewEmployeeByDepartment();
// function addEmployee();
// function removeEmployees();
// function updateEmployeeRole();
// function addRole();

// start connection 
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected`);
    init();
});
  