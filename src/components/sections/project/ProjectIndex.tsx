import React from 'react';
import Project from '@/components/sections/project/components/Project';

const ProjectIndex: React.FC = () => {
  return (
    <div className='px-6 xl:pl-0'>
      <h1 className="flex items-start justify-start text-3xl sm:text-4xl font-semibold text-black">Projects</h1>
      <Project></Project>
    </div>
  );
};

export default ProjectIndex;