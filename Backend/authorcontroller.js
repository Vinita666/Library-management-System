const Author = require('../models/Author');
const Joi = require('joi');

const authorSchema = Joi.object({
  FirstName: Joi.string().min(2).required(),
  LastName: Joi.string().min(2).required(),
  Biography: Joi.string().optional()
});

exports.getAuthors = (req, res) => {
  Author.getAllAuthors((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.addAuthor = (req, res) => {
  const { error } = authorSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const authorData = req.body;
  Author.createAuthor(authorData, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Author added successfully', authorID: results.insertId });
  });
};
