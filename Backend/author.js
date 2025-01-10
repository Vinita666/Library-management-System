const db = require('../config/db');

class Author {
  static getAllAuthors(callback) {
    const query = 'SELECT * FROM Authors';
    db.query(query, (err, results) => {
      callback(err, results);
    });
  }

  static createAuthor(authorData, callback) {
    const { FirstName, LastName, Biography } = authorData;
    const query = 'INSERT INTO Authors (FirstName, LastName, Biography) VALUES (?, ?, ?)';
    db.query(query, [FirstName, LastName, Biography], (err, results) => {
      callback(err, results);
    });
  }
}

module.exports = Author;
