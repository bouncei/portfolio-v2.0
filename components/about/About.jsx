import React from "react";
import Link from "next/link";
import Image from "next/image";
import profImg from "../../public/assets/prof.png";

const About = () => {
  return (
    <div
      id="about"
      className=" bg-[#f8f5f5]  md:h-screen p-2 px-5 md:px-10 w-full  py-10"
    >
      <div className="md:max-w-[80vw]  mx-auto md:flex-row flex-col gap-y-4 md:gap-y-0 flex items-center md:gap-x-5 2xl:gap-x-8 h-full">
        <div className="w-full m-auto md:grid grid-col-3 gap-8 ">
          <div className="col-span-2">
            <p className="text-xl tracking-widest uppercase text-[#fb5858]">
              About
            </p>
            <h2 className="py-4">Who I Am</h2>
            <p className="py-2 text-gray-600 text-sm md:text-base 2xl:text-lg">
              Innovative and technically-astute Software Engineer well-versed in
              analyzing user needs and developing software to meet precisely
              diverse needs. Fluent in HTML/CSS, Python, TypeScript, and
              Solidity with demonstrated mastery in these programming languages
              and proactively keeps up with industry trends. Driven to wear many
              programming hats with expertise in creating everything from new
              applications to contribute to projects.
            </p>
            <p className="py-2 text-gray-600 text-sm md:text-base 2xl:text-lg">
              Over <strong className="text-[#fb5858]">5 years+</strong>{" "}
              analyzing user needs and developing software to precisely meet
              diverse needs.
            </p>

            <Link href="/#projects">
              <p className="py-2 text-sm md:text-base 2xl:text-lg text-gray-600 underline cursor-pointer">
                Check out some of my latest projects.
              </p>
            </Link>
          </div>
          <div></div>
        </div>
        <div className="'w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img src={profImg.src} alt="/" className="rounded-xl " />
        </div>
      </div>
    </div>
  );
};

export default About;
