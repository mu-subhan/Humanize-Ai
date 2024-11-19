import React from "react";

const Benefits = () => {
  return (
    <div className="bg-[#E7EAF0]  py-12 sm:px-12 lg:px-24 xl:px-20 font-[Poppins]">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12">
        {/* Left Column */}
        <h2 className="text-3xl lg:w-2/3 md:text-4xl font-[700]">
          What Are The Benefits of our<br />
          AI to human text Converter?
        </h2>
        {/* Right Column */}
        <p className="sm:text-lg leading-relaxed text-black lg:w-2/3">
          This tool offers many benefits to its users. First, you won't have to
          spend money since it's a free service. It does not limit your usage,
          so you can use it as often as possible; that's a plus compared to
          other AI generation tools. Additionally, our AI to human converter is
          fast, reliable, and secure for browsing.
        </p>
      </div>

      {/* Second Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        {/* Left Column */}
        <h2 className="text-3xl lg:w-2/3 md:text-4xl font-[700]">
          Now it is your turn to use our<br />
          Humanize AI Text tool
        </h2>
        {/* Right Column */}
        <div className="sm:text-lg leading-relaxed text-black lg:w-2/3">
          <p className="mb-4">
            If you have been struggling with content creation, our AI to human
            converter tool is the help you need.{" "}
           This tool doesn't change the meaning of your content during conversion. It
            also maintains the natural tone of your content and doesn't
            interfere with its sentence structure. Since this tool does so in a
            few, you don't need to waste time converting your content to human
            text.
          </p>
          <p className="mb-4">
            Unlike some content converting tools, you can use our AI to human
            converter tool to convert your content into various languages. They
            include English, German, French, Spanish, and Arabic.
          </p>
          <p>
            Are you a content creator? Embrace our AI to human text converter
            tool since Google only approves human-generated content. This will
            ensure that your content is ranked in the search engines and you
            aren't fined.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
