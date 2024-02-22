"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Links from "./Menu";
import MobileNav from "./MobileNav";
import Image from "next/image";

const links1 = [
  {
    title: "Insurance",
    link: "/insurance",
  },
  {
    title: "OEM & Aftermarket",
    link: "/aftermarket",
  },
  {
    title: "Fleet",
    link: "/fleet",
  },
];
const links2 = [
  {
    title: " Usage Based Insurance",
    link: "/usage-based",
  },
  {
    title: "   Fleet Telemetric Solution",
    link: "/",
  },
  {
    title: "Company",
    link: "/",
  },
];
const links3 = [
  {
    title: "About Us",
    link: "/",
  },
  {
    title: "Vision",
    link: "/",
  },
  {
    title: "Contact us",
    link: "/",
  },
  {
    title: "Company",
    link: "/",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        // Disable scrolling when the menu is open
        document.body.style.overflow = "hidden";
      } else {
        // Enable scrolling when the menu is closed
        document.body.style.overflow = "auto";
      }
    };

    // Add event listener to handle scroll behavior
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const handleMenuToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen); // Toggle isOpen state
  };
  return (
    <div className="fixed overflow-hidden sm:h-[60px] px-0 z-20 w-full bg-white box-shadow text-white sm:flex items-center justify-between sm:px-4">
      <div className="hidden sm:flex items-center justify-between w-full">
        <Link
          href="/"
          className="hover:text-main px-4 transition py-1 font-semibold relative"
        >
          <Image
            src="/logo.png"
            alt="Precedent logo"
            width="100"
            height="100"
            className=" rounded-sm"
          ></Image>
        </Link>
        <Links links1={links1} links2={links2} links3={links3} />
      </div>
      <div className="sm:hidden">
        <div className="flex items-center px-4 sm:px-0 justify-between box-shadow">
          Navbar
          <button onClick={handleMenuToggle} className="py-3 sm:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        <MobileNav
          links1={links1}
          links2={links2}
          links3={links3}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleMenuToggle={handleMenuToggle}
        />
      </div>
    </div>
  );
};

export default Navbar;
