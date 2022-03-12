import '../styles/globals.css'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { NextUIProvider } from '@nextui-org/react'

const client = new QueryClient()


function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={client}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </QueryClientProvider>
  )
}

export default MyApp
