import React from 'react';
import Image from "next/image";

const AboutPage: React.FC = () => {
  const basePath = process.env.NODE_ENV === 'production' ? '/me' : '';

  return (
    <div className='px-6 pt-6 pb-10'>
      <h1 className="flex items-start justify-start text-2xl font-semibold text-black">#Me</h1>
      <div className="flex flex-col gap-6 md:gap-10">
        <div className="flex justify-center items-end">
          <Image
            src={`${basePath}/images/mugshot.png`}
            height={260}
            width={260}
            alt="Who is this guy? I heard he is a good Software Engineer ^_^"
            className="w-120 h-120 mt-6"
            style={{
              maskImage: "linear-gradient(to bottom, black 70%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent)",
            }}
          />
        </div>

        <div className="flex flex-col justify-center items-center text-black text-center lg:w-3/4 lg:mx-auto">
          <h2 className="font-semibold text-4xl lg:text-5xl mb-4 sm:mb-6">
            Software Engineer
          </h2>
          <p className='text-md text-black'>
            Well, hello there! I&apos;m <span className="font-semibold">Haikal</span>, a Software Engineer. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
