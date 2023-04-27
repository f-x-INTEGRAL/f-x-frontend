import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import { global } from '@/styles/global';
import { theme } from '@/styles/theme';
import { Navbar } from '@/components';
import { CookiesProvider } from 'react-cookie';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Global styles={global} />
      <Head>
        <title>nabom</title>
      </Head>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </ThemeProvider>
  );
}
