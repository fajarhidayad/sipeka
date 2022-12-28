import type { AppProps } from "next/app";
import { ChakraProvider, Container, Spacer } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Navbar />
      <Spacer mb={"24"} />
      <Container maxW={"1280px"} minHeight={"75vh"}>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </ChakraProvider>
  );
}
