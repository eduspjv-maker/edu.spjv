import React, { useEffect, useState } from 'react';
import { getSchoolInfo } from '../../services/api';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [schoolInfo, setSchoolInfo] = useState({});

  useEffect(() => {
    getSchoolInfo().then(({ data }) => setSchoolInfo(data));
  }, []);

  return (
    <section className="py-20 bg-gray-50 dark:bg-darkBg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">About Our School</h2>
          <p className="section-subtitle">Discover our journey of excellence</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-accent dark:text-primary mb-4">Our History</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {schoolInfo.history || 'Founded in 1999, Elite International School has been a beacon of quality education, nurturing young minds and shaping future leaders.'}
            </p>
            
            <h3 className="text-2xl font-bold text-accent dark:text-primary mb-4">Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {schoolInfo.mission || 'To provide holistic education that fosters academic excellence, character development, and lifelong learning.'}
            </p>
            
            <h3 className="text-2xl font-bold text-accent dark:text-primary mb-4">Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {schoolInfo.vision || 'To be a global leader in education, empowering students to become compassionate, innovative, and responsible citizens.'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-darkCard rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-accent dark:text-primary mb-4">Principal's Message</h3>
            <div className="flex items-center gap-4 mb-4">
              <img src="/principal.jpg" alt="Principal" className="w-20 h-20 rounded-full object-cover" />
              <div>
                <h4 className="font-semibold text-lg">Dr. Sarah Johnson</h4>
                <p className="text-gray-500">Principal</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">
              {schoolInfo.principalMessage || '"Education is not just about acquiring knowledge; it is about building character, fostering creativity, and developing critical thinking. At Elite School, we strive to create an environment where every child can discover their unique potential and grow into confident, compassionate individuals ready to face the challenges of tomorrow."'}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;