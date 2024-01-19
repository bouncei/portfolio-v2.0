import { useEffect } from "react";
import Head from "next/head";
// PAGE COMPONENTS
import { Hero, About, Projects, Skills, Contact } from "../components";
import ScrollToTop from "react-scroll-up";
import { PiArrowFatLinesUpFill } from "react-icons/pi";

const Home = () => {
  return (
    <div className="dark">
      <Head>
        <title>Joshua Emmanuel Inyang</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      <footer className="w-full  border-t py-6">
        <Contact />
      </footer>

      {/* <ScrollToTop duration={0.1} showUnder={160}>
        <span>
          <PiArrowFatLinesUpFill
            size={40}
            color="#fb5858"
            className=" hover:scale-110 duration-300 ease-in"
          />
        </span>
      </ScrollToTop> */}
    </div>
  );
};

export default Home;
