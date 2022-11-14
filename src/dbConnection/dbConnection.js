const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blog",
});
conn.connect();
exports.conn = conn;
