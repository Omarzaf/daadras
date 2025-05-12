import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function WeDo() {
  return (
    <VStack
      w="full"
      alignItems="flex-start"
      spacing="12"
      mb={{ base: "12", lg: "64" }}
      pt="24"
    >
      <Container
        px={{ base: "4", lg: "0" }}
        pt={{ base: "10", lg: "12" }}
        pb="2"
        w={{ base: "full", lg: "1140px" }}
        maxW="1140px"
      >
      </Container>

      <Box bg="pale-aqua" w="full">
        <Container
          px={{ base: "4", lg: "0" }}
          py={{ base: "12", lg: "20" }}
          w={{ base: "full", lg: "1140px" }}
          maxW="1140px"
        >
          <HStack
            spacing={{ base: "6", lg: "32" }}
            flexDir={{ base: "column", lg: "row" }}
          >
            <Box
              pos="relative"
              w={{ base: "full", lg: "33%" }}
              h="450px"
              overflow="hidden"
              rounded="1.5rem"
            >
              <Image
                objectFit="cover"
                src="/assets/ed-initiative.png"
                fill
                alt="Picture of the author"
              />
            </Box>
            <VStack
              w={{ base: "full", lg: "67%" }}
              alignItems="flex-start"
              spacing="6"
            >
              <Heading
                color="black"
                fontSize={{ base: "2xl", lg: "3xl" }}
                fontWeight="semibold"
                textDecor="underline"
              >
                Project Salam
              </Heading>

              <Text
                color="black"
                fontSize={{ base: "xl", lg: "2xl" }}
                textAlign="justify"
              >
                We Believe In
                <Text
                  color="steel-blue"
                  fontSize={{ base: "xl", lg: "2xl" }}
                  textAlign="justify"
                  fontWeight="semibold"
                  as="span"
                >
                  {" "}
                  Poverty Alleviation Through Education.
                </Text>{" "}
                Daadras Has Been Raising Funds For People Facing Financial
                Problems In Paying Their Educational Dues. So Far, We Have
                <Text
                  color="steel-blue"
                  fontSize={{ base: "xl", lg: "2xl" }}
                  textAlign="justify"
                  fontWeight="semibold"
                  as="span"
                >
                  {" "}
                  Financially Assisted 20+ Students
                </Text>{" "}
                In Their Semesters And Young Children To Pursue Their
                Educational Dreams.
              </Text>
            </VStack>
          </HStack>
        </Container>
      </Box>

      <Box bg="pale-aqua" w="full">
        <Container
          px={{ base: "4", lg: "0" }}
          py={{ base: "12", lg: "20" }}
          w={{ base: "full", lg: "1140px" }}
          maxW="1140px"
        >
          <HStack
            spacing={{ base: "6", lg: "32" }}
            flexDir={{ base: "column", lg: "row" }}
          >
            <Box
              pos="relative"
              w={{ base: "full", lg: "33%" }}
              h="450px"
              overflow="hidden"
              rounded="1.5rem"
            >
              <Image
                objectFit="cover"
                objectPosition="right"
                src="/assets/humanitarian-aid.png"
                fill
                alt="Picture of the author"
              />
            </Box>
            <VStack
              w={{ base: "full", lg: "67%" }}
              alignItems="flex-start"
              spacing="6"
            >
              <Heading
                color="black"
                fontSize={{ base: "2xl", lg: "3xl" }}
                fontWeight="semibold"
                textDecor="underline"
              >
                Dastarkhwan
              </Heading>

              <Text
                color="black"
                fontSize={{ base: "xl", lg: "2xl" }}
                textAlign="justify"
              >
                Daadras Dastarkhwan is a response to{" "}
                <Text
                  color="steel-blue"
                  fontSize={{ base: "xl", lg: "2xl" }}
                  textAlign="justify"
                  fontWeight="semibold"
                  as="span"
                >
                  Natural And Manmade Disasters
                </Text>{" "}
                Across The Country And Provides Comprehensive Services. To Date,
                Daadras Has Collected Donation Funds Of Around{" "}
                <Text
                  color="steel-blue"
                  fontSize={{ base: "xl", lg: "2xl" }}
                  textAlign="justify"
                  fontWeight="semibold"
                  as="span"
                >
                  2 Million
                </Text>{" "}
                To Assist Underprivileged Humans Who Need Rations For Households
                Amid The Crisis. The Fund Was Disbursed In The Form Of Ration
                Packages We Have Provided To
                <Text
                  color="steel-blue"
                  fontSize={{ base: "xl", lg: "2xl" }}
                  textAlign="justify"
                  fontWeight="semibold"
                  as="span"
                >
                  {" "}
                  700+ Families.
                </Text>
              </Text>
            </VStack>
          </HStack>
        </Container>
      </Box>

      <Box bg="pale-aqua" w="full">
        <Container
          px={{ base: "4", lg: "0" }}
          py={{ base: "12", lg: "20" }}
          w={{ base: "full", lg: "1140px" }}
          maxW="1140px"
        >
          <HStack
            spacing={{ base: "6", lg: "32" }}
            flexDir={{ base: "column", lg: "row" }}
          >
            <VStack
              w={{ base: "full", lg: "67%" }}
              alignItems="flex-start"
              spacing="6"
            >
              <Heading
                color="black"
                fontSize={{ base: "2xl", lg: "3xl" }}
                fontWeight="semibold"
                textDecor="underline"
              >
                Clothes Donation
              </Heading>

              <Text
                color="black"
                fontSize={{ base: "xl", lg: "2xl" }}
                textAlign="justify"
              >
                On 31 August 2022, The Donation Drive For Clothes Was Held, And
                Collected The Clothes For The Affected People. On September 1,
                2022,{" "}
                <Text
                  color="steel-blue"
                  fontSize={{ base: "xl", lg: "2xl" }}
                  textAlign="justify"
                  fontWeight="semibold"
                  as="span"
                >
                  Daadras Collected The Amount Of 150,000 PKR That Was Utilized
                  To Disburse Among The Affected People.
                </Text>{" "}
                Looking Back, We Are Incredibly Grateful For The Compassion And
                Dedication Of Our Supporters..
              </Text>
            </VStack>
            <Box
              pos="relative"
              w={{ base: "full", lg: "33%" }}
              h="450px"
              overflow="hidden"
              rounded="1.5rem"
            >
              <Image
                objectFit="cover"
                src="/assets/clothes-donation.png"
                fill
                alt="Picture of the author"
              />
            </Box>
          </HStack>
        </Container>
      </Box>
    </VStack>
  );
}

export default WeDo;
