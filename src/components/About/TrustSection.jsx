import React from "react";
import user from "../../images/Clip path group.png";
import money from "../../images/Group 471.png";
import security from "../../images/Group 475.png";
import customer from "../../images/Group 473.png";

const TrustSection = () => {
  return (
    <div className="bg-[#00062E] max-w-full w-auto py-20">
      {/* Heading Section */}
      <div className="text-white text-center px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
          Building <span className="text-[#7f90ff]">Trust</span> with Every User
        </h1>
        <h3 className="py-5 text-lg sm:text-xl lg:text-2xl">
          We’re committed to providing a secure, reliable, and effective service
          that you can trust.
        </h3>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-32  gap-y-16 pt-10 px-4 sm:px-16 lg:px-36">
        {/* USER REVIEWS & RATING */}
        <div className="flex flex-col items-center text-center space-y-4">
          <img src={user} alt="" className="h-16 w-16 object-contain" />
          <h2 className="text-[#7f90ff] text-xl sm:text-2xl font-bold">
            USER REVIEWS & RATING
          </h2>
          <p className="text-white text-sm sm:text-base lg:text-lg w-4/6 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* MONEY-BACK GUARANTEE */}
        <div className="flex flex-col items-center text-center space-y-4">
          <img src={money} alt="" className="h-16 w-16 object-contain" />
          <h2 className="text-[#7f90ff] text-xl sm:text-2xl font-bold">
            MONEY-BACK GUARANTEE
          </h2>
          <p className="text-white text-sm sm:text-base lg:text-lg w-4/6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* PRIVACY PROTECTION */}
        <div className="flex flex-col items-center text-center space-y-4">
          <img src={security} alt="" className="h-16 w-16 object-contain" />
          <h2 className="text-[#7f90ff] text-xl sm:text-2xl font-bold">
            PRIVACY PROTECTION
          </h2>
          <p className="text-white text-sm sm:text-base lg:text-lg w-4/6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* CUSTOMER SUPPORT */}
        <div className="flex flex-col items-center text-center space-y-4">
          <img src={customer} alt="" className="h-16 w-16 object-contain" />
          <h2 className="text-[#7f90ff] text-xl sm:text-2xl font-bold">
            CUSTOMER SUPPORT
          </h2>
          <p className="text-white text-sm sm:text-base lg:text-lg w-4/6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
