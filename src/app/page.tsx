import React from 'react';
import Index from './first/page';
import About from './about/page';
import Project from './project/page';
import Experience from './experience/page';

const HomePage: React.FC = () => {
  return (
    <div>
      <div className='border-b border-gray-300'>
        <div className="max-w-7xl mx-auto border-l border-r border-gray-300">
          <section className="h-96 flex items-center justify-between text-center">
            <Index />
          </section>
        </div>
      </div>
      <div className='border-b border-gray-300'>
        <div className="max-w-7xl mx-auto border-l border-r border-gray-300">
          <section className="h-[600px]">
            <About />
          </section>
        </div>
      </div>
      <div className='border-b border-gray-300'>
        <div className="max-w-7xl mx-auto border-l border-r border-gray-300 font-courier">
          <section className="h-screen">
            <Experience />
          </section>
        </div>
      </div>
      <div className='border-b border-gray-300'>
        <div className="max-w-7xl mx-auto border-l border-r border-gray-300 font-courier">
          <section className="h-screen">
            <Project />
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
