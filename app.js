const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 8000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// In-memory notes storage
let notes = [];

// Routes
app.get('/notes', (req, res) => {
  res.json(notes);
});

app.post('/add', (req, res) => {
  const { note } = req.body;
  if (note) notes.push(note);
  res.redirect('/');
});

app.post('/delete', (req, res) => {
  const { index } = req.body;
  notes.splice(index, 1);
  res.redirect('/');
});

// Serve HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
