"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
// import { FaHeart, FaGraduationCap, FaUsers, FaLightbulb } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function Top() {
  // const impactStats = [
  //   {
  //     icon: FaGraduationCap,
  //     number: "500+",
  //     label: "Children Educated",
  //     color: "sky-blue",
  //   },
  //   {
  //     icon: FaUsers,
  //     number: "50+",
  //     label: "Volunteers",
  //     color: "steel-blue",
  //   },
  //   {
  //     icon: FaHeart,
  //     number: "1000+",
  //     label: "Lives Impacted",
  //     color: "pale-aqua",
  //   },
  //   {
  //     icon: FaLightbulb,
  //     number: "3",
  //     label: "Core Programs",
  //     color: "charcoal",
  //   },
  // ];

  return (
    <Box 
      bg="linear-gradient(90deg, #10192f 0%, #1a2747 40%, #3b5b7e 100%)"
      minH={{ base: "60vh", md: "70vh" }}
      position="relative"
      overflow="hidden"
      mt="70px"
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.1"
        backgroundImage="url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      />
      
      <Container maxW="1140px" px={{ base: "4", lg: "0" }} h="full">
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          minH={{ base: "60vh", md: "70vh" }}
          py={{ base: "8", lg: "0" }}
        >
          {/* Left Content */}
          <VStack
            align={{ base: "center", lg: "start" }}
            spacing={{ base: 6, md: 6 }}
            w={{ base: "full", lg: "50%" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            {/* Badge */}
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
              Empowering Pakistan's Future
            </Badge>

            {/* Main Heading */}
            <VStack spacing={1} align={{ base: "center", lg: "start" }}>
              <Heading
                color="white"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                lineHeight="1.1"
                mb={0}
              >
                Transforming Lives Through <br />
                <Text
                  as="span"
                  bg="linear-gradient(135deg, sky-blue 0%, pale-aqua 100%)"
                  bgClip="text"
                  color="inherit"
                  display="inline"
                  fontWeight="bold"
                >
                  Holistic Education
                </Text>
              </Heading>
              <Text
                color="white"
                fontSize={{ base: "md", lg: "lg" }}
                opacity="0.9"
                maxW="500px"
                lineHeight="1.5"
                mt={0}
              >
                Daadras Foundation is a youth-led grassroots initiative empowering underprivileged children through innovative education, skill development, and community support across Pakistan.
              </Text>
            </VStack>

            {/* Call to Action Buttons */}
            <HStack spacing="4" flexWrap="wrap" justify={{ base: "center", lg: "start" }}>
              <Link href="/what-we-do" passHref>
                <Button
                  size="lg"
                  bg="sky-blue"
                  color="white"
                  _hover={{ bg: "steel-blue", transform: "translateY(-2px)" }}
                  rightIcon={<ChevronRightIcon />}
                  transition="all 0.3s"
                  boxShadow="lg"
                >
                  Learn More
                </Button>
              </Link>
              <Link href="/donate" passHref>
                <Button
                  size="lg"
                  variant="outline"
                  color="white"
                  borderColor="white"
                  _hover={{ bg: "white", color: "navy-blue" }}
                  transition="all 0.3s"
                >
                  Support Our Mission
                </Button>
              </Link>
            </HStack>
          </VStack>

          {/* Right Content - Featured Image */}
          <Box
            w={{ base: "full", lg: "45%" }}
            h={{ base: "220px", md: "320px", lg: "400px" }}
            position="relative"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="2xl"
            mt={{ base: "8", lg: "0" }}
          >
            <Image
              src="/assets/hero.png"
              alt="Children learning and growing together"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            {/* Overlay */}
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg="linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)"
            />
          </Box>
        </Flex>
      </Container>

      {/* Scroll Indicator */}
      <Box
        position="absolute"
        bottom="8"
        left="50%"
        transform="translateX(-50%)"
        animation="bounce 2s infinite"
      >
        <ChevronRightIcon
          color="white"
          boxSize="6"
          transform="rotate(90deg)"
          opacity="0.7"
        />
      </Box>
    </Box>
  );
}

export default Top;