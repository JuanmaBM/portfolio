import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import SlideSection from "./SlideSection";
import CardLayers3d from "./CardLayers3d";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Skills() {

    const [value, setValue] = useState(0);
    const [showSkills, setShowSkills] = useState(false);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const content =
        <Row>
            <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Skills</h1>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                <Tab label="Programming Languages" {...a11yProps(0)} />
                <Tab label="DevOps" {...a11yProps(1)} />
                <Tab label="Databases" {...a11yProps(2)} />
                <Tab label="Automation" {...a11yProps(2)} />
                <Tab label="Cloud Providers" {...a11yProps(2)} />
                <Tab label="Architecture & Design Patterns" {...a11yProps(2)} />
            </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Row style={{ paddingBottom: '5vh' }}>
                    <Col>
                        <CardLayers3d title="Golang" image="/assets/skills/golang.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Java" image="/assets/skills/java.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="JavaScript" image="/assets/skills/js.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Python" image="/assets/skills/python.png"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardLayers3d title="Spring Framework" image="/assets/skills/spring.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Spring Boot" image="/assets/skills/boot.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Angular" image="/assets/skills/angular.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="React" image="/assets/skills/react.png"/>
                    </Col>
                </Row>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
            Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
            Item Three
            </CustomTabPanel>
        </Row>


    return (
        <div>
            <div style={{ height: '20vh' }}></div>
            <SlideSection content={content} revealPosition={500} setShow={setShowSkills} show={showSkills} />
        </div>
    )
}