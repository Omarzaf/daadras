"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack
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
          <SimpleGrid mt="16" w="full" columns={{ base: 1, lg: 3 }} spacing="6">
            <Flex
              fontSize={{ base: "lg", lg: "xl" }}
              fontWeight="semibold"
              justify="center"
              align="center"
              bg="sky-blue"
              rounded="3xl"
              pt="10"
              pb="12"
              px="4"
              flexDir="column"
            >
              <Text textDecor="underline">Silk Bank limited</Text>
              <Text>Account number: 00732009302525</Text>
              <Text>IBAN: PK26SAUD0000732009302525</Text>
              <Text>TITLE: Muhammad Asad Zaheer</Text>
            </Flex>
            <Flex
              fontSize={{ base: "lg", lg: "xl" }}
              fontWeight="semibold"
              justify="center"
              align="center"
              bg="sky-blue"
              rounded="3xl"
              pt="10"
              pb="12"
              px="4"
              flexDir="column"
            >
              <Text textDecor="underline">JAZZCASH</Text>
              <Text>Account number: 03320044001</Text>
              <Text>IBAN: PK31JCMA0603923320044001</Text>
              <Text>TITLE: FATEH MUHAMMAD GHAURI</Text>
            </Flex>
            <Flex
              fontSize={{ base: "lg", lg: "xl" }}
              fontWeight="semibold"
              justify="center"
              align="center"
              bg="sky-blue"
              rounded="3xl"
              pt="10"
              pb="12"
              px="4"
              flexDir="column"
            >
              <Text textDecor="underline">EASYPAISA</Text>
              <Text>Account number: 03320044001</Text>
              <Text>IBAN: PK37TMFB0000000033636749</Text>
              <Text>TITLE: FATEH MUHAMMAD GHAURI</Text>
            </Flex>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

export default Donation;
