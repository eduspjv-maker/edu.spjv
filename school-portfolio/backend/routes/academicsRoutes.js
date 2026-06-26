// routes/academicsRoutes.js
const express = require('express');
const { getAcademics, updateAcademics } = require('../controllers/academicsController');
const { protect, admin } = require('../middleware/auth');
const router = express.Router();

router.get('/', getAcademics);
router.put('/', protect, admin, updateAcademics);

module.exports = router;