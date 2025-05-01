// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/tutorialDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Tutorial Schema
const tutorialSchema = new mongoose.Schema({
  title: String,
  description: String,
  isPublished: Boolean
});
const Tutorial = mongoose.model('Tutorial', tutorialSchema);

// Routes
app.get('/api/tutorials', async (req, res) => {
  try {
    const tutorials = await Tutorial.find();
    res.json(tutorials);
  } catch (err) {
    res.status(500).json({ error: "Error fetching tutorials" });
  }
});

app.post('/api/tutorials', async (req, res) => {
  try {
    const newTutorial = new Tutorial(req.body);
    await newTutorial.save();
    res.status(201).json(newTutorial);
  } catch (err) {
    res.status(400).json({ error: "Error adding tutorial" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
