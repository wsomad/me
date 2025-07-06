"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";

const AboutPage: React.FC = () => {
  const titles = ['Software Engineer', 'Software Developer', 'Web Developer', 'Mobile App Developer', 'Technology Analyst', 'Human Being'];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setFade(true);
      }, 600); 
    }, 4000);

    return () => clearInterval(interval);
  })
  
  return (
    <div className='h-[75vh] flex flex-col lg:flex-row lg:justify-between px-6 xl:pl-0'>
        <div className='flex flex-col items-center justify-center lg:items-start mt-10'>
          <div className="flex flex-col">
            <h2 className='font-semibold text-3xl md:text-5xl text-black'>
              Hello! I&apos;m <span className="font-semibold text-blue-600">Haikal</span>.
            </h2>
          </div>
          <div className='font-semibold text-3xl md:text-5xl flex flex-row gap-2'>
            A
            <h2 className={`font-semibold text-3xl md:text-5xl mb-4 sm:mb-6 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
              {titles[index]}
            </h2>
          </div>
        </div>
        <div className='flex items-center justify-center pr-0 md:pr-20'>
          <Image
            src={`/images/about.jpg`}
            height={400}
            width={400}
            alt="Company logo"
            className="mt-6 rounded-full border-2 border-blue-600 w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] object-cover"            />
        </div>
    </div>
  );
};

export default AboutPage;
