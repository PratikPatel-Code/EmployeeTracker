const mysql = require('mysql');

// Basic setup 
const conn = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Batman_1122',
  database: 'employee_tracker_DB'
};

// Test connection
const connection = mysql.createConnection(conn);

connection.connect((err) => {
  if(err) throw err;
  console.log(`conneced as id ${connection.threadId}`); 
});
