const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: String,
  designation: {
    type: String,
    required: true,
  },
  qualification: String,
  subject: String,
  contact: String,
  category: {
    type: String,
    enum: ['teacher', 'office_staff', 'management'],
    default: 'teacher',
  },
  email: String,
  bio: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Teacher', teacherSchema);