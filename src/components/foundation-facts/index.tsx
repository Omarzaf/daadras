import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

function FoundationFacts() {
  return (
    <Box bg="navy-blue">
      <Container
        px={{ base: "4", lg: "0" }}
        py={{ base: "12", lg: "24" }}
        w={{ base: "full", lg: "1140px" }}
        maxW="1140px"
      >
        <VStack w="full" alignItems="flex-start" spacing="16">
          <VStack w="full">
            <Flex gap="6" w="100%" flexDir={{ base: "column", lg: "row" }}>
              <VStack
                w={{ base: "full", lg: "50%" }}
                alignItems="flex-start"
                bg="steel-blue"
                spacing="0"
              >
                <Box pos="relative" w="full" h="340px">
                  <Image
                    objectFit="cover"
                    src="/assets/fact1.png"
                    fill
                    alt="Picture of the author"
                  />
                </Box>
                <VStack w="full" alignItems="flex-start" p="6">
                  <Box>
                    <Text
                      fontSize="lg"
                      fontWeight="semibold"
                      textTransform="uppercase"
                      color="white"
                      textDecor="underline"
                    >
                      Curriculum Triangulation:
                    </Text>
                    <Text color="white" fontWeight="semibold">
                      Daadras Foundation, through Project Salam, is proud to be
                      a pioneering force in Pakistan by offering a unique,
                      triangulated curriculum tailored specifically for
                      underserved children. Our curriculum combines IT training,
                      Social Emotional Learning (SEL), and critical thinking—a
                      powerful trio designed to bridge educational gaps and
                      empower young minds with essential 21st-century skills.
                      This holistic approach not only equips children with
                      technical skills in IT but also nurtures their emotional
                      resilience and problem-solving abilities, creating a
                      well-rounded foundation for future success. We are
                      committed to breaking barriers to quality education and
                      providing these children with opportunities often reserved
                      for the more privileged, making Daadras Foundation a
                      trailblazer in Pakistan&apos;s educational landscape.
                    </Text>
                  </Box>
                </VStack>
              </VStack>
              <VStack
                w={{ base: "full", lg: "50%" }}
                alignItems="flex-start"
                bg="steel-blue"
                spacing="0"
              >
                <Box pos="relative" w="full" h="340px">
                  <Image
                    objectFit="cover"
                    src="/assets/fact2.png"
                    fill
                    alt="Picture of the author"
                  />
                </Box>
                <VStack w="full" alignItems="flex-start" p="6">
                  <Box>
                    <Text
                      fontSize="lg"
                      fontWeight="semibold"
                      textTransform="uppercase"
                      color="white"
                      textDecor="underline"
                    >
                      Self-Reliance as our Approach:
                    </Text>
                    <Text color="white" fontWeight="semibold">
                      At Daadras Foundation, our approach to ration distribution
                      goes beyond simply providing monthly supplies. We believe
                      in fostering self-reliance and independence within the
                      communities we support. Instead of offering aid
                      indiscriminately, we assess each recipient&apos;s
                      situation, and for those capable of working, we encourage
                      and assist them in finding employment opportunities. This
                      approach is rooted in our philosophy that sustainable
                      support means helping people stand on their own feet,
                      rather than fostering dependency. By promoting
                      self-sufficiency, we aim to empower individuals and
                      families to secure their own future, ensuring that our
                      support creates lasting, positive change.
                    </Text>
                  </Box>
                </VStack>
              </VStack>
            </Flex>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}

export default FoundationFacts;
