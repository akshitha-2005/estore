const express = require("express");
const mysql = require("mysql2");
const app = express();
const PORT = 5001;

//Creating a pool is a best practise for handling multiple database queries efficiently.
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "*******",
  database: "estore",
  port: 3306,
  multipleStatements: true,
});

app.get("/", (req, res) => {
  pool.getConnection((err, connention) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("Connection Established");
    }
  });
});

const server = app.listen(PORT, () => {
  console.log("App is running on the port - 5001");
});
