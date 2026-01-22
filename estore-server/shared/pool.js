const mysql = require("mysql2");

//Creating a pool is a best practise for handling multiple database queries efficiently.
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Blackbottle$123",
  database: "estore",
  port: 3306,
  multipleStatements: true,
});

module.exports = pool;
