// app/team/[id]/page.tsx
import { notFound } from 'next/navigation'
import fs from 'fs'
import Image from 'next/image'
import { Box, Container, Heading, Text, VStack, HStack, Link, Button, Divider } from '@chakra-ui/react'
import { FaLinkedin } from 'react-icons/fa'
import React from "react";

type TeamMember = {
  id: string
  name: string
  role: string
  background: string[]  // Changed to array of strings
  joining_story: string[]  // Also should be an array based on your usage
  role_description: string[]  // Also should be an array based on your usage
  image: string
  socialLinks: { linkedin?: string }
}

async function getTeamData(): Promise<TeamMember[]> {
  const filePath = 'src/data/teamMembers.json'
  const jsonData = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(jsonData)
}

export async function generateStaticParams() {
  const team = await getTeamData()
  return team.map((member) => ({ id: member.id }))
}

export default async function TeamMemberPage({ params }: { params: { id: string } }) {
  const team = await getTeamData()
  const member = team.find((m) => m.id === params.id)

  if (!member) return notFound()

  return (
    <Container 
      maxW="container.lg" 
      py={{ base: 100, md: 200 }} 
      px={4}
      overflowX="hidden" // Prevent horizontal scrolling
    >
      <HStack 
        spacing={{ base: 4, md: 12 }} 
        align="flex-start"
        flexDir={{ base: "column", md: "row" }} // Stack vertically on mobile
        w="full"
      >
        {/* Image and LinkedIn Section */}
        <VStack spacing={4} w={{ base: "full", md: "auto" }}>
          <Box
            w={{ base: "full", md: 300 }}
            h={{ base: 300, md: 300 }}
            position="relative"
            borderRadius="lg"
            overflow="hidden"
            border="4px solid"
            borderColor="sky-blue"
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </Box>
          {member.socialLinks.linkedin && (
            <Link href={member.socialLinks.linkedin} isExternal w={{ base: "full", md: "300px" }}>
              <Button colorScheme="linkedin" variant="outline" leftIcon={<FaLinkedin />} w="100%">
                Connect on LinkedIn
              </Button>
            </Link>
          )}
        </VStack>

        {/* Content Section */}
        <VStack align="start" spacing={6} w="full" maxW={{ base: "full", md: "2xl" }}>
          {/* Name & Role */}
          <VStack align="start" spacing={1}>
            <Heading as="h1" size="2xl" fontWeight="bold">
              {member.name}
            </Heading>
            <Text fontSize="xl" fontWeight="medium" color="gray.600" fontFamily="mono">
              {member.role}
            </Text>
          </VStack>

          {/* Background Section */}
          <VStack align="start" spacing={3} w="full">
            <Heading as="h2" size="lg">Background</Heading>
            {member.background.map((paragraph, index) => (
              <Text key={index} fontSize="md" color="gray.700" lineHeight="tall" textAlign="justify">
                {paragraph}
              </Text>
            ))}
          </VStack>

          <Divider />

          {/* Why I Joined Section */}
          <VStack align="start" spacing={3} w="full">
            <Heading as="h2" size="lg">Why I Joined</Heading>
            <Text fontSize="md" color="gray.700" lineHeight="tall" fontStyle="italic" textAlign="justify">
              &ldquo;{member.joining_story.map((paragraph, index) => (
                <React.Fragment key={index}>
                  {paragraph}
                  {index < member.joining_story.length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </React.Fragment>
              ))}&rdquo;
            </Text>
          </VStack>

          <Divider />

          {/* Role Description Section */}
          <VStack align="start" spacing={3} w="full">
            <Heading as="h2" size="lg">Role in the Organization</Heading>
            {member.role_description.map((paragraph, index) => (
              <Text key={index} fontSize="md" color="gray.700" lineHeight="tall" textAlign="justify">
                {paragraph}
              </Text>
            ))}
          </VStack>
        </VStack>
      </HStack>
    </Container>
  )
}
