import Head from 'next/head';
import Nav from '@/components/Navigation';
import { AppProps } from 'next/app';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <meta name="theme-color" content="#00A86B" />
            </Head>
            <Nav />
            <Component {...pageProps} />
        </>
);
}

export default MyApp;