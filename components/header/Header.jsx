import React, { useState, useEffect } from "react";
import Image from "next/image";
import applogo from "../../public/assets/logo.png";
import Link from "next/link";
// import { useColorMode, useDisclosure } from "@chakra-ui/react";
import Drawer from "@mui/material/Drawer";
import ActiveLink from "../element/ActiveLinks";

// PAGE COMPONENTS
import { SideBar } from "../../components";

// Icons
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

const Header = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const [navBg] = useState("#faf8f8");
  const [shadow, setShadow] = useState(false);
  const [state, setState] = React.useState({
    left: false,
  });

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSideMenu(!sideMenu);
    setState({ ...state, [anchor]: open });
  };

  let navNames = ["Home", "About", "Skills", "Projects", "Contact", "Resume"];

  return (
    <div
      className={`
        ${
          shadow
            ? "  w-full shadow-xl z-[100] ease-in-out duration-300 bg-[#faf8f8]"
            : " w-full   z-[100] ease-in-out duration-300 bg-[#faf8f8]"
        }

        py-3 h-18 fixed`}
    >
      <div className="flex justify-between items-center w-full h-full pr-2 pl-5 2xl:px-16 ">
        <Link href="/" className="relative w-12 h-12 cursor-pointer ">
          <Image
            src={applogo}
            alt="App Logo"
            fill
            className="object-cover w-full h-full  "
          />
        </Link>

        <div className="">
          {/* NAVIGATION LINKS */}
          <ul
            // style={{ color: `${linkColor}` }}
            className="hidden md:flex items-center"
          >
            {navNames.map((item, index) => (
              <li
                key={index}
                className="ml-10 text-sm uppercase hover:border-b hover:border-b-[#fb5858] transition ease-in duration-200 hover:text-[#fb5858]"
              >
                <ActiveLink
                  href={
                    item.toLowerCase() === "resume"
                      ? "/assets/resume/JoshuaInyang_Resume-2024.pdf"
                      : `/#${
                          item.toLowerCase() === "home"
                            ? ""
                            : item.toLowerCase()
                        }`
                  }
                  item={item}
                >
                  {item}
                </ActiveLink>
              </li>
            ))}

            <li className="text-sm ml-14 mr-7 ">
              {/* DARKMODE TOGGLE*/}
              <div></div>
            </li>
          </ul>
          <div
            className="text-gray-600 md:hidden pr-8 cursor-pointer"
            // ref={btnRef}
            onClick={toggleDrawer("left", true)}
          >
            {sideMenu ? <RiCloseLine size={25} /> : <RiMenuLine size={25} />}
          </div>
        </div>
      </div>

      {/* SIDE DRAWER MENU
  
    */}
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        <SideBar left="left" />
      </Drawer>
    </div>
  );
};

export default Header;
