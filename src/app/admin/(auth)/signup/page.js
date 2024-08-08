"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import {
    Flex,
    Center,
    FormControl,
    FormLabel,
    Input,
    Button
} from '@chakra-ui/react';
import { postAdmin } from '@/app/service/auth';

export default function Register() {
    const router = useRouter();

    const handlePostAdmin = async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        try {
            const res = await postAdmin(formData);
            console.log(res);
            if (res.status === 200) {
                // Redireciona para a página de login se a resposta for ok
                router.push('/admin/login');
            } else {
                // Trate o erro aqui se necessário
                console.error('Erro ao registrar o administrador');
            }
        } catch (error) {
            console.error('Erro ao fazer a solicitação', error);
        }
    };

    return (
        <div className="form-wrapper">
            <Flex bg="white">
                <Center w='100%' h="100vh">
                    <Center p="2rem" boxShadow='md' border='1px' borderColor='gray.300' borderRadius="20px">
                        <form onSubmit={handlePostAdmin}>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input mb="1rem" type='text' name="name" />
                                <FormLabel>E-mail</FormLabel>
                                <Input mb="1rem" type='email' name="email" />
                                <FormLabel>Password</FormLabel>
                                <Input mb="1rem" type='password' name="password" />
                                <Button type='submit'>Send</Button>
                            </FormControl>
                        </form>
                    </Center>
                </Center>
            </Flex>
        </div>
    );
}
