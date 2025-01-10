const db = require('../config/db');

// Book model
class Book {
  static getAllBooks(callback) {
    const query = 'SELECT * FROM Books';
    db.query(query, (err, results) => {
      callback(err, results);
    });
  }

  static createBook(bookData, callback) {
    const { Title, AuthorID, Genre, PublishDate, ISBN, AvailableCopies } = bookData;
    const query = 'INSERT INTO Books (Title, AuthorID, Genre, PublishDate, ISBN, AvailableCopies) ;
    db.query(query, [Title, AuthorID, Genre, PublishDate, ISBN, AvailableCopies], (err, results) => {
      callback(err, results);
    });
  }

  
}

module.exports = Book;
