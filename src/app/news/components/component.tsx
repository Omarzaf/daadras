import { Box, Container, Heading, Text, VStack, SimpleGrid, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

const newsData = [
  {
    id: 1,
    title: "Launching Our New Education Initiative",
    excerpt: "Daadras is proud to announce a new program aimed at increasing literacy rates in remote communities.",
    date: "April 25, 2025",
    link: "/news/education-initiative",
  },
  {
    id: 2,
    title: "Responding to the Winter Humanitarian Crisis",
    excerpt: "Providing emergency shelter and aid to families affected by severe winters in northern regions.",
    date: "March 10, 2025",
    link: "/news/winter-crisis-response",
  },
  {
    id: 3,
    title: "Economic Empowerment Project: 500 Women Trained",
    excerpt: "Celebrating the success of our skills training workshops across three provinces.",
    date: "February 5, 2025",
    link: "/news/women-empowerment",
  },
];

function NewsAndUpdates() {
  return (
    <Box bg="navy-blue" py={{ base: "16", lg: "24" }}>
      <Container maxW="1140px" px={{ base: "4", lg: "0" }} pt={40}>
        <VStack spacing="8" align="center" textAlign="center">
          <Heading
            color="sky-blue"
            fontSize={{ base: "3xl", lg: "4xl" }}
            textDecor="underline"
          >
            News & Updates
          </Heading>
          <Text color="white" fontSize={{ base: "md", lg: "lg" }} maxW="3xl">
            Stay updated on how Daadras is making a difference across Pakistan.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="10" mt="16">
          {newsData.map((news) => (
            <NewsCard
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

function NewsCard({ title, excerpt, date, link }) {
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

export default NewsAndUpdates;
