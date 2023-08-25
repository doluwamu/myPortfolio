import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import TopBg from "./components/TopBg";

function App() {
  return (
    <main style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <TopBg />
      <Navbar />
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
