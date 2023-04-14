import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Box, Typography, Button, Slider, Paper } from '@mui/material';
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
import * as THREE from 'three';
import gifImage from './gifhead.gif';
import gifComp from './giphy.gif'

const paperStyle1 = {
    backgroundColor: 'white', height: '65vh', width: '100vh', display: 'flex', justifyContent: 'center', paddingTop: 2,
    opacity: 0, // Set initial opacity to 0
    transition: 'opacity 0.5s ease-in', boxShadow: 0
}

const paperStyle2 = {
    backgroundColor: 'tomato',
    height: '25vh',
    width: '25vh',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 5,
    opacity: 0, // Set initial opacity to 0
    transition: 'opacity 0.5s ease-in', // Add transition for smooth fading effect
}

const paperStyle3 = {
    backgroundColor: 'green', height: '65vh', width: '50vh', display: 'flex', justifyContent: 'center', paddingTop: 5,
    opacity: 0, // Set initial opacity to 0
    transition: 'opacity 0.5s ease-in', marginBottom: 5
}
const paperStyle3_2 = {
    backgroundColor: 'white', display: 'flex', justifyContent: 'center', paddingTop: 5, boxShadow: 0,
    opacity: 0, // Set initial opacity to 0
    transition: 'opacity 0.5s ease-in', marginBottom: 5
}

const DashboardPage = () => {
    const componentRef1 = useRef(null);
    const componentRef2_1 = useRef(null);
    const componentRef2_2 = useRef(null);
    const componentRef2_3 = useRef(null);
    const componentRef2_4 = useRef(null);
    const componentRef2_5 = useRef(null);
    const componentRef3_1 = useRef(null);
    const componentRef3_2 = useRef(null);
    const componentRef3_3 = useRef(null);
    const componentRef3_4 = useRef(null);
    const componentRef3_5 = useRef(null);
    const componentRef4_1 = useRef(null);
    const componentRef4_2 = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 1, // Adjust this threshold value as needed
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Component is in viewport, trigger animations or actions here
                    // Update opacity to 1 to fade in the component
                    entry.target.style.opacity = 1;
                    console.log('Component is in viewport:', entry.target, entry.target.style.opacity);
                }
                else {
                    // Component is not in viewport, update opacity to 0 to fade out the component
                    entry.target.style.opacity = 0;
                }
            });
        }, observerOptions);

        // Observe each component's ref
        observer.observe(componentRef1.current);
        observer.observe(componentRef2_1.current);
        observer.observe(componentRef2_2.current);
        observer.observe(componentRef2_3.current);
        observer.observe(componentRef2_4.current);
        observer.observe(componentRef2_5.current);
        observer.observe(componentRef3_1.current);
        observer.observe(componentRef3_2.current);
        observer.observe(componentRef3_3.current);
        observer.observe(componentRef3_4.current);
        observer.observe(componentRef3_5.current);
        observer.observe(componentRef4_1.current);
        observer.observe(componentRef4_2.current);

        // ... Observe other components' refs

        // Clean up the observer when component is unmounted or ref changes
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <Typography sx={{ marginTop: 10, marginLeft: '20vh', fontSize: 26 }}>Olá, eu sou o Lucas</Typography>
            <Typography sx={{ marginBottom: 2, marginLeft: '20vh', fontSize: 20, color: 'grey' }}>A gabi ama o lu</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '5vh' }}>
                <Paper ref={componentRef1} sx={paperStyle1}>
                    <img src={gifComp} alt="GIF" />
                </Paper>

            </Box>

            <Typography sx={{ marginTop: 8, marginLeft: '20vh', fontSize: 26 }}>Teste para texto com three.js</Typography>
            <Typography sx={{ marginBottom: 2, marginLeft: '20vh', fontSize: 20, color: 'grey' }}>ele é o amor da vida dela </Typography>
            <Box columnGap={5} sx={{ display: 'flex', justifyContent: 'center', marginTop: 10, }}>
                <Paper ref={componentRef2_1} sx={paperStyle2}>A</Paper>
                <Paper ref={componentRef2_2} sx={paperStyle2}>gabi</Paper>
                <Paper ref={componentRef2_3} sx={paperStyle2}>quer</Paper>
                <Paper ref={componentRef2_4} sx={paperStyle2}>te</Paper>
                <Paper ref={componentRef2_5} sx={paperStyle2}>dar</Paper>
            </Box>
            <Box columnGap={5} sx={{ display: 'flex', justifyContent: 'center', marginTop: 5, }}>
                <Paper ref={componentRef3_1} sx={paperStyle2}>come </Paper>
                <Paper ref={componentRef3_2} sx={paperStyle2}>A</Paper>
                <Paper ref={componentRef3_3} sx={paperStyle2}>gabi</Paper>
                <Paper ref={componentRef3_4} sx={paperStyle2}>por </Paper>
                <Paper ref={componentRef3_5} sx={paperStyle2}>favor </Paper>
            </Box>


            <Typography sx={{ marginTop: 5, marginLeft: '20vh', fontSize: 20, color: 'grey' }}>Entre em</Typography>
            <Typography sx={{ marginLeft: '20vh', marginBottom: 6, fontSize: 26 }}>Contato</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 4, marginRight: 5 }}>
                <a href='https://www.miess.com.br/sex-shop'> <Paper ref={componentRef4_1} sx={paperStyle3}>A é sério clica aqui e vc vai ver um site legal  </Paper></a>
                <Paper ref={componentRef4_2} sx={paperStyle3_2}>
                    <img src={gifImage} alt="GIF" />
                </Paper>
            </Box>
        </>
    );
};

export default DashboardPage;
