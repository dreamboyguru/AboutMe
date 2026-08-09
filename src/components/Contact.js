import React, { useState } from 'react';
import {
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt,
  FaGithub, FaLinkedin, FaWhatsapp, FaPaperPlane
} from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-blue-400" />,
      label: 'Email',
      value: 'guruhanamannavar676@gmail.com',
      href: 'mailto:guruhanamannavar676@gmail.com'
    },
    {
      icon: <FaPhoneAlt className="text-emerald-400" />,
      label: 'Phone',
      value: '+91 7353249095',
      href: 'tel:+917353249095'
    },
    {
      icon: <FaMapMarkerAlt className="text-red-400" />,
      label: 'Location',
      value: 'Bengaluru, Karnataka',
      href: 'https://maps.google.com/?q=Bengaluru,Karnataka'
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      href: 'https://github.com/guruhanamannavar',
      color: 'hover:text-white hover:bg-slate-800 border-slate-800'
    },
    {
      icon: <FaLinkedin size={20} />,
      href: 'https://www.linkedin.com/in/gurusidda-hanamannavar',
      color: 'hover:text-blue-400 hover:bg-blue-500/10 border-slate-850'
    },
    {
      icon: <FaWhatsapp size={20} />,
      href: 'https://wa.me/917353249095',
      color: 'hover:text-emerald-400 hover:bg-emerald-500/10 border-slate-850'
    }
  ];

  return (
    <section id='contact' className='py-20 bg-[#0b0f19] px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className='max-w-7xl mx-auto z-10 relative'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-white'>
            Contact <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className='h-1 w-20 bg-blue-500 mx-auto mt-3 rounded-full'></div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          {/* Left Column: Contact details */}
          <div className='lg:col-span-5 space-y-6 text-left'>
            <div className='glass-card p-8 rounded-2xl border border-slate-800 space-y-6 h-full flex flex-col justify-between'>
              <div className="space-y-6">
                <h3 className='text-2xl font-bold text-white'>Get in Touch</h3>
                <p className='text-gray-400 leading-relaxed text-sm sm:text-base'>
                  Have a project idea, question, or opportunity? Feel free to reach out using the contact form or through any of my professional channels.
                </p>

                <div className='space-y-4'>
                  {contactInfo.map((info, idx) => (
                    <a
                      key={idx}
                      href={info.href}
                      target='_blank'
                      rel='noreferrer'
                      className='flex items-center space-x-4 p-4 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800/85 hover:border-slate-700/60 transition-all duration-300 group'
                    >
                      <div className='p-3 bg-slate-950 rounded-lg group-hover:scale-105 transition-transform'>
                        {info.icon}
                      </div>
                      <div>
                        <p className='text-xs text-gray-400 font-semibold uppercase tracking-wider'>{info.label}</p>
                        <p className='text-sm sm:text-base text-gray-200 font-medium group-hover:text-blue-400 transition-colors'>{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social icons */}
              <div className='space-y-3 pt-6 border-t border-slate-800/60'>
                <p className='text-xs text-gray-400 font-semibold uppercase tracking-wider'>Connect on Socials</p>
                <div className='flex gap-3'>
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target='_blank'
                      rel='noreferrer'
                      className={`p-3.5 bg-slate-900/80 rounded-xl border text-gray-400 transition-all duration-300 ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className='lg:col-span-7'>
            <div className='glass-card p-8 rounded-2xl border border-slate-800 text-left h-full flex flex-col justify-between'>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <label className='text-sm font-medium text-gray-300'>Your Name</label>
                    <input
                      type='text'
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder='John Doe'
                      className='w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-gray-200 placeholder-gray-600 focus:outline-none focus:border-blue-500/80 transition-colors text-sm'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label className='text-sm font-medium text-gray-300'>Email Address</label>
                    <input
                      type='email'
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder='johndoe@example.com'
                      className='w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-gray-200 placeholder-gray-600 focus:outline-none focus:border-blue-500/80 transition-colors text-sm'
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <label className='text-sm font-medium text-gray-300'>Message</label>
                  <textarea
                    rows='5'
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder='Describe your project details, schedule, or questions...'
                    className='w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-gray-200 placeholder-gray-600 focus:outline-none focus:border-blue-500/80 transition-colors text-sm resize-none'
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer border-0'
                >
                  <FaPaperPlane size={14} />
                  Send Message
                </button>
              </form>

              {submitted && (
                <div className='mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium rounded-xl text-center transition-opacity duration-300'>
                  Message received! I'll get back to you shortly.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
