import Head from 'next/head';
import Nav from '@/components/Navigation';
import { AppProps } from 'next/app';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
                </style>
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