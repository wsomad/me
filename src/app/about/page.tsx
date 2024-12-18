import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className='px-6 py-10 font-courier'>
      <h1 className="flex items-start justify-start text-3xl font-bold text-black">#WhoAmI?</h1>
      <p className="mt-4 text-lg text-black">
        Hello, I'm <span className='font-bold'>Haikal</span>. I'm a passionate software developer with experience in various technologies.
        This is a brief description of my journey and experiences.
      </p>
    </div>
  );
};

export default AboutPage;