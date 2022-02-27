import { Button, Flex, Spinner, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const color = useColorModeValue('blue.500', 'cyan')
  return (
    <>
      <Head>
        <title>Internship Portal</title>
        <meta name="description" content="IIIT Kottayam Internship Portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction={"column"}>
        <Flex justifyContent={"flex-end"} m={10}>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
          </Button>
        </Flex>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
          height={"80vh"}
        >
          <Text fontSize={"xl"}>IIIT Kottayam's Inhouse</Text>
          <Text
            color={color}
            fontSize="6xl"
            fontWeight="extrabold"
            fontFamily={"body"}
          >
            Internship Portal
          </Text>
          <Flex>
            <Text fontSize={"xl"}>Coming Soon</Text>
            <Spinner ml={5} mt={1} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
