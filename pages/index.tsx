import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CardPenyakit from "../components/CardPenyakit";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sipeka</title>
        <meta
          name="description"
          content="Sistem penunjang pengambilan keputusan penyakit ayam broiler"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/chicken.png" />
      </Head>
      <Flex direction={"column"} as="main">
        <Box
          borderRadius={"30px"}
          bgColor={"blue.100"}
          p={{ base: "8", md: "20" }}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Box w={["100%", "50%"]} textAlign={{ base: "center", md: "left" }}>
              <Heading color={"gray.600"} mb="5">
                Sistem Penunjang Pengambilan Keputusan Penyakit Ayam
              </Heading>
              <Text fontSize={"lg"} mb="3">
                Membantu para peternak ayam broiler dalam mendiagnosa penyakit
                yang diderita ayam melalui gejala yang tampak.
              </Text>
              <Link href="/diagnosa">
                <Button colorScheme={"blue"}>Mulai Deteksi Penyakit</Button>
              </Link>
            </Box>
            <Flex display={{ base: "none", md: "flex" }}>
              <Image
                src={"/images/chicken.png"}
                width={200}
                height={200}
                alt="chicken"
              />
              <Image
                src={"/images/doctor.png"}
                width={200}
                height={200}
                alt="doctor"
              />
            </Flex>
          </Flex>
        </Box>

        <Divider my="10" borderColor={"gray.300"} />

        <Box mb={10}>
          <Heading as="h2" size={"lg"} color="gray.600" mb={7}>
            7 Macam Penyakit yang Sering Menjangkit Ayam Broiler
          </Heading>
          <SimpleGrid
            spacing={[3, 4, 5, 6]}
            templateColumns={[
              "repeat(1, minmax(200px, 1fr))",
              "repeat(2, minmax(200px, 1fr))",
              "repeat(3, minmax(200px, 1fr))",
              "repeat(4, minmax(200px, 1fr))",
            ]}
          >
            <CardPenyakit
              title="Avian Influenza"
              description="Penyakit ini lebih dikenal dengan nama Flu Burung merupakan penyakit yang disebabkan oleh virus influenza type A subtipe H5 dan H7."
              href="/informasi"
              imageHref="/images/flu_burung_3.jpg"
            />
            <CardPenyakit
              title="Fowl Cholera"
              description="Biasa disebut dengan Kolera Unggas yang disebabkan oleh bakteri Pasteurella multocida (P.multocida) dan tersebar diseluruh dunia."
              href="/informasi"
              imageHref="https://static.chickin.xyz/blog/wp-content/uploads/2022/06/Chickin-Blog-3-1160x680.png"
            />
            <CardPenyakit
              title="Newcastle Disease"
              description="Penyakit menular akut yang menyerang ayam dan jenis unggas lainnya dengan gejala klinis berupa gangguan pernafasan, pencernaan dan syaraf disertai mortalitas yang sangat tinggi."
              href="/informasi"
              imageHref="https://sinauternak.com/wp-content/uploads/2019/10/Newcastle-disease.jpg"
            />
            <CardPenyakit
              title="Infectious Bronchitis"
              description="penyakit pernapasan akut dan sangat menular pada ayam ditandai dengan adanya gejala seperti terengah-engah, batuk, bersin, ngorok, dan keluarnya sekresi hidung."
              href="/informasi"
              imageHref="/images/infectious_bronchitis.jpg"
            />
            <CardPenyakit
              title="Infectious Bursal Disease"
              description="penyakit menular akut pada ayam berumur muda, ditandai dengan peradangan hebat bursa Fabricius dan bersifat imunosupresif yaitu lumpuhnya sistem pertahanan tubuh ayam."
              href="/informasi"
              imageHref="https://d1lg8auwtggj9x.cloudfront.net/images/IBD02.width-820.jpg"
            />
            <CardPenyakit
              title="Chronic Respiratory Disease"
              description="penyakit menular menahun pada ayam yang ditandai dengan sekresi hidung katar, kebengkakan muka, batuk dan terdengarnya suara sewaktu bernafas."
              imageHref="https://i0.wp.com/www.poultryindonesia.com/wp-content/uploads/2019/09/CRD-1.jpg?fit=387%2C256&ssl=1"
              href="/informasi"
            />
            <CardPenyakit
              title="Pullorum"
              description="Biasa dikenal dengan berak putih merupakan penyakit menular pada ayam yang yang disebabkan oleh Salmonella pullorum."
              imageHref="https://www.dictio.id/uploads/db3342/original/3X/f/f/ff077e6942cc38eaf398394735148d2013ab7ad3.jpeg"
              href="/informasi"
            />
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
}
