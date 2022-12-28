import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Container maxW={"1280px"} mt="auto">
      <Flex
        borderTop={"1px"}
        borderTopColor="gray.300"
        justifyContent="center"
        py="5"
      >
        <Text>
          Copyright Fajar Surya Hidayad &copy; {new Date().getFullYear()}
        </Text>
      </Flex>
    </Container>
  );
};

export default Footer;
