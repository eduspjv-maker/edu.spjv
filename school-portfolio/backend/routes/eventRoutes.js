// routes/eventRoutes.js
const express = require('express');
const { getEvents, getUpcomingEvents, getLatestNews, createEvent, updateEvent, deleteEvent } = require('../controllers/eventController');
const { protect, admin } = require('../middleware/auth');
const upload = require('../middleware/upload');
const router = express.Router();

router.get('/', getEvents);
router.get('/upcoming', getUpcomingEvents);
router.get('/news', getLatestNews);
router.post('/', protect, admin, upload.single('image'), createEvent);
router.put('/:id', protect, admin, upload.single('image'), updateEvent);
router.delete('/:id', protect, admin, deleteEvent);

module.exports = router;