import React, { useState } from 'react'
import project1 from './images/project1.png'
import project2 from './images/project2.png'

function Project() {
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);

  const handleButtonClick = (num) => {
    if(num === 1) {
      setExpanded(!expanded);
    } else if(num === 2) {
      setExpanded2(!expanded2);
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
            <div class='flex-none w-[47%] mx-3 max-md:w-full max-lg:w-full max-lg:mb-5 max-md:mb-5 bg-blue-100 rounded-md shadow-md'>
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
            </div>
            <div class='flex-none w-[47%] mx-3 max-md:w-full max-lg:w-full  bg-blue-100 rounded-md shadow-md'>
              <div className='w-full justify-center items-center'>
                <h1 className='text-2xl m-4 font-medium'>YouTube Subscription</h1>
              </div>
              <div className='w-full mb-1'>
                <div className='border-2 border-gray-400 mx-2 rounded'>
                  <div className='h-72' style={{backgroundImage: `url(${project2})`,backgroundSize: 'cover'}}></div>
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
                                    
                  <a href='https://github.com/dreamboyguru/youtube_subscription'
                    target='_blank'
                    rel='noreferrer'
                    className="py-3 px-4 bg-blue-600 text-white rounded hover:bg-blue-900 font-mono focus:outline-none focus:bg-blue-900 shadow-md mb-3"
                  >
                    SOURCE CODE
                  </a>
                </div>
              </div>
            </div>      
          </div>
        </div>

      </div>
    </section>
  )
}

export default Project
