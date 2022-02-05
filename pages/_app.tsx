import { AppProps } from "next/app";
import Head from "next/head";
import { globalStyles } from "../styles/global";

function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Head>
        <title>Vince Shao & Amanda Chang</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
