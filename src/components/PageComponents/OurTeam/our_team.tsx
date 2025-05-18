import React from "react";
import {
  Box,
  Container,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from 'next/link';
import teamMembers from "../../../data/teamMembers.json";

function OurTeam() {
  return (
    <Box bg="pale-aqua" pt={{ base: "8", lg: "16" }} pb="12">
      <Container
        px={{ base: "4", lg: "0" }}
        py={{ base: "12", lg: "24" }}
        w={{ base: "full", lg: "1140px" }}
        maxW="1140px"
      >
        <VStack spacing="6" w="full">

          <SimpleGrid columns={{ base: 1, lg: 4 }} w="full" gap="6">
            {teamMembers.map((member) => (
              <Link href={`/team/${member.id}`} key={member.id}>
                <Box
                  pos="relative"
                  w="full"
                  h="360px"
                  rounded="1.5rem"
                  overflow="hidden"
                  boxShadow="md"
                  cursor="pointer"
                  transition="all 0.3s ease"
                  _hover={{ boxShadow: "xl", transform: 'scale(1.02)' }}
                >
                  {/* Member Image */}
                  <Image
                    objectFit="cover"
                    objectPosition="top"
                    src={member.image}
                    alt={`Picture of ${member.name}`}
                    layout="fill"
                  />

                  {/* Black Info Bar */}
                  <Box
                    pos="absolute"
                    insetX="0"
                    bottom="0"
                    bg="blackAlpha.800"
                    py="6"
                    pl="14"
                  >
                    <HStack>
                      <Box w="3.5" bg="sky-blue" minH="full" h="9" />
                      <Box>
                        <Text color="white" lineHeight="3" mt="1.5">
                          {member.name}
                        </Text>
                        <Text color="white">({member.role})</Text>
                      </Box>
                    </HStack>
                  </Box>

                  {/* Hover Overlay */}
                  <Box
                    pos="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg="blackAlpha.400"
                    opacity="0"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="all 0.3s ease"
                    _hover={{ opacity: 1 }}
                  >
                    <Text
                      color="white"
                      fontWeight="bold"
                      fontSize="lg"
                      bg="blackAlpha.700"
                      px="4"
                      py="2"
                      rounded="md"
                    >
                      View Profile
                    </Text>
                  </Box>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

export default OurTeam;
