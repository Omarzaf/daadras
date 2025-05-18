import React from "react";
import {
  Box,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

function AboutUs() {
  return (
    <>
      <Box bg="white" pt="24">
        <Container
          px={{ base: "4", lg: "0" }}
          py={{ base: "12", lg: "24" }}
          w={{ base: "full", lg: "1140px" }}
          maxW="1140px"
        >
          <VStack alignItems="flex-start" spacing="8">
            <Heading
              color="black"
              fontSize={{ base: "3xl", lg: "4xl" }}
              w="75%"
              textTransform="capitalize"
            >
              About us
            </Heading>
            <Text
              mt={{ base: "2", lg: "4" }}
              color="black"
              fontWeight="bold"
              fontSize="xl"
              textDecor="underline"
            >
              who we are
            </Text>

            <Box pos="relative" w="full" aspectRatio={16 / 9}>
              <Image
                objectFit="cover"
                src="/assets/hero.png"
                fill
                alt="Picture of the author"
              />
            </Box>
            <Link
              w="full"
              textAlign="right"
              href="/"
              color="black"
              fontWeight="bold"
              fontSize="xl"
              textDecor="underline"
            >
              Sign up for our Newsletter...
            </Link>
          </VStack>
        </Container>
      </Box>

      <Box bg="navy-blue">
        <Container
          px={{ base: "4", lg: "0" }}
          py={{ base: "12", lg: "24" }}
          w={{ base: "full", lg: "1140px" }}
          maxW="1140px"
        >
          <VStack alignItems="flex-start" spacing="8">
            <Text
              color="white"
              fontWeight={{ base: "medium", lg: "bold" }}
              fontSize={{ base: "lg", lg: "xl" }}
            >
              Daadras Is A Non-Profit Organization Started In Pakistan In 2020.
              We Partner With 95 Million People Facing Poverty And Inequality To
              Help Them Reach Their Due Rights And Full Potential. Composed Of
              Volunteers From Diverse Walks Of Life, We Share A Comprehensive
              Approach To Lasting Change. In Pakistan, Daadras Works In
              Marginalized And Hard-To-Reach Areas, Especially Focusing On
              Poverty Alleviation. Our Mission Is To Create Lasting Change By
              Addressing Key Issues Such As Education, Humanitarian Crisis, And
              Economic Empowerment.
            </Text>

            <Text
              color="white"
              fontWeight={{ base: "medium", lg: "bold" }}
              fontSize={{ base: "lg", lg: "xl" }}
            >
              Founded On The Principles Of Equity, Integrity, And Collaboration,
              The Daadras Foundation Works Tirelessly To Bridge Gaps And Provide
              Essential Resources To Those In Need. Our Team Comprises
              Passionate Professionals, Volunteers, And Partners Who Share A
              Common Vision Of A More Equitable And Just World.
            </Text>

            <Box>
              <Text
                color="white"
                fontWeight={{ base: "medium", lg: "bold" }}
                fontSize={{ base: "lg", lg: "xl" }}
              >
                Through Our Diverse Programs And Initiatives, We Strive To:
              </Text>
              <List>
                <UnorderedList>
                  <ListItem
                    mb="1"
                    color="white"
                    fontWeight={{ base: "medium", lg: "bold" }}
                    fontSize={{ base: "lg", lg: "xl" }}
                  >
                    Enhance Educational Opportunities: By Providing Cognitive
                    And Instrumental Skill-Based Workshops, Offering Vocational
                    Training To Campus Ambassadors, And Financial Support To
                    Students, We Aim To Empower Individuals With The Knowledge
                    And Skills They Need To Succeed.
                  </ListItem>
                </UnorderedList>
                <UnorderedList>
                  <ListItem
                    mb="1"
                    color="white"
                    fontWeight={{ base: "medium", lg: "bold" }}
                    fontSize={{ base: "lg", lg: "xl" }}
                  >
                    Humanitarian Aid: We Offer Critical Support During
                    Emergencies, Distribute Essential Supplies, And Assist With
                    Disaster Relief Efforts To Ensure Those Affected By Crises
                    Receive The Needed Help.
                  </ListItem>
                </UnorderedList>
                <UnorderedList>
                  <ListItem
                    color="white"
                    fontWeight={{ base: "medium", lg: "bold" }}
                    fontSize={{ base: "lg", lg: "xl" }}
                  >
                    Promote Economic Empowerment: Our Skill Development
                    Workshops And Entrepreneurial Support Aim To Help
                    Individuals Achieve Financial Independence And Stability.
                  </ListItem>
                </UnorderedList>
              </List>
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  );
}

export default AboutUs;
