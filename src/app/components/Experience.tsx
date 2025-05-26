import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Slide, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import SlideSection from "./SlideSection";

export default function Experience() {

    const [expanded, setExpanded] = useState<string | false>(false);
    const [showExperience, setShowExperience] = useState(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        setExpanded('panel1')
    }, []);

    const content = 
        <Row>
            <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Experience</h1>
            <Box
                sx={{
                width: "10%",
                height: "1px",
                margin: "0 auto 2rem auto",
                backgroundColor: "black",
                clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
                }}
            />
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary>
                    <Avatar alt="Redhat logo" src="assets/redhat-logo.png"/>
                    <Typography component="span" sx={{ width: '80%', flexShrink: 0, paddingLeft: 2, alignContent: "center" }}>
                        RedHat - Software Engineer
                    </Typography>
                    <Typography component="span" sx={{ color: 'text.secondary' }}>
                        Feb 2024 - Current
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>
                            I work as a Software Engineer for the Hybrid Console Management (HCM) Engineering Productivity Team. This team is responsible for making the daily operations of other HCM teams more efficient. Some of my responsibilities include developing tools and applications that assist with deploying, monitoring, and testing HCM applications.
                        </p>
                        <p className="MuiTypography-root MuiTypography-body1 css-rizt0-MuiTypography-root">
                            These responsibilities require a broad knowledge of software development, including not only software development but also Kubernetes/OpenShift capabilities, QA/Testing, Monitoring/Logging, Cloud providers, and even ML/AI.
                        </p>
                        <p className="MuiTypography-root MuiTypography-body1 css-rizt0-MuiTypography-root">
                            Our solutions must adapt to each requirement and are designed to be robust and highly available. To achieve this, we use technologies like OpenShift, Kafka, PostgreSQL, and AWS. Our main tools and applications are written in Go and React, but we are open to using various languages and tools such as Python, Ansible, and Bash.
                        </p>
                        <p className="MuiTypography-root MuiTypography-body1 css-rizt0-MuiTypography-root">
                            Additionally, we need to be familiar with different CI/CD technologies like Jenkins, GitLab, and Tekton.
                        </p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary>
                    <Avatar alt="Redhat logo" src="assets/redhat-logo.png"/>
                    <Typography component="span" sx={{ width: '80%', flexShrink: 0, paddingLeft: 2, alignContent: "center" }}>
                        RedHat - Cloud/DevOps Consultant
                    </Typography>
                    <Typography component="span" sx={{ color: 'text.secondary', alignContent: "center" }}>
                        May 2022 - Feb 2024
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p className="MuiTypography-root MuiTypography-body1 css-rizt0-MuiTypography-root">
                            As a consultant at RedHat, my role is to help clients efficiently adopt RedHat technologies and streamline the development and maintenance of their applications, infrastructure, and platforms. A RedHat consultant is expected to recommend best practices when working with cloud technologies, Kubernetes, automation, and application development. This requires staying continuously updated on emerging technologies.
                        </p>
                        <p className="MuiTypography-root MuiTypography-body1 css-rizt0-MuiTypography-root">
                            Additionally, I have collaborated with the architecture team in delivering presentations and workshops to clients, aimed at showcasing and expanding the use of RedHat technologies.
                        </p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary>
                    <Avatar alt="Knowmadmood logo" src="assets/knowmadmood.png"/>
                    <Typography component="span" sx={{ width: '80%', flexShrink: 0, paddingLeft: 2, alignContent: "center" }}>
                        Knowmadmood - Solution Architect
                    </Typography>
                    <Typography component="span" sx={{ color: 'text.secondary', alignContent: "center" }}>
                        Feb 2019 - May 2022
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p className="MuiTypography-root MuiTypography-body1 css-rizt0-MuiTypography-root">
                            As a Solution Architect, I was involved in high-impact tasks across several projects. Some of these tasks included developing proofs of concept to evaluate the viability of proposed solutions, designing applications and platform systems to meet customer requirements for performance, security, and capacity. I also worked on complex application architectures using various tech stacks and approaches, such as event-driven, serverless, and streaming microservices architectures. During this period, I consistently utilized Kubernetes, ensuring that all applications and the designed platform adhered to cloud-native best practices.
                        </p>
                        <p className="MuiTypography-root MuiTypography-body1 css-rizt0-MuiTypography-root">
                            In addition to my technical role, I was responsible for enhancing team effectiveness. I served as a Team Lead, balancing both leadership and technical responsibilities.
                        </p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary>
                    <Avatar alt="Knowmadmood logo" src="assets/knowmadmood.png"/>
                    <Typography component="span" sx={{ width: '80%', flexShrink: 0, paddingLeft: 2, alignContent: "center" }}>
                        Knowmadmood - Integration Architect
                    </Typography>
                    <Typography component="span" sx={{ color: 'text.secondary' }}>
                        Jan 2018 - Feb 2019
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p className="MuiTypography-root MuiTypography-body1 css-rizt0-MuiTypography-root">
                            During this period I was involucrated in the evolution of some monolithic applications to microservices ecosystems and the migration to cloud native applications. I also was working with Kubernetes, Infrastructure-as-code or NoSQL databases. I started to concern about high level design decisions as platform, infrastructure or monitoring/observability, as well as application architecture. Also, I initiated my journey with automation tools as Ansible or Terraform.
                        </p> 
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary>
                    <Avatar alt="Knowmadmood logo" src="assets/knowmadmood.png"/>
                    <Typography component="span" sx={{ width: '80%', flexShrink: 0, paddingLeft: 2, alignContent: "center" }}>
                        Knowmadmood - FullStack Developer
                    </Typography>
                    <Typography component="span" sx={{ color: 'text.secondary' }}>
                        Jul 2016 - Jan 2018
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p className="MuiTypography-root MuiTypography-body1 css-rizt0-MuiTypography-root">
                            I was developing applications with Spring boot and Angular framework. I had some responsabilites in CI/CD process performed by Jenkins and deploying new application releases in AWS Elastic Beanstalk.
                        </p> 
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Row>

    return (
        <div>
            <div style={{ height: '20vh' }}></div>
            <SlideSection content={content} revealPosition={1000} setShow={setShowExperience} show={showExperience} />
        </div>
    );
};