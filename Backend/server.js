const express = require('express');
const bodyParser = require('body-parser');

// Import routes
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', bookRoutes);

// Start server
app.listen(port, () => {
  console.log(`Library Management System is running on port ${port}`);
});
