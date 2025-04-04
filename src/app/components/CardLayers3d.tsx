import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import Typography from '@mui/joy/Typography';
import { CardMedia } from '@mui/material';

interface CardLayers3dProps {
    title: string;
    image: string;
}

export default function CardLayers3d({title: title, image: image}: CardLayers3dProps) {
  return (
    <Box
      sx={{
        perspective: '1000px',
        transition: 'transform 0.4s',
        '& > div, & > div > div': {
          transition: 'inherit',
        },
        '&:hover': {
          '& > div': {
            transform: 'rotateY(30deg)',
            '& > div:nth-child(2)': {
              transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
            },
            '& > div:nth-child(3)': {
              transform: 'translate3d(45px, 50px, 40px)',
            },
          },
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          minHeight: '220px',
          width: 220,
          backgroundColor: '#fff',
          borderColor: '#000',
        }}
      >
        <Typography level="h2" textColor="#000" sx={{ fontSize: 'lg' }}>
            {title}
        </Typography>
        <CardCover
          sx={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0) 200px), linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
            border: '1px solid',
            borderColor: '#777',
            backdropFilter: 'blur(1px)',
          }}
        >
            <CardMedia
                image={image}
                sx={{
                width: "100%",
                height: 300,
                backgroundSize: '50%',
                }}
            />
        </CardCover>
      </Card>
    </Box>
  );
}
