import { Col, Container, Image, Row } from "react-bootstrap";
import TypewriterComponent from "typewriter-effect";

const jobsTitles = [
    "Sofware Engineer at RedHat",
    "DevOps Enthusiast",
    "Open Source Contributor",
    "Technical Writer",
]

const writerOptions = {
    strings: jobsTitles,
    autoStart: true,
    loop: true,
}

export default function HomeBanner() {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Hi there, I'm</h2>
                    <h1>Juanma Barea Martinez</h1>
                    <TypewriterComponent options={writerOptions} />
                </Col>
                <Col>
                    <Image src="./assets/blog-logo-22.png" height={800} width={800}></Image>
                </Col>
            </Row>
        </Container>
    )
}