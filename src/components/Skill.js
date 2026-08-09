import React from 'react';
import { 
  FaReact, FaNodeJs, FaDatabase, FaAws, 
  FaGitAlt, FaBrain, FaServer
} from 'react-icons/fa';

function Skill() {
  const skillCategories = [
    {
      title: 'Frontend & Mobile',
      icon: <FaReact className="text-blue-400" size={24} />,
      skills: ['React.js', 'Redux', 'JavaScript (ES6)', 'HTML5', 'CSS3', 'Redux Toolkit', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Backend & APIs',
      icon: <FaNodeJs className="text-green-500" size={24} />,
      skills: ['Node.js', 'Express.js', 'PHP', 'Python', 'REST APIs', 'API Integration']
    },
    {
      title: 'Databases',
      icon: <FaDatabase className="text-indigo-400" size={24} />,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'MariaDB', 'Database Design', 'Schema Modeling', 'Query Optimization', 'Data Processing']
    },
    {
      title: 'Cloud & DevOps',
      icon: <FaAws className="text-amber-500" size={24} />,
      skills: ['AWS S3', 'Cloud Storage', 'Deployment Support', 'Server Monitoring', 'Backup & Recovery', 'Linux Basics']
    },
    {
      title: 'Tools & Platforms',
      icon: <FaGitAlt className="text-orange-500" size={24} />,
      skills: ['Git & GitHub', 'Bitbucket', 'Apache', 'Postman', 'Visual Studio Code', 'Vercel', 'Render', 'Heroku']
    },
    {
      title: 'AI Development Tools',
      icon: <FaBrain className="text-purple-400" size={24} />,
      skills: ['Claude AI', 'GitHub Copilot', 'Anti-Gravity', 'Replit', 'Code X']
    },
    {
      title: 'Architecture & Engineering',
      icon: <FaServer className="text-emerald-400" size={24} />,
      skills: ['Authentication', 'Role-Based Access Control (RBAC)', 'Modular Architecture', 'Performance Optimization', 'Production Support', 'Root Cause Analysis', 'DSA', 'DBMS', 'Problem Solving']
    }
  ];

  return (
    <section id='skills' className='py-20 bg-[#0b0f19] px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Decorative blurred background blobs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className='max-w-7xl mx-auto z-10 relative'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-white'>
            Technical <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className='h-1 w-20 bg-blue-500 mx-auto mt-3 rounded-full'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className='glass-card p-6 rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all duration-300 glow-hover flex flex-col justify-between'
            >
              <div>
                <div className='flex items-center space-x-3 mb-6'>
                  <div className='p-3 bg-slate-900 rounded-xl border border-slate-800'>
                    {category.icon}
                  </div>
                  <h3 className='text-xl font-bold text-white'>{category.title}</h3>
                </div>

                <div className='flex flex-wrap gap-2'>
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className='px-3 py-1.5 bg-slate-900/60 text-slate-300 hover:text-white border border-slate-800 hover:border-blue-500/30 rounded-lg text-sm transition-all duration-200 cursor-default'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
