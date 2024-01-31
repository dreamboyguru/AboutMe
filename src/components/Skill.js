import React from 'react';

function Skill() {
  return (
    <section id='skills'>
      <div className='h-auto'>
        <div className='px-5 md:px-10 lg:px-20'>
          <div>
            <h1 className='text-3xl font-bold bg-white my-10 '>TECH SKILLS</h1>
          </div>
          <div className='flex flex-row max-md:flex-wrap justify-between pb-5'>
            <div className='w-full md:w-1/3 pt-5 text-2xl rounded-md md:mx-2 lg:mx-2 max-md:mb-10 bg-blue-100 shadow-md'>
              <div className='font-bold'>Language</div>
              <div className='flex flex-wrap p-5 md:p-5 text-lg '>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 min-w-16 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">HTML</span>
                </div>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 min-w-16 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">CSS</span>
                </div>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 min-w-16 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">JavaScript</span>
                </div>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 min-w-16 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">php</span>
                </div>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 min-w-16 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">c</span>
                </div>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 min-w-16 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">Node.Js</span>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/3 pt-5 text-2xl rounded-md md:mx-2 lg:mx-2 max-md:mb-10 bg-blue-100 shadow-md'>
              <div className='font-bold'>Libraries & Frameworks</div>
              <div className='flex flex-wrap p-5 md:p-5 text-lg'>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">React.JS</span>
                </div>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">Express.JS</span>
                </div>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">Redux.JS</span>
                </div>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">Redux toolkit</span>
                </div>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">React MUI</span>
                </div>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">Tailwind</span>
                </div>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">Bootstrap</span>
                </div>

              </div>
            </div>
            <div className='w-full md:w-1/3 pt-5 text-2xl rounded-md md:mx-2 lg:mx-2 max-md:mb-10 bg-blue-100 shadow-md'>
              <div className='font-bold'>Database</div>
              <div className='flex flex-wrap p-5 md:p-5 text-lg'>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">MongoDB</span>
                </div>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">Mysql</span>
                </div>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">MariaDB</span>
                </div>

              </div>
            </div>
          </div>

          <div className='flex flex-row max-md:flex-wrap justify-between'>
            <div className='w-full md:w-1/3 pt-5 text-2xl rounded-md md:mx-2 lg:mx-2 max-md:mb-10 bg-blue-100 shadow-md'>
              <div className='font-bold'>Tools</div>
              <div className='flex flex-wrap p-5 md:p-5 text-lg'>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">Git & GitHub</span>
                </div>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">Visual Studio</span>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/3 pt-5 text-2xl rounded-md md:mx-2 lg:mx-2 max-md:mb-10 bg-blue-100 shadow-md'>
              <div className='font-bold'>Hosting Platform</div>
              <div className='flex flex-wrap p-5 md:p-5 text-lg'>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">Github</span>
                </div>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">Vercel</span>
                </div>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">Render</span>
                </div>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">Heroku</span>
                </div>

              </div>
            </div>
            <div className='w-full md:w-1/3 pt-5 text-2xl rounded-md md:mx-2 lg:mx-2 bg-blue-100 shadow-md'>
              <div className='font-bold'>Other Skills</div>
              <div className='flex flex-wrap p-5 md:p-5 text-lg'>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">DSA</span>
                </div>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">DBMS</span>
                </div>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">Problem Solving</span>
                </div>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">Maths</span>
                </div>
                <div className='border-2 py-1 px-2 rounded-lg m-1.5 border-blue-600 hover:bg-blue-600 shadow-md'>
                  <span className="text-sm">Operating System</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
