import React, { useState } from "react";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import SlideSection from "./SlideSection";

export default function Footer() {

    const [showFooter, setShowFooter] = useState(false)

    const content = 
      <Box component="footer" sx={{ bgcolor: "transparent", py: 5 }}>
        <Box
          sx={{
            width: "90%",
            height: "1px",
            margin: "0 auto 2rem auto",
            backgroundColor: "black",
            clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
          }}
        />

        <Stack direction="row" spacing={5} justifyContent="center">
          {[
            {
              icon: <GitHub fontSize="large" />,
              link: "https://github.com/JuanmaBM",
              label: "GitHub",
            },
            {
              icon: <LinkedIn fontSize="large" />,
              link: "https://es.linkedin.com/in/juanma-barea-mart%C3%ADnez-a8400996",
              label: "LinkedIn",
            },
            {
              icon: (
                <img
                  src="/assets/credly.png"
                  alt="Credly"
                  width={32}
                  height={32}
                  style={{ display: "block" }}
                />
              ),
              link: "https://www.credly.com/users/juan-manuel-barea-martinez",
              label: "Credly",
            },
            {
              icon: <Email fontSize="large" />,
              link: "mailto:juanmabareamartinez@gmail.com",
              label: "Email",
            },
          ].map(({ icon, link, label }, index) => (
            <IconButton
              key={index}
              component="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              sx={{
                border: "2px solid black",
                borderRadius: "50%",
                color: "black",
                p: 2,
                transition: "0.3s",
                "&:hover": {
                  bgcolor: "#ed000c",
                  color: "white",
                },
              }}
            >
              {icon}
            </IconButton>
          ))}
        </Stack>
      </Box>

    return (
        <div>
            <div style={{ height: '10vh' }}></div>
            <SlideSection content={content} revealPosition={4000} setShow={setShowFooter} show={showFooter} />
        </div>
    )
}