import React from "react";
import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from 'next/link';
import teamMembers from './../../data/teamMembers.json';

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
          <Heading
            color="black"
            fontSize={{ base: "3xl", lg: "4xl" }}
            fontWeight="semibold"
            textTransform="capitalize"
          >
            Our Team
          </Heading>

          <SimpleGrid columns={{ base: 1, lg: 4 }} w="full" gap="6">
            {teamMembers.map((member) => (
              <Link href={`/team/${member.id}`} key={member.id}>
                <Box
                  pos="relative"
                  w="full"
                  h="360px"
                  rounded="1.5rem"
                  overflow="hidden"
                  transition="transform 0.3s ease"
                  _hover={{ transform: 'scale(1.02)' }}
                >
                  <Image
                    objectFit="cover"
                    src={member.image}
                    alt={`Picture of ${member.name}`}
                    layout="fill"
                  />
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
