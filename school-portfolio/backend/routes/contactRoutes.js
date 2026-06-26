// routes/contactRoutes.js
const express = require('express');
const { submitContact, getMessages, markAsRead, deleteMessage } = require('../controllers/contactController');
const { protect, admin } = require('../middleware/auth');
const router = express.Router();

router.post('/', submitContact);
router.get('/messages', protect, admin, getMessages);
router.put('/:id/read', protect, admin, markAsRead);
router.delete('/:id', protect, admin, deleteMessage);

module.exports = router;