import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const TentangPage = () => {
  return (
    <>
      <Head>
        <title>Sipeka | Tentang</title>
        <meta
          name="description"
          content="Sistem penunjang pengambilan keputusan penyakit ayam broiler"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/chicken.png" />
      </Head>

      <Box>
        <Heading>Tentang</Heading>
      </Box>
    </>
  );
};

export default TentangPage;
