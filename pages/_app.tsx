import type { AppProps } from "next/app";
import { GlobalStyle } from "styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <video id="backgroundVideo" autoPlay muted loop>
        <source
          src="/rocket_bw_small_2-54cc5582f5cc4a26d14da1accdb66daf.mp4"
          type="video/mp4"
        />
      </video>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
