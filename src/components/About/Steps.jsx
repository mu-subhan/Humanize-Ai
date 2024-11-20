import React from "react";
import one from "../../images/01.png";
import two from "../../images/02.png";
import three from "../../images/03.png";
import four from "../../images/04.png";

const Steps = () => {
  return (
    <div className="bg-slate-200 font-[Poppins] py-16 px-4 sm:px-8 lg:px-20">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-6">
        
        {/* Step 1 */}
        <div className="border border-blue-800 rounded-lg flex flex-col justify-center items-center p-6 w-full sm:w-[280px] md:w-[300px] lg:w-[310px] lg:h-60 mx-auto">
          <img src={one} alt="Step 1" className="object-contain mb-4" />
          <p className="text-[#00159B] text-center text-lg sm:text-xl font-medium flex-grow">
            Paste your AI Generated content into the box.
          </p>
        </div>

        {/* Step 2 */}
        <div className="border border-blue-800 rounded-lg flex flex-col justify-center items-center p-6 w-full sm:w-[280px] md:w-[300px] lg:w-[310px] lg:h-60 mx-auto">
          <img src={two} alt="Step 2" className="object-contain mb-4" />
          <p className="text-[#00159B] text-center text-lg sm:text-xl font-medium flex-grow">
            Select your text language and fill in the image captcha code.
          </p>
        </div>

        {/* Step 3 */}
        <div className="border border-blue-800 rounded-lg flex flex-col justify-center items-center p-6 w-full sm:w-[280px] md:w-[300px] lg:w-[310px] lg:h-60 mx-auto">
          <img src={three} alt="Step 3" className="object-contain mb-4" />
          <p className="text-[#00159B] text-center text-lg sm:text-xl font-medium flex-grow">
            Now Click the convert button. That's it.
          </p>
        </div>

        {/* Step 4 */}
        <div className="border border-blue-800 rounded-lg flex flex-col justify-center items-center p-6 w-full sm:w-[280px] md:w-[300px] lg:w-[310px] lg:h-60 mx-auto">
          <img src={four} alt="Step 4" className="object-contain mb-4" />
          <p className="text-[#00159B] text-center text-lg sm:text-xl font-medium flex-grow">
            Our Ai text converter easily converts your Ai text into human form.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Steps;
