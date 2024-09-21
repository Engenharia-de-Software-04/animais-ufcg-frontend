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
                overflow="hidden"
                width="100vw"
            >
                <Box width="100%" height="300px" position="relative">
                    <Image
                        src="images/animals.webp"
                        alt="Imagem do topo"
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        zIndex="1"
                    />
                </Box>
                <Box
                    bg="#3A2719"
                    p={4}
                    textAlign="center"
                    position="relative"
                    bottom="29px"
                    zIndex="0"
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
                    position="absolute"
                    top="580px"
                    left="10%"
                    width="80%"
                    mt={6}
                    borderRadius="15px"
                    marginLeft='200px'
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text
                        fontFamily="Trebuchet MS, sans-serif"
                        fontSize="30px"
                        color="#3A2719"
                        marginLeft='10px'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam odio nec lacus aliquam dapibus. Nullam sed scelerisque orci. Cras non odio faucibus, lobortis nisi nec, scelerisque orci. Proin non tortor lorem. Etiam non tempor dui. In vitae tellus risus.
                    </Text>
                </Box>

                <Box
                    bg="#B85B2D"
                    p={4}
                    position="absolute"
                    top="700px"
                    right="1150px"
                    width="368px"
                    height="70px"
                    borderRadius="15px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
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
                    position="absolute"
                    top="200px"
                    left="-12.6%"
                    width="80%"
                    mt="760px"
                    borderRadius="15px"
                    marginLeft='200px'
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text
                        fontFamily="Trebuchet MS, sans-serif"
                        fontSize="30px"
                        color="#3A2719"
                        marginLeft='10px'
                    >
                        Nossa missão é dedicar-nos aos cuidados, resgate e promoção do bem-estar dos animais da Universidade Federal de Campina Grande (UFCG). Acreditamos que todos os seres vivos merecem amor, respeito e cuidados adequados. Nossa equipe trabalha incansavelmente para garantir que os animais em situação de vulnerabilidade tenham acesso a adoção, alimentação e cuidados. Junte-se a nós nessa causa e ajude a transformar a vida dos nossos amigos peludos!
                    </Text>
                </Box>

                <Box
                    bg="#B85B2D"
                    p={4}
                    position="absolute"
                    top="1170px"
                    right="16px"
                    width="368px"
                    height="70px"
                    borderRadius="15px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
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
                    position="absolute"
                    top="1330px"
                    width="80%"
                    mt={6}
                    borderRadius="15px"
                    marginLeft='200px'
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text
                        fontFamily="Trebuchet MS, sans-serif"
                        fontSize="30px"
                        color="#3A2719"
                        marginLeft='10px'
                    >
                        
O cuidado com os animais é uma responsabilidade que todos devemos assumir. Eles são seres que sentem dor, alegria e amor, e merecem ser tratados com respeito e dignidade. O abandono e a negligência são realidades tristes que muitos animais enfrentam diariamente. É fundamental conscientizar a sociedade sobre a importância de não abandonar os pets e garantir que eles recebam os cuidados adequados. A Animais UFCG surgiu com a vontade de cuidar desses seres tão preciosos. Junte-se a nós nessa causa e ajude a criar um mundo melhor para os animais!
                    </Text>
                </Box>
            </Flex>
        </>
    );
}
