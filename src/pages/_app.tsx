import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/index.css";

const StartPage = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>New Tab</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#dddde6" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default StartPage;
