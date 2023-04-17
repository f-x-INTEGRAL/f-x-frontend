import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import { global } from '@/styles/global';
import { theme } from '@/styles/theme';
import { Navbar } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Global styles={global} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
