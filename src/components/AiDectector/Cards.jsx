import React from "react";


const Cards = () => {
  return (
    <div className="max-w-full min-h-screen bg-white font-[Poppins] px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-center py-9 ">
          Discover AIHumanizer's Flexible Pricing and Plans  
        </h1>
        <p className="flex items-center justify-center text-xl font-[600] flex-wrap sm:text-left">
  Monthly
  <label className="relative inline-flex items-center mx-2 cursor-pointer">
    <input
      type="checkbox"
      className="sr-only peer"
      onChange={(e) => console.log(e.target.checked)} 
    />
    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#00159b] rounded-full peer peer-checked:bg-[#00159B] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
  </label>
  Choose the plan to get started
</p>
        <p className="flex items-center justify-center pt-5  font-light">
          * Plus applicable taxes
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid lg:grid-cols-3 gap-8 sm:grid-cols-1 w-full max-w-7xl mx-auto py-14">
       
        {/* Basic Plan */}

        <div className="rounded-lg shadow-md p-10 flex flex-col justify-between border border-dashed border-black min-h-[700px]"
        >
          {/* Header */}
          <div>
          <p className="font-[600] text-[#00159b]">BASIC</p>
            <h2 className="font-[600] text-xl pt-2">50% OFF</h2>

            {/* Pricing Section */}
            <div className="my-5 flex items-end">
              <span className="text-[#00159b] font-bold text-2xl">$</span>
              <h2 className="px-2 text-[#00159B80] text-4xl font-bold">40</h2>
              <h1 className="text-[#00159b] text-6xl font-extrabold">20</h1>
              <span className="text-[#00159b] font-bold text-lg">/month</span>
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-3 py-6 px-3 list-outside list-disc">
  <li>
    Rewrites <span className="font-extrabold">400</span> words per process
  </li>
  <li>
    Ghost Model(Smarter)<br/>
    <span className="font-extrabold">20,000 words/month</span>
  </li>
  <li>
    Ninja Model(Faster)<br/>
    <span className="font-extrabold">Unlimited Words</span>
  </li>
  <li className="text-gray-400">Access to Generator</li>
  <li className="text-gray-400">No Weird or random words</li>
  <li className="text-gray-400">Always available</li>
  <li className="text-gray-400" >Undetectable by all AI Detectors</li>
  <li className="text-gray-400">Built-in AI Detector</li>
</ul>


          {/* Button */}
          <button className="bg-[#00159b] text-white mt-6 py-3 rounded-lg font-bold">
            Choose Basic
          </button>
        </div>

        {/* Standard Plan */}
        <div className="rounded-lg shadow-lg p-10 flex flex-col justify-between relative bg-[#00159B33] min-h-[700px]">
          <div>
            {/* Popular Badge */}
            <div className="flex justify-end absolute top-5 right-3">
              <button className="bg-[#00159b]  text-white font-bold w-32 h-7 shadow-xl rounded-[5px]">
                Popular
              </button>
            </div>

            {/* Header */}
            <p className="font-semibold text-[#00159b] text-lg uppercase">
              STANDARD
            </p>
            <h2 className="font-semibold text-xl pt-2">50% OFF</h2>

            {/* Pricing Section */}
            <div className="my-5 flex items-end">
              <span className="text-[#00159b] font-bold text-2xl">$</span>
              <h2 className="px-2 text-[#00159B80] text-4xl font-bold">35</h2>
              <h1 className="text-[#00159b] text-6xl font-extrabold">75</h1>
              <span className="text-[#00159b] font-bold text-lg">/month</span>
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-3 py-6 px-3 list-outside list-disc">
  <li>
    Rewrites <span className="font-extrabold">400</span> words per process
  </li>
  <li>
    Ghost Model(Smarter)<br/>
    <span className="font-extrabold">20,000 words/month</span>
  </li>
  <li>
    Ninja Model(Faster)<br/>
    <span className="font-extrabold">Unlimited Words</span>
  </li>
  <li>Access to Generator</li>
  <li>No Weird or random words</li>
  <li>Always available</li>
  <li className="text-gray-400">Undetectable by all AI Detectors</li>
  <li className="text-gray-400">Built-in AI Detector</li>
</ul>


          {/* Button */}
          <button className="bg-[#00159b] text-white mt-6 py-3 rounded-lg font-bold">
            Choose Standard
          </button>
        </div>

        {/* Premium Plan */}
        <div className="rounded-lg shadow-md p-10 flex flex-col justify-between border border-dashed border-black min-h-[700px]">
          <div>
            <p className="font-[600] text-[#00159b]">PREMIUM</p>
            <h2 className="font-[600] text-xl pt-2">50% OFF</h2>

            {/* Pricing Section */}
            <div className="my-5 flex items-end">
              <span className="text-[#00159b] font-bold text-2xl">$</span>
              <h2 className="px-2 text-[#00159B80] text-4xl font-bold">100</h2>
              <h1 className="text-[#00159b] text-6xl font-extrabold">50</h1>
              <span className="text-[#00159b] font-bold text-lg">/month</span>
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-3 py-6 px-3 list-outside list-disc">
  <li>
    Rewrites <span className="font-extrabold">400</span> words per process
  </li>
  <li>
    Ghost Model(Smarter)<br/>
    <span className="font-extrabold">20,000 words/month</span>
  </li>
  <li>
    Ninja Model(Faster)<br/>
    <span className="font-extrabold">Unlimited Words</span>
  </li>
  <li>Access to Generator</li>
  <li>No Weird or random words</li>
  <li>Always available</li>
  <li >Undetectable by all AI Detectors</li>
  <li >Built-in AI Detector</li>
</ul>


          {/* Button */}
          <button className="bg-[#00159b] text-white mt-6 py-3 rounded-lg font-bold">
            Choose Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
