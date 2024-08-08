"use client";

import React, { useState } from 'react';
import { Flex, Center, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();

    const handleLoginAdmin = async (event) => {
        event.preventDefault();
    
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries())
    
        const result = await signIn('credentials', {
            redirect: false,
            email: data["email"],
            password: data["password"],
        });

        if (result["status"] == 200) {
            router.push("/admin")
        }
    };

    return (
        <div className="form-wrapper">
            <Flex bg="white">
                <Center w='100%' h="100vh">
                    <Center p="2rem" boxShadow='md' border='1px' borderColor='gray.300' borderRadius="20px">
                        <form onSubmit={handleLoginAdmin}>
                            <FormControl>
                                <FormLabel>E-mail</FormLabel>
                                <Input mb="1rem" type='email' name='email' required />
                                <FormLabel>Password</FormLabel>
                                <Input mb="1rem" type='password' name='password' required />
                                <Button type='submit'>Send</Button>
                            </FormControl>
                        </form>
                    </Center>
                </Center>
            </Flex>
        </div>
    );
}
