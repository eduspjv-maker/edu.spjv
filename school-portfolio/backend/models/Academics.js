const mongoose = require('mongoose');

const academicsSchema = new mongoose.Schema({
  classesOffered: [{
    level: String,
    description: String,
    subjects: [String],
  }],
  curriculum: String,
  examinationSystem: String,
  academicCalendar: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Academics', academicsSchema);