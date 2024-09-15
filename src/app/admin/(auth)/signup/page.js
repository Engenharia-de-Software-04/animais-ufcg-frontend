"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Flex,
    Center,
    FormControl,
    Input,
    Button,
    Image,
    Text
} from '@chakra-ui/react';
import { postAdmin } from '@/app/service/auth';

export default function Register() {
    const router = useRouter();
    const [error, setError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handlePostAdmin = async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        const password = formData.get('password');
        const password1 = formData.get('password1');

        if (password.length <= 8) {
            setPasswordError('A senha deve ter no mínimo 8 digitos');
            return;
        }

        if (password !== password1) {
            setError('As senhas não coincidem');
            setPasswordError('');
            return;
        }

        setError(''); 
        setPasswordError(''); 
        try {
            const res = await postAdmin(formData);
            console.log(res);
            if (res.status === 200) {
                router.push('/admin/login');
            } else {
                console.error('Erro ao registrar o administrador');
            }
        } catch (error) {
            console.error('Erro ao fazer a solicitação', error);
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
                        <form onSubmit={handlePostAdmin}>
                            <FormControl>
                                <Input 
                                    mb="1rem"
                                    type='text'
                                    name='nome'
                                    placeholder='Nome'
                                    required
                                    border="1px solid"
                                    bg="white"
                                    borderRadius="25px"
                                    height={50}
                                    minWidth={250}
                                />
                                <Input 
                                    mb="1rem"
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    required
                                    border="1px solid"
                                    bg="white"
                                    borderRadius="25px"  
                                    height={50}
                                    minWidth={250}
                                />
                                <Input 
                                    mb="1rem"
                                    type='password'
                                    name='password'
                                    placeholder='Senha'
                                    required
                                    border={`1px solid ${error || passwordError ? 'red' : 'gray'}`} // Bordas condicionais
                                    bg="white"
                                    borderRadius="25px"  
                                    height={50}
                                    minWidth={250}
                                />
                                <Input 
                                    mb="1rem"
                                    type='password'
                                    name='password1'
                                    placeholder='Confirme a senha'
                                    required
                                    border={`1px solid ${error || passwordError ? 'red' : 'gray'}`} // Bordas condicionais
                                    bg="white"
                                    borderRadius="25px"  
                                    height={50}
                                    minWidth={250}
                                />
                                {(error || passwordError) && (
                                    <Text color="red.500" mb="1rem">
                                        {error || passwordError}
                                    </Text>
                                )}
                                <Button 
                                    type='submit' 
                                    size='lg' 
                                    width={130} 
                                    mx="auto" 
                                    backgroundColor="#FFB210" 
                                    display="block" 
                                    borderRadius="25px" 
                                >
                                    Cadastrar
                                </Button>
                            </FormControl>
                        </form>
                    </Center>
                </Flex>
            </Flex>
        </div>
    );
}
