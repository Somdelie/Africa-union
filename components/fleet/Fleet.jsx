/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";

const insuranceCards = [
  {
    title: "AUT’s Fleet Telematics Solution",
    desc: "",
    list: [
      "End-to-end mature fleet telematics solution",
      "Open architecture that allows for extensive integration with business software",
      "Adheres to regulatory fleet compliance",
      "Device agnostic platform (BYOD)",
      "Powerful insights from the fleet AI and Big Data platforms",
    ],
    subTitle: "Leading fleet management solution to transform your business.",
  },
  {
    title: "Feature Rich",
    desc: "",
    list: [
      "Mobile applications",
      "Operations dashboard & dispatch module",
      "Analytics platform addressing fuel, maintenance, and operations",
    ],
    subTitle:
      "AUT delivers all the actional insights and information you need to manage your fleet more efficiently.",
  },
  {
    title: "Fleet Operator Benefits",
    desc: "",
    list: [
      "Increase vehicle usage efficiency",
      "Reduce fuel and maintenance costs",
      "Optimize drivers and supporting staff operations",
      "Preventive maintenance alerts, fix it before it breaks",
      "Improve driving safety & reduce loss",
    ],
    subTitle:
      "AUT keeps vehicles on the road, reduces down time, and helps the fleet run at a high efficiency level.",
  },
  {
    title: "Business Solutions",
    desc: "",
    list: [
      "Synergies with core activity",
      "	White labeled service to empower fleet operator’s to deliver solutions to their fleet customers",
      "Consulting and professional services for Enterprise fleets to enrich the offering",
      "	Creating new revenue streams",
    ],
    subTitle:
      "AUT's fleet telematics solutions are built for business with 20 years of experience in the industry.",
  },
];

export const FleetComp = ({ title, desc }) => {
  const ref = useRef();
  const variants = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
    hidden: { opacity: 0 },
  };

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div>
      <section className="flex flex-col overflow-hidden insurance pt-[60px] min-h-[80vh] items-center justify-center">
        <h2 className="text-[44px] font-bold text-main">{title}</h2>

        <p className="text-xl text-white">{desc}</p>
      </section>
      <section className="max-w-[80%] mx-auto py-4 mt-4">
        <p className="text-xl font-medium">
          <span className="whitespace-nowrap text-textGreen">
            AFRICAN-UNION-TECHNOLOGY
          </span>{" "}
          is attuned to the industries growing challenges and evolving needs.
          Fleet solutions, for large and small fleets, that leverage the latest
          technology and are geared towards addressing all the business needs
          from operational to regulatory compliance.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          animate={isInView && "animation"}
          variants={variants}
          className="grid sm:grid-cols-2 py-4 gap-4"
        >
          {insuranceCards?.map((card, i) => (
            <motion.div
              key={i}
              variants={variants}
              className="box-shadow1 p-4 rounded"
            >
              <h2 className="text-2xl font-black">{card?.title}</h2>
              <ul>
                {card.list.map((item, index) => (
                  <li key={index} className="flex my-2 items-center gap-2">
                    <span className="text-white h-6 w-6 flex items-center p-1 justify-center bg-main rounded-full">
                      <Check className="text-white" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="px-2 font-bold">{card?.subTitle}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section className="py-6 max-w-[80%] mx-auto">
        <h3 className="max-w-[80%] mx-auto text-xl font-semibold text-center">
          “We turned to Scope because we were looking for a fleet solution to
          improve our bus system and raise our operating standards. Not only is
          our public happy, we’ve also been able to cut costs and made our buses
          a lot safer to drive.”
        </h3>
        <p className="text-center max-w-[80%] mx-auto my-4">
          <span className="font-semibold ">Fleet Operator</span>
        </p>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transitionDelay: 4 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
          className="grid sm:grid-cols-2 gap-4 mt-6 items-center"
        >
          <h2 className="font-semibold text-2xl">
            AUT helps fleet operators transform their vehicles to a smart fleet
            operation
          </h2>
          <div className="p-4 bg-main rounded">
            <h3 className="text-2xl font-black text-white">
              Fleet Telematics Results
            </h3>
            <ul>
              <li className="flex my-2 items-center gap-2 text-gray-400">
                <span className="h-6 w-6 flex items-center p-1 justify-center bg-white rounded-full">
                  <Check className="text-white" />
                </span>
                Optimize fleet operations efficiency
              </li>
              <li className="flex my-2 items-center gap-2 text-gray-400">
                <span className="text-white h-6 w-6 flex items-center p-1 justify-center bg-white rounded-full">
                  <Check className="text-white" />
                </span>
                Improve driving behavior
              </li>
              <li className="flex my-2 items-center gap-2 text-gray-400">
                <span className="text-white h-6 w-6 flex items-center p-1 justify-center bg-white rounded-full">
                  <Check className="text-white" />
                </span>
                Reduce accidents and save fuel
              </li>
              <li className="flex my-2 items-center gap-2 text-gray-400">
                <span className="text-white h-6 w-6 flex items-center p-1 justify-center bg-white rounded-full">
                  <Check className="text-white" />
                </span>
                Live insights to the status and location of your fleet
              </li>
            </ul>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
