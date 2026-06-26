const mongoose = require('mongoose');

const prideStudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: String,
  marks: Number,
  percentage: Number,
  year: {
    type: Number,
    required: true,
  },
  currentPosition: String,
  description: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('PrideStudent', prideStudentSchema);