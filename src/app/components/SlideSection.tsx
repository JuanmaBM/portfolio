import React, { Children, Dispatch, SetStateAction, useEffect } from "react";
import { Slide } from "@mui/material";

interface FadeSectionProps {
    revealPosition: number;
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
    content: any;
}

export default function SlideSection({
    revealPosition: revealPosition,
    show: show, 
    setShow: setShow,
    content: content
}: FadeSectionProps) {

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > revealPosition) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Slide in={show} direction="up">
            {content}
        </Slide>
    );
}