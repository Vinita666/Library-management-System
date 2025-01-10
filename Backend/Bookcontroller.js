const Book = require('../models/Book');
const Joi = require('joi');

// Validation schema
const bookSchema = Joi.object({
  Title: Joi.string().min(3).required(),
  AuthorID: Joi.number().integer().required(),
  Genre: Joi.string().required(),
  PublishDate: Joi.date().required(),
  ISBN: Joi.string().length(13).required(),
  AvailableCopies: Joi.number().integer().min(0).required()
});

// Get all books
exports.getBooks = (req, res) => {
  Book.getAllBooks((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Add a new book
exports.addBook = (req, res) => {
  const { error } = bookSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const bookData = req.body;
  Book.createBook(bookData, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Book added successfully', bookID: results.insertId });
  });
};
