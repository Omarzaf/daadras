import React from "react";
import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

function OurTeam() {
  return (
    <Box bg="pale-aqua">
      <Container
        px={{ base: "4", lg: "0" }}
        py={{ base: "12", lg: "24" }}
        w={{ base: "full", lg: "1140px" }}
        maxW="1140px"
      >
        <VStack spacing="6" w="full">
          <Heading
            color="black"
            fontSize="5xl"
            fontWeight="semibold"
            textTransform="capitalize"
          >
            Our Team
          </Heading>

          <SimpleGrid columns={{ base: 1, lg: 4 }} w="full" gap="6">
            <Box
              pos="relative"
              w="full"
              h="360px"
              rounded="1.5rem"
              overflow="hidden"
            >
              <Image
                objectFit="cover"
                src="/assets/placeholder.jpg"
                fill
                alt="Picture of the author"
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
                      Umar Zafar
                    </Text>
                    <Text color="white">(Founder,CEO)</Text>
                  </Box>
                </HStack>
              </Box>
            </Box>
            <Box
              pos="relative"
              w="full"
              h="360px"
              rounded="1.5rem"
              overflow="hidden"
            >
              <Image
                objectFit="cover"
                src="/assets/placeholder.jpg"
                fill
                alt="Picture of the author"
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
                      Fateh Muhammad
                    </Text>
                    <Text color="white">(COO)</Text>
                  </Box>
                </HStack>
              </Box>
            </Box>
            <Box
              pos="relative"
              w="full"
              h="360px"
              rounded="1.5rem"
              overflow="hidden"
            >
              <Image
                objectFit="cover"
                src="/assets/placeholder.jpg"
                fill
                alt="Picture of the author"
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
                      Arooj Khan
                    </Text>
                    <Text color="white">(Project Director)</Text>
                  </Box>
                </HStack>
              </Box>
            </Box>
            <Box
              pos="relative"
              w="full"
              h="360px"
              rounded="1.5rem"
              overflow="hidden"
            >
              <Image
                objectFit="cover"
                src="/assets/placeholder.jpg"
                fill
                alt="Picture of the author"
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
                      Shanzey Khan
                    </Text>
                    <Text color="white">(Head SEL)</Text>
                  </Box>
                </HStack>
              </Box>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

export default OurTeam;
