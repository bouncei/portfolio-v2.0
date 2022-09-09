import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div>
      <div id="projects" className="w-full  bg-[#f8f5f5] ">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
          <p className="text-xl tracking-widest uppercase text-[#fb5858]">
            Projects
          </p>
          <h2 className="py-4">What I&apos;ve Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="Property Finder"
              // backgroundImg={propertyImg}
              projectUrl="/property"
              tech="React JS"
            />
            <ProjectItem
              title="Crypto App"
              // backgroundImg={cryptoImg}
              projectUrl="/crypto"
              tech="React JS"
            />
            <ProjectItem
              title="Netflix App"
              // backgroundImg={netflixImg}
              projectUrl="/netflix"
              tech="React JS"
            />
            <ProjectItem
              title="Twitch UI"
              // backgroundImg={twitchImg}
              projectUrl="/twitch"
              tech="Next JS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
