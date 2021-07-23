// dependencies 
const inquirer = require("inquirer");
const mysql = require("mysql");
require("console.table");


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "employees_DB",
    password: "password",
});



connection.connect((err) => {
    if (err) throw err;
    console.log(`connected`);
    // init();
});
  