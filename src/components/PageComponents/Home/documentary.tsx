"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  AspectRatio,
  VStack,
  Badge,
} from "@chakra-ui/react";

function Documentary() {
  // TODO: Replace with your actual YouTube video ID
  const youtubeVideoId = "uu0VXYj_y_A";
  
  return (
    <Box bg="pale-aqua" py={{ base: "12", lg: "16" }}>
      <Container maxW="1140px" px={{ base: "4", lg: "0" }}>
        <VStack spacing="8" alignItems="center">
          {/* Header Section */}
          <VStack spacing="4" textAlign="center" maxW="2xl">
            <Badge
              bg="sky-blue"
              color="white"
              px="4"
              py="2"
              borderRadius="full"
              fontSize="sm"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              Watch Our Story
            </Badge>
            
            <Heading
              color="steel-blue"
              fontSize={{ base: "2xl", lg: "3xl" }}
              fontWeight="bold"
              lineHeight="1.2"
            >
              See Our Impact in Action
            </Heading>
          </VStack>

          {/* Video Section */}
          <Box
            w="full"
            maxW="3xl"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="lg"
            border="1px solid"
            borderColor="gray.200"
          >
            <AspectRatio ratio={16 / 9} w="full">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title="Daadras Foundation Documentary"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ 
                  width: "100%", 
                  height: "100%",
                  border: "none"
                }}
              />
            </AspectRatio>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default Documentary;
