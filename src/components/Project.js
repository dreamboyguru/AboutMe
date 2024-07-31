import React, { useState } from 'react'
import project from './images/project.png'
import project1 from './images/project1.png'
import project2 from './images/project2.jpg'
import project4 from './images/project4.png'
import project5 from './images/project5.png'
// import { isDisabled } from '@testing-library/user-event/dist/utils'


const projects = [
  {
    title: "Best Water Finder",
    imageSrc: project4, // Replace with your actual image path
    projectDescription: "The Natural Electric Field Underground Water device utilizes natural electric fields to detect underground water. By analyzing differences in electromagnetic field frequency and electrical properties of geological features like mines, cavities, rocks, and groundwater, it identifies anomalies caused by the geoelectric field. This principle helps address geological issues effectively.",
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
    title: "Entertainment Web App",
    imageSrc: project,
    projectDescription: "The app offers a centralized platform for diverse entertainment content, like movies, TV shows, and music. It ensures seamless streaming with personalized Bookmarks, secure authentication, and continuous updates for an enjoyable experience.",
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
      'Axios',
      'Cors',
      'Nodemon',
      'JWT Token',
      'Postman for API documentation',
      'Vercel, Render for deployment',
      'GitHub for code hosting',
    ],
    liveLink: "https://entertainment-ott.vercel.app",
    sourceLink: "#okay",
    demoLink: "https://www.loom.com/share/580aea3131b24974b0bced2acd63b6bf?sid=3cfe38ba-ce48-439c-b290-8286be660e68",
    certificateLink: "#okay"
  },
  {
    title: "Flash Card Generation",
    imageSrc: project1,
    projectDescription: "The flashcard generation project aims to automate the creation of educational flashcards to enhance learning and memorization. The system takes input data or criteria and produces custom flashcards for various subjects.",
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
      'Vercel for deployment',
      'GitHub for code hosting',
    ],
    liveLink: "https://flashcardd.vercel.app",
    sourceLink: "#okay",
    demoLink: "https://www.loom.com/share/07a09b233b034e96beeb35b04332b39d?sid=85e4da3e-6640-4fea-877f-22d6019ba6b8",
    certificateLink: "https://certificates.almabetter.com/en/verify/08216973909030"
  },
  {
    title: "Resume Builder",
    imageSrc: project5,
    projectDescription: "Create a standout resume with our user-friendly builder offering customizable templates, easy formatting, ATS optimization, instant downloads. Build your perfect resume in minutes and advance your career with confidence.",
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
      'jspdf library',
      'Vercel for deployment',
      'GitHub for code hosting',
    ],
    liveLink: "https://resume-rose-seven.vercel.app/",
    sourceLink: "#okay"
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
      'Render for deployment with GitHub for code hosting'
    ],
    certificateLink: 'https://certificates.almabetter.com/en/verify/71935460387591',
    liveLink: 'https://youtube-subscription.onrender.com'
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
    liveLink: 'https://local-service-portal.onrender.com'
  }
  // Add more projects as needed
];


function Project() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleButtonClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <section className='delay-500' id='project'>
      <div className='h-auto mb-5'>
        <div>
          <h1 className='text-3xl font-bold bg-white my-10'>Projects</h1>
        </div>
        <div class='px-4 sm:px-8 md:px-12 lg:px-20 max-md:-ml-6'>
          <div class='flex flex-wrap w-full'>

            {projects && projects.map((item, index) => (
              <div key={index} className='flex-none w-[31%] mx-3 mb-5 max-md:w-full max-lg:w-full bg-blue-100 rounded-md shadow-md'>
                <div className='w-full justify-center items-center'>
                  <h1 className='text-2xl m-4 font-medium'>{item.title}</h1>
                </div>
                <div className='w-full mb-1'>
                  <div className='mx-2 border-2 border-gray-400 rounded'>
                    <div className='h-52'>
                      <img 
                        src={item.imageSrc} 
                        alt={`${item.title}`} 
                        className='w-full h-full' 
                      />
                    </div>
                  </div>
                </div>
                <div className='w-full px-2'>
                  <div className='bg-blue-600 text-white p-3 hover:bg-blue-900 font-mango shadow-md'>
                    <button 
                      type='button' 
                      onClick={()=>handleButtonClick(index)} 
                      className='w-full font-mono' 
                    >
                      Project Details
                    </button>
                  </div>
                  {expandedIndex === index && (
                    <div className="container mx-auto">
                      <div className="bg-white py-2 overflow-auto">
                        <div className="mb-4 text-justify px-5">
                          <span className="font-semibold">Description:&nbsp;</span>
                          <span className="block md:inline">
                            {item.projectDescription}
                          </span>
                        </div>
                        <hr className="my-4" />
                        <div className="mb-4 text-left px-5">
                          <span className="font-semibold text-left">Features:</span>
                          <div className='ml-10'>
                            {item.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </div>                          
                        </div>
                        <hr className="my-4" />
                        <div className="mb-4 text-left px-5">
                          <span className="font-semibold text-left">Tech Used:</span>
                          <div className='ml-10'>
                            {item.techUsed.map((tech, index) => (
                              <li key={index}>{tech}</li>
                            ))}
                          </div>                          
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="container mx-auto px-2 mt-3">
                  <div className="w-full flex flex-wrap justify-between">
                    <a href={item.liveLink}
                      target='_blank'
                      rel='noreferrer'
                      className="py-3 px-4 bg-blue-600 text-white rounded hover:bg-blue-900 font-mono focus:outline-none focus:bg-blue-900 shadow-md mb-3"
                    >
                      SEE LIVE
                    </a>
                    <a href={item.sourceLink}
                      onClick={(e) => e.preventDefault()} // Add your logic for handling the click
                      className="py-3 px-4 bg-blue-600 text-white rounded hover:bg-blue-900 font-mono focus:outline-none focus:bg-blue-900 shadow-md mb-3"
                    >
                      SOURCE CODE
                    </a>
                  </div>
                </div>
              </div>
            ))}
            
          </div>

          
        </div>

      </div>
    </section>
  )
}

export default Project
