import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="w-full h-full max-w-[1240px] mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 ">
            LET&#39;S BUILD SOMETHING TOGETHER
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

          <div className="flex items-center justify-between max-w-[450px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/joshua-inyang-2753841b7/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/bouncei"
              // target="_blank"
              // rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a
              href="https://twitter.com/InyangJoshua8"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTwitter />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>

          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
