import React from "react";
import { Box, Container, Text, VStack } from "@chakra-ui/react";

function Collaborators() {
  return (
    <Box bg="pale-aqua">
      <Container
        px={{ base: "4", lg: "0" }}
        py={{ base: "12", lg: "24" }}
        w={{ base: "full", lg: "1140px" }}
        maxW="1140px"
      >
        <VStack flex="1" alignItems="flex-start" spacing="6">
          <Text color="black" fontWeight="medium" textTransform="uppercase">
            collaborators and partners
          </Text>
          <Text color="black" fontWeight="semibold">
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}

export default Collaborators;
