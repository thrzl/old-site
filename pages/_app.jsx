import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NextUIProvider } from '@nextui-org/react'
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/700.css"
import Head from 'next/head'
import React from 'react'

const client = new QueryClient()


function MyApp({ Component, pageProps }) {
  return (
    <>
    <QueryClientProvider client={client}>
      <NextUIProvider>
        <Head>
          <title>thrizzle.</title>
        </Head>
        <Component {...pageProps} />
      </NextUIProvider>
    </QueryClientProvider>
    </>
  )
}

export default MyApp
