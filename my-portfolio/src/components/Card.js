import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      spacing={4}
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="md"
      p={4}
      alignItems="felx=start"
      backgroundColor="white"
    >
      <Image
        src={imageSrc} atl={title} maxH="200px" objectFit="cover" />
      <Heading as="h2" size="md" color="black" >
        {title}
      </Heading>
      <Text color="grey">{description}</Text>
      <HStack spacing={2} color="blue.500">
        <Text>Learn More</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />

      </HStack>
    </VStack>
  );
};

export default Card;
