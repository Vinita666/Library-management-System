const mysql = require('mysql2');

// Create connection to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Radhagovind@1',
  database: 'LMS'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

module.exports = db;
