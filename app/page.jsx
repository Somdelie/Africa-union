import React from "react";

const page = () => {
  return (
    <div className="">
      <section className="flex flex-col hero pt-[80px] min-h-[100vh] items-center justify-center">
        <h1 className="text-[24px] sm:text-[68px] font-extrabold text-white mb-4">
          Building the <span className="text-main">Next Generation</span> <br />{" "}
          IoT &amp; Telematics Ecosystems{" "}
        </h1>
        <span className="text-[20px] px-4 text-gray-200">
          Learn how Scope delivers actionable insights that drive your <br />{" "}
          business
        </span>
        <button className="bg-cyan-700 px-4 py-2 mt-6 hover:bg-cyan-800">
          Read More
        </button>
      </section>
    </div>
  );
};

export default page;
