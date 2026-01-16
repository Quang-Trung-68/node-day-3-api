const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "trung2309",
  database: "todo_dev",
});

module.exports = pool;
