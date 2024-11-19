import React from "react";

const About = () => {
  return (
    <header className="text-center h-auto font-[Poppins] max-w-full mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-center h-[137px] bg-[#E7EAF0]">
        <h1 className="text-4xl font-bold text-[#00159B] drop-shadow-xl">
          About Us
        </h1>
      </div>

      {/* Title Section */}
      <div className="py-10 px-4 flex justify-center">
  <h3 className="font-bold text-4xl text-[#101828] max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl text-center">
    Humanize AI Text - Best AI To Human Text Converter
  </h3>
</div>



      {/* Description Section */}
      <p className="text-black px-6 sm:px-12 lg:px-24 xl:px-36 text-justify text-base sm:text-lg md:text-xl leading-relaxed">
        AI To Human Text Converter is an online Humanize AI Text tool used to
        convert Artificial Intelligence content to human-like content without
        altering its meaning. With this cutting-edge technology, you can skip AI
        detection tools and enjoy unmatchable benefits in the digital content
        world. Additionally, the technology safeguards your website content,
        boosts its ranking in the search engine, and ensures that Google does not
        fine you since it generates human-like content.
      </p>

    
     
      {/* Subtitle Section */}
      <h3 className="text-3xl font-bold py-20 text-[#00159B]">
        How to Use Our AI to Human Text Converter?
      </h3>
    </header>
  );
};

export default About;
