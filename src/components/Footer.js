import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='py-8 bg-[#0b0f19] border-t border-slate-900 text-center text-slate-400'>
      <div className='max-w-7xl mx-auto px-4 text-sm sm:text-base'>
        <p>
          Made with ❤️ by <span className='text-gray-300 font-semibold'>Gurusidda Hanamannavar</span>
        </p>
        <p className='mt-2 text-xs text-slate-600'>
          &copy; {currentYear} Gurusidda. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
