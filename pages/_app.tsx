import "../styles/globals.css";
import type { AppProps } from "next/app";
import LoadingScreen from "../components/preloader";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Header } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url: string) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);
  return (
    <>
      <LoadingScreen loading={loading} />
      <>
        <Header />

        <Component {...pageProps} />
      </>
    </>
  );
}

export default MyApp;
