import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          {children}
        </ChakraProvider >
      </body>
    </html>
  )
}
