'use client';

import React, { useState } from 'react';
import {
  Flex,
  Center,
  FormControl,
  Input,
  Button,
  Text,
  Image,
} from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleLoginAdmin = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const result = await signIn('credentials', {
      redirect: false,
      email: data['email'],
      password: data['password'],
    });

    if (result.status === 200) {
      router.push('/adminMenu');
    } else if (result.status === 401) {
      setError('Email ou senha incorreto, tente novamente');
    }
  };

  return (
    <div className="form-wrapper">
      <Flex
        direction="column"
        align="center"
        justify="center"
        h="100vh"
        w="100vw"
        bgImage="url('/images/plano_fundo.png')"
        bgSize="cover"
        bgPosition="center"
        p="2rem"
      >
        <Flex
          direction="column"
          align="center"
          p="2rem"
          maxWidth="550px"
          boxShadow="none"
          border="none"
          mb="0"
        >
          <Flex mb="2rem" align="center">
            <Image src="/images/logo.png" alt="Logo" width={150} mr="1rem" />
            <Text fontSize="3xl" fontWeight="bold" color="#FFB210">
              Animais UFCG
            </Text>
          </Flex>
          <Center p="2rem">
            <form onSubmit={handleLoginAdmin}>
              <FormControl>
                <Input
                  mb="1rem"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                  border={`1px solid ${error ? 'red' : 'gray'}`}
                  bg="white"
                  borderRadius="25px"
                  height={50}
                />
                <Input
                  mb="1rem"
                  type="password"
                  name="password"
                  placeholder="Senha"
                  required
                  border={`1px solid ${error ? 'red' : 'gray'}`}
                  bg="white"
                  borderRadius="25px"
                  height={50}
                />
                {error && (
                  <Text color="red.500" mb="1rem">
                    {error}
                  </Text>
                )}
                <Button
                  type="submit"
                  size="lg"
                  width={130}
                  mx="auto"
                  backgroundColor="#FFB210"
                  display="block"
                  borderRadius="25px"
                >
                  Entrar
                </Button>
              </FormControl>
            </form>
          </Center>
        </Flex>
      </Flex>
    </div>
  );
}
