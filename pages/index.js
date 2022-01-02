import PropTypes from "prop-types";
import Head from "next/head";
import {
  About,
  Contact,
  Header,
  LandingSection,
  Projects,
  Services,
} from "../components";

export default function Home() {
  return (
    <div className="dark:bg-gray-700 flex flex-col items-center overflow-hidden">
      <Head>
        <title>Piyush Agarwal Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <LandingSection />
      <Projects />
      <About />
      <Services />
      <Contact />
    </div>
  );
}
