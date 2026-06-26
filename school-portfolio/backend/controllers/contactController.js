const Contact = require('../models/Contact');
const asyncHandler = require('express-async-handler');

const submitContact = asyncHandler(async (req, res) => {
  const message = await Contact.create(req.body);
  res.status(201).json({ message: 'Message sent successfully', data: message });
});

const getMessages = asyncHandler(async (req, res) => {
  const messages = await Contact.find().sort({ createdAt: -1 });
  res.json(messages);
});

const markAsRead = asyncHandler(async (req, res) => {
  const message = await Contact.findById(req.params.id);
  if (message) {
    message.isRead = true;
    await message.save();
    res.json({ message: 'Marked as read' });
  } else {
    res.status(404);
    throw new Error('Message not found');
  }
});

const deleteMessage = asyncHandler(async (req, res) => {
  const message = await Contact.findById(req.params.id);
  if (message) {
    await message.deleteOne();
    res.json({ message: 'Message deleted' });
  } else {
    res.status(404);
    throw new Error('Message not found');
  }
});

module.exports = { submitContact, getMessages, markAsRead, deleteMessage };