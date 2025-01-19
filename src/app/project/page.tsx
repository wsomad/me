import React from 'react';
import Repos from '@/components/repo/repo';

const ProfilePage: React.FC = () => {
  return (
    <div className='px-6 pt-6 pb-10'>
      <h1 className="flex items-start justify-start text-2xl font-semibold text-black">#PreviousProjects</h1>
      <p className="my-2 text-md text-black">
        Let&apos;s take a look on my projects.
      </p>
      <div className='flex'>
        <Repos></Repos>
      </div>
    </div>
  );
};

export default ProfilePage;