"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const MobileNav = ({
  links1,
  links2,
  links3,
  setIsOpen,
  isOpen,
  handleMenuToggle,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 flex flex-col px-4 gap-2 h-screen border-r-2 bg-white transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ width: "100vw", zIndex: 100 }}
    >
      <div className="w-full flex items-center justify-between">
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
        <button
          onClick={handleMenuToggle}
          className="py-3 sm:hidden w-6 h-6 p-1 mr-3 rounded-full text-white font-semibold flex items-center justify-center bg-main"
        >
          X
        </button>
      </div>
      <Link
        href="/"
        className="hover:text-main text-cyan-600 px-4 py-2 transition font-semibold relative"
      >
        Home
      </Link>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger> Solutions</AccordionTrigger>
          {links1?.map((link, i) => (
            <AccordionContent key={i}>
              <Link href={link?.link}>{link?.title}</Link>
            </AccordionContent>
          ))}
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger> Resources</AccordionTrigger>
          {links2?.map((link, i) => (
            <AccordionContent key={i}>
              <Link href={link?.link}>{link?.title}</Link>
            </AccordionContent>
          ))}
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger> Company</AccordionTrigger>
          {links3?.map((link, i) => (
            <AccordionContent key={i}>
              <Link href={link?.link}>{link?.title}</Link>
            </AccordionContent>
          ))}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default MobileNav;
