const mongoose = require('mongoose');

// Define the schema for tutorials
const TutorialSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  published: { type: Boolean, default: false },
});

// Explicitly define the collection name as 'tutorials'
module.exports = mongoose.model('Tutorial', TutorialSchema, 'tutorials');
