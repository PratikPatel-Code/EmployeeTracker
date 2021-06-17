// Basic setup
const mysql = require('mysql');
const inquirer = require('inquirer');
const table = require('console.table');

// Connection
const conn = mysql.createConnection ({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Batman_1122',
    database: 'employee_tracker_DB',
  });

  conn.connect (function (err) {
      if (err) throw err;
      tracker ()
  });   

// Initial start menu
const tracker = () => {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'Select an option',
        choices: [
            'View Employees',
            'View Departments',
            'View Roles',
            'Add an Employee',
            'Delete an Employee',
            'Update employee Role',
            'Update employee Manager',
            'Exit Tracker',
        ],
    })
// Switch, case, and break for each menu option
        .then((answer) =>{
            switch (answer.action) {
                case 'View Employees':
                    viewEmp();
                    break;
                case 'View Departments':
                    viewDept();
                    break;
                case 'View Roles':
                    viewRoles();
                    break;
                case 'Add an Employee':
                    addEmp();
                    break;
                case 'Delete and Employee':
                    deleteEmp();
                    break;
                case 'Update employee Role':
                    updateEmpRole();
                    break;
                case 'Update employee Manager':
                    updateEmpMan();
                    break;
                case 'Exit Tracker':
                    exitTracker();
                    break;
            }
        })    
}

// Functions related to each menu option in tracker 

// View Employees
function viewEmp () {
    let ve = "SELECT * FROM employee JOIN roles ON employee_tracker_DB.employee.id = employee_tracker_DB.roles.id";
    conn.query(ve, function (err, empTable) {
        if (err) throw err;
        console.log(empTable.length + "Employees Data");
        console.table("Employees: ", empTable);
        tracker();
    });
}

// View Departments
function viewDept () {
    let vdpt = "SELECT * FROM departments";
    conn.query (vdpt, function (err, eDept) {
        if (err) throw err;
        console.log (eDept + "Departments Data");
        console.table("Departments: ", eDept);
        tracker ();
    });
}

// View Roles
function viewRoles () {
    let vrol = "SELECT * FROM roles";
    conn.query (vrol, function (err, eRol) {
        if (err) throw err;
        console.log (eRol + "Employee Roll Data");
        console.table ("Roles: ", eRol);
        tracker ();
    });
}

// Add an Employee
function addEmp () {
    inquirer.prompt ([
        {
        type: 'input',
        name: 'first_name',
        message: 'What is the employee first name?',
        },
        {
        type: 'input',
        name: 'last_name',
        message: 'What is the employee last name?',
        },
        {
        type: 'list',
        name: 'role_id',
        message: 'What is the Employee role?',
        choices: [
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
        ],
        },
        {
        type: 'list',
        name: 'manager_id',
        message: 'Who is the Employee Manager?',
        choices: [
            '01',
            '02',
            '03',
            '04',
            'null',
        ],       
        },
    ])
    .then(function (answer) {
        conn.query("INSERT INTO employee SET ?",
            {
                first_name: answer.first_name,
                last_name: answer.last_name,
                roles_id: answer.roles_id,
                manager_id: answer.manager_id,
            }),
    tracker();
    })
};