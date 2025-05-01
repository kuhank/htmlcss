const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/tutorialDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Mongoose Schema
const TutorialSchema = new mongoose.Schema({
    title: String,
    description: String,
    published: Boolean
});
const Tutorial = mongoose.model('Tutorial', TutorialSchema);

// API Route
app.get('/api/tutorials', async (req, res) => {
    const tutorials = await Tutorial.find();
    res.json(tutorials);
});

// Start Server
app.listen(8000, () => {
    console.log('Backend server running on http://localhost:8000');
});
