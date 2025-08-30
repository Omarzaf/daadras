import { Box, Container, Heading, Text, VStack, HStack, Image, Button, SimpleGrid, Avatar, Tag } from "@chakra-ui/react";
import React from "react";

export default function ProjectSalamPage() {
  return (
    <Box bg="ghostwhite" minH="100vh" py={{ base: 8, md: 16 }}>
      {/* Hero Section */}
      <Container maxW="5xl" centerContent mb={12}>
        <VStack spacing={4}>
          <Image src="/assets/Salam Logo-01.png" alt="Project Salam Logo" boxSize={{ base: "80px", md: "120px" }} />
          <Heading as="h1" size="2xl" color="navy-blue" textAlign="center">
            Project Salam
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="charcoal" textAlign="center" maxW="3xl">
            Holistic, adaptive, and inclusive education for a brighter future. Project Salam empowers underprivileged students through innovative learning and community support.
          </Text>
        </VStack>
      </Container>

      {/* About Section */}
      <Container maxW="4xl" mb={16}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg" color="steel-blue">
            About Project Salam
          </Heading>
          <Text color="charcoal" fontSize="lg">
            Project Salam is Daadras Foundation's flagship education initiative, designed to break the cycle of poverty through accessible, quality learning. Our approach is holistic—addressing academic, emotional, and social needs—while remaining adaptive to each child's context. We believe in inclusivity, ensuring every student, regardless of background, can thrive.
          </Text>
        </VStack>
      </Container>

      {/* Phases Section */}
      <Container maxW="6xl" mb={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <VStack align="start" spacing={4} bg="pale-aqua" p={6} rounded="xl">
            <Tag colorScheme="blue" size="lg">Salam 1.0</Tag>
            <Heading as="h3" size="md" color="navy-blue">Pilot Phase</Heading>
            <Text color="charcoal">
              Launched as a pilot, Salam 1.0 focused on foundational literacy and numeracy, using a flexible curriculum and community-based learning. Key learnings included the importance of mentorship, adaptive pacing, and family engagement.
            </Text>
          </VStack>
          <VStack align="start" spacing={4} bg="sky-blue" p={6} rounded="xl">
            <Tag colorScheme="blue" size="lg">Salam 2.0</Tag>
            <Heading as="h3" size="md" color="navy-blue">Expansion & Evolution</Heading>
            <Text color="charcoal">
              Building on the pilot, Salam 2.0 introduced digital resources, expanded the curriculum, and strengthened operational processes. The program now supports more students, with a focus on sustainability and measurable impact.
            </Text>
          </VStack>
        </SimpleGrid>
      </Container>

      {/* Impact Section (Placeholder) */}
      <Container maxW="4xl" mb={16}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg" color="steel-blue">
            Impact Highlights
          </Heading>
          <Text color="charcoal" fontSize="lg">
            • 20+ students financially assisted<br />
            • 2 phases completed<br />
            • Community-driven, adaptive curriculum<br />
            {/* Add more stats as available */}
          </Text>
        </VStack>
      </Container>

      {/* Team Section (Placeholder) */}
      <Container maxW="4xl" mb={16}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg" color="steel-blue">
            Meet the Team
          </Heading>
          <HStack spacing={6}>
            <Avatar size="xl" name="Arooj (Project Director)" src="/assets/team_photos/project_director_salam_arooj.png" />
            <Box>
              <Text fontWeight="bold" color="navy-blue">Arooj</Text>
              <Text color="charcoal">Project Director, Salam</Text>
            </Box>
            {/* Add more team members as needed */}
          </HStack>
        </VStack>
      </Container>

      {/* Collaborators Section (Placeholder) */}
      <Container maxW="4xl" mb={16}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg" color="steel-blue">
            Collaborators
          </Heading>
          <HStack spacing={8}>
            <Image src="/assets/collaborator_logos/Spreading_Smiles.png" alt="Spreading Smiles" boxSize="80px" />
            {/* Add more collaborator logos as needed */}
          </HStack>
        </VStack>
      </Container>

      {/* Call to Action */}
      <Container maxW="3xl" centerContent>
        <VStack spacing={4}>
          <Heading as="h2" size="md" color="navy-blue" textAlign="center">
            Support Project Salam
          </Heading>
          <Text color="charcoal" textAlign="center">
            Join us in making a difference. Your support helps us reach more children and transform lives through education.
          </Text>
          <Button colorScheme="blue" size="lg" as="a" href="/donate">
            Donate Now
          </Button>
        </VStack>
      </Container>
    </Box>
  );
} 