import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaLaptopCode, FaRocket, FaProjectDiagram, FaBook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ExperienceTimeline = () => {
  return (
    <section
      id='experience'
      className='text-white py-12 pt-20 px-6 md:px-20 md:py-28'
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className='text-3xl font-bold text-center mb-4'
      >
        Experience Timeline
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className='text-center mb-8'
      >
        My Journey as a Frontend Developer
      </motion.p>

      <VerticalTimeline>
        {/* Personal Projects */}
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#1E293B', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #2563EB' }}
          date='2024 - Present'
          iconStyle={{ background: '#2563EB', color: '#fff' }}
          icon={<FaProjectDiagram />}
        >
          <h3 className='text-lg font-bold mb-2'>Personal Projects</h3>
          <p className='text-gray-300 text-sm'>
          Built projects like <strong> Job Portal and Student Management System</strong>, demonstrating expertise in React, Tailwind CSS, and dynamic UI/UX development.
          </p>
        </VerticalTimelineElement>

        {/* Open Source Contributions
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#9333EA', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #7C3AED' }}
          date='2024'
          iconStyle={{ background: '#7C3AED', color: '#fff' }}
          icon={<FaLaptopCode />}
        >
          <h3 className='text-lg font-bold mb-2'>Open Source Contributions</h3>
          <p className='text-gray-300 text-sm'>
            Contributed to GitHub repositories, collaborating on improving frontend components and optimizing performance.
          </p>
        </VerticalTimelineElement> */}

        {/* Learning & Certifications */}
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          contentStyle={{ background: '#6D28D9', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #8B5CF6' }}
          date='Ongoing'
          iconStyle={{ background: '#8B5CF6', color: '#fff' }}
          icon={<FaBook />}
        >
          <h3 className='text-lg font-bold mb-2'>Certifications & Learning</h3>
          <p className='text-gray-300 text-sm'>
            Completed courses on React, Tailwind CSS, and Spring Boot. Constantly learning and adapting to new technologies.
          </p>
        </VerticalTimelineElement>

        {/* Future Goals */}
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          contentStyle={{ background: '#E11D48', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #EA580C' }}
          date='Future'
          iconStyle={{ background: '#EA580C', color: '#fff' }}
          icon={<FaRocket />}
        >
          <h3 className='text-lg font-bold mb-2'>Why Hire Me?</h3>
          <p className='text-gray-300 text-sm'>
            Passionate about frontend development, always eager to learn and contribute to impactful projects with modern web technologies.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default ExperienceTimeline;
