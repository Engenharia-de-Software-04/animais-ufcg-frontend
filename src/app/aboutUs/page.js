"use client";
import React from "react";
// import Link from "next/link";
import Menu from "@/components/Menu";
import { Flex, Box, Image, Text } from '@chakra-ui/react';
import Animais from "@/components/Animals";

export default function AboutUs() {
    return (
        <>
            <Menu />
            <Flex
                direction="column"
                bg="white"
                minHeight="100vh"
                width="100vw"
            >
                <Box 
                width="100%" 
                height="300px"
                position="relative"
                >
                    <Image
                        src="images/animals.webp"
                        alt="Imagem do topo"
                        objectFit="cover"
                        width="100%"
                        height="100%"
                    />
                </Box>

                <Box
                    bg="#3A2719"
                    p={4}
                    textAlign="center"
                >
                    <Text
                        fontFamily="Trebuchet MS, sans-serif"
                        fontSize="40px"
                        color="white"
                    >
                        Quem Somos
                    </Text>
                </Box>

                <Box
                    bg="rgba(255, 178, 16, 0.7)"
                    p={4}
                    width="76%"
                    mt="70px"
                    borderRadius="15px"
                    ml="22%"
                    textAlign="center"
                >
                    <Text
                        fontFamily="Trebuchet MS, sans-serif"
                        fontSize="30px"
                        color="#3A2719"
                    >
                        A Animais UFCG surgiu como uma solução para melhorar a vida dos bichinhos que habitam o campus da Universidade Federal de Campina Grande. Diante da crescente população de animais em situação de vulnerabilidade, um grupo de voluntários apaixonados por animais decidiu se unir para proporcionar melhores condições de vida a esses seres tão especiais.
                    </Text>
                </Box>

                <Box
                    bg="#B85B2D"
                    p={4}
                    width="350px"
                    height="70px"
                    borderRadius="15px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mt="-7%"
                    mb={50}
                    ml="0.5%"
                >
                    <Text
                        fontFamily="Trebuchet MS, sans-serif"
                        fontSize="30px"
                        color="white"
                    >
                        História
                    </Text>
                </Box>

                <Box
                    bg="rgba(255, 178, 16, 0.7)"
                    p={4}
                    width="76%"
                    mt="5%"
                    borderRadius="15px"
                    mx="auto"
                    textAlign="center"
                    mr="22%"
                >
                    <Text
                        fontFamily="Trebuchet MS, sans-serif"
                        fontSize="30px"
                        color="#3A2719"
                    >
                        Nossa missão é dedicar-nos aos cuidados, resgate e promoção do bem-estar dos animais da Universidade Federal de Campina Grande (UFCG). Acreditamos que todos os seres vivos merecem amor, respeito e cuidados adequados. Nossa equipe trabalha incansavelmente para garantir que os animais em situação de vulnerabilidade tenham acesso a adoção, alimentação e cuidados. Junte-se a nós nessa causa e ajude a transformar a vida dos nossos amigos peludos!
                    </Text>
                </Box>

                <Box
                    bg="#B85B2D"
                    p={4}
                    width="350px"
                    height="70px"
                    borderRadius="15px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mt="-7%"
                    mb={50}
                    ml="76%"
                >
                    <Text
                        fontFamily="Trebuchet MS, sans-serif"
                        fontSize="30px"
                        color="white"
                    >
                        Missão
                    </Text>
                </Box>

                <Box
                    bg="rgba(255, 178, 16, 0.7)"
                    p={4}
                    width="76%"
                    mt="60px"
                    borderRadius="15px"
                    mx="auto"
                    mb={6}
                    textAlign="center"
                >
                    <Text
                        fontFamily="Trebuchet MS, sans-serif"
                        fontSize="30px"
                        color="#3A2719"
                    >
                        O cuidado com os animais é uma responsabilidade que todos devemos assumir. Eles são seres que sentem dor, alegria e amor, e merecem ser tratados com respeito e dignidade. O abandono e a negligência são realidades tristes que muitos animais enfrentam diariamente. É fundamental conscientizar a sociedade sobre a importância de não abandonar os pets e garantir que eles recebam os cuidados adequados. A Animais UFCG surgiu com a vontade de cuidar desses seres tão preciosos. Junte-se a nós nessa causa e ajude a criar um mundo melhor para os animais!
                    </Text>
                </Box>

                <Box 
                width="100%"
                height="auto"
                mt={5}
                position="absolute"
                >
                    <Image
                        src="images/historyImage.png"
                        alt="Imagem história"
                        objectFit="cover"
                        width="7%"
                        height="auto"
                        mt="30%"
                        ml="8%"
                    />
            </Box>
            <Box
            width="100%"
            height="auto"
            mt={6}
            position="absolute">
                    <Image
                        src="images/paws.png"
                        alt="imagem"
                        objectFit="cover"
                        width="10%"
                        height="auto"
                        mt="52%"
                        ml="84%"
                    />
    </Box>
            </Flex>
        </>
    );
}
