import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

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
            fontSize="6xl"
            w="75%"
            textTransform="capitalize"
          >
            to serve the underserved and empower the vulnerable
          </Heading>
          <Text
            color="black"
            fontWeight="bold"
            fontSize="xl"
            textDecor="underline"
          >
            Have a look here for our Stories of Hope:
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}

export default Top;
