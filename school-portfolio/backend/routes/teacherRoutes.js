// routes/teacherRoutes.js
const express = require('express');
const { getTeachers, createTeacher, updateTeacher, deleteTeacher } = require('../controllers/teacherController');
const { protect, admin } = require('../middleware/auth');
const upload = require('../middleware/upload');
const router = express.Router();

router.get('/', getTeachers);
router.post('/', protect, admin, upload.single('photo'), createTeacher);
router.put('/:id', protect, admin, upload.single('photo'), updateTeacher);
router.delete('/:id', protect, admin, deleteTeacher);

module.exports = router;