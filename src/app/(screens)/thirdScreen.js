import React from 'react';
import { Flex, Box, Image, Text, VStack } from '@chakra-ui/react';

const ThirdScreen = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      minHeight="85vh"
      bg="#E7CFC3"
      position="relative"
      cursor="pointer"
      overflow="hidden"
      width="100vw"
      minH='100%'
    >
      <Box
        flex="1"
        display="flex"
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent="center"
        textAlign="center"
        height="85vh"
        position="relative"
        order={{ base: 1, md: 2 }}
      >
        <VStack spacing={4} align="center" mt={{ base: "10px", md: "150px" }}>
          <Text
            fontFamily="Cursive, serif"
            lineHeight="1.5"
            fontSize={{ base: "3rem", md: "4rem", lg: "6rem" }}
            color="#FFB210"
          >
            Patas e Histórias
          </Text>
          <Text
            fontFamily="Trebuchet MS, serif"
            lineHeight="1.5"
            fontSize={{ base: "1.25rem", md: "1.5rem" }}
            color="#3A2719"
          >
            Vem ver como sua ajuda pode salvar vidas!
          </Text>
        </VStack>
      </Box>

      <Box
        flex="1"
        bg="#E7CFC3"
        maxWidth={{ base: "100%", md: "35vw" }}
        position="relative"
        zIndex="2"
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        order={{ base: 2, md: 1 }}
        marginLeft={{ base: 0, md: 0 }}
        maxH='90vw'
      >
        <Image
          src="images/cat_third.png"
          alt="Gato sorrindo"
          objectFit="cover"
          width={{ base: "80%", sm:'70%' ,md: "100%" }}
          height={{ base: "80%",sm:'70%', md: "95vh" }}
          borderRadius="15px"
        />
      </Box>

      <Box
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        order={{ base: 3, md: 3 }}
        mt={{ base: 4, md: 0 }}
        position={{ base: "relative", md: "absolute" }} 
        bottom={{ base: "auto", md: "100px" }} 
        left={{ base: "auto", md: "35vw" }} 
        width={{ base: "95%", md: "fit-content" }}
        height="auto" 
        bg={{ base: 'none', md: "rgba(255, 178, 25, 0.7)" }}
        borderRadius="25px"
        zIndex="0"
        padding='5px'
        margin='0'
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
            Garfilda é uma gatinha adorável que foi encontrada nos caminhos da UFCG. Agora, ela está saudável e feliz!
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default ThirdScreen;
