const Academics = require('../models/Academics');
const asyncHandler = require('express-async-handler');

const getAcademics = asyncHandler(async (req, res) => {
  let academics = await Academics.findOne();
  if (!academics) {
    academics = await Academics.create({
      classesOffered: [
        { level: 'Primary (Grades 1-5)', description: 'Foundation years', subjects: ['English', 'Mathematics', 'Science', 'Social Studies'] },
        { level: 'Middle School (Grades 6-8)', description: 'Building core competencies', subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Science'] },
        { level: 'High School (Grades 9-10)', description: 'Secondary education', subjects: ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'] },
        { level: 'Higher Secondary (Grades 11-12)', description: 'Senior secondary with streams', subjects: ['Science', 'Commerce', 'Humanities'] },
      ],
      curriculum: 'CBSE Curriculum with modern teaching methodologies',
      examinationSystem: 'Comprehensive evaluation with periodic tests, assignments, and term-end examinations',
      academicCalendar: 'April to March (Annual System)',
    });
  }
  res.json(academics);
});

const updateAcademics = asyncHandler(async (req, res) => {
  let academics = await Academics.findOne();
  if (academics) {
    Object.assign(academics, req.body);
    await academics.save();
  } else {
    academics = await Academics.create(req.body);
  }
  res.json(academics);
});

module.exports = { getAcademics, updateAcademics };