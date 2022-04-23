import '../styles/globals.css'
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/700.css"
import Head from 'next/head'
import React from 'preact/compat'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>thrizzle.</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
