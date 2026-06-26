const SchoolInfo = require('../models/SchoolInfo');
const asyncHandler = require('express-async-handler');

const getSchoolInfo = asyncHandler(async (req, res) => {
  let schoolInfo = await SchoolInfo.findOne();
  if (!schoolInfo) {
    schoolInfo = await SchoolInfo.create({
      schoolName: 'Elite International School',
      motto: 'Excellence in Education',
    });
  }
  res.json(schoolInfo);
});

const updateSchoolInfo = asyncHandler(async (req, res) => {
  const schoolInfo = await SchoolInfo.findOne();
  if (schoolInfo) {
    Object.assign(schoolInfo, req.body);
    await schoolInfo.save();
    res.json(schoolInfo);
  } else {
    const newSchoolInfo = await SchoolInfo.create(req.body);
    res.json(newSchoolInfo);
  }
});

const getStats = asyncHandler(async (req, res) => {
  const schoolInfo = await SchoolInfo.findOne();
  const stats = {
    totalStudents: schoolInfo?.totalStudents || 2500,
    totalTeachers: schoolInfo?.totalTeachers || 150,
    yearsOfExcellence: schoolInfo?.yearsOfExcellence || 25,
    passedStudents: schoolInfo?.passedStudents || 5000,
  };
  res.json(stats);
});

module.exports = { getSchoolInfo, updateSchoolInfo, getStats };