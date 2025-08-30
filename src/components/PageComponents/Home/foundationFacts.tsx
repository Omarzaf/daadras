import { Box, Container, Text, VStack, Heading, SimpleGrid, Badge, HStack } from "@chakra-ui/react";
import { FaLaptop, FaChess, FaHeart} from "react-icons/fa";
import Image from "next/image";
// import Link from "next/link";

function FoundationFacts() {
  const programs = [
    {
      icon: FaLaptop,
      title: "Information Technology",
      description: "Teaching essential digital skills including computer literacy, programming basics, and digital tools that prepare children for the modern workforce.",
      image: "/assets/ed-initiative.png",
      color: "sky-blue",
      features: ["Computer Literacy", "Programming Basics", "Digital Tools", "Online Safety"],
    },
    {
      icon: FaChess,
      title: "Strategic Gaming",
      description: "Using chess and strategic games to develop critical thinking, decision-making, and emotional regulation skills in children.",
      image: "/assets/fact1.png",
      color: "steel-blue",
      features: ["Critical Thinking", "Strategic Planning", "Emotional Control", "Problem Solving"],
    },
    {
      icon: FaHeart,
      title: "Social-Emotional Learning",
      description: "Building emotional intelligence, self-awareness, and interpersonal skills that are crucial for personal and professional success.",
      image: "/assets/fact2.png",
      color: "pale-aqua",
      features: ["Emotional Intelligence", "Self-Awareness", "Communication", "Empathy"],
    },
  ];

  return (
    <Box bg="ghost-white" py={{ base: "16", lg: "24" }}>
      <Container maxW="1140px" px={{ base: "4", lg: "0" }}>
        <VStack spacing="16" align="center">
          {/* Header Section */}
          <VStack spacing="6" textAlign="center" maxW="3xl">
            <Badge
              bg="steel-blue"
              color="white"
              px="4"
              py="2"
              borderRadius="full"
              fontSize="sm"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              Our Programs
            </Badge>
            
            <Heading
              color="steel-blue"
              fontSize={{ base: "3xl", lg: "4xl" }}
              fontWeight="bold"
              lineHeight="1.2"
            >
              Project Salam: Our Flagship Initiative
            </Heading>
            
            <Text
              color="charcoal"
              fontSize={{ base: "lg", lg: "xl" }}
              opacity="0.8"
              lineHeight="1.6"
            >
              Project Salam represents our innovative approach to education, combining three core pillars to create a holistic learning experience that empowers children for life.
            </Text>
          </VStack>

          {/* Programs Grid */}
          <SimpleGrid
            columns={{ base: 1, lg: 3 }}
            spacing="8"
            w="full"
          >
            {programs.map((program, index) => (
              <Box
                key={index}
                bg="white"
                borderRadius="xl"
                overflow="hidden"
                boxShadow="lg"
                border="1px"
                borderColor="gray.200"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "2xl",
                }}
              >
                {/* Program Image */}
                <Box
                  position="relative"
                  h="200px"
                  bg={program.color}
                >
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg={`linear-gradient(135deg, ${program.color}80 0%, transparent 100%)`}
                  />
                  <Box
                    position="absolute"
                    top="4"
                    left="4"
                    bg="white"
                    color={program.color}
                    p="3"
                    borderRadius="full"
                    boxShadow="lg"
                  >
                    <program.icon size="24px" />
                  </Box>
                </Box>

                {/* Program Content */}
                <VStack spacing="4" p="6" align="start">
                  <Heading
                    color="steel-blue"
                    fontSize="xl"
                    fontWeight="bold"
                  >
                    {program.title}
                  </Heading>
                  
                  <Text
                    color="charcoal"
                    fontSize="md"
                    opacity="0.8"
                    lineHeight="1.6"
                  >
                    {program.description}
                  </Text>

                  {/* Features */}
                  <VStack spacing="2" align="start" w="full">
                    <Text
                      color="steel-blue"
                      fontSize="sm"
                      fontWeight="bold"
                      textTransform="uppercase"
                      letterSpacing="wider"
                    >
                      Key Focus Areas:
                    </Text>
                    <SimpleGrid columns={2} spacing="2" w="full">
                      {program.features.map((feature, featureIndex) => (
                        <HStack key={featureIndex} spacing="2">
                          <Box
                            w="2"
                            h="2"
                            bg={program.color}
                            borderRadius="full"
                          />
                          <Text
                            color="charcoal"
                            fontSize="sm"
                            opacity="0.7"
                          >
                            {feature}
                          </Text>
                        </HStack>
                      ))}
                    </SimpleGrid>
                  </VStack>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          {/* Call to Action Section */}
          <Box
            bg="linear-gradient(90deg, #10192f 0%, #1a2747 60%, #3b5b7e 100%)"
            w="full"
            p="8"
            borderRadius="xl"
            textAlign="center"
            boxShadow="2xl"
          >
            <VStack spacing="6">
              <Heading
                color="white"
                fontSize={{ base: "2xl", lg: "3xl" }}
                fontWeight="bold"
              >
                Support Our Mission
              </Heading>

              <Text
                color="white"
                fontSize="lg"
                opacity="0.9"
                maxW="2xl"
                lineHeight="1.6"
              >
                Every child deserves the opportunity to learn, grow, and succeed. Support our mission to provide quality education and create lasting change in communities across Pakistan.
              </Text>

              <Box>
                <a
                  href="/donate"
                  style={{
                    display: "inline-block",
                    textDecoration: "none",
                  }}
                >
                  <Box
                    as="span"
                    bg="#3b5b7e"
                    color="white"
                    px="8"
                    py="3"
                    borderRadius="999px"
                    fontWeight="bold"
                    fontSize="1.1rem"
                    boxShadow="0 2px 8px rgba(0,0,0,0.12)"
                    cursor="pointer"
                    transition="background 0.2s"
                    _hover={{ bg: "#1a2747" }}
                    display="inline-block"
                  >
                    Learn How to Support
                  </Box>
                </a>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default FoundationFacts;
