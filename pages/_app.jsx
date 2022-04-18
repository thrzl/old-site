import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/700.css"
import Head from 'next/head'
import React from 'preact/compat'

const client = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <>
    <QueryClientProvider client={client}>
      <Head>
        <title>thrizzle.</title>
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
    </>
  )
}
export default MyApp
