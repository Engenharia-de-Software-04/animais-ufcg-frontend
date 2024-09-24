"use client";
import React from "react";
import Link from "next/link"; // Importando o Link do Next.js
import Menu from "@/components/Menu";
import { Flex, Box, Image, Text, VStack  } from "@chakra-ui/react";
import './(screens)/firstScreen'
import FirstScreen from "./(screens)/firstScreen";
import SecondScreen from "./(screens)/secondScreen";
import ThirdScreen from "./(screens)/thirdScreen";
import FourthScreen from "./(screens)/fourthScreen";

export default function HomePage() {
  return (
    <>
      <Menu />
      <Link href="http://localhost:3000/animalList" passHref>
        <FirstScreen />
      </Link>
      <Link href="http://localhost:3000/animalList" passHref>
        <SecondScreen/>
      </Link>
      <Link href="http://localhost:3000/adoptionHistory" passHref>
        <ThirdScreen/>
      </Link>
      <Link href="https://www.instagram.com/animaisufcg/" passHref>
        <FourthScreen/>
      </Link>
    </>
  );
}
