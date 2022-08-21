import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="w-full h-full max-w-[1240px] mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            let's build something together
          </p>
          <h1 className="p-4 text-gray-700 font-bold text-4xl sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-[#fb5858]">Josh</span>
          </h1>
          <h1 className="py-2 text-gray-700 font-bold text-4xl sm:text-5xl md:text-6xl">
            A Software Engineer
          </h1>
          <p className="py-3 text-gray-600 max-w-[70%] m-auto">
            Josh is an enthusiastic Software Engineer with a demonstrated
            history of working in the market research industry. <br />
            Also an active participant in the open-source community projects
          </p>

          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
