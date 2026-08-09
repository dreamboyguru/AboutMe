import React, { useState } from 'react';
import { FaTimes, FaSearchPlus, FaExternalLinkAlt } from 'react-icons/fa';
import cert1 from './images/cert1.png';
import cert2 from './images/cert2.png';
import cert3 from './images/cert3.png';
import cert4 from './images/cert4.png';
import cert5 from './images/cert5.png';
import cert6 from './images/cert6.png';
import cert7 from './images/cert7.png';
import cert8 from './images/cert8.png';

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    { img: cert1, id: "22630708315375", name: "Certificate 1" },
    { img: cert2, id: "80177073483897", name: "Certificate 2" },
    { img: cert3, id: "54859259079230", name: "Certificate 3" },
    { img: cert4, id: "69359599363224", name: "Certificate 4" },
    { img: cert5, id: "55172798162186", name: "Certificate 5" },
    { img: cert6, id: "37315562102691", name: "Certificate 6" },
    { img: cert7, id: "08216973909030", name: "Certificate 7" },
    { img: cert8, id: "71935460387591", name: "Certificate 8" }
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
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedCert(cert)}
              className='glass-card group overflow-hidden rounded-xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300 shadow-md cursor-pointer relative h-52 sm:h-56 w-full flex items-center justify-center bg-slate-950'
            >
              <img 
                src={cert.img} 
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
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm transition-all"
          onClick={() => setSelectedCert(null)}
        >
          {/* Floating easily clickable close button */}
          <button 
            onClick={() => setSelectedCert(null)}
            className="fixed top-6 right-6 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-slate-900/90 hover:bg-slate-800 border border-slate-700/50 rounded-full text-gray-300 hover:text-white transition-all shadow-xl z-50 cursor-pointer"
            aria-label="Close"
          >
            <FaTimes size={20} />
          </button>

          <div 
            className="relative max-w-4xl w-full max-h-[70vh] overflow-hidden flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedCert.img} 
              alt={selectedCert.name} 
              className="max-w-full max-h-[65vh] object-contain rounded-lg border border-slate-800 shadow-2xl animate-float-quick"
            />
          </div>

          {/* Verification Link Button */}
          <div className="mt-6 z-10" onClick={(e) => e.stopPropagation()}>
            <a 
              href={`https://certificates.almabetter.com/en/verify/${selectedCert.id}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center flex items-center gap-2 cursor-pointer border-0"
            >
              <span>Verify Certificate</span>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;