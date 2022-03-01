import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta
                name="description"
                content="👋🏽 hey there!"
                />
                <meta property="og:image" content="https://cdn.terabyteis.me/r/02-20-2022_20202034.png"/>
                <link rel="apple-touch-icon" href="logo192.png" />
                <script async defer data-website-id="c3365efa-8983-46d0-a970-54a52069d808" src="https://umami-production-678c.up.railway.app/umami.js"></script>
                <script src="https://cdn.jsdelivr.net/gh/virae/we-stand-with-ukraine@v1.0.1/badge.js" async defer></script>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" as="style" onload="this.onload=null,this.rel='stylesheet'"/>
            </Head>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
  }
  

