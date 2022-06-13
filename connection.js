const mysql = require("mysql");

//Make connection to Database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_belajar_nodejs",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Connected to Database");
});

module.exports = conn;
