import React from 'react';
// import Index from './first/page';
import About from './about/page';
import Project from './project/page';
import Skills from './skills/page';
import Contact from './contact/page';
import Experience from './experience/page';

const HomePage: React.FC = () => {
  return (
    <div>
      <div className='border-b border-gray-100'>
        <div className="max-w-6xl mx-auto border-l border-r border-gray-100">
          <section className="min-h-54">
            <About />
          </section>
        </div>
      </div>
      <div className='border-b border-gray-100'>
        <div className="max-w-6xl mx-auto border-l border-r border-gray-100">
          <section className="min-h-32">
            <Experience />
          </section>
        </div>
      </div>
      <div className='border-b border-gray-100'>
        <div className="max-w-6xl mx-auto border-l border-r border-gray-100">
          <section className="min-h-96">
            <Project />
          </section>
        </div>
      </div>
      <div className='border-b border-gray-100'>
        <div className="max-w-6xl mx-auto border-l border-r border-gray-100">
          <section className="min-h-96">
            <Skills />
          </section>
        </div>
      </div>
      <div className=''>
        <div className="max-w-5xl mx-auto border-l border-r border-gray-100">
          <section className="min-h-32">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
