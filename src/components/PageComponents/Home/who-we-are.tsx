import { Box, Container, Flex, Heading, Text, VStack, HStack, SimpleGrid, Badge } from "@chakra-ui/react";
import { FaGraduationCap, FaHeart, FaLightbulb, FaUsers } from "react-icons/fa";
import Image from "next/image";

function WhoWeAre() {
  const missionPillars = [
    {
      icon: FaGraduationCap,
      title: "Holistic Education",
      description: "Providing comprehensive education that combines IT skills, social-emotional learning, and critical thinking to create well-rounded individuals.",
      color: "sky-blue",
    },
    {
      icon: FaHeart,
      title: "Community Support",
      description: "Supporting families through sustainable aid programs that promote self-reliance and long-term independence.",
      color: "steel-blue",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "Developing cutting-edge educational approaches that bridge the gap between traditional learning and modern skills.",
      color: "pale-aqua",
    },
    {
      icon: FaUsers,
      title: "Youth Leadership",
      description: "Empowering young leaders to drive change and create lasting impact in their communities.",
      color: "charcoal",
    },
  ];

  return (
    <Box bg="ghost-white" py={{ base: "16", lg: "24" }}>
      <Container maxW="1140px" px={{ base: "4", lg: "0" }}>
        <VStack spacing="16" align="center">
          {/* Header Section */}
          <VStack spacing="6" textAlign="center" maxW="3xl">
            <Badge
              bg="pale-aqua"
              color="steel-blue"
              px="4"
              py="2"
              borderRadius="full"
              fontSize="sm"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              Our Mission
            </Badge>
            
            <Heading
              color="steel-blue"
              fontSize={{ base: "3xl", lg: "4xl" }}
              fontWeight="bold"
              lineHeight="1.2"
            >
              Empowering Pakistan's Future Through
              <Text
                as="span"
                bg="linear-gradient(135deg, sky-blue 0%, steel-blue 100%)"
                bgClip="text"
                color="inherit"
                fontWeight="bold"
              >
                {" "}Innovative Education
              </Text>
            </Heading>
            
            <Text
              color="charcoal"
              fontSize={{ base: "lg", lg: "xl" }}
              opacity="0.8"
              lineHeight="1.6"
            >
              We believe every child deserves access to quality education that prepares them for the challenges of tomorrow. Our mission is to break down barriers and create opportunities for underprivileged children to thrive.
            </Text>
          </VStack>

          {/* Mission Pillars */}
          {/* <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing="8"
            w="full"
          >
            {missionPillars.map((pillar, index) => (
              <Box
                key={index}
                bg="ghost-white"
                p="8"
                borderRadius="xl"
                border="1px"
                borderColor="gray.200"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "xl",
                  borderColor: pillar.color,
                }}
              >
                <VStack spacing="4" align="start">
                  <Box
                    bg={pillar.color}
                    color="white"
                    p="3"
                    borderRadius="full"
                  >
                    <pillar.icon size="24px" />
                  </Box>
                  
                  <Heading
                    color="steel-blue"
                    fontSize="xl"
                    fontWeight="bold"
                  >
                    {pillar.title}
                  </Heading>
                  
                  <Text
                    color="charcoal"
                    fontSize="md"
                    opacity="0.8"
                    lineHeight="1.6"
                  >
                    {pillar.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid> */}

          {/* Impact Section */}
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            gap="12"
            w="full"
            bg="pale-aqua"
            p="8"
            borderRadius="xl"
          >
            {/* Left Content */}
            <VStack
              align={{ base: "center", lg: "start" }}
              spacing="6"
              w={{ base: "full", lg: "50%" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              <Heading
                color="steel-blue"
                fontSize={{ base: "2xl", lg: "3xl" }}
                fontWeight="bold"
              >
                Our Impact Since 2020
              </Heading>
              
              <Text
                color="charcoal"
                fontSize="lg"
                opacity="0.8"
                lineHeight="1.6"
              >
                Through Project Salam and our community initiatives, we've created lasting change in the lives of hundreds of children and families across Pakistan. Our holistic approach ensures that every intervention creates sustainable, long-term impact.
              </Text>

              <HStack spacing="6" flexWrap="wrap" justify={{ base: "center", lg: "start" }}>
                <VStack spacing="1">
                  <Text color="steel-blue" fontSize="2xl" fontWeight="bold">
                    80+
                  </Text>
                  <Text color="charcoal" fontSize="sm" opacity="0.7">
                    Children Educated
                  </Text>
                </VStack>
                <VStack spacing="1">
                  <Text color="steel-blue" fontSize="2xl" fontWeight="bold">
                    30+
                  </Text>
                  <Text color="charcoal" fontSize="sm" opacity="0.7">
                    Dedicated Volunteers
                  </Text>
                </VStack>
                <VStack spacing="1">
                  <Text color="steel-blue" fontSize="2xl" fontWeight="bold">
                    3
                  </Text>
                  <Text color="charcoal" fontSize="sm" opacity="0.7">
                    Core Programs
                  </Text>
                </VStack>
              </HStack>
            </VStack>

            {/* Right Image */}
            <Box
              w={{ base: "full", lg: "40%" }}
              h="300px"
              position="relative"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="lg"
            >
              <Image
                src="/assets/who-we-are.png"
                alt="Children learning and growing together"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}

export default WhoWeAre;
