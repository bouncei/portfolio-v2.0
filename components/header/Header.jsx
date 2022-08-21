import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { useColorMode, useDisclosure } from "@chakra-ui/react";
import Drawer from "@mui/material/Drawer";

// PAGE COMPONENTS
import { SideBar } from "../../components";

// Icons
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

const Header = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const [state, setState] = React.useState({
    left: false,
  });

  // const { colorMode, toggleColorMode } = useColorMode();

  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = React.useRef();
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
    <div className="fixed w-full h-20 shadow-lg z-100">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/logo.png"
          alt="App Logo"
          width="125"
          height="50"
          className="object-contain rounded-full h-full w-full"
        />

        <div className="">
          {/* NAVIGATION LINKS */}
          <ul className="hidden md:flex items-center">
            {navNames.map((item, index) => (
              <li
                key={index}
                className="ml-10 text-sm uppercase hover:border-b"
              >
                <Link
                  href={`/${
                    item.toLowerCase() === "home" ? "/" : item.toLowerCase()
                  }`}
                >
                  {item}
                </Link>
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
    
      <SideBar isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
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
