import React from "react";
import Image from "next/image";
import Router from "next/router";
import { BsLink45Deg, BsEye } from "react-icons/bs";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl, path }) => {
  return (
    <div>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        {/* <div className="relative h-auto w-auto "> */}
        <Image
          className="rounded-xl group-hover:opacity-10 h-full w-full object-cover ease-in-out duration-500"
          src={backgroundImg}
          alt="/"
          priority
        />
        {/* </div> */}
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex-col justify-center items-center">
          <h3 className="text-base md:text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{tech}</p>
          <div className="flex justify-center items-center space-x-3">
            <div
              className="text-center py-2 rounded-lg bg-[#fb5858] text-white font-bold text-lg cursor-pointer px-4 hover:opacity-70"
              onClick={() => {
                Router.push({
                  pathname: `/project/${path}`,
                });
              }}
            >
              <BsEye size={25} />
            </div>
            <a
              href={projectUrl}
              target="_blank"
              rel="noreferrer"
              className="text-center py-2 rounded-lg bg-[#fb5858] text-white font-bold text-lg cursor-pointer px-4 hover:opacity-70"
            >
              <BsLink45Deg size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
