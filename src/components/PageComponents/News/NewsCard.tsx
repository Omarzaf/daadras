"use client";
import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";
import { CalendarIcon, TimeIcon } from "@chakra-ui/icons";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

interface NewsCardProps {
  article: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    type: string;
    image: string;
    readTime: string;
    link: string;
  };
  variant?: "default" | "featured" | "compact";
}

export default function NewsCard({ article, variant = "default" }: NewsCardProps) {
  if (variant === "featured") {
    return <FeaturedNewsCard article={article} />;
  }

  if (variant === "compact") {
    return <CompactNewsCard article={article} />;
  }

  return <DefaultNewsCard article={article} />;
}

function DefaultNewsCard({ article }) {
  return (
    <Link href={article.link} passHref>
      <Box
        bg="white"
        borderRadius="xl"
        overflow="hidden"
        cursor="pointer"
        transition="all 0.3s"
        h="full"
        boxShadow="sm"
        border="1px"
        borderColor="gray.200"
        position="relative"
        _hover={{
          transform: "translateY(-4px)",
          boxShadow: "lg",
          borderColor: "sky-blue",
        }}
      >
        <Box
          h="180px"
          bg="gray.100"
          position="relative"
          overflow="hidden"
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
        
        <Box p="4" pb="3" h="full" display="flex" flexDirection="column">
          <VStack align="start" spacing="2" flex="1">
            <HStack spacing="3" color="gray.600" fontSize="sm">
              <HStack>
                <CalendarIcon boxSize="12px" />
                <Text>{article.date}</Text>
              </HStack>
              <HStack>
                <TimeIcon boxSize="12px" />
                <Text>{article.readTime}</Text>
              </HStack>
            </HStack>
            
            <Heading color="charcoal" fontSize="lg" lineHeight="1.3" noOfLines={1}>
              {article.title}
            </Heading>
            
            <Box h="4.5rem" overflow="hidden">
              <Text color="gray.700" fontSize="md" opacity="0.9" lineHeight="1.5" noOfLines={3}>
                {article.excerpt}
              </Text>
            </Box>
            
            <HStack spacing="3" color="gray.600" fontSize="sm">
              <HStack>
                <FaUser fontSize="12px" />
                <Text>{article.author}</Text>
              </HStack>
            </HStack>
          </VStack>
          
          <VStack align="start" spacing="2" mt="auto">
            <HStack spacing="2">
              <Box
                bg="sky-blue"
                color="white"
                px="2"
                py="1"
                borderRadius="full"
                fontSize="xs"
                fontWeight="bold"
              >
                {article.category}
              </Box>
              <Box
                bg="steel-blue"
                color="white"
                px="2"
                py="1"
                borderRadius="full"
                fontSize="xs"
                fontWeight="bold"
                textTransform="capitalize"
              >
                {article.type}
              </Box>
            </HStack>
            
            <Button variant="primary-sky-blue" size="sm" alignSelf="start">
              Read More
            </Button>
          </VStack>
        </Box>
        
        <Box
          position="absolute"
          bottom="3"
          right="3"
          bg="charcoal"
          color="white"
          px="2"
          py="1"
          borderRadius="full"
          fontSize="xs"
          fontWeight="bold"
          textTransform="capitalize"
          zIndex="1"
        >
          {article.type}
        </Box>
      </Box>
    </Link>
  );
}

function FeaturedNewsCard({ article }) {
  return (
    <Link href={article.link} passHref>
      <Box
        bg="white"
        borderRadius="xl"
        overflow="hidden"
        cursor="pointer"
        transition="all 0.3s"
        boxShadow="sm"
        border="1px"
        borderColor="gray.200"
        position="relative"
        _hover={{
          transform: "translateY(-4px)",
          boxShadow: "lg",
          borderColor: "sky-blue",
        }}
      >
        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          h="full"
        >
          <Box
            h="280px"
            bg="gray.100"
            position="relative"
            overflow="hidden"
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
          
          <Box p="5" pb="4" display="flex" flexDirection="column" justify="center">
            <VStack align="start" spacing="3">
              <HStack spacing="4" color="gray.600" fontSize="sm">
                <HStack>
                  <CalendarIcon boxSize="12px" />
                  <Text>{article.date}</Text>
                </HStack>
                <HStack>
                  <TimeIcon boxSize="12px" />
                  <Text>{article.readTime}</Text>
                </HStack>
              </HStack>
              
              <Heading color="charcoal" fontSize="2xl" lineHeight="1.2" noOfLines={1}>
                {article.title}
              </Heading>
              
              <Box h="5.25rem" overflow="hidden">
                <Text color="gray.700" fontSize="lg" opacity="0.9" lineHeight="1.5" noOfLines={3}>
                  {article.excerpt}
                </Text>
              </Box>
              
              <HStack spacing="4" color="gray.600" fontSize="sm">
                <HStack>
                  <FaUser fontSize="12px" />
                  <Text>{article.author}</Text>
                </HStack>
              </HStack>
              
              <HStack spacing="2">
                <Box
                  bg="sky-blue"
                  color="white"
                  px="3"
                  py="1"
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="bold"
                >
                  {article.category}
                </Box>
                <Box
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
                </Box>
              </HStack>
              
              <Button variant="primary-sky-blue">
                Read Full Article
              </Button>
            </VStack>
          </Box>
        </Box>
        
        <Box
          position="absolute"
          bottom="4"
          right="4"
          bg="charcoal"
          color="white"
          px="3"
          py="1"
          borderRadius="full"
          fontSize="sm"
          fontWeight="bold"
          textTransform="capitalize"
          zIndex="1"
        >
          {article.type}
        </Box>
      </Box>
    </Link>
  );
}

function CompactNewsCard({ article }) {
  return (
    <Link href={article.link} passHref>
      <Box
        bg="white"
        borderRadius="lg"
        p="2"
        cursor="pointer"
        transition="all 0.3s"
        boxShadow="sm"
        border="1px"
        borderColor="gray.200"
        _hover={{
          bg: "pale-aqua",
          transform: "translateY(-2px)",
          borderColor: "sky-blue",
        }}
      >
        <VStack align="start" spacing="2">
          <HStack justify="space-between" w="full">
            <Text color="charcoal" fontSize="sm" fontWeight="bold" noOfLines={1} flex="1">
              {article.title}
            </Text>
            <Box
              bg="steel-blue"
              color="white"
              px="2"
              py="1"
              borderRadius="full"
              fontSize="xs"
              fontWeight="bold"
              textTransform="capitalize"
              flexShrink="0"
            >
              {article.type}
            </Box>
          </HStack>
          <Box h="2.25rem" overflow="hidden">
            <Text color="gray.600" fontSize="xs" lineHeight="1.5" noOfLines={2}>
              {article.excerpt}
            </Text>
          </Box>
          <HStack spacing="2" color="gray.500" fontSize="xs">
            <CalendarIcon boxSize="10px" />
            <Text>{article.date}</Text>
          </HStack>
        </VStack>
      </Box>
    </Link>
  );
} 