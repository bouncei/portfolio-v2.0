import React from "react";
import applogo from "../../public/assets/logo.png";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";

import { Box, Stack, Paper } from "@mui/material";
import { FiInstagram } from "react-icons/fi";

const SideBar = (anchor) => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  let navNames = ["Home", "About", "Skills", "Projects", "Contacts"];

  return (
    <Box
      sx={{
        width: { xs: 200, sm: 300, md: 400 },
        height: "100vh",
      }}
      className="filter flex-col"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div
        className="w-full h-40 md:h-64 bg-[url('https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')]"
        sx={{
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-2xl align-baseline text-[#faf8f8] flex-col p-2 md:p-4 pt-8 md:pt-12 text-lg font-black space-x-3 space-y-2">
          <div className=" relative h-20 w-20 md:h-32 md:w-32">
            <Image
              src={applogo}
              alt="Picture of the author"
              layout="fill" // required
              objectFit="cover" // change to suit your needs
              className="rounded-full pb-2" // just an example
            />
          </div>

          <div className="text-left text-base md:text-auto">
            <p>Bouncey</p>
            <p className="hidden md:inline">joshuainyang@255@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="px-10">
        <ul className="flex flex-col items-start space-y-5 py-4 ">
          {navNames.map((item, index) => (
            <li
              key={index}
              className="text-base md:text-lg uppercase hover:border-b"
            >
              <Link
                href={`/#${
                  item.toLowerCase() === "home" ? "" : item.toLowerCase()
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between max-w-[180px] md:max-w-[259px] lg:max-w-[320px] m-auto ">
        <a
          href="https://www.linkedin.com/in/joshua-inyang-2753841b7/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <FaLinkedinIn />
          </div>
        </a>
        <a href="https://github.com/bouncei" target="_blank" rel="noreferrer">
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <FaGithub />
          </div>
        </a>
        <a
          href="https://www.instagram.com/bouncey__/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <FiInstagram />
          </div>
        </a>
        <a
          href="https://twitter.com/InyangJoshua8"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 md:p-6  cursor-pointer hover:scale-110 ease-in duration-300">
            <FaTwitter />
          </div>
        </a>
      </div>

      <a
        href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=joshuainyang255@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <div className="text-center border bg-[#fb5858] cursor-pointer hover:bg-[#c55959] text-[#faf8f8] rounded-lg mx-4 mt-10 p-2 font-bold animate-bounce hover:scale-110 ease-in duration-300">
          HIRE ME
        </div>
      </a>
    </Box>
  );
};

export default SideBar;
