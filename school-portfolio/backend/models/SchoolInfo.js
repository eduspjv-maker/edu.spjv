const mongoose = require('mongoose');

const schoolInfoSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: true,
    default: 'Elite International School',
  },
  logo: String,
  coverImage: String,
  motto: String,
  principalMessage: String,
  history: String,
  mission: String,
  vision: String,
  email: String,
  phone: String,
  address: String,
  facebook: String,
  instagram: String,
  youtube: String,
  whatsapp: String,
  totalStudents: Number,
  totalTeachers: Number,
  yearsOfExcellence: Number,
  passedStudents: Number,
}, {
  timestamps: true,
});

module.exports = mongoose.model('SchoolInfo', schoolInfoSchema);