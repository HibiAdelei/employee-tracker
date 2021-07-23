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


function viewEmployees() {

    console.log("Viewing employees\n");

  var query =
  `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department,
  r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
  FROM employee e
  LEFT JOIN role r
  ON e.role_id = r.id
  LEFT JOIN department d
  ON d.id = r.department_id
  LEFT JOIN employee m
  ON m.id = e.manager_id`

  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    // restarts from beginning when done
    init();
  });
  
}





function addEmployee() {
      
        var query =
          `SELECT r.id, r.title, r.salary 
            FROM role r`
      
        connection.query(query, function (err, res) {
          if (err) throw err;
      
          const roles = res.map(({ id, title, salary }) => ({
            value: id, 
            title: `${title}`, 
            salary: `${salary}`
          }));
      
          console.table(res);
          promptInsert(roles);
        });
      }
      
      function promptInsert(roles) {
      
        inquirer
          .prompt([

            {
              type: "input",
              name: "first_name",
              message: "What is the employee's first name?"
            },

            {
              type: "input",
              name: "last_name",
              message: "What is the employee's last name?"
            },
            
            {
              type: "list",
              name: "role_id",
              message: "What is the employee's role?",
              choices: roles
            },

          ])
          .then(function (answer) {
            console.log(answer);
            //adds employee
            var query = `INSERT INTO employee SET ?`

            connection.query(query,
                
              {
                first_name: answer.first_name,
                last_name: answer.last_name,
                role_id: answer.role_id,
                manager_id: answer.managerId,
              },

              function (err, res) {
                if (err) throw err;
                console.table(res);
               // restarts from beginning when done
                init();
              });
            
          });
}




// TODO:
// function viewEmployeeByDepartment();

// function removeEmployees();
// function updateEmployeeRole();
// function addRole();

// start connection 
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected`);
    init();
});
  