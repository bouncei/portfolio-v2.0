import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Link from "next/link";

const socials = [
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/joshua-inyang-2753841b7/",
  },
  {
    icon: <FiInstagram />,
    link: "https://www.instagram.com/bouncey__/",
  },

  {
    icon: <FaTwitter />,
    link: "https://twitter.com/InyangJoshua8",
  },
];

const Contact = () => {
  return (
    <div id="contact" className="flex justify-center items-center">
      <div className="flex flex-col space-y-2">
        <div className="flex flex-col space-y-1 items-center">
          <p className="text-lg">Come say hello!</p>
          <a
            data-mce-href="mailto:joshuainyang255@gmail.com"
            href="mailto:joshuainyang255@gmail.com"
            target="_blank"
            rel="noopener"
            data-mce-selected="1"
            className="cursor-pointer hover:opacity-90 hover:scale-105 duration-200 ease-in"
          >
            <span className="text-[#fb5858] ">joshuainyang255@gmail.com</span>
          </a>
        </div>

        <div className="flex !items-center gap-x-4 md:gap-x-4 justify-center md:justify-between  m-auto py-4">
          {socials.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target={item.link === "/resume" ? "_blank" : "false"}
              rel={item.link === "/resume" ? "noreferrer" : "false"}
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 md:p-4 cursor-pointer hover:scale-105 md:hover:scale-110 ease-in duration-300 text-lg">
                {item.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
