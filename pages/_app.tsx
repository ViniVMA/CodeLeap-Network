import { Background } from "@/components/Background";
import type { AppProps } from "next/app";
import { GlobalStyle } from "styles/global";
import { toast } from "react-toastify";

function MyApp({ Component, pageProps }: AppProps) {
  toast.configure({
    autoClose: 8000,
    draggable: false,
    //etc you get the idea
  });
  return (
    <>
      <GlobalStyle />
      <Background />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
