"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";
import { TbTruckDelivery } from "react-icons/tb";
import { GiLightningSpanner } from "react-icons/gi";
import { FaCar } from "react-icons/fa6";
import { Check } from "lucide-react";
import { useEffect, useRef } from "react";
import Bottom from "@/components/home/Bottom";

const Home = () => {
  const ref = useRef();

  const variants = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
    hidden: { opacity: 0 },
  };

  const variants1 = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        bounce: 0.5, // Add the bounce effect here
      },
    },
    hidden: { opacity: 0 },
  };

  const isInView = useInView(ref, { margin: "-100px" });
  const isInView2 = useInView(ref, { margin: "100px" });

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
          initial={{ x: -100, opacity: 0 }}
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

      <section className="max-w-[90%] overflow-hidden mx-auto py-6">
        <motion.h2
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transitionDelay: 4 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
          className="text-[24] sm:text-[34px] font-bold w-full text-center underline"
        >
          A holistic approach to{" "}
          <span className="text-textGreen">connected car </span> & IoT solutions
        </motion.h2>

        <motion.div className="grid sm:grid-cols-2 gap-4 mt-6 w-full">
          <div className="">
            <div className="grid mt-4 grid-cols-2">
              <motion.ul
                initial="hidden"
                whileInView="visible"
                animate={isInView && "animation"}
                variants={variants}
                className="grid gap-2"
              >
                <motion.li
                  variants={variants}
                  className="flex items-center gap-2 "
                >
                  <span className="rounded-full items-center flex justify-center h-6 w-6 p-1 bg-cyan-600 text-white">
                    <Check className="text-white" />
                  </span>
                  End-to-end solutions
                </motion.li>
                <motion.li
                  variants={variants}
                  className="flex items-center gap-2 "
                >
                  <span className="rounded-full items-center flex justify-center h-6 w-6 p-1 bg-cyan-600 text-white">
                    <Check className="text-white" />
                  </span>
                  Ecosystem approach
                </motion.li>
                <motion.li
                  variants={variants}
                  className="flex items-center gap-2 "
                >
                  <span className="rounded-full items-center flex justify-center h-6 w-6 p-1 bg-cyan-600 text-white">
                    <Check className="text-white" />
                  </span>
                  OEM integrations
                </motion.li>
                <motion.li
                  variants={variants}
                  className="flex items-center gap-2 "
                >
                  <span className="rounded-full items-center flex justify-center h-6 w-6 p-1 bg-cyan-600 text-white">
                    <Check className="text-white" />
                  </span>
                  AI & Big Data
                </motion.li>
              </motion.ul>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                animate={isInView && "animation"}
                variants={variants}
                className="grid gap-2"
              >
                <motion.li
                  variants={variants}
                  className="flex items-center gap-2 "
                >
                  <span className="rounded-full items-center flex justify-center h-6 w-6 p-1 bg-cyan-600 text-white">
                    <Check className="text-white" />
                  </span>
                  Multiple patents
                </motion.li>
                <motion.li
                  variants={variants}
                  className="flex items-center gap-2 "
                >
                  <span className="rounded-full items-center flex justify-center h-6 w-6 p-1 bg-cyan-600 text-white">
                    <Check className="text-white" />
                  </span>
                  GDPR compliant
                </motion.li>
                <motion.li
                  variants={variants}
                  className="flex items-center gap-2 "
                >
                  <span className="rounded-full items-center flex justify-center h-6 w-6 p-1 bg-cyan-600 text-white">
                    <Check className="text-white" />
                  </span>
                  Tangible ROI
                </motion.li>
                <motion.li
                  variants={variants}
                  className="flex items-center gap-2 "
                >
                  <span className="rounded-full items-center flex justify-center h-6 w-6 p-1 bg-cyan-600 text-white">
                    <Check className="text-white" />
                  </span>
                  Professional services
                </motion.li>
              </motion.ul>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            animate={isInView2 && "animation"}
            variants={variants1}
            className="grid gap-4"
          >
            <motion.div
              variants={variants1}
              className="bg-orange-600 card text-white"
            >
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
            </motion.div>

            <motion.div variants={variants1} className="card bg-cyan-700">
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
            </motion.div>

            <motion.div
              variants={variants1}
              className="card bg-textGreen sm:col-span-2"
            >
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
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-6 border-t-2 max-w-[90%] mx-auto ">
        <Bottom />
      </section>
    </div>
  );
};

export default Home;
