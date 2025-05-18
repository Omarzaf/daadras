import { Box, Container, Flex, Heading, Text, VStack, Divider } from "@chakra-ui/react";
import Image from "next/image";

function WhoWeAre() {
  return (
    <Box bg="navy-blue" py={{ base: "16", lg: "24" }}>
      <Container maxW="1140px" px={{ base: "4", lg: "0" }}>
        <VStack spacing="12" align="center" textAlign="center">
          <Heading
            color="sky-blue"
            fontSize={{ base: "3xl", lg: "4xl" }}
            textDecor="underline"
          >
            Timeline
          </Heading>
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            gap="12"
            w="full"
          >
            {/* Timeline Section */}
            <VStack spacing="8" w={{ base: "full", lg: "60%" }}>
              <TimelineStep
                year="2020"
                title="Our Journey Begins"
                description="Daadras Foundation was established, with its first mission being a book drive for a library in Balochistan."
              />
              <Divider borderColor="sky-blue" />
              <TimelineStep
                year="2021-2022"
                title="Core Activities and Support"
                description="Continued core activities including monthly ration deliveries and supporting urgent special cases for people in need. Mobilized donations and collected clothes for communities affected by devastating floods."
              />
              <Divider borderColor="sky-blue" />
              <TimelineStep
                year="2023"
                title="Project Salam Launch"
                description="Launched Project Salam at Waduha, introducing underserved children to holistic education through IT, SEL, and strategic thinking."
              />
              <Divider borderColor="sky-blue" />
              <TimelineStep
                year="2025"
                title="Project Salam Expansion"
                description="By February, the third cycle of Project Salam was completed, with the Big Brother Program in development to extend mentorship and support."
              />
            </VStack>

            {/* Image Section */}
            <Box
              pos="relative"
              w={{ base: "full", lg: "40%" }}
              h={{ base: "96", lg: "500px" }}
            >
              <Image
                src="/assets/who-we-are.png"
                alt="Community Work"
                fill
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </Box>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}

function TimelineStep({ year, title, description }) {
  return (
    <Box>
      <Text color="sky-blue" fontWeight="bold" fontSize="xl">
        {year}
      </Text>
      <Heading color="white" fontSize="2xl" mt="2">
        {title}
      </Heading>
      <Text color="white" fontSize="md" mt="2">
        {description}
      </Text>
    </Box>
  );
}

export default WhoWeAre;
