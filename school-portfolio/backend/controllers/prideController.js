const PrideStudent = require('../models/PrideStudent');
const asyncHandler = require('express-async-handler');

const getPrideStudents = asyncHandler(async (req, res) => {
  const { year, search, page = 1, limit = 12 } = req.query;
  
  let query = {};
  if (year) query.year = parseInt(year);
  if (search) {
    query.name = { $regex: search, $options: 'i' };
  }
  
  const students = await PrideStudent.find(query)
    .sort({ year: -1, marks: -1 })
    .limit(limit * 1)
    .skip((page - 1) * limit);
  
  const total = await PrideStudent.countDocuments(query);
  
  res.json({
    students,
    totalPages: Math.ceil(total / limit),
    currentPage: page,
    total,
  });
});

const getAllYears = asyncHandler(async (req, res) => {
  const years = await PrideStudent.distinct('year');
  res.json(years.sort((a, b) => b - a));
});

const createPrideStudent = asyncHandler(async (req, res) => {
  const student = await PrideStudent.create({
    ...req.body,
    photo: req.file?.path,
  });
  res.status(201).json(student);
});

const updatePrideStudent = asyncHandler(async (req, res) => {
  const student = await PrideStudent.findById(req.params.id);
  if (student) {
    Object.assign(student, req.body);
    if (req.file) student.photo = req.file.path;
    await student.save();
    res.json(student);
  } else {
    res.status(404);
    throw new Error('Student not found');
  }
});

const deletePrideStudent = asyncHandler(async (req, res) => {
  const student = await PrideStudent.findById(req.params.id);
  if (student) {
    await student.deleteOne();
    res.json({ message: 'Student removed' });
  } else {
    res.status(404);
    throw new Error('Student not found');
  }
});

module.exports = { getPrideStudents, getAllYears, createPrideStudent, updatePrideStudent, deletePrideStudent };