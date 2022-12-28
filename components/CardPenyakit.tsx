import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

interface CardPenyakitProps {
  title: string;
  description: string;
  href: string;
  imageHref: string;
}

const CardPenyakit: React.FC<CardPenyakitProps> = ({
  title,
  description,
  href,
  imageHref,
}) => {
  const router = useRouter();

  return (
    <Card variant={"outline"} boxShadow="md" sx={{ overflow: "hidden" }}>
      <Image src={imageHref} objectFit="cover" alt={title} height={"200px"} />
      <CardBody>
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
      </CardBody>
      <CardFooter>
        <Button
          width={"100%"}
          onClick={(e) => {
            e.preventDefault();
            router.push(href);
          }}
        >
          Selengkapnya
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardPenyakit;
