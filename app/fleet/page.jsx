import { FleetComp } from "@/components/fleet/Fleet";
import React from "react";

export const metadata = {
  title: "Fleet",
  desc: "Scope delivers actionable insights to fleet managers that improve the bottom line.",
};

const { title, desc } = metadata;

const Fleet = () => {
  return <FleetComp title={title} desc={desc} />;
};

export default Fleet;
