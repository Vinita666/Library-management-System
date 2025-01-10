const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController');

// Define routes
router.get('/books', BookController.getBooks);
router.post('/books', BookController.addBook);

// Export router
module.exports = router;
