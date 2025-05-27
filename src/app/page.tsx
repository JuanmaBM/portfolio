'use client'

import { Container } from "react-bootstrap";
import HomeBanner from "./components/HomeBanner";
import About from "./components/About";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Container>
      <div style={{ height: '10vh' }}></div>
      <HomeBanner/>
      <About/>
      <Experience/>
      <Skills/>
      <Achievements/>
      <Footer/>
    </Container>
  );
}
