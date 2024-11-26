import React from "react";
import one from "../../images/01.png";
import two from "../../images/02.png";
import three from "../../images/03.png";
import four from "../../images/04.png";

const Steps = () => {
  return (
    <div className="bg-slate-200 font-[Poppins] py-16 ">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 px-6 gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto py-8">

{/* Step 1 */}
<div className="border border-blue-800 rounded-lg flex flex-col justify-center items-center p-6 w-full max-w-[310px] mx-auto sm:px-4 lg:h-60">
  {/* Step Image */}
  <img
    src={one}
    alt="Step 1"
    className="object-contain w-20 h-20 mb-4"
  />
  {/* Step Text */}
  <p className="text-[#00159B] text-center text-lg sm:text-xl font-medium leading-6">
    Paste your AI Generated content into the box.
  </p>
</div>

{/* Step 2 */}
<div className="border border-blue-800 rounded-lg flex flex-col justify-center items-center p-6 w-full max-w-[310px] mx-auto sm:px-4 lg:h-60">
  {/* Step Image */}
  <img
    src={two}
    alt="Step 2"
    className="object-contain w-20 h-20 mb-4"
  />
  {/* Step Text */}
  <p className="text-[#00159B] text-center text-lg sm:text-xl font-medium leading-6">
  Select your text language and fill in the image captcha code.
  </p>
</div>

{/* Step 3 */}
<div className="border border-blue-800 rounded-lg flex flex-col justify-center items-center p-6 w-full max-w-[310px] mx-auto sm:px-4 lg:h-60">
  {/* Step Image */}
  <img
    src={three}
    alt="Step 3"
    className="object-contain w-20 h-20 mb-4"
  />
  {/* Step Text */}
  <p className="text-[#00159B] text-center text-lg sm:text-xl font-medium leading-6">
  Now Click the humanize button. That's it.
  </p>
</div>

{/* Step 4 */}
<div className="border border-blue-800 rounded-lg flex flex-col justify-center items-center p-6 w-full max-w-[310px] mx-auto sm:px-4 lg:h-60">
  {/* Step Image */}
  <img
    src={four}
    alt="Step 4"
    className="object-contain w-20 h-20 mb-4"
  />
  {/* Step Text */}
  <p className="text-[#00159B] text-center text-lg sm:text-xl font-medium leading-6">
  Our Ai text humanizer easily Humanizes your Ai text into human form.
  </p>
</div>

</div>

    </div>
  );
};

export default Steps;
