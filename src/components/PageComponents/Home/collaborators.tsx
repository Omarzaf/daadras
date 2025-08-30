"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Link,
  IconButton,
  Flex,
  useInterval,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { logos } from "@/lib/constants/common";

function Collaborators() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const totalLogos = logos.length;
  // Create a seamless loop by duplicating the array once
  const carouselLogos = [...logos, ...logos];

  // Auto-scroll functionality
  useInterval(
    () => {
      if (isPlaying && !isHovered) {
        setCurrentIndex((prev) => {
          const nextIndex = prev + 1;
          // When we reach the end of the first set, jump to the beginning of the second set
          if (nextIndex >= totalLogos) {
            return 0;
          }
          return nextIndex;
        });
      }
    },
    isPlaying && !isHovered ? 3000 : null
  );

  // Scroll to current position
  useEffect(() => {
    if (scrollRef.current) {
      const scrollPosition = currentIndex * 320; // 300px width + 20px margin
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      return newIndex < 0 ? totalLogos - 1 : newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalLogos);
  };

  return (
    <Box bg="pale-aqua" py={{ base: "8", lg: "12" }}>
      <Container maxW="1140px" px={{ base: "4", lg: "0" }}>
        <VStack spacing="8">
          <VStack spacing="4" textAlign="center">
            <Heading
              color="steel-blue"
              fontSize={{ base: "2xl", lg: "3xl" }}
              fontWeight="bold"
            >
              Our Collaborators
            </Heading>
            <Text color="charcoal" fontSize="md" opacity="0.8" maxW="2xl">
              Working together with trusted partners to create positive change across Pakistan
            </Text>
          </VStack>

          {/* Collaborators Carousel */}
          <Box position="relative" w="full">
            {/* Left Navigation Button */}
            <IconButton
              aria-label="Previous"
              icon={<ChevronLeftIcon />}
              onClick={handlePrevious}
              variant="solid"
              bg="white"
              color="steel-blue"
              border="1px"
              borderColor="gray.200"
              boxShadow="md"
              _hover={{ bg: "steel-blue", color: "white" }}
              size="md"
              position="absolute"
              left="-4"
              top="50%"
              transform="translateY(-50%)"
              zIndex="2"
            />
            
            {/* Right Navigation Button */}
            <IconButton
              aria-label="Next"
              icon={<ChevronRightIcon />}
              onClick={handleNext}
              variant="solid"
              bg="white"
              color="steel-blue"
              border="1px"
              borderColor="gray.200"
              boxShadow="md"
              _hover={{ bg: "steel-blue", color: "white" }}
              size="md"
              position="absolute"
              right="-4"
              top="50%"
              transform="translateY(-50%)"
              zIndex="2"
            />

            <Box
              ref={scrollRef}
              overflow="hidden"
              w="full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Flex
                gap="5"
                px="4"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
                sx={{
                  '&::-webkit-scrollbar': {
                    display: 'none',
                  },
                }}
              >
                {carouselLogos.map((logo, index) => (
                  <Box
                    key={`${logo.name}-${index}`}
                    minW="300px"
                    bg="white"
                    borderRadius="xl"
                    p="6"
                    boxShadow="sm"
                    border="1px"
                    borderColor="gray.200"
                    transition="all 0.3s"
                    _hover={{
                      transform: "translateY(-4px)",
                      boxShadow: "lg",
                      borderColor: "sky-blue",
                    }}
                    cursor="pointer"
                  >
                    <Link href={logo.url} isExternal _hover={{ textDecor: "none" }}>
                      <VStack spacing="4" align="center">
                        <Box
                          position="relative"
                          width="200px"
                          height="120px"
                          bg="gray.50"
                          borderRadius="lg"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          p="4"
                        >
                          <Image
                            src={logo.src}
                            alt={logo.name}
                            fill
                            style={{ 
                              objectFit: "contain",
                              padding: "8px"
                            }}
                          />
                        </Box>
                        <Text
                          textAlign="center"
                          fontWeight="semibold"
                          fontSize="md"
                          color="charcoal"
                          noOfLines={2}
                          lineHeight="1.4"
                        >
                          {logo.name}
                        </Text>
                      </VStack>
                    </Link>
                  </Box>
                ))}
              </Flex>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default Collaborators;
