'use client'

import { Container, Row } from "react-bootstrap";
import NavBar from "./components/NavBar";
import HomeBanner from "./components/HomeBanner";
import About from "./components/About";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";

export default function Home() {
  return (
    <Container>
      <NavBar/>
      <HomeBanner/>
      <About/>
      <Experience/>
      <Achievements/>
    </Container>
  );
}
