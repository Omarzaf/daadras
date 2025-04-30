"use client";

import React, { useState, useEffect } from "react";
import { Box, Container, Heading, Text, VStack, IconButton, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

// ... existing code ...

function Top() {
  const images = [
    "/assets/home_slide_show/humanitarian-aid.png",
    "/assets/home_slide_show/hero.png",
    // Add all your slideshow images here
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box pos="relative" w="100vw" h="77vh" overflow="hidden" mt="70px"> {/* Increased height from 70vh to 77vh (10% increase) */}
      <Image
        objectFit="fit"
        src={images[currentImageIndex]}
        fill
        sizes="100vw"
        priority
        style={{ 
          width: '100%', 
          height: '100%',
          objectPosition: 'relative'
        }}
        alt={`Slideshow image ${currentImageIndex + 1}`}
      />
      <HStack 
        position="relative" 
        width="100%" 
        justify="space-between" 
        top="50%" 
        transform="translateY(-50%)"
        px={4}
        zIndex={1}
      >
        <IconButton
          aria-label="Previous image"
          icon={<ChevronLeftIcon />}
          onClick={previousImage}
          colorScheme="blackAlpha"
          rounded="full"
        />
        <IconButton
          aria-label="Next image"
          icon={<ChevronRightIcon />}
          onClick={nextImage}
          colorScheme="blackAlpha"
          rounded="full"
        />
      </HStack>
    </Box>
  );
}

export default Top;