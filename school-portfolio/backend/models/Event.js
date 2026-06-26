const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  imageUrl: String,
  date: {
    type: Date,
    required: true,
  },
  category: String,
  isUpcoming: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Event', eventSchema);