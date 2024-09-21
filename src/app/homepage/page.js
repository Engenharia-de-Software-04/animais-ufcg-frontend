"use client";
import React from "react";
import Link from "next/link"; // Importando o Link do Next.js
import Menu from "@/components/Menu";
import { Flex, Box, Image, Text } from '@chakra-ui/react';

export default function HomePage() {
    return (
        <>
            <Menu />
            <Link href="http://localhost:3000/admin" passHref>
                <Flex
                    direction="row"
                    minHeight="85vh"
                    bg="#A5E8F1"
                    position="relative"
                    cursor="pointer"
                    overflow="hidden"
                    width="100vw"
                >
                    <Box
                        flex="1"
                        bg="#A5E8F1"
                        maxWidth="35vw"
                        position="relative"
                        zIndex="2"
                    >
                        <Image
                            src="images/homepageCat.png"
                            alt="Gato siamês"
                            objectFit="cover"
                            width="90%"
                            height="85vh"
                        />
                        <Text
                            fontSize="12px"
                            position="absolute"
                            bottom="10px"
                            left="10px"
                            color="#3A2719"
                        >
                            Designed by Freepik
                        </Text>
                    </Box>
                    <Box
                        flex="1"
                        p={10}
                        display="flex"
                        alignItems="flex-start"
                        justifyContent="center"
                        textAlign="center"
                        height="85vh"
                        position="relative"
                    >
                        <Box>
                            <Text
                                fontFamily="Cursive, serif"
                                lineHeight="1.5"
                                fontSize="85px"
                                color="#3A2719"
                            >
                                A felicidade tem
                            </Text>
                            <Text
                                fontFamily="Cursive, serif"
                                lineHeight="1.5"
                                fontSize="85px"
                                color="#FFB210"
                            >
                                patas!
                            </Text>
                        </Box>
                    </Box>
                    <Box
                        position="absolute"
                        bottom="100px"
                        left="40vw"
                        width="59vw"
                        height="150px"
                        bg="rgba(255, 178, 25, 0.7)"
                        borderRadius="25px"
                        zIndex="0"
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
                                fontSize="35px"
                                color="#3A2719"
                                fontWeight="bold"
                            >
                                Temos vários amigatos e aumigos esperando
                            </Text>
                            <Text
                                fontFamily="Trebuchet MS, serif"
                                fontSize="35px"
                                color="#3A2719"
                                fontWeight="bold"
                            >
                                por um lar. Conheça e adote!
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </Link>

        <Link href="http://localhost:3000" passHref>
            <Flex
                direction="row"
                minHeight="100vh"
                bg="#FFB210"
                position="relative"
                cursor="pointer"
                overflow="hidden"
                width="100vw"
             >
                    
                <Box
                    flex="1"
                    p={20}
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="center"
                    textAlign="center"
                    height="86vh"
                    position="relative"
                >
                    <Box marginRight="500px">
                        <Text
                            fontFamily="Cursive, serif"
                            lineHeight="1.5"
                            fontSize="95px"
                            color="#3A2719"
                        >
                            Benção,
                        </Text>
                        <Text
                            fontFamily="Cursive, serif"
                            lineHeight="1.5"
                            fontSize="95px"
                            color="#A5E8F1"
                            marginLeft="100px"
                        >
                            dindo?!
                        </Text>
                    </Box>
                </Box>
                <Box
                    position="absolute"
                    bottom="100px"
                    left="0"
                    width="60%"
                    height="150px"
                    bg="rgba(165, 232, 241, 0.7)"
                    borderRadius="25px"
                    zIndex="0"
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
                            fontSize="35px"
                            color="#3A2719"
                            fontWeight="bold"
                        >
                            Não pode adotar por enquanto? Nos ajude
                        </Text>
                        <Text
                            fontFamily="Trebuchet MS, serif"
                            fontSize="35px"
                            color="#3A2719"
                            fontWeight="bold"
                        >
                            apadrinhando um de nossos animais!
                        </Text>
                    </Box>
                </Box>
                <Box
                    flex="1"
                    bg="#FFB210"
                    maxWidth="60vw"
                    position="relative"
                    zIndex="200"
                >
                    <Image
                        src="images/dogWithAHat.png"
                        alt="Cachorro com chapéu"
                        objectFit="cover"
                        width="700px"
                        height="100vh"
                        position="relative"
                        left="15px"
                    />
                    <Text
                        fontSize="12px"
                        position="absolute"
                        bottom="10px"
                        left="10px"
                        color="#3A2719"
                    >
                        Designed by Freepik
                    </Text>
                </Box>
            </Flex>
        </Link>
        <Flex
        direction="row"
        minHeight="100vh"
        bg="#E7CFC3"
        position="relative"
        cursor="pointer"
        overflow="hidden"
        width="100vw"
    >
        <Box
            flex="1"
            p={10}
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="30vh"
            position="relative"
        >
            <Box>
                <Text
                    fontFamily="Cursive, serif"
                    lineHeight="1.5"
                    fontSize="90px"
                    color="#3A2719"
                >
                    Patas e Histórias
                </Text>
                <Text
                    fontFamily="Trebuchet MS, serif"
                    lineHeight="1.5"
                    fontSize="25px"
                    color="#3A2719"
                >
                    Vem ver como sua ajuda pode salvar vidas!
                </Text>
            </Box>
        </Box>       
        <Box
            position="absolute"
            bottom="40px"
            left="0vw"
            width="100vw"
            height="400px"
            bg="rgba(255, 178, 25, 0.7)"
            borderRadius="25px"
            zIndex="0"
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="0 60px"
        >
            <Box
                flex="1"
                display="flex"
                alignItems="center"
                justifyContent="center"
                paddingLeft="20px"
            >
                <Image
                    src="images/smileyCat.jpg"
                    alt="Garfilda"
                    boxSize="300px" 
                    objectFit="cover"
                    borderRadius="15px"
                    marginRight="200px"
                />
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100%"
                textAlign="center"
                flex="1"
                marginRight="100px"
            >
                <Text
                    fontFamily="Cursive, serif"
                    fontSize="40px"
                    color="#FFFFFF"
                    fontWeight="bold"
                    marginBottom="20px"
                >
                    Garfilda
                </Text>    
                <Text
                    fontFamily="Trebuchet MS, serif"
                    fontSize="35px"
                    color="#3A2719"
                    fontWeight="bold"
                >
                    Garfilda é uma gatinha adorável que foi encontrada nos caminhos da UFCG
                </Text>
                <Text
                    fontFamily="Trebuchet MS, serif"
                    fontSize="35px"
                    color="#3A2719"
                    fontWeight="bold"
                >
                    Ela estava muito desnutrida, mas agora foi adotada e está assim!
                </Text>
            </Box>
        </Box>
    </Flex>
            <Flex
                direction="row"
                minHeight="100vh"
                bg="#FFFFFF"
                position="relative"
                overflow="hidden"
                width="100vw"
             >   
                <Box
                    flex="1"
                    p={2}
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="center"
                    textAlign="center"
                    height="85vh"
                    position="relative"
                >
                    <Box>
                        <Text
                            fontFamily="Cursive, serif"
                            lineHeight="1.5"
                            fontSize="85px"
                            color="#FFB210"
                        >
                            A Animais UFCG
                        </Text>
                    </Box>
                    </Box>
                    <Box
                        position="absolute"
                        bottom="230px"
                        left="0"
                        width="71.5%"
                        height="300px"
                        bg="rgba(165, 232, 241, 0.7)"
                        borderRadius="25px"
                        zIndex="0"
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
                            fontSize="30px"
                            color="#3A2719"
                            fontWeight="bold"
                        >
                            Nós somos os Animais UFCG, um grupo de protetores independentes dedicados a garantir que os animais da Universidade Federal de Campina Grande (UFCG) tenham uma vida melhor. 
                        </Text>
                        <Text
                            fontFamily="Trebuchet MS, serif"
                            fontSize="30px"
                            color="#3A2719"
                            fontWeight="bold"
                        >
                            Junte-se a nós nessa causa e ajude a transformar a vida desses seres especiais!
                        </Text>
                    </Box>
                </Box>
                <Box
                        position="absolute"
                        bottom="100px"
                        left="200px"
                        width="500px"
                        height="76px"
                        backgroundColor="#B85B2D"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="20px" 
                >
            <Link href="http://localhost:3000" passHref>
                <Text
                    fontFamily="Trebuchet MS, serif"
                    color="white"
                    fontSize="35px"
                    textAlign="center"
                    cursor="pointer"
                >
                    Solicite um resgate
                </Text>
            </Link>
                </Box>
                
                <Box
                    flex="1"
                    bg="#FFFFFF"
                    maxWidth="28vw"
                    position="relative"
                    zIndex="2"
                >
                    <Image
                        src="images/blackCat.png"
                        alt="Gato Preto"
                        objectFit="cover"
                        width="150%"
                        height="100vh"
                    />
                    <Text
                        fontSize="12px"
                        position="absolute"
                        bottom="10px"
                        left="10px"
                        color="#3A2719"
                    >
                        Designed by Freepik
                    </Text>
                </Box>
            </Flex>
        </>
    );
}