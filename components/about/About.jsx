import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className=" bg-[#f8f5f5] gap-4 w-full md:h-screen p-2 px-2 md:px-10 md:flex items-start py-16"
    >
      <div className="max-w-[1220px] m-auto md:grid grid-col-3 gap-8 ">
        <div className="col-span-2">
          <p className="text-xl tracking-widest uppercase text-[#fb5858]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Innovative and technically-astute Software Engineer well-versed in
            analyzing user needs and developing software to precisely meet
            diverse needs. Fluent in HTML/CSS, Python, JavaScript, and Solidity
            with demonstrated mastery in these programming languages and
            proactively keeps up with industry trends. Driven to wear many
            programming hats with expertise in creating everything from new
            applications to contributing to projects.
          </p>
          <p className="py-2 text-gray-600">
            Over <strong>3 years+</strong> analyzing user needs and developing
            software to precisely meet diverse needs.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div></div>
      </div>
      <div className="'w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
        <img
          src="https://images.unsplash.com/photo-1662304729380-3a7ffb361e63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80"
          alt="/"
          className="rounded-xl "
        />
      </div>
    </div>
  );
};

export default About;
