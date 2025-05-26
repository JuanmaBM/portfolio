import { Box } from "@mui/material";
import { useState } from "react";
import { Row } from "react-bootstrap";
import SlideSection from "./SlideSection";

export default function About() {

    const [showAbout, setShowAbout] = useState(false);

    const content = 
        <div className="flex items-center justify-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">About Me</h1>
            <Box
                sx={{
                width: "10%",
                height: "1px",
                margin: "0 auto 2rem auto",
                backgroundColor: "black",
                clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
                }}
            />
            <p className="text-lg text-gray-700 mb-6">
                I am a software engineer with extensive experience in various fields such as software development, cloud computing, DevOps, system architecture design, and full-stack development. Throughout my career, I transitioned into more strategic roles, specializing as a microservices integration architect and solutions architect focused on cloud-based architectures. However, my passion for technology brought me back to my roots as a software engineer, where I returned to full technical specialization. The experience I’ve acquired over the years has helped me become highly adaptable and versatile in my role.
            </p>
            <p className="text-lg text-gray-700 mb-6">
                I’m an avid reader who is always eager to learn something new or improve. I’m also constantly looking for ways to implement or develop ideas that allow me to apply what I learn through books or the internet.
            </p>
            <p className="text-lg text-gray-700">
                Outside of work, I practice mixed martial arts, am an avid reader of novels, a fan of great movies and I enjoy videogames with great stories—those made with passion, not just for profit. As a techie/nerd, I’m a strong advocate of Open Source, and I try to contribute to Open Source projects or write tech posts whenever I can.
            </p>
        </div>

    return (
        <Row>
            <div className="min-h-screen bg-gray-100">
                <div style={{ height: '30vh' }}></div>
                <SlideSection revealPosition={450} show={showAbout} setShow={setShowAbout} content={content} />
            </div>
        </Row>
    );
};