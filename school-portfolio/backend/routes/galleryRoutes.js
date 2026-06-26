// routes/galleryRoutes.js
const express = require('express');
const { getGallery, getCategories, createGalleryItem, deleteGalleryItem, bulkUploadGallery } = require('../controllers/galleryController');
const { protect, admin } = require('../middleware/auth');
const upload = require('../middleware/upload');
const router = express.Router();

router.get('/', getGallery);
router.get('/categories', getCategories);
router.post('/', protect, admin, upload.single('image'), createGalleryItem);
router.post('/bulk', protect, admin, upload.array('images', 20), bulkUploadGallery);
router.delete('/:id', protect, admin, deleteGalleryItem);

module.exports = router;