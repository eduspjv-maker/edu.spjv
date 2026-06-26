import React, { useEffect, useState } from 'react';
import { getStats } from '../../services/api';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaUsers, FaChalkboardTeacher, FaTrophy, FaGraduationCap } from 'react-icons/fa';

const Statistics = () => {
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalTeachers: 0,
    yearsOfExcellence: 0,
    passedStudents: 0,
  });
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    getStats().then(({ data }) => setStats(data));
  }, []);

  const statItems = [
    { icon: <FaUsers />, value: stats.totalStudents, label: 'Total Students', suffix: '+' },
    { icon: <FaChalkboardTeacher />, value: stats.totalTeachers, label: 'Expert Teachers', suffix: '+' },
    { icon: <FaTrophy />, value: stats.yearsOfExcellence, label: 'Years of Excellence', suffix: '+' },
    { icon: <FaGraduationCap />, value: stats.passedStudents, label: 'Passed Students', suffix: '+' },
  ];

  return (
    <section className="py-16 gradient-bg" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((item, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-5xl mb-4 flex justify-center">{item.icon}</div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {inView && <CountUp end={item.value} duration={2.5} suffix={item.suffix} />}
              </div>
              <div className="text-lg opacity-90">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;