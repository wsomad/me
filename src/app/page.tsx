import React from 'react';
// import Index from './first/page';
import About from './about/page';
import Project from './project/page';
import Skills from './skills/page';
import Contact from './contact/page';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* <div className='border-b border-gray-300'>
        <div className="max-w-7xl mx-auto border-l border-r border-gray-300">
          <section className="h-96 md:h-80 lg:h-96 flex items-center justify-center text-center">
            <Index />
          </section>
        </div>
      </div> */}
      <div className='border-b border-gray-300'>
        <div className="max-w-7xl mx-auto border-l border-r border-gray-300">
          <section className="min-h-96">
            <About />
          </section>
        </div>
      </div>
      <div className='border-b border-gray-300'>
        <div className="max-w-7xl mx-auto border-l border-r border-gray-300">
          <section className="min-h-96">
            <Project />
          </section>
        </div>
      </div>
      <div className='border-b border-gray-300'>
        <div className="max-w-7xl mx-auto border-l border-r border-gray-300">
          <section className="min-h-96">
            <Skills />
          </section>
        </div>
      </div>
      <div className=''>
        <div className="max-w-7xl mx-auto border-l border-r border-gray-300">
          <section className="min-h-32">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
