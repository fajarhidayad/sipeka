import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const InfoPage = () => {
  return (
    <>
      <Head>
        <title>Sipeka | Informasi</title>
        <meta
          name="description"
          content="Sistem penunjang pengambilan keputusan penyakit ayam broiler"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/chicken.png" />
      </Head>

      <Box>
        <Heading>Informasi</Heading>
      </Box>
    </>
  );
};

export default InfoPage;
