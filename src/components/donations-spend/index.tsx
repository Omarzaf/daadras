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
import DaugnutChart from "../DaugnutChart";

const DONATION_DISTRIBUTION = [
  {
    color: "#c05050",
    percentage: 40,
    title: "child care",
  },
  {
    color: "#59c051",
    percentage: 35,
    title: "teaching",
  },
  {
    color: "#4f92c0",
    percentage: 10,
    title: "help",
  },
  {
    color: "#904fc0",
    percentage: 10,
    title: "exursions",
  },
  {
    color: "#bec050",
    percentage: 5,
    title: "feeding",
  },
];

function DonationsSpend() {
  return (
    <Box bg="pale-aqua">
      <Container
        px={{ base: "4", lg: "0" }}
        py={{ base: "12", lg: "24" }}
        w={{ base: "full", lg: "1140px" }}
        maxW="1140px"
      >
        <HStack
          w="full"
          justifyContent="space-between"
          flexDir={{ base: "column", lg: "row" }}
          spacing={{ base: "12", lg: "0" }}
        >
          <VStack
            w={{ base: "full", lg: "50%" }}
            alignItems="flex-start"
            spacing="6"
          >
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
          <DaugnutChart />
        </HStack>
      </Container>
    </Box>
  );
}

export default DonationsSpend;
