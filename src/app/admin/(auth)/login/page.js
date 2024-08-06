"use client"; // Ensure this is at the very top

import React, { useState } from 'react';
import { Flex, Center, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';
import { loginAdmin } from '@/app/service/auth'; // Adjust the path as needed

const handleLoginAdmin = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    console.log(data);

    const res = await loginAdmin(formData);
};

export default function Login() {

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
