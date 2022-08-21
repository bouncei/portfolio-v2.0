import Head from "next/head";
import Image from "next/image";

// PAGE COMPONENTS
import { Hero, Header } from "../components";

const Home = () => {
  return (
    <div className="dark">
      <Head>
        <title>Joshua Emmanuel Inyang</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <Header />
        <Hero />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
    </div>
  );
};

export default Home;
