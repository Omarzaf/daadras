import { Box, Container, Flex, Heading, Text, VStack, Stack, Divider } from "@chakra-ui/react";
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
            Who We Are
          </Heading>
          <Text color="white" fontSize={{ base: "md", lg: "lg" }} maxW="3xl">
            Daadras is a non-profit empowering marginalized communities across Pakistan through education, humanitarian aid, and economic opportunity.
          </Text>
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            gap="12"
            w="full"
          >
            {/* Timeline Section */}
            <VStack spacing="8" align="start" w={{ base: "full", lg: "60%" }}>
              <TimelineStep
                year="2020"
                title="Our Journey Begins"
                description="Founded to tackle poverty and inequality, starting with grassroots initiatives."
              />
              <Divider borderColor="sky-blue" />
              <TimelineStep
                year="2021"
                title="Early Impact"
                description="Reached over 10,000 lives with education programs and humanitarian aid."
              />
              <Divider borderColor="sky-blue" />
              <TimelineStep
                year="Today"
                title="Expanding Hope"
                description="Partnering with 95 million people to build a future where every voice is heard."
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
