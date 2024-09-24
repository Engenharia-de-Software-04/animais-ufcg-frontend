import React from "react";
import { Flex, Box, Image, Text, VStack } from "@chakra-ui/react";

const SecondScreen = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      bg="#FFB210"
      position="relative"
      cursor="pointer"
      overflow="hidden"
      width="100vw"
      minHeight="100vh"
    >
      <VStack
        flex="1"
        display={{ base: "flex", md: "none" }}
        align="center"
        justify="center"
        textAlign="center"
        order={1}
        maxH="90vw"
      >
        <Text
          fontFamily="Cursive, serif"
          lineHeight="1.5"
          fontSize="48px"
          color="#3A2719"
        >
          Benção,
        </Text>
        <Text
          fontFamily="Cursive, serif"
          lineHeight="1.5"
          fontSize="48px"
          color="#A5E8F1"
        >
          dindo?!
        </Text>
      </VStack>
      <Box
        flex="1"
        bg="#FFB210"
        display={{ base: "flex", md: "none" }}
        justifyContent="center"
        alignItems="center"
        order={2}
        maxH="100vw"
      >
        <Image
          src="images/dog.png"
          alt="Cachorro com chapéu"
          objectFit="cover"
          width="80%"
          height="auto"
        />
      </Box>
      <Box
        display={{ base: "flex", md: "none" }}
        bg={{ base: "none", md: "rgba(165, 232, 241, 0.7)" }}
        borderRadius="25px"
        p={4}
        textAlign="center"
        order={3}
      >
        <Text
          fontFamily="Trebuchet MS, serif"
          fontSize="20px"
          color="#3A2719"
          fontWeight="bold"
        >
          Não pode adotar por enquanto? Nos ajude apadrinhando um de nossos
          animais!
        </Text>
      </Box>
      <Box
        flex="1"
        p={5}
        display={{ base: "none", md: "flex" }}
        alignItems="flex-start"
        justifyContent="center"
        textAlign="center"
        height="86vh"
        order={1}
      >
        <VStack spacing={4} align="center">
          <Text
            fontFamily="Cursive, serif"
            lineHeight="1.5"
            fontSize={{ base: "48px", md: "95px" }}
            color="#3A2719"
          >
            Benção,
          </Text>
          <Text
            fontFamily="Cursive, serif"
            lineHeight="1.5"
            fontSize={{ base: "48px", md: "95px" }}
            color="#A5E8F1"
          >
            dindo?!
          </Text>
        </VStack>
      </Box>

      <Box
        flex="1"
        bg="#FFB210"
        display={{ base: "none", md: "flex" }}
        order={2}
      >
        <Image
          src="images/dog_second.png"
          alt="Cachorro com chapéu"
          objectFit="cover"
          width={{ base: "100%", md: "600px" }}
          height="100vh"
        />
      </Box>

      <Box
        position="absolute"
        bottom="100px"
        left="0"
        width={{ base: "90%", md: "60%" }}
        height="150px"
        bg="rgba(165, 232, 241, 0.7)"
        borderRadius="25px"
        zIndex="0"
        mx={{ base: "auto", md: 0 }}
        display={{ base: "none", md: "block" }}
        order={3}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
          textAlign="center"
        >
          <Text
            fontFamily="Trebuchet MS, serif"
            fontSize={{ base: "20px", md: "35px" }}
            color="#3A2719"
            fontWeight="bold"
          >
            Não pode adotar por enquanto? Nos ajude apadrinhando um de nossos
            animais!
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default SecondScreen;
