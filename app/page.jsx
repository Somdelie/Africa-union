"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { TbTruckDelivery } from "react-icons/tb";
import { GiLightningSpanner } from "react-icons/gi";
import { FaCar } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { Check } from "lucide-react";

const page = () => {
  return (
    <div className="">
      <section className="flex flex-col overflow-hidden hero pt-[60px] min-h-[80vh] items-center justify-center">
        <motion.h1
          initial={{ y: -100, opacity: 0 }} // Initial position above the viewport with opacity 0
          animate={{ y: 0, opacity: 1 }} // Animation to slide in from the top with opacity transition
          transition={{ duration: 2.5, type: "spring", stiffness: 80 }} // Animation duration and spring effect
          className="text-[24px] sm:text-[68px] font-extrabold text-white mb-4"
        >
          Building the <span className="text-main">Next Generation</span> <br />{" "}
          IoT & Telematics Ecosystems
        </motion.h1>
        <motion.span
          initial={{ x: -100, opacity: 0 }} // Initial position above the viewport with opacity 0
          animate={{ x: 0, opacity: 1, transitionDelay: 4 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
          className="text-[20px] px-4 text-gray-200"
        >
          Learn how Scope delivers actionable insights that drive your <br />{" "}
          business
        </motion.span>
        <motion.button
          initial={{ opacity: 0, y: 50 }} // Initial opacity set to 0 and y position shifted down
          animate={{ opacity: 1, y: 0 }} // Animation to make the button appear and move up
          transition={{ duration: 0.5, delay: 0.5 }} // Animation duration and delay
          whileHover={{ scale: 1.1 }} // Scale up the button on hover
          whileTap={{ scale: 0.9 }} // Scale down the button when tapped
          className="bg-cyan-700 rounded-full px-4 py-2 mt-6 hover:bg-cyan-800"
        >
          Read More
        </motion.button>
      </section>

      <section className="max-w-[90%] mx-auto pt-2">
        <h2 className="text-[24] sm:text-[34px] font-bold w-full text-center underline">
          A holistic approach to{" "}
          <span className="text-textGreen">connected car </span> & IoT solutions
        </h2>

        <div className="grid sm:grid-cols-2 mt-6 w-full">
          <div className="">
            <h3>
              Expertise honed from 20 years in the business in 50+ countries.
            </h3>
            <div className="grid mt-4 sm:grid-cols-2">
              <ul className="grid gap-2">
                <li className="flex items-center gap-2 ">
                  <span className="rounded-full items-center flex justify-center h-6 w-6 p-1 bg-cyan-600 text-white">
                    <Check className="text-white" />
                  </span>
                  End-to-end solutions
                </li>
                <li className="flex items-center gap-2 ">
                  <span className="rounded-full items-center flex justify-center h-6 w-6 p-1 bg-cyan-600 text-white">
                    <Check className="text-white" />
                  </span>
                  Ecosystem approach
                </li>
                <li className="flex items-center gap-2 ">
                  <span className="rounded-full items-center flex justify-center h-6 w-6 p-1 bg-cyan-600 text-white">
                    <Check className="text-white" />
                  </span>
                  OEM integrations
                </li>
                <li className="flex items-center gap-2 ">
                  <span className="rounded-full items-center flex justify-center h-6 w-6 p-1 bg-cyan-600 text-white">
                    <Check className="text-white" />
                  </span>
                  AI & Big Data
                </li>
              </ul>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2 ">
                  <span className="rounded-full items-center flex justify-center h-6 w-6 p-1 bg-cyan-600 text-white">
                    <Check className="text-white" />
                  </span>
                  Multiple patents
                </li>
                <li className="flex items-center gap-2 ">
                  <span className="rounded-full items-center flex justify-center h-6 w-6 p-1 bg-cyan-600 text-white">
                    <Check className="text-white" />
                  </span>
                  GDPR compliant
                </li>
                <li className="flex items-center gap-2 ">
                  <span className="rounded-full items-center flex justify-center h-6 w-6 p-1 bg-cyan-600 text-white">
                    <Check className="text-white" />
                  </span>
                  Tangible ROI
                </li>
                <li className="flex items-center gap-2 ">
                  <span className="rounded-full items-center flex justify-center h-6 w-6 p-1 bg-cyan-600 text-white">
                    <Check className="text-white" />
                  </span>
                  Professional services
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="bg-orange-600 card text-white">
              <div>
                <FaCar className="bg-white rounded-full h-14 w-14 p-3 items-center flex justify-center" />
              </div>
              <div className="text-white font-semibold">
                <h4 className="text">Insurance Solutions</h4>
              </div>
              <p>
                AI driven damage inspection, AI behavioral modification, Machine
                Learning, and UBI solutions that are fast to deploy and easy to
                manage.
              </p>

              <Link href="#">Read more</Link>
            </div>

            <div className="card bg-cyan-700">
              <div>
                <GiLightningSpanner className="bg-white rounded-full h-14 w-14 p-3 items-center flex justify-center" />
              </div>
              <div>
                <h4>OEM & Aftermarket</h4>
              </div>
              <p>
                Comprehensive connected car ecosystem that is locally adaptable.
                Drives client monetization and customer engagements with
                actionable insights.
              </p>
              <Link href="#">Read more</Link>
            </div>

            <div className="card bg-textGreen sm:col-span-2">
              <div>
                <TbTruckDelivery className="bg-white rounded-full h-14 w-14 p-3 items-center flex justify-center" />
              </div>

              <h4>Fleet Solutions</h4>
              <p>
                A comprehensive analytics driven fleet management solution
                focused on reducing vehicle, driver, and operational costs.
                Maintain regulatory compliance and provide operational
                transparency.
              </p>

              <Link href="#">Read more</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
