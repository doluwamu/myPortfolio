import { useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
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
    </main>
  );
}

export default App;
