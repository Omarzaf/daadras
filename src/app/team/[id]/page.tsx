// app/team/[id]/page.tsx
import { notFound } from 'next/navigation'
import fs from 'fs'
import Image from 'next/image'
import { Box, Container, Heading, Text, VStack, HStack, Link, Button, Divider } from '@chakra-ui/react'
import { FaLinkedin } from 'react-icons/fa'

type TeamMember = {
  id: string
  name: string
  role: string
  bio: string
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
    <Container maxW="container.lg" py={200} px={4}>
      <HStack spacing={12} align="flex-start">
        {/* Image and LinkedIn Section */}
        <VStack spacing={4}>
          <Box
            w={200}
            h={200}
            position="relative"
            borderRadius="lg"
            overflow="hidden"
            border="4px solid"
            borderColor="sky-blue"
            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease' }}
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
          {member.socialLinks.linkedin && (
            <Link href={member.socialLinks.linkedin} isExternal>
              <Button colorScheme="linkedin" variant="outline" leftIcon={<FaLinkedin />}>
                Connect on LinkedIn
              </Button>
            </Link>
          )}
        </VStack>

        {/* Content Section */}
        <VStack align="start" spacing={4} maxW="2xl">
          {/* Name & Role */}
          <Heading as="h1" size="2xl" fontWeight="bold">
            {member.name}
          </Heading>
          <Text fontSize="lg" fontWeight="medium" color="gray.600">
            {member.role}
          </Text>

          {/* Bio Section */}
          <Text fontSize="md" color="gray.700" lineHeight="tall">
            {member.bio}
          </Text>

          <Divider my={4} />
        </VStack>
      </HStack>
    </Container>
  )
}
