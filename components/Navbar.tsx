import {
  Box,
  Flex,
  Container,
  Spacer,
  HStack,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Box
      py="20px"
      boxShadow={"base"}
      bgColor="white"
      zIndex={100}
      sx={{ position: "fixed", top: 0, width: "100%" }}
    >
      <Container maxW={"1280px"}>
        <Flex alignItems={"center"} justify="space-between">
          <Heading fontSize={"xl"} color="gray.600">
            <Link href={"/"}>
              <Flex alignItems={"center"}>
                <Image
                  src="/images/chicken.png"
                  alt="ayam-icon"
                  w="20px"
                  h="20px"
                />
                <Spacer w={"10px"} />
                Sipeka
              </Flex>
            </Link>
          </Heading>
          <HStack spacing={"20px"} display={{ base: "none", md: "flex" }}>
            <Link href="/">Beranda</Link>
            <Spacer />
            <Link href="/diagnosa">Diagnosa Penyakit</Link>
            <Spacer />
            <Link href="/informasi">Info</Link>
            <Spacer />
            <Link href="/tentang">Tentang</Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
