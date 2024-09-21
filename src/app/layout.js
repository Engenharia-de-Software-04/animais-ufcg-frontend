import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react';
import AuthProvider from './_providers';

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
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
