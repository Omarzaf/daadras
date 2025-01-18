"use client";
import React from "react";
import HeaderLogo from "../header-logo";
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
                py={{ base: "2", lg: "4" }}
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
                    icon={<IoMdMenu size={28} />}
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
                <Button
                  variant="primary-blue"
                  px="8"
                  as={Link}
                  href="/donate"
                  _hover={{ textDecor: "none" }}
                >
                  Donate
                </Button>
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
    >
      <Link href="/" _hover={{ textDecor: "none" }}>
        Home
      </Link>
      <Link href="/about" _hover={{ textDecor: "none" }}>
        About Us
      </Link>
      <Link href="/what-we-do" _hover={{ textDecor: "none" }}>
        What We Do
      </Link>
      <Link href="/contact" _hover={{ textDecor: "none" }}>
        Contact
      </Link>
    </HStack>
  );
}

export default Header;
