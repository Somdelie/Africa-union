import Insurance from "@/components/insurance/InsuranceComp";
import React from "react";

export const metadata = {
  title: "Insurance",
  desc: "A flexible and complete end-to-end UBI solution",
};

const { title, desc } = metadata;

const page = () => {
  return <Insurance title={title} desc={desc} />;
};

export default page;
