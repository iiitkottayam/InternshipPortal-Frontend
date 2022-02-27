import { Flex, Spinner, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      direction={"column"}
    >
      <Head>
        <title>Internship Portal</title>
        <meta name="description" content="IIIT Kottayam Internship Portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text fontSize={"xl"}>IIIT Kottayam's Inhouse</Text>
      <Text
        color={"cyan"}
        fontSize="6xl"
        fontWeight="extrabold"
        fontFamily={"body"}
      >
        Internship Portal
      </Text>
      <Flex>
        <Text fontSize={"xl"}>Coming Soon</Text>
        <Spinner ml={5} mt={1}/>
      </Flex>
    </Flex>
  );
}
