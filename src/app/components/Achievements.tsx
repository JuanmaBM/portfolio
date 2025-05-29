import { Box, Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import { Row } from "react-bootstrap";
import SlideSection from "./SlideSection";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Color from "color";

export default function Achievements() {

    const [showAchievements, setShowAchievements] = useState(false)

    const achievements = [
        {
            image: './assets/achievements/architect.png',
        },
        {
            image: './assets/achievements/cnd.png',
        },
        {
            image: './assets/achievements/architect_ocp.png',
        },
        {
            image: './assets/achievements/developer.png',
        },
        {
            image: './assets/achievements/openshift_admin.png',
        },
        {
            image: './assets/achievements/openshift_ai.png',
        },
        {
            image: './assets/achievements/acm.png',
        },
        {
            image: './assets/achievements/mesh.png',
        },
        {
            image: './assets/achievements/kubernetes_specialist.png',
        },
    ]

    const CardActionAreaActionArea = styled(CardActionArea)(() => ({
        borderRadius: 16,
        transition: "0.2s",
        "&:hover": {
            transform: "scale(1.1)",
        },
    }));

    const StyledCard = styled(Card)(({ color }) => ({
        width: 400,
        borderRadius: 16,
        boxShadow: "none",
        "&:hover": {
            boxShadow: `0 6px 12px 0 ${Color(color).rotate(-12).darken(0.2).fade(0.5)}`,
        },
    }));

    const CustomCard = ({
    image,
    }: {
    image: string;
    }) => (
    <CardActionAreaActionArea>
        <StyledCard>
        <CardMedia
            image={image}
            sx={{
            width: "100%",
            height: 300,
            backgroundSize: 'contain',
            }}
        />
        </StyledCard>
    </CardActionAreaActionArea>
    );

    const content =
        <Row className="justify-content-center align-items-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Achievements</h1>
            <Box
                sx={{
                width: "10%",
                height: "1px",
                margin: "0 auto 2rem auto",
                backgroundColor: "black",
                clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
                }}
            />
            <Grid container spacing={3}>
                {achievements.map((value, index) =>
                    <Grid key={index}>
                        <CustomCard image={value.image}/>
                    </Grid>
                )}
            </Grid>
        </Row>

    return (
        <div>
            <div style={{ height: '20vh' }}></div>
            <SlideSection content={content} revealPosition={3000} setShow={setShowAchievements} show={showAchievements} />
        </div>
    )
}