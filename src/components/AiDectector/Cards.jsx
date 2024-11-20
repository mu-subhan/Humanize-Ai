import React from 'react';
import checkout from "../../images/Group 69.png";

const Cards = () => {
  return (
    <div className="max-w-full min-h-screen bg-white font-[Poppins] px-4 sm:px-6 lg:px-8">
      <div className='flex flex-col justify-center'>
        <h1 className="text-2xl font-bold text-center py-10">
          Discover AIHumanizer's Flexible Pricing and Plans
        </h1>
        <p className='flex items-center justify-center text-xl font-[600] flex-wrap sm:text-left'>
          Monthly <img src={checkout} alt='' className='px-2' /> Choose the plan to get started
        </p>
        <p className='flex items-center justify-center pt-5 font-extralight'>
          * Plus applicable taxes
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1 w-full max-w-7xl mx-auto py-14">
        {/* First card */}
        <div
          className="rounded-lg shadow-md p-10 flex flex-col min-h-[500px] sm:min-h-[700px] border border-dashed border-black"
        >
          {/* Header */}
          <div className="flex flex-col">
            <p className='font-[600] text-[#00159b]'>BASIC</p>
            <h2 className='font-[600] text-xl pt-2'>50% OFF</h2>
          </div>

          {/* Pricing Section */}
          <div className='my-5 flex flex-row items-end'>
            <span className='text-[#00159b] font-bold text-2xl'>$</span>
            <h2 className='px-2 text-indigo-300 text-4xl font-bold'>40</h2>
            <h1 className='text-[#00159b] text-6xl font-extrabold'>20</h1>
            <span className='text-[#00159b] font-bold text-lg'>/month</span>
          </div>

          {/* Features List */}
          <ul className="space-y-5 py-12 px-3 list-inside list-disc">
            <li>Rewrites <span className="font-extrabold">400</span> words per process</li>
            <li>Ghost Model(Smarter) <span className="font-extrabold">20,000 words/month</span></li>
            <li>Ninja Model(Faster) <span className="font-extrabold">Unlimited Words</span></li>
            <li>Access to Generator</li>
            <li>No Weird or random words</li>
            <li>Always available</li>
            <li className="text-gray-400">Undetectable by all AI Detectors</li>
            <li className="text-gray-400">Built-in AI Detector</li>
          </ul>

          <button className="bg-[#00159b] text-white mt-6 py-3 rounded-lg font-bold">
            Choose Basic
          </button>
        </div>

        {/* Second card */}
        <div
          className="rounded-lg shadow-lg p-10 flex flex-col min-h-[500px] sm:min-h-[700px] bg-indigo-100"
        >
          {/* Popular Badge */}
          <div className="flex justify-end mb-4">
            <button className="bg-[#00159b] text-white font-extrabold w-32 h-7 shadow-md">
              Popular
            </button>
          </div>

          {/* Header */}
          <div className="flex flex-col items-start">
            <p className="font-semibold text-[#00159b] text-lg uppercase">STANDARD</p>
            <h2 className="font-semibold text-xl pt-2">50% OFF</h2>
          </div>

          {/* Pricing Section */}
          <div className="my-5 flex flex-row items-end">
            <span className='text-[#00159b] font-bold text-2xl'>$</span>
            <h2 className='px-2 text-indigo-300 text-4xl font-bold'>35</h2>
            <h1 className='text-[#00159b] text-6xl font-extrabold'>75</h1>
            <span className='text-[#00159b] font-bold text-lg'>/month</span>
          </div>

          {/* Features List */}
          <ul className="space-y-5 py-12 px-3 list-inside list-disc">
            <li>Rewrites <span className="font-extrabold">400</span> words per process</li>
            <li>Ghost Model(Smarter) <span className="font-extrabold">20,000 words/month</span></li>
            <li>Ninja Model(Faster) <span className="font-extrabold">Unlimited Words</span></li>
            <li>Access to Generator</li>
            <li>No Weird or random words</li>
            <li>Always available</li>
            <li className="text-gray-400">Undetectable by all AI Detectors</li>
            <li className="text-gray-400">Built-in AI Detector</li>
          </ul>

          <button className="bg-[#00159b] text-white mt-6 py-3 px-6 rounded-lg font-bold hover:bg-[#000c7a] transition duration-300">
            Choose Standard
          </button>
        </div>

        {/* Third card */}
        <div
          className="rounded-lg shadow-md p-8 flex flex-col min-h-[500px] sm:min-h-[700px] border border-dashed border-black"
        >
          {/* Header */}
          <div className="flex flex-col">
            <p className='font-[600] text-[#00159b]'>PREMIUM</p>
            <h2 className='font-[600] text-xl pt-2'>50% OFF</h2>
          </div>

          {/* Pricing Section */}
          <div className='my-5 flex flex-row items-end'>
            <span className='text-[#00159b] font-bold text-2xl'>$</span>
            <h2 className='px-2 text-indigo-300 text-4xl font-bold'>100</h2>
            <h1 className='text-[#00159b] text-6xl font-extrabold'>50</h1>
            <span className='text-[#00159b] font-bold text-lg'>/month</span>
          </div>

          {/* Features List */}
          <ul className="space-y-5 py-12 px-3 list-inside list-disc">
            <li>Rewrites <span className="font-extrabold">400</span> words per process</li>
            <li>Ghost Model(Smarter) <span className="font-extrabold">20,000 words/month</span></li>
            <li>Ninja Model(Faster) <span className="font-extrabold">Unlimited Words</span></li>
            <li>Access to Generator</li>
            <li>No Weird or random words</li>
            <li>Always available</li>
            <li>Undetectable by all AI Detectors</li>
            <li>Built-in AI Detector</li>
          </ul>

          <button className="bg-[#00159b] text-white mt-6 py-3 rounded-lg font-bold">
            Choose Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
