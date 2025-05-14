"use client";

import React from "react";
import RadioOptions from "../../radio-options";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

function Donate() {
  return (
    <Box bg="navy-blue">
      <Container
        px={{ base: "4", lg: "0" }}
        py={{ base: "12", lg: "24" }}
        w={{ base: "full", lg: "1140px" }}
        maxW="1140px"
      >
        <SimpleGrid w="full" columns={{ base: 1, lg: 2 }} spacing="6">
          <VStack
            alignItems="flex-start"
            w={{ base: "full", lg: "70%" }}
            spacing="8"
          >
            <Heading color="sky-blue">Call To Action</Heading>
            <Text color="white" fontWeight="bold" fontSize="lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the
            </Text>
          </VStack>
          <VStack spacing="4" w="full">
            <RadioOptions
              options={["ONE TIME", "MONTHLY"]}
              name="donateType"
              defaultValue="ONE TIME"
              onChange={() => console.log()}
            />
            <RadioOptions
              options={["25", "500", "100", "200"]}
              name="donateAmount"
              onChange={() => console.log()}
            />
            <InputGroup mt="4">
              <InputLeftElement ml="-3.5" pointerEvents="none">
                <Text color="white" fontSize="3xl" fontWeight="semibold">
                  $
                </Text>
              </InputLeftElement>
              <Input
                fontWeight="bold"
                fontSize="lg"
                color="white"
                type="number"
                size="lg"
                variant="flushed"
                borderBottom="4px"
                borderColor="white"
                _focus={{
                  borderColor: "white",
                }}
              />
              <InputRightElement pointerEvents="none" mr="2">
                <Text color="white" fontSize="3xl" fontWeight="semibold">
                  USD
                </Text>
              </InputRightElement>
            </InputGroup>
            <Button
              w="full"
              variant="primary-white"
              fontWeight="bold"
              size="lg"
              color="steel-blue"
            >
              DONATE
            </Button>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Donate;
