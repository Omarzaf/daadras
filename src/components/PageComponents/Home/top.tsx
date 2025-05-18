"use client";

import React, { useState, useEffect } from "react";
import { Box, IconButton, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function Top() {
  const images = [
    "/assets/home_slide_show/1.png",
    "/assets/home_slide_show/2.jpg", 
    "/assets/home_slide_show/3.jpg",
    "/assets/home_slide_show/4.jpg",
    "/assets/home_slide_show/5.jpg",
    "/assets/home_slide_show/6.jpg",
    "/assets/home_slide_show/7.jpg",
    "/assets/home_slide_show/8.jpg",
    "/assets/home_slide_show/9.jpg"
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <Box 
      pos="relative" 
      w="100%" 
      h="calc(100vh - 70px)" 
      overflow="hidden" 
      mt="70px"
    >
      <Image
        objectFit="contain" // Changed from cover to contain
        src={images[currentImageIndex]}
        fill
        sizes="100vw"
        priority
        style={{ 
          width: '100%',
          height: '100%',
          objectPosition: 'center',
          backgroundColor: '#E0FFFF' // Added black background to handle letterboxing
        }}
        alt={`Slideshow image ${currentImageIndex + 1}`}
      />
      <HStack 
        position="absolute" 
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