import Head from 'next/head';
import Nav from '@/components/Navigation';
import { AppProps } from 'next/app';
import '../styles/global.css';
import { useEffect } from "react";

import { wrapper } from '@/lib/redux/store';
import { useAppDispatch } from '@/lib/redux/hooks';
import { updateScreenWidth } from '@/lib/redux/reducers/screenSize';
// The _app component file is rendered with every page. It serves as
// kind of like a template for all the other pages. 

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useAppDispatch();
  //the first useEffect is necessary to get the initial screen width
  useEffect(() => {
    dispatch(updateScreenWidth({ width: window.innerWidth }));
  }, []);

  useEffect(() => {
    function handleScreenResize() {
      dispatch(updateScreenWidth({ width: window.innerWidth}));
    }
    window.addEventListener('resize', handleScreenResize);
    return () => window.removeEventListener('resize', handleScreenResize);
  }, [dispatch]);

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

export default wrapper.withRedux(MyApp);