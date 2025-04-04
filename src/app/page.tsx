'use client'

import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import HomeBanner from "./components/HomeBanner";
import About from "./components/About";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <Container>
      {/* <NavBar/> */}
      <div style={{ height: '10vh' }}></div>
      <HomeBanner/>
      <About/>
      <Experience/>
      <Skills/>
      <Achievements/>
    </Container>
  );
}
