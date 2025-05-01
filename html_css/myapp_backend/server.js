const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // To parse JSON request bodies

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Models
const Tutorial = require('./models/Tutorial');

app.get('/api/tutorials', async (req, res) => {
    try {
      // Query the 'tutorials' collection
      const tutorials = await Tutorial.find();  // This will query the 'tutorials' collection by default
      res.json(tutorials);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  app.get('/', (req, res) => {
    res.send('Backend is working!');
  });
  
// Set the server to listen
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
