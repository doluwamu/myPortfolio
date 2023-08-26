import { useEffect } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import TopBg from "./components/TopBg";
import Aos from "aos";
import ScrollToTop from "react-scroll-to-top";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 20,
      once: true,
    });
  }, []);

  return (
    <main style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <TopBg />
      <Navbar />
      <ScrollToTop />
      {/* <br />
      <br /> */}
      <Hero />
      <br />
      <br />
      <br />
      <br />
      <AboutMe />
      <br />
      <br />
      <br />
      <br />
      <Stack />
      <br />
      <br />
      <br />
      <Projects />
      <br />
      <br />
      <br />
      <Contact />
      <br />
      <br />
      <Footer />
    </main>
  );
}

export default App;
