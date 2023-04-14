import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Box, Typography, Button, Slider, Paper, Divider } from '@mui/material';
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
import * as THREE from 'three';
import gifImage from './gifhead.gif';
import gifComp from './giphy.gif'


const DashboardPage = () => {

    const [marginLeft, setMarginLeft] = useState(0);
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

    const componentRefText_1 = useRef(null);
    const componentRefText_2 = useRef(null);
    const componentRefText_3 = useRef(null);
    const componentRefText_4 = useRef(null);
    const componentRefText_5 = useRef(null);
    const componentRefText_6 = useRef(null);


    // ........

    const paperStyle1 = {
        backgroundColor: 'transparent', height: '65vh', width: '100vh', display: 'flex', justifyContent: 'center', paddingTop: 2,
        opacity: 0, // Set initial opacity to 0
        transition: 'opacity 0.5s ease-in', 
        boxShadow: 0,

    }

    const paperStyle2 = {
        backgroundColor: '#1e1e5d',
        height: '10vh',
        width: '15vh',
        // '@media (max-width: 400px)': {
        //     width:'20vh', height:'15vh', 
        //   },
        display: 'flex',
      borderRadius:40,
        justifyContent: 'center',
        paddingTop: 5,
        opacity: 0, // Set initial opacity to 0
        transition: 'opacity 0.5s ease-in, margin-left 0.5s ease-in', // Add transition for smooth fading effect

    }

    const paperStyle3 = {
        backgroundColor: '#92a5fd', height: '65vh', width: '50vh', display: 'flex', justifyContent: 'center', paddingTop: 5,
        opacity: 0, // Set initial opacity to 0

        transition: 'opacity 0.5s ease-in', marginBottom: 5,

    }
    const paperStyle3_2 = {
        backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', paddingTop: 5, boxShadow: 0,
        opacity: 0, // Set initial opacity to 0
        transition: 'opacity 0.5s ease-in', marginBottom: 5,

    }


    // ........



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

                    // Update the marginLeft property of paperStyle1 based on the calculated distance
                    entry.target.style.marginLeft = `50px`;
             
                }
                // else {
                //     // Component is not in viewport, update opacity to 0 to fade out the component
                //     entry.target.style.opacity = 0;
                // }
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
        observer.observe(componentRefText_1.current);
        observer.observe(componentRefText_2.current);
        observer.observe(componentRefText_3.current);
        observer.observe(componentRefText_4.current);
        observer.observe(componentRefText_5.current);
        observer.observe(componentRefText_6.current);


        // ... Observe other components' refs

        // Clean up the observer when component is unmounted or ref changes
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
        
            <Typography ref={componentRefText_1} sx={{ marginTop: 10, fontSize: 26, color:'#494d5f',opacity:0, transition: 'margin-left 0.5s ease-in, opacity 0.5s ease-in', }}>Olá, eu sou o Lucas</Typography>
            <Typography ref={componentRefText_2} sx={{ marginBottom: 2,  fontSize: 20, color: '#587ffc', opacity:0, transition: 'margin-left 0.5s ease-in, opacity 0.5s ease-in', }}>A gabi ama o lu</Typography>
            <Divider variant={'middle'}/>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '5vh' }}>
                <Paper ref={componentRef1} sx={paperStyle1}>
                    <img src={gifComp} alt="GIF" />
                </Paper>
            </Box>
            <Divider  sx={{marginTop:5}}/>
            <Typography ref={componentRefText_3} sx={{ marginTop: 8, marginLeft: '20vh',  color:'#494d5f',fontSize: 26, opacity:0, transition: 'margin-left 0.5s ease-in, opacity 0.5s ease-in', }}>Teste para texto com three.js</Typography>
            <Typography ref={componentRefText_4} sx={{ marginBottom: 2, marginLeft: '20vh', fontSize: 20, color: '#587ffc', opacity:0, transition: 'margin-left 0.5s ease-in, opacity 0.5s ease-in', }}>ele é o amor da vida dela </Typography>
            <Divider variant={'middle'}/>

            <Grid columnGap={5} spacing={2} rowGap={15} container sx={{ display: 'flex', justifyContent: 'center', marginTop: 10, }} >
            <Grid item ><Paper ref={componentRef2_1} sx={paperStyle2}>SIMMMM</Paper></Grid>
            <Grid item>   <Paper ref={componentRef2_2} sx={paperStyle2}></Paper></Grid>
            <Grid item  >  <Paper ref={componentRef2_3} sx={paperStyle2}></Paper></Grid>
            <Grid item  >    <Paper ref={componentRef2_4} sx={paperStyle2}></Paper></Grid>
            <Grid item> <Paper ref={componentRef2_5} sx={paperStyle2}></Paper></Grid>
            <Grid item >  <Paper ref={componentRef3_1} sx={paperStyle2}> </Paper></Grid>
            <Grid item >   <Paper ref={componentRef3_2} sx={paperStyle2}></Paper></Grid>
            <Grid item > <Paper ref={componentRef3_3} sx={paperStyle2}></Paper></Grid>
            <Grid item > <Paper ref={componentRef3_4} sx={paperStyle2}> </Paper></Grid>
            <Grid item > <Paper ref={componentRef3_5} sx={paperStyle2}> </Paper></Grid>
            </Grid>

            <Divider sx={{ marginTop:10, }}/>

            <Typography ref={componentRefText_5} sx={{ marginTop: 10, marginLeft: '20vh' , color:'#494d5f', fontSize: 20,  opacity:0, transition: 'margin-left 0.5s ease-in, opacity 0.5s ease-in', }}>Entre em</Typography>
            <Typography ref={componentRefText_6} sx={{ marginLeft: '20vh', marginBottom: 6, fontSize: 26 ,color: '#587ffc',opacity:0, transition: 'margin-left 0.5s ease-in, opacity 0.5s ease-in',}}>Contato</Typography>
            <Divider variant={'middle'}/>


            <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 4, marginRight: 5 }}>
            <Grid columnGap={5} spacing={2} rowGap={15} container sx={{ }} >
                <Grid item><Paper ref={componentRef4_1} sx={paperStyle3}> </Paper></Grid> 
                <Grid item>  <Paper ref={componentRef4_2} sx={paperStyle3_2}>
                    <img src={gifImage} alt="GIF" />
                </Paper>
                </Grid> 
                </Grid>
            </Box>
        </>
    );
};

export default DashboardPage;
