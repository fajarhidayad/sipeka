import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import SliderMarkGejala from "../components/SliderMarkGejala";

const DiagnosaPage = () => {
  return (
    <>
      <Head>
        <title>Sipeka | Diagnosa</title>
        <meta
          name="description"
          content="Sistem penunjang pengambilan keputusan penyakit ayam broiler"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/chicken.png" />
      </Head>

      <Box>
        <Heading textColor="gray.700" mb="8">
          Diagnosa Penyakit
        </Heading>

        <Flex
          direction={"column"}
          alignItems="center"
          textAlign={"center"}
          borderRadius={"20px"}
          bgColor="blue.100"
          p={8}
        >
          <Box mb={5}>
            <Heading size={"md"}>Gejala Non-Spesifik</Heading>
            <Text>(0 = normal, 5 = sedang, 10 = tinggi)</Text>
          </Box>
          <SimpleGrid
            spacingX={{ base: 3, md: 20 }}
            spacingY={{ base: 3, md: 8 }}
            templateColumns={{
              base: "repeat(1, minmax(200px, 1fr))",
              md: "repeat(2, minmax(200px, 1fr))",
            }}
          >
            <Box mb="10">
              <Text mb="3">Tingkat nafsu makan turun</Text>
              <SliderMarkGejala />
            </Box>
            <Box mb="10">
              <Text mb="3">Napas mengap-mengap</Text>
              <SliderMarkGejala />
            </Box>
            <Box mb="10">
              <Text mb="3">Keluar lendir dari hidung</Text>
              <SliderMarkGejala />
            </Box>
            <Box mb="10">
              <Text mb="3">Batuk</Text>
              <SliderMarkGejala />
            </Box>
            <Box mb="10">
              <Text mb="3">Kotoran kehijau-hijauan</Text>
              <SliderMarkGejala />
            </Box>
            <Box mb="10">
              <Text mb="3">
                Jengger, pial. kulit perut berwarna biru-keunguan
              </Text>
              <SliderMarkGejala />
            </Box>
          </SimpleGrid>
        </Flex>

        <Flex
          direction={"column"}
          alignItems="center"
          textAlign={"center"}
          borderRadius={"20px"}
          bgColor="blue.100"
          p="8"
          mt="10"
          mb="5"
        >
          <Box mb={5}>
            <Heading size={"md"}>Gejala Spesifik</Heading>
            <Text color="gray.500">
              (centang apabila mengalami gejala tersebut)
            </Text>
          </Box>
          <SimpleGrid
            spacing={{ base: 3, md: 8 }}
            templateColumns={{
              base: "repeat(1, minmax(200px, 1fr))",
              md: "repeat(2, minmax(200px, 1fr))",
            }}
            textAlign="left"
          >
            <Box>
              <Checkbox colorScheme={"green"} borderColor="black">
                Bulu kusam dan mengkerut
              </Checkbox>
            </Box>
            <Box>
              <Checkbox colorScheme={"green"} borderColor="black">
                Kelumpuhan
              </Checkbox>
            </Box>
            <Box>
              <Checkbox colorScheme={"green"} borderColor="black">
                Ayam bergerak tidak teratur
              </Checkbox>
            </Box>
            <Box>
              <Checkbox colorScheme={"green"} borderColor="black">
                Stress
              </Checkbox>
            </Box>
            <Box>
              <Checkbox colorScheme={"green"} borderColor="black">
                Ngorok saat bernapas
              </Checkbox>
            </Box>
            <Box>
              <Checkbox colorScheme={"green"} borderColor="black">
                Pernapasan terganggu dan bernapas berat
              </Checkbox>
            </Box>
            <Box>
              <Checkbox colorScheme={"green"} borderColor="black">
                Pembengkakan kepala, mata, pial, jengger
              </Checkbox>
            </Box>
            <Box>
              <Checkbox colorScheme={"green"} borderColor="black">
                Leher terpuntir
              </Checkbox>
            </Box>
            <Box>
              <Checkbox colorScheme={"green"} borderColor="black">
                Kematian mendadak
              </Checkbox>
            </Box>
          </SimpleGrid>
        </Flex>

        <Flex justifyContent={"center"} alignItems="center" mb="10">
          <Button mr="5">Reset</Button>
          <Button colorScheme={"blue"}>Cek Penyakit</Button>
        </Flex>
      </Box>
    </>
  );
};

export default DiagnosaPage;
