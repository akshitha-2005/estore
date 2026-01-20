const express = require("express");
const mysql = require("mysql2");
const productCategories = express();

//Creating a pool is a best practise for handling multiple database queries efficiently.
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Blackbottle$123",
  database: "estore",
  port: 3306,
  multipleStatements: true,
});

productCategories.get("/", (req, res) => {
  pool.query("select * from categories", (error, categories) => {
    if (error) res.status(500).send(error);
    else res.status(200).send(categories);
  });
});

module.exports = productCategories;
