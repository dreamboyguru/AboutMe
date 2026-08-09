import React from 'react';
import aboutme from './images/aboutme.png';


function About() {
  return (
    <section id='about' className='py-20 bg-[#0b0f19] px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Decorative blurred blob */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className='max-w-7xl mx-auto z-10 relative'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-white'>
            About <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className='h-1 w-20 bg-blue-500 mx-auto mt-3 rounded-full'></div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
          {/* Left Column: Image (Hidden on medium/small, displayed nicely on lg) */}
          <div className='lg:col-span-5 flex justify-center max-lg:hidden'>
            <div className='relative w-full max-w-md aspect-square rounded-2xl overflow-hidden glass-card p-2 border border-slate-800 shadow-2xl animate-float'>
              <img
                src={aboutme}
                alt="About Me Illustration"
                className="w-full h-full object-cover rounded-xl opacity-90"
              />
            </div>
          </div>

          {/* Right Column: Bio details */}
          <div className='lg:col-span-7 space-y-6'>
            <div className='glass-card p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6'>
              <h3 className='text-2xl font-bold text-white'>
                Crafting Scalable, Modern Web Applications
              </h3>

              <div className='space-y-4 text-gray-300 leading-relaxed text-justify'>
                <p>
                  I am a results-driven Full Stack Developer based in Bengaluru, India, with over 4 years of professional experience. I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) along with PHP, MySQL, and cloud technologies.
                </p>
                <p>
                  My experience includes building enterprise-level ERP systems, developing secure REST APIs, designing multi-user role-based leave systems, and integrating high-volume payment solutions (Easebuzz, PayU). I'm also deeply passionate about system design, query optimization, and leveraging AI tools to build efficient and robust software systems.
                </p>
                <p>
                  In addition to software engineering, I have experience working as a programming coach, assisting aspiring developers in leveling up their technical skills and learning core computer science principles.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 justify-center sm:justify-start">
                <a
                  href='#contact'
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center"
                >
                  Let's Talk
                </a>
                <a
                  href="/Gurusidda_resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center"
                >
                  My Resume
                </a>
                {/* <a
                  href="https://github.com/guruhanamannavar"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-gray-200 hover:text-white font-semibold rounded-lg shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center"
                >
                  GitHub
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
