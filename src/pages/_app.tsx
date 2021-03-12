import Head from 'next/head';
import { AppProps } from 'next/app';

import GlobalStyles from 'styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img" />
        <meta name="description" content="A Simple Project starter to Work with Typescript, React, NextJs And Styled Components"/>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
