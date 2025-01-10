const express = require('express');
const router = express.Router();
const AuthorController = require('../controllers/AuthorController');

router.get('/authors', AuthorController.getAuthors);
router.post('/authors', AuthorController.addAuthor);

module.exports = router;
