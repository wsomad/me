import React from 'react';
import Repos from '@/components/repo/repo';

const ProfilePage: React.FC = () => {
  return (
    <div className='px-6 pt-6 pb-10'>
      <h1 className="flex items-start justify-start text-xl font-semibold text-black">Latest Projects.</h1>
      {/* <div className='flex'> */}
      <div>
        <Repos></Repos>
      </div>
    </div>
  );
};

export default ProfilePage;