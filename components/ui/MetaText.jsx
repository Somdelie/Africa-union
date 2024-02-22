"use client";

import Head from "next/head";

const MetaText = ({ metadata }) => {
  return (
    <Head>
      <title>{metadata.title}</title>
      {/* Add other meta tags here if needed */}
    </Head>
  );
};

export default MetaText;
