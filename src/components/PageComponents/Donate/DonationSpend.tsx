import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";

// Force disable SSR for PieChart component
const DistributionPieChart = dynamic(
  () => import("../../PieChart/PieChart"),
  { 
    ssr: false,
    loading: () => <></>
  }
);

const DONATION_DISTRIBUTION = [
  {
    color: "#c05050", 
    percentage: 40,
    title: "Project Salam",
  },
  {
    color: "#59c051",
    percentage: 20,
    title: "Khudi",
  },
  {
    color: "#4f92c0",
    percentage: 20,
    title: "Ration and Food Drives",
  },
  {
    color: "#904fc0",
    percentage: 20,
    title: "Need Based",
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
          spacing={{ base: "12", lg: "16" }}
        >
          <VStack
            alignItems="flex-start"
            spacing="6"
            w={{ base: "full", lg: "60%" }}
          >
            <Heading
              color="black"
              mr={{ base: "0", lg: "52" }}
              fontSize={{ base: "2xl", lg: "3xl" }}
            >
              How we spend you donations and where it goes
            </Heading>
            <Box>
              <Text color="black" fontWeight="thick">
                At Daadras Foundation, we are dedicated to ensuring that every
                donation we receive makes a significant impact on the lives of
                those we serve. Currently, 40% of our funding is invested in
                Project Salam, a transformative initiative that provides
                social-emotional learning, IT training, and critical thinking
                skills to underserved children, empowering them to build a
                brighter future.
              </Text>

              <Text color="black" fontWeight="thick" mt="1">
                The remaining 60% is allocated to need-based funds aimed at
                addressing essential needs within our communities. This portion
                supports individuals and families facing urgent financial
                challenges, covering basic necessities such as food and
                healthcare. Additionally, we are committed to creating economic
                opportunities for white-collar workers, helping them regain
                stability and self-sufficiency through sustainable means. By
                maintaining this balanced approach, we strive to uplift those in
                immediate need while fostering long-term empowerment and growth.
              </Text>
            </Box>
          </VStack>
          <Box w={{ base: "full", lg: "40%" }}>
            <DistributionPieChart />
            <SimpleGrid
              columns={{ base: 1, lg: 2 }}
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
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}

export default DonationsSpend;
