const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

// Create an instance of the express app
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // replace with your MySQL username
  password: '', // replace with your MySQL password
  database: 'LMS'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// AUTHOR Routes

// Get all authors
app.get('/authors', (req, res) => {
  const query = 'SELECT * FROM Authors';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

// Add a new author
app.post('/authors', (req, res) => {
  const { firstName, lastName, biography } = req.body;
  const query = 'INSERT INTO Authors (FirstName, LastName, Biography) VALUES (?, ?, ?)';
  db.query(query, [firstName, lastName, biography], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ message: 'Author added successfully', authorID: result.insertId });
  });
});

// BOOK Routes

// Get all books
app.get('/books', (req, res) => {
  const query = 'SELECT * FROM Books';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

// Add a new book
app.post('/books', (req, res) => {
  const { title, authorID, genre, publishDate, ISBN, availableCopies } = req.body;
  const query = 'INSERT INTO Books (Title, AuthorID, Genre, PublishDate, ISBN, AvailableCopies) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [title, authorID, genre, publishDate, ISBN, availableCopies], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ message: 'Book added successfully', bookID: result.insertId });
  });
});

// MEMBER Routes

// Get all members
app.get('/members', (req, res) => {
  const query = 'SELECT * FROM Members';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

// Add a new member
app.post('/members', (req, res) => {
  const { name, email, phone } = req.body;
  const query = 'INSERT INTO Members (name, email, phone) VALUES (?, ?, ?)';
  db.query(query, [name, email, phone], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ message: 'Member added successfully', memberID: result.insertId });
  });
});

// TRANSACTION Routes

// Get all transactions
app.get('/transactions', (req, res) => {
  const query = 'SELECT * FROM Transactions';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

// Create a transaction (Loan, Return, Fee)
app.post('/transactions', (req, res) => {
  const { bookID, memberID, transactionType, transactionDate, dueDate, returnDate, fee } = req.body;
  const query = 'INSERT INTO Transactions (BookID, MemberID, TransactionType, TransactionDate, DueDate, ReturnDate, Fee) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [bookID, memberID, transactionType, transactionDate, dueDate, returnDate, fee], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ message: 'Transaction created successfully', transactionID: result.insertId });
  });
});

// RESERVATION Routes

// Get all reservations
app.get('/reservations', (req, res) => {
  const query = 'SELECT * FROM Reservations';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

// Create a reservation
app.post('/reservations', (req, res) => {
  const { bookID, memberID, reservationDate, status } = req.body;
  const query = 'INSERT INTO Reservations (BookID, MemberID, ReservationDate, Status) VALUES (?, ?, ?, ?)';
  db.query(query, [bookID, memberID, reservationDate, status], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ message: 'Reservation created successfully', reservationID: result.insertId });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Library Management System running on port ${port}`);
});
