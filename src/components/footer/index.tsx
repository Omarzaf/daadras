import React from "react";
import FooterLogo from "../footer-logo";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

function Footer() {
  return (
    <footer>
      <Box bg="steel-blue">
        <Container p="0" w={{ base: "full", lg: "1140px" }} maxW="1140px">
          <HStack
            flexDir={{ base: "column", lg: "row" }}
            w="full"
            spacing="0"
            py={{ base: "12", lg: "20" }}
            px="6"
          >
            <HStack
              w={{ base: "full", lg: "20%" }}
              justifyContent={{ base: "center", lg: "flex-end" }}
            >
              <FooterLogo />
            </HStack>
            <VStack w={{ base: "full", lg: "38%" }} color="white">
              <SimpleGrid columns={3} gap="6">
                <VStack
                  w="full"
                  alignItems="flex-start"
                  spacing={{ base: "2", lg: "4" }}
                >
                  <Text fontSize="lg" fontWeight="medium">
                    Home
                  </Text>
                  <Link href="/about" fontSize="sm" opacity="0.78">
                    About Us
                  </Link>
                  <Link href="/what-we-do" fontSize="sm" opacity="0.78">
                    What We Do
                  </Link>
                  <Link href="/contact" fontSize="sm" opacity="0.78">
                    Contact
                  </Link>
                </VStack>
                <VStack
                  w="full"
                  alignItems="flex-start"
                  spacing={{ base: "2", lg: "4" }}
                >
                  <Text fontSize="lg" fontWeight="medium">
                    More
                  </Text>
                  <Link href="/" fontSize="sm" opacity="0.78">
                    Projects
                  </Link>
                  <Link href="/" fontSize="sm" opacity="0.78">
                    Events
                  </Link>
                  <Link href="/donate" fontSize="sm" opacity="0.78">
                    Donate
                  </Link>
                  <Link href="/" fontSize="sm" opacity="0.78">
                    Blog
                  </Link>
                </VStack>
                <VStack
                  w="full"
                  alignItems="flex-start"
                  spacing={{ base: "2", lg: "4" }}
                >
                  <Text fontSize="lg" fontWeight="medium">
                    Connect
                  </Text>
                  <Link href="/" fontSize="sm" opacity="0.78">
                    Facebook
                  </Link>
                  <Link href="/" fontSize="sm" opacity="0.78">
                    Instagram
                  </Link>
                  <Link href="/" fontSize="sm" opacity="0.78">
                    Twitter
                  </Link>
                  <Link href="/" fontSize="sm" opacity="0.78">
                    Linkedin
                  </Link>
                </VStack>
              </SimpleGrid>
            </VStack>
            <HStack
              w={{ base: "full", lg: "42%" }}
              mt={{ base: "12", lg: "0" }}
            >
              <VStack
                w="full"
                alignItems={{ base: "center", lg: "flex-start" }}
                spacing="4"
              >
                <Heading
                  color="white"
                  pr={{ base: "0", lg: "12" }}
                  fontSize={{ base: "2xl", lg: "4xl" }}
                  textAlign={{ base: "center", lg: "left" }}
                >
                  Subscribe to get latest updates
                </Heading>
                <InputGroup size="md">
                  <Input
                    rounded="sm"
                    pr="4.5rem"
                    border="1px"
                    size="lg"
                    borderColor="snow-white"
                    color="snow-white"
                    fontSize="sm"
                    placeholder="Your Email"
                    _active={{
                      boxShadow: "none",
                    }}
                    _focus={{
                      borderColor: "snow-white",
                      boxShadow: "none",
                    }}
                  />
                  <InputRightElement minW="7rem">
                    <Button
                      variant="primary-white"
                      h="12"
                      w="full"
                      size="sm"
                      mt="2"
                      mr="-12px"
                    >
                      Subscribe
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </VStack>
            </HStack>
          </HStack>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
