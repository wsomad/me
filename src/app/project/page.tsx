import React from 'react';
import Repos from '@/components/repo/repo';

const ProfilePage: React.FC = () => {
  return (
    <div className='px-6 py-10 font-courier'>
      <h1 className="flex items-start justify-start text-3xl font-bold text-black">#MyProjects?</h1>
      <p className="mt-4 text-lg text-black">
        This is the profile section where you can view my personal information and skills.
      </p>
      <Repos></Repos>
    </div>
  );
};

export default ProfilePage;