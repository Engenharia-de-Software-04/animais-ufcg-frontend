import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react';
import AuthProvider from './_providers';
import "./globals.css"

export default function RootLayout({ children, session }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />

        {/* Ícones para dispositivos Apple */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Ícones para Android Chrome */}
        <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" />
        <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" />

        {/* Manifesto Web */}
        <link rel="manifest" href="/site.webmanifest" />

        <title>Animais UFCG</title>
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
