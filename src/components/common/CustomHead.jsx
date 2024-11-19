import Head from "next/head";
import React from "react";

const CustomHead = ({ title, logo }) => {
  return (
    <>
      <Head>
        <title>{title} | Evaluate</title>
        <link rel="icon" href={logo?.favIcon} />
      </Head>
    </>
  );
};

export default CustomHead;
