"use client"
import React, { useEffect, useState } from 'react';

const AboutPage: React.FC = () => {
  const titles = ['Software Engineer', 'Web Developer', 'Mobile App Developer'];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setFade(true);
      }, 500); 
    }, 3000);

    return () => clearInterval(interval);
  })
  
  return (
    <div className='px-6 pt-6 pb-4'>
      <div className="flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col justify-center items-center text-black text-center lg:w-3/4 lg:mx-auto">
          <h2 className={`font-semibold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            [{titles[index]}]
          </h2>
          <p className='text-lg text-black mb-6'>
            Hello! I&apos;m <span className="font-semibold">Haikal</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
