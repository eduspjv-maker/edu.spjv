// routes/prideRoutes.js
const express = require('express');
const { getPrideStudents, getAllYears, createPrideStudent, updatePrideStudent, deletePrideStudent } = require('../controllers/prideController');
const { protect, admin } = require('../middleware/auth');
const upload = require('../middleware/upload');
const router = express.Router();

router.get('/', getPrideStudents);
router.get('/years', getAllYears);
router.post('/', protect, admin, upload.single('photo'), createPrideStudent);
router.put('/:id', protect, admin, upload.single('photo'), updatePrideStudent);
router.delete('/:id', protect, admin, deletePrideStudent);

module.exports = router;