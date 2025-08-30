"use client";
import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Image,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Flex,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay,
  Avatar,
} from "@chakra-ui/react";
import { ChevronRightIcon, CalendarIcon, TimeIcon, ArrowBackIcon } from "@chakra-ui/icons";
// import { FaUser, FaShare, FaPrint, FaBookmark } from "react-icons/fa";
import Link from "next/link";
import newsData from "../../../data/blogs.json";

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `News Article - Daadras`,
    description: "News article from Daadras",
    robots: "noindex, nofollow",
  };
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: PageProps) {
  // Find the article by slug
  const article = newsData.find(
    (item) => item.link === `/news/${params.slug}`
  );

  if (!article) {
    notFound();
  }

  // Get suggested articles (prioritize related by category, then fill with recent)
  const relatedArticles = newsData
    .filter((item) => item.category === article.category && item.id !== article.id)
    .slice(0, 3);

  const recentArticles = newsData
    .filter((item) => item.id !== article.id && !relatedArticles.find(related => related.id === item.id))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3 - relatedArticles.length);

  const suggestedArticles = [...relatedArticles, ...recentArticles].slice(0, 3);

  return (
    <Box bg="ghost-white" minH="100vh" py={{ base: "16", lg: "24" }}>
      <Container maxW="1140px" px={{ base: "4", lg: "0" }} pt={40}>
        {/* Breadcrumb */}
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.400" />}
          mb="8"
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href="/news" color="sky-blue">
              News
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink color="gray.600">{article.category}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="gray.600">{article.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* Back Button */}
        <Link href="/news" passHref>
          <Button
            leftIcon={<ArrowBackIcon />}
            variant="ghost"
            color="sky-blue"
            mb="8"
            _hover={{ bg: "pale-aqua" }}
          >
            Back to News
          </Button>
        </Link>

        <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap="12">
          {/* Main Article Content */}
          <GridItem>
            <VStack align="start" spacing="8">
              {/* Article Header */}
              <Box w="full" bg="white" p="8" borderRadius="xl" boxShadow="sm" border="1px" borderColor="gray.200">
                <HStack spacing="3" mb="4">
                  <Badge
                    bg="sky-blue"
                    color="white"
                    px="3"
                    py="1"
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="bold"
                  >
                    {article.category}
                  </Badge>
                  <Badge
                    bg="steel-blue"
                    color="white"
                    px="3"
                    py="1"
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    {article.type}
                  </Badge>
                </HStack>
                
                <Heading color="charcoal" fontSize={{ base: "3xl", lg: "4xl" }} mb="6" lineHeight="1.2">
                  {article.title}
                </Heading>
                
                <HStack spacing="6" color="gray.600" fontSize="md" mb="6">
                  <HStack>
                    <CalendarIcon />
                    <Text>{article.date}</Text>
                  </HStack>
                  <HStack>
                    <TimeIcon />
                    <Text>{article.readTime}</Text>
                  </HStack>
                </HStack>

                {/* Author Information */}
                <Box 
                  bg="pale-aqua" 
                  p="4" 
                  borderRadius="lg" 
                  border="1px" 
                  borderColor="sky-blue"
                >
                  <HStack spacing="4">
                    <Avatar
                      size="md"
                      src={article.authorImage || "/assets/placeholder-avatar.jpg"}
                      name={article.author}
                      bg="sky-blue"
                      color="white"
                    />
                    <VStack align="start" spacing="1">
                      <Text color="charcoal" fontWeight="bold" fontSize="md">
                        {article.author}
                      </Text>
                      <Text color="gray.600" fontSize="sm">
                        Daadras Foundation
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              </Box>

              {/* Featured Image */}
              <Box
                w="full"
                h="400px"
                bg="gray.100"
                borderRadius="xl"
                overflow="hidden"
                position="relative"
                boxShadow="sm"
                border="1px"
                borderColor="gray.200"
              >
                <Image
                  src={article.image || "/assets/placeholder-news.jpg"}
                  alt={article.title}
                  w="full"
                  h="full"
                  objectFit="cover"
                  fallbackSrc="/assets/placeholder-news.jpg"
                />
              </Box>

              {/* Article Content */}
              <Box w="full" bg="white" p="8" borderRadius="xl" boxShadow="sm" border="1px" borderColor="gray.200">
                <Text
                  color="charcoal"
                  fontSize="lg"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                  opacity="0.95"
                >
                  {article.content}
                </Text>
              </Box>

              {/* Article Footer */}
              <Box w="full" bg="white" p="6" borderRadius="xl" boxShadow="sm" border="1px" borderColor="gray.200">
                <Divider borderColor="gray.200" mb="6" />
                
                <Flex w="full" justify="space-between" align="center">
                  <Text color="gray.600" fontSize="sm">
                    Published on {article.date}
                  </Text>
                  <Link href="/news" passHref>
                    <Button variant="primary-sky-blue" size="sm">
                      Back to All Articles
                    </Button>
                  </Link>
                </Flex>
              </Box>
            </VStack>
          </GridItem>

          {/* Sidebar */}
          <GridItem>
            <VStack align="start" spacing="8" position="sticky" top="120px">
              {/* Suggested Articles */}
              {suggestedArticles.length > 0 && (
                <Box w="full" bg="white" p="6" borderRadius="xl" boxShadow="sm" border="1px" borderColor="gray.200">
                  <Heading color="steel-blue" fontSize="xl" mb="6">
                    Suggested Articles
                  </Heading>
                  <VStack spacing="4" align="start">
                    {suggestedArticles.map((suggestedArticle) => (
                      <LinkBox
                        key={suggestedArticle.id}
                        bg="pale-aqua"
                        borderRadius="lg"
                        p="4"
                        w="full"
                        cursor="pointer"
                        transition="all 0.3s"
                        _hover={{
                          bg: "sky-blue",
                          color: "white",
                          transform: "translateY(-2px)",
                        }}
                      >
                        <LinkOverlay as={Link} href={suggestedArticle.link}>
                          <VStack align="start" spacing="2">
                            <HStack spacing="2" w="full">
                              <Badge
                                bg="steel-blue"
                                color="white"
                                px="2"
                                py="1"
                                borderRadius="full"
                                fontSize="xs"
                                fontWeight="bold"
                                textTransform="capitalize"
                              >
                                {suggestedArticle.type}
                              </Badge>
                              <Text color="gray.500" fontSize="xs">
                                {suggestedArticle.date}
                              </Text>
                            </HStack>
                            <Text color="charcoal" fontSize="sm" fontWeight="bold" noOfLines={2}>
                              {suggestedArticle.title}
                            </Text>
                            <Text color="gray.600" fontSize="xs" noOfLines={2}>
                              {suggestedArticle.excerpt}
                            </Text>
                          </VStack>
                        </LinkOverlay>
                      </LinkBox>
                    ))}
                  </VStack>
                </Box>
              )}
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
} 