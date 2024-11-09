import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
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
            <Heading color="sky-blue" textDecor="underline">
              Who We Are
            </Heading>
            <Text color="white" fontWeight="bold" fontSize="lg">
              Daadras Is A Non-Profit Organization Started In Pakistan In 2020.
              We Partner With 95 Million People Facing Poverty And Inequality To
              Help Them Reach Their Due Rights And Full Potential. Composed Of
              Volunteers From Diverse Walks Of Life, We Share A Comprehensive
              Approach To Lasting Change. In Pakistan, Daadras Works In
              Marginalized And Hard-To-Reach Areas, Especially Focusing On
              Poverty Alleviation. Our Mission Is To Create Lasting Change By
              Addressing Key Issues Such As Education, Humanitarian Crisis, And
              Economic Empowerment.
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
