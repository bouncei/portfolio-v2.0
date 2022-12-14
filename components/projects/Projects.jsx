import React from "react";
import ProjectItem from "./ProjectItem";
import polygon from "../../public/assets/projects/polygon.png";
import BaseMint from "../../public/assets/projects/BaseMint.png";
import coingecko from "../../public/assets/projects/coingecko.png";
import def from "../../public/logo.png";

const dummy = [
  {
    title: "BaseMint",
    bImg: BaseMint,
    url: "https://baseminty.com/",
    tech: "Next JS",
    path: "basemint",
  },
  {
    title: "Polygon Dapp",
    bImg: polygon,
    url: "https://polygon-d-ise7n2ukk-bouncei.vercel.app/",
    tech: "Next JS",
    path: "polygon",
  },
  {
    title: "Press Play",
    bImg: def,
    url: "#",
    tech: "React JS",
    path: "press_play",
  },
  {
    title: "Coingecko Bot",
    bImg: coingecko,
    url: "https://t.me/CG_fastest_alerts",
    tech: "Flask(Python)",
    path: "coingecko",
  },
];

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
            {dummy.map((item, index) => (
              <ProjectItem
                title={item.title}
                backgroundImg={item.bImg}
                projectUrl={item.url}
                tech={item.tech}
                path={item.path}
              />
            ))}
          </div>

          <a href="https://github.com/bouncei" target="_blank" rel="noreferrer">
            <div class="text-center border bg-[#fb5858] cursor-pointer hover:bg-[#c55959] text-[#faf8f8] rounded-lg mx-4 md:mx-40 mt-10 p-2 font-bold animate-bounce hover:scale-110 ease-in duration-300">
              See More
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
