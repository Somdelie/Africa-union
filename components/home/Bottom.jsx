"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { BiConversation } from "react-icons/bi";
import { FaNetworkWired } from "react-icons/fa6";
import { MdOutlineStarRate } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";
import { PiBroadcastBold } from "react-icons/pi";
import { SiToggltrack } from "react-icons/si";
import {
  MessagesSquare,
  Network,
  PowerCircle,
  Star,
  Tv,
  UploadCloud,
} from "lucide-react";

const variants = {
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
  hidden: { opacity: 0 },
};

export default function Bottom() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className=""
      initial="offscreen"
      animate={isInView && "animation"}
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="grid sm:grid-cols-3">
        <motion.div
          initial="hidden"
          whileInView="visible"
          animate={isInView && "animation"}
          variants={variants}
          className="grid sm:grid-cols-3 col-span-2 gap-4 mt-4 "
        >
          <motion.div className="card3" variants={variants}>
            <span>
              <MessagesSquare className="text-cyan-800" />
            </span>
            <h2>Actionable Insights</h2>
            <p>
              Data is only half the battle, actionable insights provide business
              value.
            </p>
          </motion.div>
          <motion.div className="card3" variants={variants}>
            <span>
              <Star />
            </span>
            <h2>Industry leader</h2>
            <p>
              A trusted partner in 50+ countries for leading companies in
              multiple verticals.
            </p>
          </motion.div>
          <motion.div className="card3" variants={variants}>
            <span>
              <Network />
            </span>
            <h2>Holistic approach</h2>
            <p>
              A flexible approach to building the telematics solution that meets
              your business needs.
            </p>
          </motion.div>
          <motion.div className="card3" variants={variants}>
            <span>
              <UploadCloud />
            </span>
            <h2>Enterprise-grade cloud</h2>
            <p>
              Scope cloud solutions run on Azure to deploy faster and support
              our innovation cloud technologies.
            </p>
          </motion.div>
          <motion.div className="card3" variants={variants}>
            <span>
              <Tv />
            </span>
            <h2>Always innovating</h2>
            <p>
              Acting on insights requires cutting edge technology. Our solutions
              use AI, Machine Learning, and more.
            </p>
          </motion.div>
          <motion.div className="card3" variants={variants}>
            <span>
              <PowerCircle />
            </span>
            <h2>End-to-end solutions</h2>
            <p>
              Scope delivers complete end-to-end solutions with flexibility and
              customization.
            </p>
          </motion.div>
        </motion.div>
        <Image
          src="/bottom.png"
          alt="Precedent logo"
          width="400"
          height="400"
        ></Image>
      </div>
    </motion.div>
  );
}
