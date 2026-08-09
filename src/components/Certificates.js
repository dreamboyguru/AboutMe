import React, { useState } from 'react';
import { FaTimes, FaSearchPlus } from 'react-icons/fa';

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    "https://api-lb.appfurther.io/v2/ims/image/22630708315375",
    "https://api-lb.appfurther.io/v2/ims/image/80177073483897",
    "https://api-lb.appfurther.io/v2/ims/image/54859259079230",
    "https://api-lb.appfurther.io/v2/ims/image/69359599363224",
    "https://api-lb.appfurther.io/v2/ims/image/55172798162186",
    "https://api-lb.appfurther.io/v2/ims/image/37315562102691",
    "https://api-lb.appfurther.io/v2/ims/image/08216973909030",
    "https://api-lb.appfurther.io/v2/ims/image/71935460387591"
  ];

  return (
    <section id='certificates' className='py-20 bg-[#0b0f19] px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      <div className="absolute top-10 left-10 w-60 h-60 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className='max-w-7xl mx-auto z-10 relative'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-white'>
            My <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Certificates</span>
          </h2>
          <div className='h-1 w-20 bg-blue-500 mx-auto mt-3 rounded-full'></div>
        </div>

        {/* Responsive grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {certificates.map((certUrl, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedCert(certUrl)}
              className='glass-card group overflow-hidden rounded-xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300 shadow-md cursor-pointer relative h-52 sm:h-56 w-full flex items-center justify-center bg-slate-950'
            >
              <img 
                src={certUrl} 
                alt={`Certificate ${index + 1}`} 
                className='w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500' 
              />
              
              {/* Hover overlay with search icon */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-3 bg-blue-600/90 rounded-full text-white shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <FaSearchPlus size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm transition-all"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[85vh] overflow-hidden flex items-center justify-center">
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 rounded-full text-gray-300 hover:text-white transition-all shadow-md z-10 cursor-pointer"
            >
              <FaTimes size={18} />
            </button>
            <img 
              src={selectedCert} 
              alt="Certificate Lightbox" 
              className="max-w-full max-h-[80vh] object-contain rounded-lg border border-slate-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;