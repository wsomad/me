import React from 'react';
import Image from "next/image";

const AboutPage: React.FC = () => {
  const basePath = process.env.NODE_ENV === 'production' ? '/me' : '';

  return (
    <div className='px-6 pt-6 pb-10'>
      <h1 className="flex items-start justify-start text-3xl font-semibold text-black">#WhoAmI?</h1>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
        <div className="flex-1 flex justify-center items-end">
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

        <div className="flex-[2] flex flex-col justify-center text-lg text-black text-center lg:text-start">
          <h2 className="font-semibold text-3xl mb-4 sm:mb-6">
            Software Engineer
          </h2>
          <p className='text-lg text-black'>
            Hello World! I&apos;m <span className="font-semibold">Haikal</span>, a Software Engineer.
            I&apos;m currently undergoing my internship as a Technology Intern at Deloitte.
            And I believe there is still a long journey for me to go through.
            So, sip a tea and enjoy the life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
