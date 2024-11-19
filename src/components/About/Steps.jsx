import React from 'react';
import one from "../../images/01.png";
import two from "../../images/02.png";
import three from "../../images/03.png";
import four from "../../images/04.png";

const Steps = () => {
  return (
    <div className="bg-slate-200 py-16 px-4 sm:px-8 lg:px-20">
      {/* Grid layout with responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {/* Step 1 */}
        <div className="border-[2px] border-blue-800 rounded-lg h-56 w-72 flex justify-center items-center px-1 py-5">
          <div className="flex flex-col items-center space-y-4">
            <img src={one} alt="Step 1" className=" object-contain" />
            <p className="text-[#00159B] text-xl font-medium text-center">
              Paste your AI Generated content into the box.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="border-[2px] border-blue-800 rounded-lg h-56 w-72 flex justify-center items-center px-1 py-5">
          <div className="flex flex-col items-center space-y-4">
            <img src={two} alt="Step 2" className=" object-contain" />
            <p className="text-[#00159B] text-xl font-medium text-center">
              Paste your AI Generated content into the box.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="border-[2px] border-blue-800 rounded-lg h-56 w-72 flex justify-center items-center px-1 py-5">
          <div className="flex flex-col items-center space-y-4">
            <img src={three} alt="Step 3" className=" object-contain" />
            <p className="text-[#00159B] text-xl font-medium text-center">
              Paste your AI Generated content into the box.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="border-[2px] border-blue-800 rounded-lg h-56 w-72 flex justify-center items-center px-1 py-5">
          <div className="flex flex-col items-center space-y-4">
            <img src={four} alt="Step 4" className=" object-contain" />
            <p className="text-[#00159B] text-xl font-medium text-center">
              Paste your AI Generated content into the box.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
