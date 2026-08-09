import React, { useState } from 'react'
import project from './images/project.png'
import project1 from './images/project1.png'
import project2 from './images/project2.jpg'
import project4 from './images/project4.png'
import project5 from './images/project5.png'
import { FaExternalLinkAlt, FaInfoCircle, FaTimes } from 'react-icons/fa'

const projects = [
  {
    title: "Best Water Finder",
    imageSrc: project4,
    description: "The Natural Electric Field Underground Water device utilizes natural electric fields to detect underground water. By analyzing differences in electromagnetic field frequency and electrical properties of geological features like mines, cavities, rocks, and groundwater, it identifies anomalies caused by the geoelectric field. This principle helps address geological issues effectively.",
    features: [
      'Advanced Technology',
      'Geophysical Surveys',
      'Real-time Monitoring',
      'Experienced Professionals',
      'Adaptive Approach',
    ],
    techUsed: [
      'PHP',
      'MySQLi',
      'jQuery',
      'AJAX',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    liveLink: "http://bestwaterfinder.com/",
    sourceLink: "#"
  },
  {
    title: "Entertainment OTT Web App",
    imageSrc: project,
    description: "The app offers a centralized platform for diverse entertainment content, like movies, TV shows, and music. It ensures seamless streaming with personalized Bookmarks, secure authentication, and continuous updates for an enjoyable experience.",
    features: [
      'Dynamic Media Catalog',
      'State Management',
      'Personalized Bookmark and etc',
    ],
    techUsed: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redux Toolkit',
      'React Icons',
      'Axios',
      'Formik',
      'Yup',
      'Cors',
      'JWT Token',
      'Postman API Docs',
    ],
    liveLink: "https://entertainment-ott.vercel.app",
    sourceLink: "#",
    demoLink: "https://www.loom.com/share/580aea3131b24974b0bced2acd63b6bf?sid=3cfe38ba-ce48-439c-b290-8286be660e68"
  },
  {
    title: "Flash Card Generator",
    imageSrc: project1,
    description: "The flashcard generation project aims to automate the creation of educational flashcards to enhance learning and memorization. The system takes input data or criteria and produces custom flashcards for various subjects.",
    features: [
      'Adaptable to Various Subjects',
      'Customized Flashcard Creation',
      'Enhanced Learning and Memory',
    ],
    techUsed: [
      'React',
      'React-Redux',
      'React-router-dom',
      'React-icons',
      'TailwindCSS',
      'Formik and Yup',
      'Vercel Deployment',
    ],
    liveLink: "https://flashcardd.vercel.app",
    sourceLink: "#",
    demoLink: "https://www.loom.com/share/07a09b233b034e96beeb35b04332b39d?sid=85e4da3e-6640-4fea-877f-22d6019ba6b8",
    certificateLink: "https://certificates.almabetter.com/en/verify/08216973909030"
  },
  {
    title: "Resume Builder",
    imageSrc: project5,
    description: "Create a standout resume with our user-friendly builder offering customizable templates, easy formatting, ATS optimization, instant downloads. Build your perfect resume in minutes and advance your career with confidence.",
    features: [
      'Customizable Templates',
      'Easy Formatting',
      'Instant Downloads',
      'ATS Optimization',
    ],
    techUsed: [
      'React JS',
      'React Material UI',
      'React-Redux',
      'React-router-dom',
      'TailwindCSS',
      'Formik and Yup',
      'jspdf Library',
    ],
    liveLink: "https://resume-rose-seven.vercel.app/",
    sourceLink: "#"
  },
  {
    title: 'YouTube Subscription',
    imageSrc: project2,
    description: 'The YouTube Subscription Capstone Project aimed to optimize subscription management, addressing user dissatisfaction with the existing system\'s inefficiencies. Refining and enhancing existing endpoints to efficiently retrieve subscriber data.',
    features: [
      'Subscription Management',
      'Efficient Data Access',
      'Enhanced Error Logging',
      'User Privacy Protection'
    ],
    techUsed: [
      'Node.JS',
      'Express.JS',
      'MongoDB with Mongoose',
      'Visual Studio Code',
      'Render Deployment'
    ],
    certificateLink: 'https://certificates.almabetter.com/en/verify/71935460387591',
    liveLink: 'https://youtube-subscription.onrender.com',
    sourceLink: "#"
  },
  {
    title: 'Local Service Portal',
    imageSrc: project2,
    description: 'The Local Service Portal aims to centralize information on local service providers, catering to both tourists and residents with a comprehensive directory of services. It ensures a seamless and secure experience by incorporating a thorough vendor registration and verification process.',
    features: [
      'Vendor Directory',
      'Service Verification',
      'Secure Experience',
      'Comprehensive Listings'
    ],
    techUsed: [
      'React JS',
      'Tailwind CSS',
      'Express JS',
      'Node JS',
      'MySQL'
    ],
    certificateLink: 'https://certificates.almabetter.com/en/verify/71935460387591',
    liveLink: 'https://local-service-portal.onrender.com',
    sourceLink: "#"
  }
];

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id='project' className='py-20 bg-[#0b0f19] px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Background shape */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className='max-w-7xl mx-auto z-10 relative'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-white'>
            Featured <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className='h-1 w-20 bg-blue-500 mx-auto mt-3 rounded-full'></div>
        </div>

        {/* Project grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((item, index) => (
            <div 
              key={index} 
              className='glass-card flex flex-col justify-between rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all duration-300 glow-hover overflow-hidden group'
            >
              {/* Image box */}
              <div className='h-48 sm:h-52 overflow-hidden relative border-b border-slate-800 bg-slate-950'>
                <img 
                  src={item.imageSrc} 
                  alt={item.title} 
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100' 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content box */}
              <div className='p-6 flex-grow flex flex-col justify-between space-y-4 text-left'>
                <div className="space-y-2">
                  <h3 className='text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-gray-400 line-clamp-3 text-justify leading-relaxed'>
                    {item.description}
                  </p>
                </div>

                {/* Tech tags preview (first 4 items) */}
                <div className='flex flex-wrap gap-1.5 pt-2'>
                  {item.techUsed.slice(0, 4).map((tech, idx) => (
                    <span 
                      key={idx} 
                      className='text-xs px-2 py-1 bg-slate-900 border border-slate-800/80 text-gray-400 rounded-md font-mono'
                    >
                      {tech}
                    </span>
                  ))}
                  {item.techUsed.length > 4 && (
                    <span className='text-xs px-2 py-1 bg-slate-900 border border-slate-800 text-blue-400 rounded-md font-semibold'>
                      +{item.techUsed.length - 4} more
                    </span>
                  )}
                </div>

                {/* Buttons block */}
                <div className="flex items-center gap-3 pt-4">
                  <button 
                    onClick={() => setSelectedProject(item)}
                    className="flex-1 py-2.5 px-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <FaInfoCircle size={14} />
                    Details
                  </button>
                  <a 
                    href={item.liveLink}
                    target='_blank'
                    rel='noreferrer'
                    className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all text-center"
                  >
                    <FaExternalLinkAlt size={12} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Lightbox Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          {/* Floating easily clickable close button */}
          <button 
            onClick={() => setSelectedProject(null)}
            className="fixed top-6 right-6 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-slate-900/90 hover:bg-slate-800 border border-slate-700/50 rounded-full text-gray-300 hover:text-white transition-all shadow-xl z-50 cursor-pointer"
            aria-label="Close"
          >
            <FaTimes size={20} />
          </button>

          <div 
            className="glass-card w-full max-w-2xl rounded-2xl border border-slate-800 overflow-hidden shadow-2xl relative"
            style={{ animation: 'float 0.3s ease-out' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="h-48 sm:h-64 overflow-hidden relative bg-slate-950">
              <img 
                src={selectedProject.imageSrc} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[50vh] overflow-y-auto text-left">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold tracking-wider text-blue-400 uppercase">Description</h4>
                <p className="text-gray-300 text-justify text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <hr className="border-slate-800" />

              <div className="space-y-3">
                <h4 className="text-sm font-semibold tracking-wider text-blue-400 uppercase">Key Features</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300 list-disc list-inside">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="marker:text-blue-500 pl-1">{feature}</li>
                  ))}
                </ul>
              </div>

              <hr className="border-slate-800" />

              <div className="space-y-3">
                <h4 className="text-sm font-semibold tracking-wider text-blue-400 uppercase">Technologies Utilized</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techUsed.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 bg-slate-900 border border-slate-800 text-gray-300 rounded-lg text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-slate-950/60 border-t border-slate-800 flex flex-wrap gap-4 items-center justify-end">
              {selectedProject.demoLink && (
                <a 
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-semibold transition-all text-center"
                >
                  Watch Loom Video
                </a>
              )}
              {selectedProject.certificateLink && (
                <a 
                  href={selectedProject.certificateLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold transition-all text-center"
                >
                  Verify Certificate
                </a>
              )}
              <a 
                href={selectedProject.liveLink}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all text-center"
              >
                See Live Website
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Project
