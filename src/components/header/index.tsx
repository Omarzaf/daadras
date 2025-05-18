"use client";
import React from "react";
import HeaderLogo from "./HeaderLogo";
import {
  Button,
  Container,
  HStack,
  Link,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <header>
        <HStack
          w="full"
          bg="white"
          justifyContent="center"
          pos="fixed"
          zIndex={1}
        >
          <Box w="full" boxShadow="md">
            <Container p="0" w={{ base: "full", lg: "1140px" }} maxW="1140px">
              <HStack
                as="nav"
                w="full"
                justifyContent="space-between"
                py={{ base: "3", lg: "6" }}
                px={{ base: "4", lg: "0" }}
              >
                <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                      <Link href="/">
                        <HeaderLogo />
                      </Link>
                    </DrawerHeader>
                    <DrawerBody pl="9" pt="4">
                      <NavLinks />
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
                <HStack>
                  <IconButton
                    aria-label="menu"
                    icon={<IoMdMenu size={32} />}
                    onClick={onOpen}
                    variant="primary-flat"
                    display={{ base: "flex", lg: "none" }}
                  />
                  <Link href="/">
                    <HeaderLogo />
                  </Link>
                </HStack>
                <Box display={{ base: "none", lg: "block" }}>
                  <NavLinks />
                </Box>
                <HStack spacing={4}>
                  <Link
                    href="https://pk.linkedin.com/company/daadras-foundation-ngo"
                    isExternal
                  >
                    <IconButton
                      aria-label="LinkedIn"
                      icon={<FaLinkedin size={28} />}
                      variant="ghost"
                      color="steel-blue"
                      _hover={{ bg: "gray.100" }}
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/daadrasfoundation/"
                    isExternal
                  >
                    <IconButton
                      aria-label="Instagram"
                      icon={<FaInstagram size={28} />}
                      variant="ghost"
                      color="steel-blue"
                      _hover={{ bg: "gray.100" }}
                    />
                  </Link>
                  <Button
                    variant="primary-blue"
                    px="8"
                    py="6"
                    fontSize="lg"
                    as={Link}
                    href="/donate"
                    _hover={{ textDecor: "none" }}
                  >
                    Ways to Give
                  </Button>
                </HStack>
              </HStack>
            </Container>
          </Box>
        </HStack>
      </header>
    </>
  );
}

function NavLinks() {
  return (
    <HStack
      color="charcoal"
      spacing="8"
      flexDir={{ base: "column", lg: "row" }}
      alignItems={{ base: "flex-start", lg: "center" }}
      fontSize="lg"
    >
      <Link href="/" _hover={{ textDecor: "none" }}>
        Home
      </Link>
      <Link href="/what-we-do" _hover={{ textDecor: "none" }}>
        What We Do
      </Link>
      <Link href="/our-team" _hover={{ textDecor: "none" }}>
        Our Team
      </Link>
      <Link href="/contact" _hover={{ textDecor: "none" }}>
        Contact Us
      </Link>
    </HStack>
  );
}

export default Header;
