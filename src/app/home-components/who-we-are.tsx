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

function WhoWeAre() {
  return (
    <Box bg="navy-blue">
      <Container
        px={{ base: "4", lg: "0" }}
        py={{ base: "12", lg: "24" }}
        w={{ base: "full", lg: "1140px" }}
        maxW="1140px"
      >
        <SimpleGrid w="full" columns={{ base: 1, lg: 2 }} spacing="6">
          <VStack
            alignItems="flex-start"
            w={{ base: "full", lg: "70%" }}
            spacing="8"
          >
            <Heading color="sky-blue" textDecor="underline">
              Who We Are
            </Heading>
            <Text color="white" fontWeight="bold" fontSize="lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the
            </Text>

            <Button
              py="6"
              px="7"
              variant="primary-sky-blue"
              fontWeight="semibold"
            >
              Read More
            </Button>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default WhoWeAre;
