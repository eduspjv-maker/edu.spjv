// routes/schoolRoutes.js
const express = require('express');
const { getSchoolInfo, updateSchoolInfo, getStats } = require('../controllers/schoolController');
const { protect, admin } = require('../middleware/auth');
const router = express.Router();

router.get('/', getSchoolInfo);
router.get('/stats', getStats);
router.put('/', protect, admin, updateSchoolInfo);

module.exports = router;