import Head from "next/head";
import Image from "next/image";

// PAGE COMPONENTS
import { Hero, Header, About, Projects, Skills, Reviews } from "../components";

const Home = () => {
  return (
    <div className="dark">
      <Head>
        <title>Joshua Emmanuel Inyang</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* 
        <Reviews />
       */}
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
    </div>
  );
};

export default Home;
