import { Box, Tab, Tabs, Zoom } from "@mui/material";
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

    const selectedStyle = {
        '&.Mui-selected': {
            color: '#000', // color cuando está seleccionado
        },
        '&:hover': {
            color: '#000', // color al pasar el mouse (hover)
        },
    }

    const content =
        <Row>
            <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Skills</h1>
            <Box
                sx={{
                width: "10%",
                height: "1px",
                margin: "0 auto 2rem auto",
                backgroundColor: "black",
                clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
                }}
            />
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered sx={{'& .MuiTabs-indicator': {backgroundColor: '#ed000c'}}}>
                <Tab sx={selectedStyle} label="Programming Languages" {...a11yProps(0)} />
                <Tab sx={selectedStyle} label="DevOps" {...a11yProps(1)} />
                <Tab sx={selectedStyle} label="Databases" {...a11yProps(2)} />
                <Tab sx={selectedStyle} label="AI" {...a11yProps(2)} />
                <Tab sx={selectedStyle} label="Cloud Providers" {...a11yProps(2)} />
            </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Zoom in={true}>
                <Row style={{ paddingBottom: '5vh' }}>
                    <Col>
                        <CardLayers3d title="Golang" image="./assets/skills/golang.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Typescript" image="./assets/skills/ts.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Python" image="./assets/skills/python.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Java" image="./assets/skills/java.png"/>
                    </Col>
                </Row>
                </Zoom>
                <Zoom in={true} style={{ transitionDelay: '250ms'}}>
                <Row style={{ paddingBottom: '5vh' }}>
                    <Col>
                        <CardLayers3d title="JavaScript" image="./assets/skills/js.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Spring Framework" image="./assets/skills/spring.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Spring Boot" image="./assets/skills/boot.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Quarkus" image="./assets/skills/quarkus.png"/>
                    </Col>
                </Row>
                </Zoom>
                <Zoom in={true} style={{ transitionDelay: '500ms'}}>
                <Row style={{ paddingBottom: '5vh' }}>
                    <Col>
                        <CardLayers3d title="Flask" image="./assets/skills/flask.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="React" image="./assets/skills/react.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Angular" image="./assets/skills/angular.png"/>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                </Zoom>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Zoom in={true}>
                <Row style={{ paddingBottom: '5vh' }}>
                    <Col>
                        <CardLayers3d title="Kubernetes" image="./assets/skills/kubernetes.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Openshift" image="./assets/skills/ocp.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Docker" image="./assets/skills/docker.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Podman" image="./assets/skills/podman.png"/>
                    </Col>
                </Row>
                </Zoom>
                <Zoom in={true} style={{ transitionDelay: '250ms'}}>
                <Row style={{ paddingBottom: '5vh' }}>
                    <Col>
                        <CardLayers3d title="Helm" image="./assets/skills/helm.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Kustomize" image="./assets/skills/kustomize.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Ansible" image="./assets/skills/ansible.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Terraform" image="./assets/skills/terraform.png"/>
                    </Col>
                </Row>
                </Zoom>
                <Zoom in={true} style={{ transitionDelay: '500ms'}}>
                <Row style={{ paddingBottom: '5vh' }}>
                    <Col>
                        <CardLayers3d title="Bash" image="./assets/skills/bash.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Jenkins" image="./assets/skills/jenkins.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Tekton" image="./assets/skills/tekton.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="ArgoCD" image="./assets/skills/argo.png"/>
                    </Col>
                </Row>
                </Zoom>
                <Zoom in={true} style={{ transitionDelay: '750ms'}}>
                <Row style={{ paddingBottom: '5vh' }}>
                    <Col>
                        <CardLayers3d title="Prometheus" image="./assets/skills/prometheus.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Grafana" image="./assets/skills/grafana.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="KEDA" image="./assets/skills/keda.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="MQTT" image="./assets/skills/mqtt.png"/>
                    </Col>
                </Row>
                </Zoom>
                <Zoom in={true} style={{ transitionDelay: '1000ms'}}>
                <Row style={{ paddingBottom: '5vh' }}>
                    <Col>
                        <CardLayers3d title="Kafka" image="./assets/skills/kafka.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="RabbitMQ" image="./assets/skills/rabbit.png"/>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                </Zoom>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Zoom in={true}>
                <Row style={{ paddingBottom: '5vh' }}>
                    <Col>
                        <CardLayers3d title="PostgreSQL" image="./assets/skills/postgresql.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="MariaDB" image="./assets/skills/mariadb.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="MySQL" image="./assets/skills/mysql.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="OracleDB" image="./assets/skills/oracle.png"/>
                    </Col>
                </Row>
                </Zoom>
                <Zoom in={true} style={{ transitionDelay: '250ms'}}>
                <Row style={{ paddingBottom: '5vh' }}>
                    <Col>
                        <CardLayers3d title="MongoDB" image="./assets/skills/mongo.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="CassandraDB" image="./assets/skills/cassandra.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="InfluxDB" image="./assets/skills/influxdb.png"/>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                </Zoom>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <Zoom in={true}>
                <Row style={{ paddingBottom: '5vh' }}>
                    <Col>
                        <CardLayers3d title="Ollama" image="./assets/skills/ollama.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Mistral AI" image="./assets/skills/mistral.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Llama AI" image="./assets/skills/llama.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Openshift AI" image="./assets/skills/ocpai.png"/>
                    </Col>
                </Row>
                </Zoom>
                <Zoom in={true} style={{ transitionDelay: '250ms'}}>
                <Row style={{ paddingBottom: '5vh' }}>
                    <Col>
                        <CardLayers3d title="Retrieval-Augmented Generation" image="./assets/skills/rag.png"/>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                </Zoom>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <Zoom in={true}>
                <Row style={{ paddingBottom: '5vh' }}>
                    <Col>
                        <CardLayers3d title="Azure DevOps" image="./assets/skills/azure_devops.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Azure AKS" image="./assets/skills/aks.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Azure CosmosDB" image="./assets/skills/cosmos.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="Azure Event Hub" image="./assets/skills/event_hubs.png"/>
                    </Col>
                </Row>
                </Zoom>
                <Zoom in={true} style={{ transitionDelay: '250ms'}}>
                <Row style={{ paddingBottom: '5vh' }}>
                    <Col>
                        <CardLayers3d title="Azure API Management" image="./assets/skills/azure_api.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="AWS CodePipeline" image="./assets/skills/pipeline.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="AWS Elastic Beanstalk" image="./assets/skills/eb.png"/>
                    </Col>
                    <Col>
                        <CardLayers3d title="AWS EC2" image="./assets/skills/ec2.png"/>
                    </Col>
                </Row>
                </Zoom>
            </CustomTabPanel>
        </Row>


    return (
        <div>
            <div style={{ height: '20vh' }}></div>
            <SlideSection content={content} revealPosition={1900} setShow={setShowSkills} show={showSkills} />
        </div>
    )
}