import React from 'react';
import { Flex, Box, Image, Text, VStack } from '@chakra-ui/react';

const FirstScreen = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      minHeight="85vh"
      bg="#A5E8F1"
      position="relative"
      cursor="pointer"
      overflow="hidden"
      width="100vw"
    >
      <Box
        flex="1"
        p={10}
        display="flex"
        alignItems={{ base: 'center', md: 'flex-start' }}
        justifyContent="center"
        textAlign="center"
        height="85vh"
        position="relative"
        order={{ base: 1, md: 2 }}
        padding="0"
      >
        <VStack spacing={4} align="center">
          <Text
            fontFamily="Cursive, serif"
            lineHeight="1.5"
            fontSize={{ base: '2rem', md: '4rem', lg: '5rem' }}
            color="#3A2719"
          >
            A felicidade tem
            <span style={{ color: '#FFB210' }}> patas!</span>
          </Text>
        </VStack>
      </Box>
      <Box
        flex="1"
        bg="#A5E8F1"
        maxWidth={{ base: '100%', md: '35vw' }}
        position="relative"
        zIndex="2"
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        order={{ base: 2, md: 1 }}
        marginLeft={{ base: 0, md: 0 }}
      >
        <Image
          src="images/homepageCat.png"
          alt="Gato siamês"
          objectFit="cover"
          width={{ base: '80%', md: '90%' }}
          height={{ base: '80%', md: '85vh' }}
        />
        <Text
          fontSize="12px"
          position="absolute"
          bottom="10px"
          left="10px"
          color="#3A2719"
        ></Text>
      </Box>
      <Box
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        order={{ base: 3, md: 3 }}
        mt={{ base: 4, md: 0 }}
        position={{ base: 'relative', md: 'absolute' }}
        bottom={{ base: 'auto', md: '100px' }}
        left={{ base: 'auto', md: '35vw' }}
        width={{ base: '95%', md: '59vw' }}
        height="150px"
        bg={{ base: 'none', md: 'rgba(255, 178, 25, 0.7)' }}
        borderRadius="25px"
        zIndex="0"
        padding="5px"
        margin="0"
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
            fontSize={{ base: '20px', md: '35px' }}
            color="#3A2719"
            fontWeight="bold"
          >
            Temos vários amigatos e aumigos esperando por um lar. Conheça e
            adote!
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default FirstScreen;
