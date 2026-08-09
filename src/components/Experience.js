import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'Full Stack Web Developer',
      company: 'Edumerge Solutions',
      period: 'Aug 2024 – Present',
      type: 'work',
      highlights: [
        'Built and maintained React.js-based frontend applications for multiple ERP modules with focus on scalability and performance.',
        'Designed backend services and REST APIs using PHP, Node.js, and MySQL for high-volume ERP data operations.',
        'Developed Student Leave Application module — leave request flow, warden approval workflow, gate pass generation, and role-based dashboards.',
        'Built automated fee receipt design and printable form generation for student fee transactions.',
        'Integrated multiple payment gateways (Easebuzz, PayU) with settlement tracking and multi-account split API coordination.',
        'Worked with AWS S3 for file storage, document uploads, and report management.'
      ]
    },
    {
      id: 2,
      role: 'Junior Software Engineer',
      company: 'Pinmi Software Solutions',
      period: 'Apr 2022 – Aug 2024',
      type: 'work',
      highlights: [
        'Developed frontend and backend features using React, Redux Toolkit, Express.js, and Node.js.',
        'Managed database operations and API integrations using MySQL, MariaDB, and MongoDB.',
        'Delivered high-quality code while meeting project deadlines and ensuring code security.',
        'Built and hosted Best Water Finder — a web application using HTML, CSS, JavaScript, PHP, and MySQL, deployed on GoDaddy.'
      ]
    },
    {
      id: 3,
      role: 'Full Stack Web Development Intern',
      company: 'AlmaBetter',
      period: '275 Days',
      type: 'internship',
      highlights: [
        'Completed intensive training in Full Stack Development, Front-End, Back-End, AWS, and Algorithms.'
      ]
    }
  ];

  return (
    <section id='experience' className='py-20 bg-[#0b0f19] px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Background shape */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className='max-w-5xl mx-auto relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-white'>
            Work <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className='h-1 w-20 bg-blue-500 mx-auto mt-3 rounded-full'></div>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline marker */}
              <span className="absolute -left-4 top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-700 text-blue-400 group-hover:border-blue-500 group-hover:text-white transition-all duration-300 shadow-md">
                {exp.type === 'work' ? <FaBriefcase size={14} /> : <FaGraduationCap size={16} />}
              </span>

              {/* Experience Card */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all duration-300 glow-hover relative">
                {/* Date tag for desktop */}
                <div className="md:absolute md:-left-36 md:top-6 text-gray-400 md:text-right font-medium text-sm md:w-28 max-md:mb-2 block">
                  {exp.period}
                </div>

                <div className="flex flex-wrap justify-between items-baseline mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-blue-400 font-semibold tracking-wide text-sm sm:text-base">
                    {exp.company}
                  </span>
                </div>

                <ul className="space-y-3 text-gray-300 list-disc list-inside text-justify text-sm sm:text-base leading-relaxed">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="marker:text-blue-500 pl-1">
                      <span className="align-middle">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
