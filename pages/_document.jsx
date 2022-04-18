import { Html, Main, NextScript } from 'next/document'
import { Head } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {CssBaseline.flush()}
                <meta
                name="description"
                content="👋🏽 hey there!"
                />
                <meta property="og:image" content="https://cdn.terabyteis.me/r/02-20-2022_20202034.png"/>
                <link rel="apple-touch-icon" href="logo192.png" />
                <script defer data-website-id="c3365efa-8983-46d0-a970-54a52069d808" src="https://umami-production-678c.up.railway.app/umami.js"></script>
            </Head>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
  }
  

