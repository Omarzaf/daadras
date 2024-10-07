import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function WeDo() {
  return (
    <VStack
      w="full"
      alignItems="flex-start"
      spacing="12"
      mb={{ base: "12", lg: "64" }}
    >
      <Container
        px={{ base: "4", lg: "0" }}
        pt={{ base: "20", lg: "28" }}
        pb="2"
        w={{ base: "full", lg: "1140px" }}
        maxW="1140px"
      >
        <Heading color="black" fontSize={{ base: "4xl", lg: "6xl" }}>
          What We Do
        </Heading>
      </Container>

      <Box bg="pale-aqua" w="full">
        <Container
          px={{ base: "4", lg: "0" }}
          py={{ base: "12", lg: "20" }}
          w={{ base: "full", lg: "1140px" }}
          maxW="1140px"
        >
          <HStack
            spacing={{ base: "6", lg: "32" }}
            flexDir={{ base: "column", lg: "row" }}
          >
            <Box
              pos="relative"
              w={{ base: "full", lg: "30%" }}
              h="440px"
              overflow="hidden"
              rounded="1.5rem"
            >
              <Image
                objectFit="cover"
                src="/assets/placeholder.jpg"
                fill
                alt="Picture of the author"
              />
            </Box>
            <VStack
              w={{ base: "full", lg: "70%" }}
              alignItems="flex-start"
              spacing="6"
            >
              <Heading
                color="black"
                fontSize={{ base: "2xl", lg: "3xl" }}
                fontWeight="semibold"
                textDecor="underline"
              >
                Clothes Donation
              </Heading>

              <Text
                color="black"
                textTransform="capitalize"
                fontSize={{ base: "xl", lg: "2xl" }}
                fontWeight="semibold"
              >
                Sustainable approach to resource allocation:
              </Text>

              <Text
                color="black"
                textTransform="capitalize"
                fontSize={{ base: "lg", lg: "2xl" }}
                textDecor="underline"
                fontWeight="medium"
              >
                Read More
              </Text>
            </VStack>
          </HStack>
        </Container>
      </Box>

      <Box bg="pale-aqua" w="full">
        <Container
          px={{ base: "4", lg: "0" }}
          py={{ base: "12", lg: "20" }}
          w={{ base: "full", lg: "1140px" }}
          maxW="1140px"
        >
          <HStack
            spacing={{ base: "6", lg: "32" }}
            flexDir={{ base: "column", lg: "row" }}
          >
            <Box
              pos="relative"
              w={{ base: "full", lg: "30%" }}
              h="440px"
              overflow="hidden"
              rounded="1.5rem"
            >
              <Image
                objectFit="cover"
                src="/assets/placeholder.jpg"
                fill
                alt="Picture of the author"
              />
            </Box>
            <VStack
              w={{ base: "full", lg: "70%" }}
              alignItems="flex-start"
              spacing="6"
            >
              <Heading
                color="black"
                fontSize={{ base: "2xl", lg: "3xl" }}
                fontWeight="semibold"
                textDecor="underline"
              >
                Clothes Donation
              </Heading>

              <Text
                color="black"
                textTransform="capitalize"
                fontSize={{ base: "xl", lg: "2xl" }}
                fontWeight="semibold"
              >
                Sustainable approach to resource allocation:
              </Text>

              <Text
                color="black"
                textTransform="capitalize"
                fontSize={{ base: "lg", lg: "2xl" }}
                textDecor="underline"
                fontWeight="medium"
              >
                Read More
              </Text>
            </VStack>
          </HStack>
        </Container>
      </Box>
      <Box bg="pale-aqua" w="full">
        <Container
          px={{ base: "4", lg: "0" }}
          py={{ base: "12", lg: "20" }}
          w={{ base: "full", lg: "1140px" }}
          maxW="1140px"
        >
          <HStack
            spacing={{ base: "6", lg: "32" }}
            flexDir={{ base: "column", lg: "row" }}
          >
            <Box
              pos="relative"
              w={{ base: "full", lg: "30%" }}
              h="440px"
              overflow="hidden"
              rounded="1.5rem"
            >
              <Image
                objectFit="cover"
                src="/assets/placeholder.jpg"
                fill
                alt="Picture of the author"
              />
            </Box>
            <VStack
              w={{ base: "full", lg: "70%" }}
              alignItems="flex-start"
              spacing="6"
            >
              <Heading
                color="black"
                fontSize={{ base: "2xl", lg: "3xl" }}
                fontWeight="semibold"
                textDecor="underline"
              >
                Clothes Donation
              </Heading>

              <Text
                color="black"
                textTransform="capitalize"
                fontSize={{ base: "xl", lg: "2xl" }}
                fontWeight="semibold"
              >
                Sustainable approach to resource allocation:
              </Text>

              <Text
                color="black"
                textTransform="capitalize"
                fontSize={{ base: "lg", lg: "2xl" }}
                textDecor="underline"
                fontWeight="medium"
              >
                Read More
              </Text>
            </VStack>
          </HStack>
        </Container>
      </Box>
    </VStack>
  );
}

export default WeDo;
