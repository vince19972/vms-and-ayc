import { AppProps } from "next/app";
import Head from "next/head";
import useVH from "react-vh";
import { globalStyles } from "../styles/global";

const title = "邵 & 張 - Vince and Amanda";
const description =
  "✨ 邵跟張要結婚啦 ✨ Vince and Amanda are getting married ✨";
const url = "https://vms-and-ayc.vercel.app/";

function App({ Component, pageProps }: AppProps) {
  useVH();
  globalStyles();

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://www.vince-and-amanda.love/ogImage.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content="https://www.vince-and-amanda.love/ogImage.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
