import React from 'react'
import one from "../../images/01.png"
import two from "../../images/02.png"
import three from "../../images/03.png";
import four from "../../images/04.png"

const Steps = () => {
  return (
<div className="bg-slate-200 py-16 h-96 grid grid-cols-4 px-20">
  <div className="border-[2px] border-blue-800 rounded-lg h-56 w-72 grid justify-center px-1 py-5">
    <div className="flex flex-col items-center space-y-8">
      <img src={one} alt="" className=" object-contain"  />
      <p className="text-[#00159B] text-xl font-[500] text-center">Paste your AI Generated content into the box.</p>
    </div>
  </div>

  <div className="border border-blue-800 rounded-lg h-56 w-72 grid justify-center px-1 py-5">
    <div className="flex flex-col items-center space-y-8">
      <img src={two} alt="" className="object-contain"  />
      <p className="text-[#00159B] text-xl font-[500] text-center">Paste your AI Generated content into the box.</p>
    </div>
  </div><div className="border border-blue-800 rounded-lg h-56 w-72 grid justify-center px-1 py-5">
    <div className="flex flex-col items-center space-y-8">
      <img src={three} alt="" className="object-contain"  />
      <p className="text-[#00159B] text-xl font-[500] text-center">Paste your AI Generated content into the box.</p>
    </div>
  </div>
  <div className="border border-blue-800 rounded-lg h-56 w-72 grid justify-center px-1 py-5 ">
    <div className="flex flex-col items-center space-y-8">
      <img src={four} alt="" className="object-contain"  />
      <p className="text-[#00159B] text-xl font-[500] text-center">Paste your AI Generated content into the box.</p>
    </div>
  </div>
</div>



  )
}

export default Steps
