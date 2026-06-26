import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import DarkModeToggle from './components/Layout/DarkModeToggle';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import OurPridePage from './pages/OurPridePage';
import AlumniGalleryPage from './pages/AlumniGalleryPage';
import TeachersPage from './pages/TeachersPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { useAuth } from './context/AuthContext';

function App() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/pride" element={<OurPridePage />} />
        <Route path="/gallery" element={<AlumniGalleryPage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin/*" element={user ? <AdminDashboard /> : <AdminLogin />} />
      </Routes>
      <Footer />
      <DarkModeToggle />
    </>
  );
}

export default App;