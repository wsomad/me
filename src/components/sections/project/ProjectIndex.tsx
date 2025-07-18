import React from 'react';
import Project from '@/components/sections/project/components/Project';

const ProjectIndex: React.FC = () => {
  return (
    <div className='px-4'>
      <h1 className="flex items-start justify-start text-xl sm:text-2xl font-bold text-black">Projects</h1>
      <Project></Project>
    </div>
  );
};

export default ProjectIndex;