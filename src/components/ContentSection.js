import React from 'react';
import group from '../images/Group 52.png';

const ContentSection = () => {
  return (
    <div className="font-[Poppins] flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 lg:px-40 py-12 max-w-full mx-auto">
      
      <div className="max-w-lg mb-8 md:mb-0 text-center md:text-left"> 
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Ready to <span className="text-textBlueColor">Humanize</span> AI Content?
        </h1>
        <p className="mt-4 text-gray-900 text-sm md:text-base">
          Join StealthWriter and transform your AI-generated text into undetectable, human-like, original content today!
        </p>
        <div className='mt-6'>
          <button className='bg-textBlueColor rounded-xl text-white h-12 w-full md:w-48'>
            Sign up now. It's free
          </button>
        </div>
      </div>

      <div className="flex-shrink-0 md:pl-8 lg:pl-24 w-full md:w-auto">
        <img src={group} alt="Content Illustration" className="w-full max-w-sm md:max-w-md mx-auto" />
      </div>
    </div>
  );
};

export default ContentSection;
