/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";

const insuranceCards = [
  {
    title: "Connected Car Solutions",
    desc: "",
    list: [
      "Professional Services",
      "Adaptable to each geography and market segments",
      "Our solutions serve passenger to commercial vehicles",
      "Partner Marketplace to offer data driven services and offers",
    ],
    subTitle: "Connected car solutions built for business.",
  },
  {
    title: "AUT’s Approach",
    desc: "",
    list: [
      "Device Agnostic, Deviceless solutions",
      "Provide the core solutions and a partner eco system that allows for enriching the customer experience and monetization",
      "Brings professional services to deliver customer behavioral insights and analytics",
    ],
    subTitle:
      "Proven connected car solution that is customizable to fit your needs.",
  },
  {
    title: "Our Products",
    desc: "",
    list: [
      "UBI solutions",
      "	Accident notifications",
      "Automotive partner eco system",
      "	Image recognition for vehicle assessment",
      "Consumer safety and security services",
      "Predictive maintenance, scheduling and vehicle service (planned and unplanned booking)",
    ],
    subTitle: "A customizable connected car solution to give you the edge.",
  },
  {
    title: "Easy Deployment",
    desc: "",
    list: [
      "Proven successful track record",
      "	Launch regionally, manage globally",
      "Hosted on Microsoft Azure for superior security and speed",
      "	Solutions for passenger and commercial vehicles",
      "	Device agnostic data collection: mobile app, embedded integrations, aftermarket devices, etc.",
    ],
    subTitle: "A solution built to transform your business.",
  },
];

export const AftermarketComp = ({ title, desc }) => {
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
          leverages extensive experience in the telematics field to bring a full
          end-to-end Enterprise grade connected car solution. Device agnostic
          solution with a range of software/hardware data collection and
          powerful AI driven actionable insights. Delivering a rich end customer
          experience, behavior modification with full behavioral analytics and a
          partner ecosystem for data monetization.
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
          “JAC Motors prides itself on offering our customers innovative
          electric vehicles. Customers expect a connected digital experience and
          Scope Technology was able to deliver a seamless experience. Scope
          shares our passion for innovation and digital transformation.”
        </h3>
        <p className="text-center max-w-[80%] mx-auto my-4">
          <span className="font-semibold ">Marketing Director,</span> Marcelo
          Somdelie, JAC Motors Brazil
        </p>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transitionDelay: 4 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
          className="grid sm:grid-cols-2 gap-4 mt-6 items-center"
        >
          <h2 className="font-semibold text-2xl">
            Customer engagement and actionable insights are keys to a successful
            connected car program.
          </h2>
          <div className="p-4 bg-main rounded">
            <h3 className="text-2xl font-black text-white">
              Connected Car Objectives
            </h3>
            <ul>
              <li className="flex my-2 items-center gap-2 text-gray-400">
                <span className="h-6 w-6 flex items-center p-1 justify-center bg-white rounded-full">
                  <Check className="text-white" />
                </span>
                Holistic approach
              </li>
              <li className="flex my-2 items-center gap-2 text-gray-400">
                <span className="text-white h-6 w-6 flex items-center p-1 justify-center bg-white rounded-full">
                  <Check className="text-white" />
                </span>
                Continual improvement process{" "}
              </li>
              <li className="flex my-2 items-center gap-2 text-gray-400">
                <span className="text-white h-6 w-6 flex items-center p-1 justify-center bg-white rounded-full">
                  <Check className="text-white" />
                </span>
                Build brand loyalty
              </li>
              <li className="flex my-2 items-center gap-2 text-gray-400">
                <span className="text-white h-6 w-6 flex items-center p-1 justify-center bg-white rounded-full">
                  <Check className="text-white" />
                </span>
                Increase in customer lifetime value
              </li>
              <li className="flex my-2 items-center gap-2 text-gray-400">
                <span className="text-white h-6 w-6 flex items-center p-1 justify-center bg-white rounded-full">
                  <Check className="text-white" />
                </span>
                Quantifiable ROI throughout the program lifecycle
              </li>
              <li className="flex my-2 items-center gap-2 text-gray-400">
                <span className="text-white h-6 w-6 flex items-center p-1 justify-center bg-white rounded-full">
                  <Check className="text-white" />
                </span>
                Program adaptability to changing market conditions
              </li>
            </ul>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
