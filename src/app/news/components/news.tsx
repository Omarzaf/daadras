import { Box, Container, Heading, Text, VStack, SimpleGrid, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

import newsData from "../../../data/blogs.json";

function InsightStories() {
  return (
    <Box bg="navy-blue" py={{ base: "16", lg: "24" }}>
      <Container maxW="1140px" px={{ base: "4", lg: "0" }} pt={40}>
        <VStack spacing="8" align="center" textAlign="center">
          <Heading
            color="sky-blue"
            fontSize={{ base: "3xl", lg: "4xl" }}
            textDecor="underline"
          >
            Our Insights
          </Heading>
          <Text color="white" fontSize={{ base: "md", lg: "lg" }} maxW="3xl">
            Stay updated on how Daadras is making a difference across Pakistan.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="10" mt="16">
          {newsData.map((news) => (
            <BlogCard
              key={news.id}
              title={news.title}
              excerpt={news.excerpt}
              date={news.date}
              link={news.link}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function BlogCard({ title, excerpt, date, link }) {
  return (
    <Flex
      direction="column"
      bg="whiteAlpha.100"
      borderRadius="md"
      p="6"
      h="full"
      justify="space-between"
      _hover={{ bg: "whiteAlpha.200", transition: "0.3s" }}
    >
      <Box>
        <Text color="sky-blue" fontSize="sm" fontWeight="bold" mb="2">
          {date}
        </Text>
        <Heading color="white" fontSize="xl" mb="4">
          {title}
        </Heading>
        <Text color="white" fontSize="md" mb="6">
          {excerpt}
        </Text>
      </Box>
      <Link href={link} passHref>
        <Button colorScheme="blue" variant="outline" alignSelf="start">
          Read More
        </Button>
      </Link>
    </Flex>
  );
}

export default InsightStories;
