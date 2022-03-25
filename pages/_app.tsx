import { Background } from "@/components/Background";
import type { AppProps } from "next/app";
import { GlobalStyle } from "styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Background />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
