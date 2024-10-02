import React from "react";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

function Top() {
  return (
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
            fontSize={{ base: "3xl", lg: "6xl" }}
            w={{ base: "full", lg: "75%" }}
            textTransform="capitalize"
          >
            to serve the underserved and empower the vulnerable
          </Heading>
          <Text
            color="black"
            fontWeight="bold"
            fontSize={{ base: "lg", lg: "xl" }}
            textDecor="underline"
          >
            Have a look here for our Stories of Hope:
          </Text>

          <Box pos="relative" w="full" aspectRatio={16 / 9}>
            <Image
              objectFit="cover"
              src="/assets/placeholder.jpg"
              fill
              alt="Picture of the author"
            />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default Top;
