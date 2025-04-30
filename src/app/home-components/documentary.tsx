"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  AspectRatio,
  VStack,
} from "@chakra-ui/react";

function Documentary() {
  return (
    <Box bg="pale-aqua" py={{ base: "12", lg: "24" }}>
      <Container w={{ base: "full", lg: "1140px" }} maxW="1140px" px={{ base: "4", lg: "0" }}>
        <VStack spacing="12" alignItems="flex-start">
          <VStack spacing="6" alignItems="flex-start">
            <Heading color="navy-blue" size="2xl">
              Our Journey
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="800px">
              Experience the transformative impact of our work through this short documentary. 
              Witness how we're making a difference in communities and changing lives, 
              one story at a time.
            </Text>
          </VStack>

          <AspectRatio ratio={16 / 9} w="full">
            <iframe
              src="https://www.youtube.com/embed/MwsHgn_jdIY"
              title="Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "8px", width: "100%", height: "100%" }}
            />
          </AspectRatio>
        </VStack>
      </Container>
    </Box>
  );
}

export default Documentary;
