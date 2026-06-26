const Gallery = require('../models/Gallery');
const asyncHandler = require('express-async-handler');

const getGallery = asyncHandler(async (req, res) => {
  const { category } = req.query;
  
  let query = {};
  if (category && category !== 'all') query.category = category;
  
  const images = await Gallery.find(query).sort({ createdAt: -1 });
  res.json(images);
});

const getCategories = asyncHandler(async (req, res) => {
  const categories = await Gallery.distinct('category');
  res.json(categories);
});

const createGalleryItem = asyncHandler(async (req, res) => {
  const item = await Gallery.create({
    title: req.body.title,
    imageUrl: req.file?.path,
    category: req.body.category,
    description: req.body.description,
  });
  res.status(201).json(item);
});

const deleteGalleryItem = asyncHandler(async (req, res) => {
  const item = await Gallery.findById(req.params.id);
  if (item) {
    await item.deleteOne();
    res.json({ message: 'Image removed' });
  } else {
    res.status(404);
    throw new Error('Image not found');
  }
});

const bulkUploadGallery = asyncHandler(async (req, res) => {
  const items = req.files.map(file => ({
    imageUrl: file.path,
    category: req.body.category,
    title: req.body.title || '',
  }));
  
  const created = await Gallery.insertMany(items);
  res.status(201).json(created);
});

module.exports = { getGallery, getCategories, createGalleryItem, deleteGalleryItem, bulkUploadGallery };