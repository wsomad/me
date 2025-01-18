import React from 'react';
import Repos from '@/components/repo/repo';

const ProfilePage: React.FC = () => {
  return (
    <div className='px-6 pt-6 pb-10'>
      <h1 className="flex items-start justify-start text-3xl font-semibold text-black">#WhatIHaveDeveloped?</h1>
      <p className="my-4 text-lg text-black">
        Let&apos;s take a look on my projects.
      </p>
      <div className='flex'>
        <Repos></Repos>
      </div>
    </div>
  );
};

export default ProfilePage;