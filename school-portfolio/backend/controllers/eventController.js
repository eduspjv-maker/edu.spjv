const Event = require('../models/Event');
const asyncHandler = require('express-async-handler');

const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find().sort({ date: -1 });
  res.json(events);
});

const getUpcomingEvents = asyncHandler(async (req, res) => {
  const today = new Date();
  const events = await Event.find({ date: { $gte: today }, isUpcoming: true })
    .sort({ date: 1 })
    .limit(6);
  res.json(events);
});

const getLatestNews = asyncHandler(async (req, res) => {
  const news = await Event.find().sort({ createdAt: -1 }).limit(5);
  res.json(news);
});

const createEvent = asyncHandler(async (req, res) => {
  const event = await Event.create({
    ...req.body,
    imageUrl: req.file?.path,
    date: new Date(req.body.date),
  });
  res.status(201).json(event);
});

const updateEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) {
    Object.assign(event, req.body);
    if (req.file) event.imageUrl = req.file.path;
    if (req.body.date) event.date = new Date(req.body.date);
    await event.save();
    res.json(event);
  } else {
    res.status(404);
    throw new Error('Event not found');
  }
});

const deleteEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) {
    await event.deleteOne();
    res.json({ message: 'Event removed' });
  } else {
    res.status(404);
    throw new Error('Event not found');
  }
});

module.exports = { getEvents, getUpcomingEvents, getLatestNews, createEvent, updateEvent, deleteEvent };