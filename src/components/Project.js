import React, { useState } from 'react'
import project from './images/project.png'
import project1 from './images/project1.png'
import project2 from './images/project2.jpg'
import project4 from './images/project4.png'
import project5 from './images/project5.png'
import { isDisabled } from '@testing-library/user-event/dist/utils'

function Project() {
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expanded5, setExpanded5] = useState(false);

  const handleButtonClick = (num) => {
    if(num === 1) {
      setExpanded(!expanded);
    } else if(num === 2) {
      setExpanded2(!expanded2);
    } else if( num === 3 ) {
      setExpanded3(!expanded3)
    } else if( num === 4 ) {
      setExpanded4(!expanded4)
    }else if( num === 5 ) {
      setExpanded5(!expanded5)
    }
  };
  return (
    <section className='delay-500' id='project'>
      <div className='h-auto mb-5'>
        <div>
          <h1 className='text-3xl font-bold bg-white my-10'>Projects</h1>
        </div>
        <div class='px-4 sm:px-8 md:px-12 lg:px-20 max-md:-ml-6'>
          <div class='flex flex-wrap w-full'>


          <div class='flex-none w-[31%] mx-3 mb-5 max-md:w-full max-lg:w-full  bg-blue-100 rounded-md shadow-md'>
              <div className='w-full justify-center items-center'>
                <h1 className='text-2xl m-4 font-medium'>Best Water Finder</h1>
              </div>
              <div className='w-full mb-1'>
                <div className='mx-2 border-2 border-gray-400 rounded'>
                  <div className='h-52'>
                    <img 
                      src={project4} 
                      alt='Project Image4' 
                      className='w-full h-full' 
                    />
                  </div>
                </div>
              </div>
              <div className='w-full px-2'>
                <div className='bg-blue-600 text-white p-3 hover:bg-blue-900 font-mango shadow-md'>
                  <button type='submit' onClick={()=>handleButtonClick(4)} className='w-full font-mono' >Project Details</button>
                </div>
                {expanded4 === true && (
                  <>
                    <div className="container mx-auto">
                      <div className="bg-white py-2 overflow-auto">
                        <div className="mb-4 text-justify px-5">
                          <span className="font-semibold">Description:&nbsp;</span>
                          <span className="block md:inline">
                          {/* The device detects underground water using natural electric fields, analyzing electromagnetic frequency differences in geological features to solve geological problems effectively. */}

                          The Natural Electric Field Underground Water device utilizes natural electric fields to detect underground water. By analyzing differences in electromagnetic field frequency and electrical properties of geological features like mines, cavities, rocks, and groundwater, it identifies anomalies caused by the geoelectric field. This principle helps address geological issues effectively.
                          </span>
                        </div>
                        <hr className="my-4" />
                        <div className="mb-4 text-left px-5">
                          <span className="font-semibold text-left">Features:</span>
                          <div className='ml-10'>
                            <li> Advanced Technology</li>
                            <li> Geophysical Surveys</li>
                            <li> Real-time Monitoring</li>
                            <li> Experienced Professionals</li>
                            <li> Adaptive Approach</li>
                          </div>                          
                        </div>
                        <hr className="my-4" />
                        <div className="mb-4 text-left px-5">
                          <span className="font-semibold text-left">Tech Used:</span>
                          <div className='ml-10'>
                            <li> PHP </li>
                            <li> MySQLi</li>
                            <li> jQuery</li>
                            <li> AJAX</li>
                            <li> HTML</li>
                            <li> CSS</li>
                            <li> JavaScript</li>
                          </div>                          
                        </div>
                                  
                      </div>
                    </div>
                  </>
                )}
                
              </div>
              <div className="container mx-auto px-2 mt-3">
                <div className="w-full flex flex-wrap justify-between">
                  <a href='http://bestwaterfinder.com/'
                    target='_blank'
                    rel='noreferrer'
                    className="py-3 px-4 bg-blue-600 text-white rounded hover:bg-blue-900 font-mono focus:outline-none focus:bg-blue-900 shadow-md mb-3"
                  >
                    SEE LIVE
                  </a>
                                    
                  <a href='#okay'
                    onClick={isDisabled}
                    className="py-3 px-4 bg-blue-600 text-white rounded hover:bg-blue-900 font-mono focus:outline-none focus:bg-blue-900 shadow-md mb-3"
                  >
                    SOURCE CODE
                  </a>
                </div>
              </div>
            </div>



          <div class='flex-none w-[31%] mx-3 mb-5 max-md:w-full max-lg:w-full max-lg:mb-5 max-md:mb-5 bg-blue-100 rounded-md shadow-md'>
              <div className='w-full justify-center items-center'>
                <h1 className='text-2xl m-4 font-medium'>Entertainment Web App</h1>
              </div>
              
              <div className='w-full mb-1'>
                <div className='mx-2 border-2 border-gray-400 rounded'>
                  <div className='h-52'>
                    <img 
                      src={project} 
                      alt='Project' 
                      className='w-full h-full' 
                    />
                  </div>
                </div>
              </div>

              <div className='w-full px-2'>
                <div className='bg-blue-600 text-white p-3 hover:bg-blue-900 font-mango shadow-md'>
                  <button type='submit' onClick={()=>handleButtonClick(3)} className='w-full font-mono' >Project Details</button>
                </div>
                {expanded3 === true && (
                  <>
                    <div className="container mx-auto">
                      <div className="bg-white py-2 overflow-auto">
                        <div className="mb-4 text-justify px-5">
                          <span className="font-semibold">Description:&nbsp;</span>
                          <span className="block md:inline">
                          The app offers a centralized platform for diverse entertainment content, like movies, TV shows, and music. It ensures seamless streaming with personalized Bookmarks, secure authentication, and continuous updates for an enjoyable experience.
                          </span>
                        </div>
                        <hr className="my-4" />
                        <div className="mb-4 text-left px-5">
                          <span className="font-semibold text-left">Features:</span>
                          <div className='ml-10'>
                            <li> Dynamic Media Catalog </li>
                            <li> State Management </li>
                            <li> Personalized Bookmark and etc</li>
                          </div>                          
                        </div>
                        <hr className="my-4" />
                        <div className="mb-4 text-left px-5">
                          <span className="font-semibold">Tech Used:</span>
                          <div className='ml-10'>
                            <li>React, Node.js, Express.js, MongoDB</li>
                            <li>Redux Toolkit, React Icons, Axios, Formik, and Yup</li>
                            <li>Axios, Cors, Nodemon, JWT Token</li>
                            <li>Postman for API documentation</li>
                            <li>Vercel, Render for deployment with GitHub for code hosting</li>
                          </div> 
                        </div>
                        <hr className="my-5" />
                        <div className="mb-4 text-left px-5">
                          <span className="font-semibold text-left">View the project demo by
                            <a href='https://www.loom.com/share/580aea3131b24974b0bced2acd63b6bf?sid=3cfe38ba-ce48-439c-b290-8286be660e68'
                              target='_blank'
                              rel='noreferrer'
                              className="text-blue-600 hover:text-red-600 ml-1"
                            >
                              clicking here
                            </a> 
                          </span>                          
                        </div>
                        <div className="mb-2 text-left px-5">
                          <span className="font-semibold text-left">View the project certificate by
                            <a href='#okay'
                              onClick={isDisabled}
                              className="text-blue-600 hover:text-red-600 ml-1"
                            >
                               clicking here.
                            </a>
                          </span>                          
                        </div>
                      </div>
                    </div>
                  </>
                )}
                
              </div>
              <div className="container mx-auto px-2 mt-3">
                <div className="w-full flex flex-wrap justify-between">
                  <a href='https://entertainment-ott.vercel.app'
                    target='_blank'
                    rel='noreferrer'
                    className="py-3 px-4 bg-blue-600 text-white rounded hover:bg-blue-900 font-mango focus:outline-none focus:bg-blue-900 shadow-md mb-3"
                  >
                    SEE LIVE
                  </a>
                  
                  <a href='#okay'
                    onClick={isDisabled}
                    className="py-3 px-4 bg-blue-600 text-white rounded hover:bg-blue-900 font-mango focus:outline-none focus:bg-blue-900 shadow-md mb-3"
                  >
                    SOURCE CODE
                  </a>
                </div>
              </div>
            </div>




            <div class='flex-none w-[31%] mx-3 mb-5 max-md:w-full max-lg:w-full max-lg:mb-5 max-md:mb-5 bg-blue-100 rounded-md shadow-md'>
              <div className='w-full justify-center items-center'>
                <h1 className='text-2xl m-4 font-medium'>Flash Card Generation</h1>
              </div>
              <div className='w-full mb-1'>
                <div className='mx-2 border-2 border-gray-400 rounded'>
                  <div className='h-52'>
                    <img 
                      src={project1} 
                      alt='Project 1' 
                      className='w-full h-full' 
                    />
                  </div>
                </div>
              </div>
              <div className='w-full px-2'>
                <div className='bg-blue-600 text-white p-3 hover:bg-blue-900 font-mango shadow-md'>
                  <button type='submit' onClick={()=>handleButtonClick(1)} className='w-full font-mono' >Project Details</button>
                </div>
                {expanded === true && (
                  <>
                    <div className="container mx-auto">
                      <div className="bg-white py-2 overflow-auto">
                        <div className="mb-4 text-justify px-5">
                          <span className="font-semibold">Description:&nbsp;</span>
                          <span className="block md:inline">
                            The flashcard generation project aims to automate the creation of educational flashcards to enhance learning and memorization. The system takes input data or criteria and produces custom flashcards for various subjects
                          </span>
                        </div>
                        <hr className="my-4" />
                        <div className="mb-4 text-left px-5">
                          <span className="font-semibold text-left">Features:</span>
                          <div className='ml-10'>
                            <li> Adaptable to Various Subjects</li>
                            <li> Customized Flashcard Creation</li>
                            <li> Enhanced Learning and Memory</li>
                          </div>                          
                        </div>
                        <hr className="my-4" />
                        <div className="mb-4 text-left px-5">
                          <span className="font-semibold">Tech Used:</span>
                          <div className='ml-10'>
                            <li> React</li>
                            <li> React-Redux</li>
                            <li> React-router-dom</li>
                            <li> React-icons</li>
                            <li> TailwindCSS</li>
                            <li> Formik and Yup</li>
                            <li> Vercel for deployment And GitHub for code hosting.</li>
                          </div> 
                        </div>
                        <hr className="my-5" />
                        <div className="mb-4 text-left px-5">
                          <span className="font-semibold text-left">View the project demo by
                            <a href='https://www.loom.com/share/07a09b233b034e96beeb35b04332b39d?sid=85e4da3e-6640-4fea-877f-22d6019ba6b8'
                              target='_blank'
                              rel='noreferrer'
                              className="text-blue-600 hover:text-red-600 ml-1"
                            >
                              clicking here
                            </a> 
                          </span>                          
                        </div>
                        <div className="mb-2 text-left px-5">
                          <span className="font-semibold text-left">View the project certificate by
                            <a href='https://certificates.almabetter.com/en/verify/08216973909030'
                              target='_blank'
                              rel='noreferrer'
                              className="text-blue-600 hover:text-red-600 ml-1"
                            >
                               clicking here.
                            </a>
                          </span>                          
                        </div>
                      </div>
                    </div>
                  </>
                )}
                
              </div>
              <div className="container mx-auto px-2 mt-3">
                <div className="w-full flex flex-wrap justify-between">
                  <a href='https://flashcardd.vercel.app'
                    target='_blank'
                    rel='noreferrer'
                    className="py-3 px-4 bg-blue-600 text-white rounded hover:bg-blue-900 font-mango focus:outline-none focus:bg-blue-900 shadow-md mb-3"
                  >
                    SEE LIVE
                  </a>
                  
                  <a href='#okay'
                    onClick={isDisabled}
                    className="py-3 px-4 bg-blue-600 text-white rounded hover:bg-blue-900 font-mango focus:outline-none focus:bg-blue-900 shadow-md mb-3"
                  >
                    SOURCE CODE
                  </a>
                </div>
              </div>
            </div>

            <div class='flex-none w-[31%] mx-3 mb-5 max-md:w-full max-lg:w-full max-lg:mb-5 max-md:mb-5 bg-blue-100 rounded-md shadow-md'>
              <div className='w-full justify-center items-center'>
                <h1 className='text-2xl m-4 font-medium'>Flash Card Generation</h1>
              </div>
              <div className='w-full mb-1'>
                <div className='mx-2 border-2 border-gray-400 rounded'>
                  <div className='h-52'>
                    <img 
                      src={project5} 
                      alt='Project 1' 
                      className='w-full h-full' 
                    />
                  </div>
                </div>
              </div>
              <div className='w-full px-2'>
                <div className='bg-blue-600 text-white p-3 hover:bg-blue-900 font-mango shadow-md'>
                  <button type='submit' onClick={()=>handleButtonClick(5)} className='w-full font-mono' >Project Details</button>
                </div>
                {expanded5 === true && (
                  <>
                    <div className="container mx-auto">
                      <div className="bg-white py-2 overflow-auto">
                        <div className="mb-4 text-justify px-5">
                          <span className="font-semibold">Description:&nbsp;</span>
                          <span className="block md:inline">
                          Create a standout resume with our user-friendly builder offering customizable templates, easy formatting, ATS optimization, instant downloads. Build your perfect resume in minutes and advance your career with confidence.
                          </span>
                        </div>
                        <hr className="my-4" />
                        <div className="mb-4 text-left px-5">
                          <span className="font-semibold text-left">Features:</span>
                          <div className='ml-10'>
                            <li> Customizable Templates</li>
                            <li> Easy Formatting</li>
                            <li> Instant Downloads</li>
                            <li> ATS Optimization</li>
                          </div>                          
                        </div>
                        <hr className="my-4" />
                        <div className="mb-4 text-left px-5">
                          <span className="font-semibold">Tech Used:</span>
                          <div className='ml-10'>
                            <li> React JS</li>
                            <li> React Material UI</li>
                            <li> React-Redux</li>
                            <li> React-router-dom</li>
                            <li> TailwindCSS</li>
                            <li> Formik and Yup</li>
                            <li>jspdf library</li>
                            <li> Vercel for deployment And GitHub for code hosting.</li>
                          </div> 
                        </div>

                      </div>
                    </div>
                  </>
                )}
                
              </div>
              <div className="container mx-auto px-2 mt-3">
                <div className="w-full flex flex-wrap justify-between">
                  <a href='https://resume-rose-seven.vercel.app/'
                    target='_blank'
                    rel='noreferrer'
                    className="py-3 px-4 bg-blue-600 text-white rounded hover:bg-blue-900 font-mango focus:outline-none focus:bg-blue-900 shadow-md mb-3"
                  >
                    SEE LIVE
                  </a>
                  
                  <a href='#okay'
                    onClick={isDisabled}
                    className="py-3 px-4 bg-blue-600 text-white rounded hover:bg-blue-900 font-mango focus:outline-none focus:bg-blue-900 shadow-md mb-3"
                  >
                    SOURCE CODE
                  </a>
                </div>
              </div>
            </div>


            <div class='flex-none w-[31%] mx-3 mb-5 max-md:w-full max-lg:w-full  bg-blue-100 rounded-md shadow-md'>
              <div className='w-full justify-center items-center'>
                <h1 className='text-2xl m-4 font-medium'>YouTube Subscription</h1>
              </div>
              <div className='w-full mb-1'>
                <div className='mx-2 border-2 border-gray-400 rounded'>
                  <div className='h-52'>
                    <img 
                      src={project2} 
                      alt='Project 2' 
                      className='w-full h-full' 
                    />
                  </div>
                </div>
              </div>
              <div className='w-full px-2'>
                <div className='bg-blue-600 text-white p-3 hover:bg-blue-900 font-mango shadow-md'>
                  <button type='submit' onClick={()=>handleButtonClick(2)} className='w-full font-mono' >Project Details</button>
                </div>
                {expanded2 === true && (
                  <>
                    <div className="container mx-auto">
                      <div className="bg-white py-2 overflow-auto">
                        <div className="mb-4 text-justify px-5">
                          <span className="font-semibold">Description:&nbsp;</span>
                          <span className="block md:inline">
                          The YouTube Subscription Capstone Project aimed to optimize subscription management, addressing user dissatisfaction with the existing system's inefficiencies. Refining and enhancing existing endpoints to efficiently retrieve subscriber data.
                          </span>
                        </div>
                        <hr className="my-4" />
                        <div className="mb-4 text-left px-5">
                          <span className="font-semibold text-left">Features:</span>
                          <div className='ml-10'>
                            <li> Subscription Management</li>
                            <li> Efficient Data Access</li>
                            <li> Enhanced Error Logging</li>
                            <li>User Privacy Protection</li>
                          </div>                          
                        </div>
                        <hr className="my-4" />
                        <div className="mb-4 text-left px-5">
                          <span className="font-semibold text-left">Tech Used:</span>
                          <div className='ml-10'>
                            <li> Node.JS</li>
                            <li> Express.JS</li>
                            <li> MongoDB with Mongoose</li>
                            <li>Visual Studio Code.</li>
                            <li> Render for deployment with GitHub for code hosting</li>
                          </div>                          
                        </div>
                        <hr className="my-4" />
                        {/* <div className="mb-4 text-left px-5">
                          <span className="font-semibold text-left">View the project demo by
                            <a href
                              target='_blank'
                              rel='noreferrer'
                              className="text-blue-600 ml-1"
                            >
                              clicking here
                            </a> 
                          </span>                          
                        </div> */}
                        <div className="mb-4 text-left px-5">
                          <span className="font-semibold text-left">View the project certificate by
                            <a href='https://certificates.almabetter.com/en/verify/71935460387591'
                              target='_blank'
                              rel='noreferrer'
                              className="text-blue-600 hover:text-red-600 ml-1"
                            >
                               clicking here.
                            </a>
                          </span>                          
                        </div>
                        <hr className="my-6" />
                      </div>
                    </div>
                  </>
                )}
                
              </div>
              <div className="container mx-auto px-2 mt-3">
                <div className="w-full flex flex-wrap justify-between">
                  <a href='https://youtube-subscription.onrender.com'
                    target='_blank'
                    rel='noreferrer'
                    className="py-3 px-4 bg-blue-600 text-white rounded hover:bg-blue-900 font-mono focus:outline-none focus:bg-blue-900 shadow-md mb-3"
                  >
                    SEE LIVE
                  </a>
                                    
                  <a href='#okay'
                    onClick={isDisabled}
                    className="py-3 px-4 bg-blue-600 text-white rounded hover:bg-blue-900 font-mono focus:outline-none focus:bg-blue-900 shadow-md mb-3"
                  >
                    SOURCE CODE
                  </a>
                </div>
              </div>
            </div>

                     

            {/* <div class='flex-none w-[31%] mx-3 mb-5 max-md:w-full max-lg:w-full max-lg:mb-5 max-md:mb-5 bg-blue-100 rounded-md shadow-md'>
              <div className='w-full justify-center items-center'>
                <h1 className='text-2xl m-4 font-medium'>Flash Card Generation</h1>
              </div>
              <div className='w-full mb-1'>
                <div className='mx-2 border-2 border-gray-400 rounded'>
                  <div className='h-72' style={{backgroundImage: `url(${project1})`,backgroundSize: 'cover'}}></div>
                </div>
              </div>
              <div className='w-full px-2'>
                <div className='bg-blue-600 text-white p-3 hover:bg-blue-900 font-mango shadow-md'>
                  <button type='submit' onClick={()=>handleButtonClick(4)} className='w-full font-mono' >Project Details</button>
                </div>
                {expanded4 === true && (
                  <>
                    <div className="container mx-auto">
                      <div className="bg-white py-2 overflow-auto">
                        <div className="mb-4 text-justify px-5">
                          <span className="font-semibold">Description:&nbsp;</span>
                          <span className="block md:inline">
                            The flashcard generation project aims to automate the creation of educational flashcards to enhance learning and memorization. The system takes input data or criteria and produces custom flashcards for various subjects
                          </span>
                        </div>
                        <hr className="my-4" />
                        <div className="mb-4 text-left px-5">
                          <span className="font-semibold text-left">Features:</span>
                          <div className='ml-10'>
                            <li> Adaptable to Various Subjects</li>
                            <li> Customized Flashcard Creation</li>
                            <li> Enhanced Learning and Memory</li>
                          </div>                          
                        </div>
                        <hr className="my-4" />
                        <div className="mb-4 text-left px-5">
                          <span className="font-semibold">Tech Used:</span>
                          <div className='ml-10'>
                            <li> React</li>
                            <li> React-Redux</li>
                            <li> React-router-dom</li>
                            <li> React-icons</li>
                            <li> TailwindCSS</li>
                            <li> Formik and Yup</li>
                            <li> Vercel for deployment And GitHub for code hosting.</li>
                          </div> 
                        </div>
                        <hr className="my-4" />
                        <div className="mb-4 text-left px-5">
                          <span className="font-semibold text-left">View the project demo by
                            <a href='https://www.loom.com/share/07a09b233b034e96beeb35b04332b39d?sid=85e4da3e-6640-4fea-877f-22d6019ba6b8'
                              target='_blank'
                              rel='noreferrer'
                              className="text-blue-600 hover:text-red-600 ml-1"
                            >
                              clicking here
                            </a> 
                          </span>                          
                        </div>
                        <div className="mb-2 text-left px-5">
                          <span className="font-semibold text-left">View the project certificate by
                            <a href='https://certificates.almabetter.com/en/verify/08216973909030'
                              target='_blank'
                              rel='noreferrer'
                              className="text-blue-600 hover:text-red-600 ml-1"
                            >
                               clicking here.
                            </a>
                          </span>                          
                        </div>
                      </div>
                    </div>
                  </>
                )}
                
              </div>
              <div className="container mx-auto px-2 mt-3">
                <div className="w-full flex flex-wrap justify-between">
                  <a href='https://flashcardd.vercel.app'
                    target='_blank'
                    rel='noreferrer'
                    className="py-3 px-4 bg-blue-600 text-white rounded hover:bg-blue-900 font-mango focus:outline-none focus:bg-blue-900 shadow-md mb-3"
                  >
                    SEE LIVE
                  </a>
                  
                  <a href='https://github.com/dreamboyguru/flashcard' 
                    target='_blank'
                    rel='noreferrer'
                    className="py-3 px-4 bg-blue-600 text-white rounded hover:bg-blue-900 font-mango focus:outline-none focus:bg-blue-900 shadow-md mb-3"
                  >
                    SOURCE CODE
                  </a>
                </div>
              </div>
            </div> */}


            
                  
          </div>

          
        </div>

      </div>
    </section>
  )
}

export default Project
