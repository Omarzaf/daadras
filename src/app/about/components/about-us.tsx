import React from "react";
import { Box, Container, Heading, Link, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

function AboutUs() {
  return (
    <>
      <Box bg="white">
        <Container
          px={{ base: "4", lg: "0" }}
          py={{ base: "12", lg: "24" }}
          w={{ base: "full", lg: "1140px" }}
          maxW="1140px"
        >
          <VStack alignItems="flex-start" spacing="8">
            <Heading
              color="black"
              fontSize="6xl"
              w="75%"
              textTransform="capitalize"
            >
              About us
            </Heading>
            <Text
              mt={{ base: "2", lg: "8" }}
              color="black"
              fontWeight="bold"
              fontSize="xl"
              textDecor="underline"
            >
              who we are
            </Text>

            <Box pos="relative" w="full" aspectRatio={16 / 9}>
              <Image
                objectFit="cover"
                src="/assets/placeholder.jpg"
                fill
                alt="Picture of the author"
              />
            </Box>
            <Link
              w="full"
              textAlign="right"
              href="/"
              color="black"
              fontWeight="bold"
              fontSize="xl"
              textDecor="underline"
            >
              Sign up for our Newsletter...
            </Link>
          </VStack>
        </Container>
      </Box>

      <Box bg="navy-blue">
        <Container
          px={{ base: "4", lg: "0" }}
          py={{ base: "12", lg: "24" }}
          w={{ base: "full", lg: "1140px" }}
          maxW="1140px"
        >
          <VStack alignItems="flex-start" spacing="8">
            <Text color="white" fontWeight="bold" fontSize="xl">
              who we are
            </Text>
          </VStack>
        </Container>
      </Box>
    </>
  );
}

export default AboutUs;
