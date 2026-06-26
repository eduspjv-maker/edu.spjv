// routes/authRoutes.js
const express = require('express');
const { registerUser, loginUser, getUsers, deleteUser } = require('../controllers/authController');
const { protect, admin, superAdmin } = require('../middleware/auth');
const router = express.Router();

router.post('/register', protect, admin, registerUser);
router.post('/login', loginUser);
router.get('/users', protect, admin, getUsers);
router.delete('/users/:id', protect, superAdmin, deleteUser);

module.exports = router;