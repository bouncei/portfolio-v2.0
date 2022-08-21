import React from "react";
import applogo from "../../assets/logo.png";
import Image from "next/image";
// import {
//   Button,
//   Flex,
//   useBreakpointValue,
//   Stack,
//   Image,
//   Box,
// } from "@chakra-ui/react";

// import {
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
// } from "@chakra-ui/react";

import { Box, Stack, Paper } from "@mui/material";
import Link from "next/link";

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
        width: { sm: 360, md: 550 },
        // backgroundColor: "#faf8f8",
        // color: "white",
        // height: "100%",
      }}
      className="filter flex-col"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div
        className="w-full h-64 bg-[url('https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')]"
        sx={{
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-2xl align-baseline text-[#faf8f8] flex-col p-4 pt-12 text-lg font-black space-x-3 space-y-2">
          <div className=" relative h-32 w-32">
            <Image
              src={applogo}
              alt="Picture of the author"
              layout="fill" // required
              objectFit="cover" // change to suit your needs
              className="rounded-full pb-2" // just an example
            />
          </div>

          <div>
            <p>Bouncey</p>
            <p>joshuainyang@255@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="px-10">
        <ul className="flex flex-col items-start space-y-5 py-7 ">
          {navNames.map((item, index) => (
            <li key={index} className="text-lg uppercase hover:border-b">
              <Link href={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">sdcnskj</div>
    </Box>
  );
};

export default SideBar;
