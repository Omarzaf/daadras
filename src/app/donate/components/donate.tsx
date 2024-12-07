"use client";

import React from "react";
import RadioOptions from "@/components/radio-options";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

function Donation() {
  return (
    <Box bg="navy-blue">
      <Container
        px={{ base: "4", lg: "0" }}
        py={{ base: "12", lg: "24" }}
        w={{ base: "full", lg: "1140px" }}
        maxW="1140px"
      >
        <VStack w="full">
          <Heading
            fontSize={{ base: "lg", lg: "xl" }}
            color="sky-blue"
            fontWeight="semibold"
            textDecor="underline"
            textTransform="capitalize"
          >
            Direct Transfer Here
          </Heading>
          <SimpleGrid
            mt="24"
            w="full"
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: "6", lg: "14" }}
          >
            <Flex
              fontSize={{ base: "lg", lg: "2xl" }}
              fontWeight="semibold"
              justify="center"
              align="center"
              bg="sky-blue"
              rounded="3xl"
              pt="12"
              pb="16"
              px="6"
              flexDir="column"
            >
              <Text textDecor="underline">Silk Bank limited</Text>
              <Text>Account number: 00732009302525</Text>
              <Text>IBAN: PK26SAUD0000732009302525</Text>
              <Text>TITLE: Muhammad Asad Zaheer</Text>
            </Flex>
            <Flex
              fontSize={{ base: "lg", lg: "2xl" }}
              fontWeight="semibold"
              justify="center"
              align="center"
              bg="sky-blue"
              rounded="3xl"
              pt="12"
              pb="16"
              flexDir="column"
            >
              <Text textDecor="underline">JAZZCASH / EASYPAISA</Text>
              <Text>Account number: 03320044001</Text>
              <Text>IBAN: PK31JCMA0603923320044001</Text>
              <Text>TITLE: FATEH MUHAMMAD GHAURI</Text>
            </Flex>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

export default Donation;
