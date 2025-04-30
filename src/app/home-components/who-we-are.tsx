import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

function WhoWeAre() {
  return (
    <Box bg="navy-blue">
      <Container
        px={{ base: "4", lg: "0" }}
        py={{ base: "12", lg: "24" }}
        w={{ base: "full", lg: "1140px" }}
        maxW="1140px"
      >
        <Flex
          w="full"
          gap={{ base: "12", lg: "44" }}
          flexDir={{ base: "column", lg: "row" }}
        >
          <VStack
            alignItems="flex-start"
            w={{ base: "full", lg: "60%" }}
            spacing="8"
          >
            <Heading
              color="sky-blue"
              textDecor="underline"
              fontSize={{ base: "2xl", lg: "3xl" }}
            >
              Who We Are
            </Heading>
            <Text color="white" fontWeight="medium" fontSize="lg">
            Daadras is a non-profit fighting poverty and inequality across Pakistan.
            We work with marginalized communities to create lasting change — through education, humanitarian aid, and economic empowerment.
            Together, we're building a future where every voice is heard.
            </Text>
          </VStack>
          <Box
            pos="relative"
            w={{ base: "full", lg: "40%" }}
            h={{ base: "96", lg: "530px" }}
          >
            <Image
              objectFit="cover"
              src="/assets/who-we-are.png"
              fill
              alt="Picture of the author"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default WhoWeAre;
