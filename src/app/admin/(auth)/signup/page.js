"use client";
import React from 'react';

import {
    Flex,
    Center,
    FormControl,
    FormLabel,
    Input,
    Button

} from '@chakra-ui/react'

import { postAdmin } from '@/app/service/auth';

const handlePostAdmin = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const res = await postAdmin(formData)
}

export default function Register() {
    return <div className="form-wrapper">
        <Flex bg="white">
            <Center w='100%' h="100vh">
                <Center p="2rem" boxShadow='md' border='1px' borderColor='gray.300' borderRadius="20px">
                    <form onSubmit={handlePostAdmin}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input mb="1rem" type='name' name="name" />
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
}
