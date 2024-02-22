/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import Head from "next/head";
import { useRef } from "react";

const insuranceCards = [
  {
    title: "Insurance Solutions",
    desc: "",
    list: [
      "Most comprehensive end-to-end UBI solution incorporating award winning analytics and actuarial platform",
      "Computer vision platform for automating vehicle inspections saves significant time and money",
      "End-to-end UBI solutions with supporting services",
      "Gamification platform to incentivize good driving behavior with a high adoption rate and low churn",
      "Partner marketplace allows for data monetization, adding additional revenue in a smart convenient way that consumer's see as valuable.",
    ],
    subTitle:
      "Delivering advanced, versatile, and comprehensive insurance solutions",
  },
  {
    title: "Holistic Approach",
    desc: "",
    list: [
      "Scope helps work out the structure and ROI of the program",
      "Scope's experts assist with any resource gaps to launch an effective program",
      "Caters to any type of driver data capture device (hardware device or software)",
      "Collaborate and work with every department within your company to make the program successful",
    ],
    subTitle: "Globally proven solutions",
  },
  {
    title: "UBI Solution",
    desc: "",
    list: [
      "A device agnostic solution",
      "Extensive actuarial analytics platform",
      "Industry acknowledged as providing the most extensive UBI solution",
    ],
    subTitle: "Globally tried and tested for over 10 years",
  },
  {
    title: "Professional Services",
    desc: "",
    list: [
      "Actuarial experts with UBI backgrounds to help create a base model and consult on an on-going basis",
      "Behavioral Scientists to consult on objectives and compile library of client engagements",
      "Local research and refinement",
      "Marketing support for constructing the customer offers",
    ],
    subTitle: "Best of breed with expertise in UBI",
  },
];

const Insurance = ({ title, desc }) => {
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
          offers transformation end-to-end solutions for insurance companies. We
          have been working with insurance companies for over 10 years to
          deliver telematics solutions and services that solve business
          problems, automate processes, reduce customer churn, reduce risk, and
          add revenue through services.
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
          “AUT provides superior end-to-end telematics solutions from the
          hardware to the software to the services. They are strong in managing
          the entire solution…”
        </h3>
        <p className="text-center max-w-[80%] mx-auto my-4">
          <span className="font-semibold ">Head of Telematics,</span> Amaline
          Assurances (a Groupama Company)
        </p>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transitionDelay: 4 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
          className="grid sm:grid-cols-2 gap-4 mt-6 items-center"
        >
          <h2 className="font-semibold text-2xl">
            UBI that is dynamically adapted to emerging and established markets.
          </h2>
          <div className="p-4 bg-main rounded">
            <h3 className="text-2xl font-black text-white">UBI Results</h3>
            <ul>
              <li className="flex my-2 items-center gap-2 text-gray-400">
                <span className="h-6 w-6 flex items-center p-1 justify-center bg-white rounded-full">
                  <Check className="text-white" />
                </span>
                Reduction in customer churn by as much as 20%
              </li>
              <li className="flex my-2 items-center gap-2 text-gray-400">
                <span className="text-white h-6 w-6 flex items-center p-1 justify-center bg-white rounded-full">
                  <Check className="text-white" />
                </span>
                Reduction of 37% for claims from young drivers
              </li>
              <li className="flex my-2 items-center gap-2 text-gray-400">
                <span className="text-white h-6 w-6 flex items-center p-1 justify-center bg-white rounded-full">
                  <Check className="text-white" />
                </span>
                41% increase in customer lifetime value
              </li>
              <li className="flex my-2 items-center gap-2 text-gray-400">
                <span className="text-white h-6 w-6 flex items-center p-1 justify-center bg-white rounded-full">
                  <Check className="text-white" />
                </span>
                Reduction of 20%, on average, of claims cost
              </li>
              <li className="flex my-2 items-center gap-2 text-gray-400">
                <span className="text-white h-6 w-6 flex items-center p-1 justify-center bg-white rounded-full">
                  <Check className="text-white" />
                </span>
                Reduction of 59% in the cost per vehicle for 'own damage' claims
              </li>
            </ul>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Insurance;
