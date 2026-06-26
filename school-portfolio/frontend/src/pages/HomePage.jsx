import React from 'react';
import HeroSlider from '../components/Home/HeroSlider';
import AboutSection from '../components/Home/AboutSection';
import Statistics from '../components/Home/Statistics';
import AcademicsPreview from '../components/Home/AcademicsPreview';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <main>
      <HeroSlider />
      <Statistics />
      <AboutSection />
      <AcademicsPreview />
    </main>
  );
};

export default HomePage;