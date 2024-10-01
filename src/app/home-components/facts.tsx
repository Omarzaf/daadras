import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function Facts() {
  return (
    <Box bg="navy-blue">
      <Container
        px={{ base: "4", lg: "0" }}
        py={{ base: "12", lg: "24" }}
        w={{ base: "full", lg: "1140px" }}
        maxW="1140px"
      >
        <VStack w="full" alignItems="flex-start" spacing="16">
          <VStack w="full" alignItems="flex-start" spacing="5">
            <Heading color="sky-blue" textDecor="underline">
              Foundation Facts
            </Heading>
            <Text color="white" fontWeight="semibold">
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
            </Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, lg: 3 }} gap="6" w="full">
            <VStack w="full" alignItems="flex-start" bg="steel-blue">
              <VStack w="full" alignItems="flex-start" p="6">
                <Box>
                  <Text
                    fontSize="lg"
                    fontWeight="semibold"
                    textTransform="uppercase"
                    color="white"
                    textDecor="underline"
                  >
                    heading
                  </Text>
                  <Text color="white" fontWeight="semibold">
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book
                  </Text>
                </Box>
                <Button
                  px="4"
                  size="sm"
                  variant="primary-sky-blue"
                  fontWeight="semibold"
                >
                  Read More
                </Button>
              </VStack>
            </VStack>
            <VStack w="full" alignItems="flex-start" bg="steel-blue">
              <VStack w="full" alignItems="flex-start" p="6">
                <Box>
                  <Text
                    fontSize="lg"
                    fontWeight="semibold"
                    textTransform="uppercase"
                    color="white"
                    textDecor="underline"
                  >
                    heading
                  </Text>
                  <Text color="white" fontWeight="semibold">
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book
                  </Text>
                </Box>
                <Button
                  px="4"
                  size="sm"
                  variant="primary-sky-blue"
                  fontWeight="semibold"
                >
                  Read More
                </Button>
              </VStack>
            </VStack>
            <VStack w="full" alignItems="flex-start" bg="steel-blue">
              <VStack w="full" alignItems="flex-start" p="6">
                <Box>
                  <Text
                    fontSize="lg"
                    fontWeight="semibold"
                    textTransform="uppercase"
                    color="white"
                    textDecor="underline"
                  >
                    heading
                  </Text>
                  <Text color="white" fontWeight="semibold">
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book
                  </Text>
                </Box>
                <Button
                  px="4"
                  size="sm"
                  variant="primary-sky-blue"
                  fontWeight="semibold"
                >
                  Read More
                </Button>
              </VStack>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

export default Facts;
