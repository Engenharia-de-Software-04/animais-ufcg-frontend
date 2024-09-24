import React from "react";
import { Flex, Box, Image, Text, VStack, Link } from "@chakra-ui/react";

const FourthScreen = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      bg="#FFFFFF"
      position="relative"
      cursor="pointer"
      overflow="hidden"
      width="100vw"
      maxHeight="100vh"
    >
      <Box
        flex="1"
        p={5}
        display={{ base: "none", md: "flex" }}
        alignItems="flex-start"
        justifyContent="center"
        textAlign="center"
        height="auto"
        order={1}
      >
        <VStack spacing={4} align="center">
          <Text
            fontFamily="Cursive, serif"
            lineHeight="1.5"
            fontSize={{ base: "48px", md: "90px" }}
            color="#FFB210"
            padding='30px'
          >
            Animais UFCG
          </Text>
        </VStack>
      </Box>
      <Box
        flex="1"
        bg="#FFFFFF"
        display={{ base: "none", md: "flex" }}
        justifyContent="flex-end"
        order={2}
      >
        <Image
          src="images/blackCat.png"
          alt="Gato Preto"
          objectFit="contain"
          maxWidth="90%"
          height="90vh"
        />
      </Box>
      <VStack
        flex="1"
        display={{ base: "flex", md: "none" }}
        align="center"
        justify="flex-start"
        textAlign="center"
        spacing={2}
        paddingTop={4}
      >
        <Text
          fontFamily="Cursive, serif"
          lineHeight="1.5"
          fontSize="48px"
          color="#FFB210"
        >
          Animais
        </Text>
        <Text
          fontFamily="Cursive, serif"
          lineHeight="1.5"
          fontSize="48px"
          color="#3A2719"
        >
          UFCG
        </Text>
      </VStack>
      <Box
        flex="1"
        display={{ base: "flex", md: "none" }}
        justifyContent="center"
        alignItems="center"
        paddingY={4}
      >
        <Image
          src="images/blackCat.png"
          alt="Gato Preto"
          objectFit="contain"
          width="50%"
          height="auto"
        />
      </Box>
      <Box
        display={{ base: "flex", md: "none" }}
        borderRadius="25px"
        p={4}
        textAlign="center"
      >
        <Text
          fontFamily="Trebuchet MS, serif"
          fontSize="20px"
          color="#3A2719"
          fontWeight="bold"
        >
          Nós somos os Animais UFCG, um grupo de protetores independentes
          dedicados a garantir que os animais da UFCG tenham uma vida melhor.
          Junte-se a nós e ajude a transformar a vida desses seres especiais!
        </Text>
      </Box>
      <Box
        position="absolute"
        bottom="230px"
        left="0"
        width={{ base: "90%", md: "60%" }}
        bg="rgba(165, 232, 241, 0.7)"
        borderRadius="25px"
        zIndex="0"
        mx={{ base: "auto", md: 0 }}
        display={{ base: "none", md: "block" }}
        p={4}
        height="auto"
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
            fontSize={{ base: "1rem", md: "1.5rem", lg: "1.75rem" }}
            color="#3A2719"
            fontWeight="bold"
          >
            Nós somos os Animais UFCG, um grupo de protetores independentes
            dedicados a garantir que os animais da UFCG tenham uma vida melhor.
            Junte-se a nós e ajude a transformar a vida desses seres especiais!
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default FourthScreen;
