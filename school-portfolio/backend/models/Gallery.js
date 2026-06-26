const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title: String,
  imageUrl: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['alumni', 'activities', 'cultural', 'sports', 'celebrations'],
    required: true,
  },
  description: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Gallery', gallerySchema);