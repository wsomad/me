import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className='px-6 py-10'>
      <h1 className="flex items-start justify-start text-3xl font-semibold text-black">#WhoAmI?</h1>
      <div className='flex h-full gap-10 my-10'>
        <div className='flex-1 h-full flex justify-center items-end'>
          <img
            src='./images/mugshot.png'
            height={250}
            width={250}
            alt='Who is this guy? I heard he is a good Software Engineer ^_^'
            style={{
              maskImage: 'linear-gradient(to bottom, black 70%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent)',
            }}
          />
        </div>
        <div className="flex-[2] h-full text-lg text-black">
          <h2 className='font-semibold text-4xl mb-6'>Software Engineer</h2>
          <p>
            I&apos;m <span className='font-semibold'>Haikal</span>, a Software Engineer.
            I&apos;m currently undergoing my internship as Technology Intern at Deloitte. 
            And I believe there is still a long journey for me to go through.
            So, sip a tea and enjoy the life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
