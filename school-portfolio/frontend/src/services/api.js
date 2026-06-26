import axios from 'axios';

const API_URL = '/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

// School APIs
export const getSchoolInfo = () => api.get('/school');
export const updateSchoolInfo = (data) => api.put('/school', data);
export const getStats = () => api.get('/school/stats');

// Pride APIs
export const getPrideStudents = (params) => api.get('/pride', { params });
export const getPrideYears = () => api.get('/pride/years');
export const createPrideStudent = (data) => api.post('/pride', data);
export const updatePrideStudent = (id, data) => api.put(`/pride/${id}`, data);
export const deletePrideStudent = (id) => api.delete(`/pride/${id}`);

// Teacher APIs
export const getTeachers = (params) => api.get('/teachers', { params });
export const createTeacher = (data) => api.post('/teachers', data);
export const updateTeacher = (id, data) => api.put(`/teachers/${id}`, data);
export const deleteTeacher = (id) => api.delete(`/teachers/${id}`);

// Gallery APIs
export const getGallery = (params) => api.get('/gallery', { params });
export const getGalleryCategories = () => api.get('/gallery/categories');
export const createGalleryItem = (data) => api.post('/gallery', data);
export const bulkUploadGallery = (data) => api.post('/gallery/bulk', data);
export const deleteGalleryItem = (id) => api.delete(`/gallery/${id}`);

// Event APIs
export const getEvents = () => api.get('/events');
export const getUpcomingEvents = () => api.get('/events/upcoming');
export const getLatestNews = () => api.get('/events/news');
export const createEvent = (data) => api.post('/events', data);
export const updateEvent = (id, data) => api.put(`/events/${id}`, data);
export const deleteEvent = (id) => api.delete(`/events/${id}`);

// Contact APIs
export const submitContact = (data) => api.post('/contact', data);
export const getMessages = () => api.get('/contact/messages');
export const markMessageRead = (id) => api.put(`/contact/${id}/read`);
export const deleteMessage = (id) => api.delete(`/contact/${id}`);

// Academics APIs
export const getAcademics = () => api.get('/academics');
export const updateAcademics = (data) => api.put('/academics', data);

// Auth APIs
export const login = (data) => api.post('/auth/login', data);
export const getUsers = () => api.get('/auth/users');
export const registerUser = (data) => api.post('/auth/register', data);
export const deleteUser = (id) => api.delete(`/auth/users/${id}`);