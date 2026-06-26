import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import DashboardHome from '../components/Admin/DashboardHome';
import PrideManagement from '../components/Admin/PrideManagement';
import TeacherManagement from '../components/Admin/TeacherManagement';
import GalleryManagement from '../components/Admin/GalleryManagement';
import EventManagement from '../components/Admin/EventManagement';
import ContactMessages from '../components/Admin/ContactMessages';
import SchoolInfoEdit from '../components/Admin/SchoolInfoEdit';
import AcademicsEdit from '../components/Admin/AcademicsEdit';
import Settings from '../components/Admin/Settings';
import { 
  FaHome, FaStar, FaChalkboardTeacher, FaImages, FaCalendarAlt, 
  FaEnvelope, FaSchool, FaBook, FaCog, FaSignOutAlt 
} from 'react-icons/fa';

const AdminDashboard = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const menuItems = [
    { name: 'Dashboard', path: '', icon: <FaHome /> },
    { name: 'School Info', path: 'school-info', icon: <FaSchool /> },
    { name: 'Academics', path: 'academics', icon: <FaBook /> },
    { name: 'Our Pride', path: 'pride', icon: <FaStar /> },
    { name: 'Teachers', path: 'teachers', icon: <FaChalkboardTeacher /> },
    { name: 'Gallery', path: 'gallery', icon: <FaImages /> },
    { name: 'Events', path: 'events', icon: <FaCalendarAlt /> },
    { name: 'Messages', path: 'messages', icon: <FaEnvelope /> },
    { name: 'Settings', path: 'settings', icon: <FaCog /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-darkBg pt-16">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-darkCard shadow-lg fixed h-full overflow-y-auto">
        <div className="p-4 border-b dark:border-gray-700">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-10" />
            <div>
              <h3 className="font-bold">Admin Panel</h3>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>
          </div>
        </div>
        
        <nav className="p-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 px-4 py-3 mb-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary transition"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition mt-4"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <Routes>
          <Route path="" element={<DashboardHome />} />
          <Route path="school-info" element={<SchoolInfoEdit />} />
          <Route path="academics" element={<AcademicsEdit />} />
          <Route path="pride" element={<PrideManagement />} />
          <Route path="teachers" element={<TeacherManagement />} />
          <Route path="gallery" element={<GalleryManagement />} />
          <Route path="events" element={<EventManagement />} />
          <Route path="messages" element={<ContactMessages />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;