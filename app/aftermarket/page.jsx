import { AftermarketComp } from "@/components/aftermarketComp/AftermarketComp";
import React from "react";

export const metadata = {
  title: "OEM & Aftermarket",
  desc: "Don’t just “connect”, ENGAGE to drive a new customer experience.",
};

const { title, desc } = metadata;

const Aftermarket = () => {
  return <AftermarketComp title={title} desc={desc} />;
};

export default Aftermarket;
