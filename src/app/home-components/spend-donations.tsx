import React from "react";
import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const DONATION_DISTRIBUTION = [
  {
    color: "red",
    percentage: 40,
    title: "child care",
  },
  {
    color: "green",
    percentage: 35,
    title: "teaching",
  },
  {
    color: "blue",
    percentage: 10,
    title: "help",
  },
  {
    color: "purple",
    percentage: 10,
    title: "exursions",
  },
  {
    color: "yellow",
    percentage: 5,
    title: "feeding",
  },
];

function SpendDonations() {
  return (
    <Box bg="pale-aqua">
      <Container
        px={{ base: "4", lg: "0" }}
        py={{ base: "12", lg: "24" }}
        w={{ base: "full", lg: "1140px" }}
        maxW="1140px"
      >
        <VStack flex="1" alignItems="flex-start" spacing="6">
          <Heading color="black">
            How we spend you donations and where it goes
          </Heading>
          <Text color="black" fontWeight="semibold">
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
          </Text>

          <SimpleGrid
            columns={{ base: 2, lg: 3 }}
            gap={{ base: "4", lg: "8" }}
            mt="6"
          >
            {DONATION_DISTRIBUTION.map((donation, i) => (
              <HStack key={i} alignItems="center">
                <Box w="18px" h="18px" bg={donation.color} />
                <Text fontWeight="semibold" pt="1">
                  {donation.percentage}% {donation.title}
                </Text>
              </HStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

export default SpendDonations;
