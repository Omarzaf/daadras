"use client";
import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Button,
  Badge,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";
import NewsCard from "../News/NewsCard";
import newsData from "../../../data/blogs.json";

function FeaturedNews() {
  // Get featured articles sorted by date (most recent first) and limit to 3
  const featuredArticles = newsData
    .filter(article => article.featured === true)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <Box bg="white" py={{ base: "16", lg: "24" }}>
      <Container maxW="1140px" px={{ base: "4", lg: "0" }}>
        <VStack spacing="12" align="center">
          {/* Header Section */}
          <VStack spacing="6" textAlign="center" maxW="3xl">
            <Badge
              bg="sky-blue"
              color="white"
              px="4"
              py="2"
              borderRadius="full"
              fontSize="sm"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              Latest Updates
            </Badge>
            
            <Heading
              color="steel-blue"
              fontSize={{ base: "3xl", lg: "4xl" }}
              fontWeight="bold"
              lineHeight="1.2"
            >
              Stay Connected with Our Impact
            </Heading>
            
            <Text
              color="charcoal"
              fontSize={{ base: "lg", lg: "xl" }}
              opacity="0.8"
              lineHeight="1.6"
            >
              Discover our latest initiatives, success stories, and the transformative impact we&apos;re creating in communities across Pakistan.
            </Text>
          </VStack>

          {/* Featured Articles Grid */}
          <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 3 }} 
            spacing="8" 
            w="full"
            mb="12"
          >
            {featuredArticles.map((article) => (
              <Box
                key={article.id}
                transition="all 0.3s"
                _hover={{ transform: "translateY(-4px)" }}
              >
                <NewsCard 
                  article={article} 
                  variant="default" 
                />
              </Box>
            ))}
          </SimpleGrid>

          {/* Call to Action */}
          <VStack spacing="6">
            <Text 
              color="charcoal" 
              fontSize="lg" 
              textAlign="center"
              opacity="0.8"
              maxW="2xl"
            >
              Be part of our journey to create lasting change. Explore more stories and stay updated with all our initiatives.
            </Text>
            
            <HStack spacing="4" flexWrap="wrap" justify="center">
              <Link href="/news" passHref>
                <Button
                  variant="primary-sky-blue"
                  size="lg"
                  rightIcon={<ChevronRightIcon />}
                  _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                  transition="all 0.3s"
                >
                  View All News
                </Button>
              </Link>
              <Link href="/about" passHref>
                <Button
                  variant="outline"
                  color="steel-blue"
                  borderColor="steel-blue"
                  size="lg"
                  _hover={{ bg: "steel-blue", color: "white" }}
                  transition="all 0.3s"
                >
                  Learn About Us
                </Button>
              </Link>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}

export default FeaturedNews; 