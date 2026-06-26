import React, { useEffect, useState } from 'react';
import { getStats, getPrideStudents, getTeachers, getGallery, getEvents, getMessages } from '../../services/api';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { FaUsers, FaChalkboardTeacher, FaImages, FaCalendarAlt, FaEnvelope } from 'react-icons/fa';

const DashboardHome = () => {
  const [stats, setStats] = useState({});
  const [prideCount, setPrideCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [galleryCount, setGalleryCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);
  const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [statsRes, prideRes, teachersRes, galleryRes, eventsRes, messagesRes] = await Promise.all([
      getStats(),
      getPrideStudents({ limit: 1000 }),
      getTeachers(),
      getGallery(),
      getEvents(),
      getMessages(),
    ]);
    setStats(statsRes.data);
    setPrideCount(prideRes.data.total);
    setTeacherCount(teachersRes.data.length);
    setGalleryCount(galleryRes.data.length);
    setEventCount(eventsRes.data.length);
    setMessageCount(messagesRes.data.length);
  };

  const cards = [
    { title: 'Total Students', value: stats.totalStudents || 0, icon: <FaUsers />, color: 'bg-blue-500' },
    { title: 'Total Teachers', value: teacherCount, icon: <FaChalkboardTeacher />, color: 'bg-green-500' },
    { title: 'Gallery Images', value: galleryCount, icon: <FaImages />, color: 'bg-purple-500' },
    { title: 'Total Events', value: eventCount, icon: <FaCalendarAlt />, color: 'bg-orange-500' },
    { title: 'Contact Messages', value: messageCount, icon: <FaEnvelope />, color: 'bg-red-500' },
  ];

  const visitorData = [
    { month: 'Jan', visitors: 1200 },
    { month: 'Feb', visitors: 1500 },
    { month: 'Mar', visitors: 1800 },
    { month: 'Apr', visitors: 2100 },
    { month: 'May', visitors: 2500 },
    { month: 'Jun', visitors: 2800 },
  ];

  const performanceData = [
    { subject: 'Math', average: 85 },
    { subject: 'Science', average: 82 },
    { subject: 'English', average: 88 },
    { subject: 'Social', average: 79 },
    { subject: 'Computer', average: 92 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {cards.map((card, index) => (
          <div key={index} className="bg-white dark:bg-darkCard rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`${card.color} p-3 rounded-lg text-white`}>{card.icon}</div>
              <span className="text-2xl font-bold">{card.value}</span>
            </div>
            <h3 className="text-gray-600 dark:text-gray-400">{card.title}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white dark:bg-darkCard rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Monthly Visitors</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={visitorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="visitors" stroke="#4DA6FF" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-darkCard rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Student Performance by Subject</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="average" fill="#4DA6FF" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;