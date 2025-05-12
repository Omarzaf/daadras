import React from "react";
import {
  Box,
  Container,
  VStack,
  WrapItem,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";

function Collaborators() {
  const logos = [
    {
      src: "/assets/collaborator_logos/aabroo-logo-1.png",
      name: "Aabroo Welfare Organization",
      url: "https://aabroo.org"
    },
    {
      src: "/assets/collaborator_logos/FriendsClub.jpg",
      name: "Friends Club",
      url: "https://friendsclub.org.pk"
    },
    {
      src: "/assets/collaborator_logos/Waduha.png",
      name: "Waduha Welfare Organization",
      url: "https://waduha.org/"
    },
    {
      src: "/assets/collaborator_logos/nahfidu.png",
      name: "Nahfidu Welfare Organization",
      url: "https://www.facebook.com/nahfiduforum/"
    },
    {
      src: "/assets/collaborator_logos/Spreading_Smiles.png",
      name: "Spreading Smiles",
      url: "https://spreadingsmiles.org/"
    }
  ];

  return (
    <Box bg="#E0FFFF">
      <Container
        px={{ base: "4", lg: "0" }}
        py={{ base: "6", lg: "12" }}
        maxW="1140px"
      >
        <VStack align="center" spacing="10">
          <Heading
            color="black"
            fontSize={{ base: "2xl", lg: "3xl" }}
            textAlign="center"
          >
            Our Collaborators
          </Heading>

          <Box className="collab-scroll-wrapper">
            <Box className="collab-scroll-content">
              {[...logos, ...logos].map((logo, index) => (
                <WrapItem key={index}>
                  <Link href={logo.url} isExternal>
                    <Box position="relative" width="300px" height="240px" mx="6">
                      <Box position="relative" width="300px" height="200px">
                        <Image
                          src={logo.src}
                          alt={logo.name}
                          fill
                          style={{ objectFit: 'contain' }}
                        />
                      </Box>
                      <Text textAlign="center" fontWeight="bold" fontSize="lg">
                        {logo.name}
                      </Text>
                    </Box>
                  </Link>
                </WrapItem>
              ))}
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default Collaborators;
