import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react';
import AuthProvider from './_providers';
import "./globals.css"

export default function RootLayout({ children, session }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body>
        <ChakraProvider>
            <AuthProvider>
              {children}
            </AuthProvider>
        </ChakraProvider >
      </body>
    </html>
  )
}
