const Teacher = require('../models/Teacher');
const asyncHandler = require('express-async-handler');

const getTeachers = asyncHandler(async (req, res) => {
  const { category, search } = req.query;
  
  let query = {};
  if (category && category !== 'all') query.category = category;
  if (search) {
    query.name = { $regex: search, $options: 'i' };
  }
  
  const teachers = await Teacher.find(query).sort({ category: 1, name: 1 });
  res.json(teachers);
});

const createTeacher = asyncHandler(async (req, res) => {
  const teacher = await Teacher.create({
    ...req.body,
    photo: req.file?.path,
  });
  res.status(201).json(teacher);
});

const updateTeacher = asyncHandler(async (req, res) => {
  const teacher = await Teacher.findById(req.params.id);
  if (teacher) {
    Object.assign(teacher, req.body);
    if (req.file) teacher.photo = req.file.path;
    await teacher.save();
    res.json(teacher);
  } else {
    res.status(404);
    throw new Error('Teacher not found');
  }
});

const deleteTeacher = asyncHandler(async (req, res) => {
  const teacher = await Teacher.findById(req.params.id);
  if (teacher) {
    await teacher.deleteOne();
    res.json({ message: 'Teacher removed' });
  } else {
    res.status(404);
    throw new Error('Teacher not found');
  }
});

module.exports = { getTeachers, createTeacher, updateTeacher, deleteTeacher };