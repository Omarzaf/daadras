"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Button,
  Flex,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import NewsCard from "./NewsCard";
import newsData from "../../../data/blogs.json";

function InsightStories() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeTab, setActiveTab] = useState(0);
  const [articlesToShow, setArticlesToShow] = useState({
    all: 6,
    news: 6,
    story: 6,
    analysis: 6,
    featured: 6,
  });

  // Fix: Avoid spreading Set directly, use Array.from to get array of unique categories
  const categories = ["All", ...Array.from(new Set(newsData.map(item => item.category)))];

  // Filter by search and category
  const filteredNews = newsData.filter(news => {
    const matchesCategory = selectedCategory === "All" || news.category === selectedCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Group by type
  const allArticles = filteredNews;
  const newsUpdates = filteredNews.filter(article => article.type === "news");
  const storyArticles = filteredNews.filter(article => article.type === "story");
  const analyticalArticles = filteredNews.filter(article => article.type === "analysis");
  const featuredArticles = filteredNews.filter(article => article.featured === true);

  const tabData = [
    { name: "All", articles: allArticles, key: "all" },
    { name: "Featured", articles: featuredArticles, key: "featured" },
    { name: "News Updates", articles: newsUpdates, key: "news" },
    { name: "Story Articles", articles: storyArticles, key: "story" },
    { name: "Analytical Articles", articles: analyticalArticles, key: "analysis" },
  ];

  const handleLoadMore = (tabKey: string) => {
    setArticlesToShow(prev => ({
      ...prev,
      [tabKey]: prev[tabKey as keyof typeof prev] + 6
    }));
  };

  const resetArticlesToShow = () => {
    setArticlesToShow({
      all: 6,
      news: 6,
      story: 6,
      analysis: 6,
      featured: 6,
    });
  };

  return (
    <Box bg="pale-aqua" minH="100vh" py={{ base: "8", lg: "12" }}>
      <Container maxW="1140px" px={{ base: "4", lg: "0" }} pt={32}>
        {/* Header Section */}
        <VStack spacing="6" align="center" textAlign="center" mb="10">
          {/* Decorative line */}
          <Box w="60px" h="4px" bg="sky-blue" borderRadius="full" />
          
          <VStack spacing="3">
            <Heading
              color="steel-blue"
              fontSize={{ base: "3xl", lg: "4xl" }}
              fontWeight="bold"
              lineHeight="1.1"
            >
              Our Insights
            </Heading>
            <Text 
              color="sky-blue" 
              fontSize={{ base: "md", lg: "lg" }} 
              fontWeight="medium"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              Latest News & Stories
            </Text>
          </VStack>
          
          <Text 
            color="charcoal" 
            fontSize={{ base: "sm", lg: "md" }} 
            maxW="2xl" 
            opacity="0.8"
            lineHeight="1.6"
          >
            Stay updated on how Daadras is making a difference across Pakistan. 
            Discover our latest initiatives, success stories, and community impact.
          </Text>
          
          {/* Decorative line */}
          <Box w="40px" h="2px" bg="pale-aqua" borderRadius="full" />
        </VStack>

        {/* Search and Filter Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          gap="3"
          mb="8"
          justify="space-between"
          align={{ base: "stretch", md: "center" }}
        >
          <InputGroup maxW={{ base: "full", md: "400px" }}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.500" />
            </InputLeftElement>
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                resetArticlesToShow();
              }}
              bg="white"
              color="charcoal"
              borderColor="gray.200"
              _placeholder={{ color: "gray.500" }}
              _focus={{
                borderColor: "sky-blue",
                boxShadow: "0 0 0 1px var(--chakra-colors-sky-blue)",
              }}
            />
          </InputGroup>
          <Select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              resetArticlesToShow();
            }}
            bg="white"
            color="charcoal"
            borderColor="gray.200"
            maxW={{ base: "full", md: "200px" }}
            _focus={{
              borderColor: "sky-blue",
              boxShadow: "0 0 0 1px var(--chakra-colors-sky-blue)",
            }}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </Select>
        </Flex>

        {/* Tabs Section */}
        <Tabs 
          variant="soft-rounded" 
          colorScheme="blue" 
          index={activeTab}
          onChange={(index) => {
            setActiveTab(index);
            resetArticlesToShow();
          }}
          mb="6"
        >
          <TabList 
            bg="white" 
            borderRadius="lg" 
            p="2"
            flexWrap="wrap"
            justifyContent="center"
            boxShadow="sm"
            border="1px"
            borderColor="gray.200"
          >
            {tabData.map((tab, index) => (
              <Tab
                key={index}
                color="charcoal"
                _selected={{
                  bg: "sky-blue",
                  color: "white",
                  fontWeight: "bold",
                }}
                _hover={{
                  bg: "pale-aqua",
                }}
                borderRadius="md"
                fontSize={{ base: "sm", md: "md" }}
                px={{ base: "3", md: "5" }}
                py="2"
              >
                {tab.name} ({tab.articles.length})
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            {tabData.map((tab, index) => (
              <TabPanel key={index} px="0" pt="6">
                {tab.articles.length > 0 ? (
                  <VStack spacing="6" align="stretch">
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
                      {tab.articles.slice(0, articlesToShow[tab.key as keyof typeof articlesToShow]).map((article) => (
                        <NewsCard key={article.id} article={article} variant="default" />
                      ))}
                    </SimpleGrid>
                    
                    {/* Load More Button */}
                    {tab.articles.length > articlesToShow[tab.key as keyof typeof articlesToShow] && (
                      <Flex justify="center" pt="4">
                        <Button
                          variant="outline"
                          color="steel-blue"
                          borderColor="steel-blue"
                          _hover={{ bg: "steel-blue", color: "white" }}
                          onClick={() => handleLoadMore(tab.key)}
                        >
                          Load More Articles
                        </Button>
                      </Flex>
                    )}
                  </VStack>
                ) : (
                  <VStack spacing="4" py="12" textAlign="center">
                    <Text color="charcoal" fontSize="lg">
                      No articles found in this category.
                    </Text>
                    <Button
                      variant="primary-sky-blue"
                      onClick={() => {
                        setSelectedCategory("All");
                        setSearchQuery("");
                        setActiveTab(0);
                        resetArticlesToShow();
                      }}
                    >
                      View All Articles
                    </Button>
                  </VStack>
                )}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
}

export default InsightStories;
