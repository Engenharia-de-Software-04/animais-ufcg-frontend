"user client";

import React from 'react';

import {
    Flex,
    Center,
    FormControl,
    FormLabel,
    Input,
    Button

} from '@chakra-ui/react'

export default function Login() {
    return <div className="form-wrapper">
        <Flex bg="white">
            <Center w='100%' h="100vh">
                <Center p="2rem" boxShadow='md' border='1px' borderColor='gray.300' borderRadius="20px">
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input mb="1rem" type='name' />
                        <FormLabel>E-mail</FormLabel>
                        <Input mb="1rem" type='email' />
                        <FormLabel>Password</FormLabel>
                        <Input mb="1rem" type='password' />
                        <Button>Send</Button>
                    </FormControl>
                </Center>
            </Center>
        </Flex>
    </div>
}
