"use client";
import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  Icon,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box bg="ghost-white" minH="100vh" py={{ base: "16", lg: "24" }}>
      <Container maxW="1140px" px={{ base: "4", lg: "0" }} pt={40}>
        <VStack spacing="8" align="center" textAlign="center" py="20">
          <Icon as={SearchIcon} w="20" h="20" color="sky-blue" />
          
          <Heading color="steel-blue" fontSize={{ base: "3xl", lg: "4xl" }}>
            Article Not Found
          </Heading>
          
          <Text color="charcoal" fontSize={{ base: "lg", lg: "xl" }} maxW="2xl" opacity="0.8">
            The article you&apos;re looking for doesn&apos;t exist or may have been moved. 
            Please check the URL or browse our latest articles below.
          </Text>
          
          <Link href="/news" passHref>
            <Button variant="primary-sky-blue" size="lg">
              Back to News
            </Button>
          </Link>
        </VStack>
      </Container>
    </Box>
  );
} 