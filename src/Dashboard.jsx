import React, { useState, useEffect, useRef } from 'react';
import { Grid, Box, Typography, Button, Slider, Paper, Divider } from '@mui/material';
import DrawerAppBar from './components/Navbar';
import { FaReact, FaFigma, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { TailPaper } from './components/TailPaper';

const DashboardPage = () => {


//  AQUI É FEITO O EFEITO PARA QUE A CAIXA DE TEXTO FIQUE RESPONSIVA

    const [isPropTrue, setIsPropTrue] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            if (windowWidth < 1250) {
                setIsPropTrue(false);
            } else {
                setIsPropTrue(true);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


//  AQUI SÃO DEFINIDAS AS REFERÊNCIAS QUE SERÃO UTILIZADAS 
//  PARA OS EFEITOS DE DETECTÇÃO DE 'VIEWPORT'


    const componentPaper_1 = useRef(null);
    const componentPaper_2 = useRef(null);
    const componentPaper_3 = useRef(null);

    const componentRef2_1 = useRef(null);
    const componentRef2_2 = useRef(null);
    const componentRef2_3 = useRef(null);
    const componentRef2_4 = useRef(null);
    const componentRef2_5 = useRef(null);
    const componentRef3_1 = useRef(null);
    const componentRef3_2 = useRef(null);
    const componentRef3_3 = useRef(null);

    const componentRef4_1 = useRef(null);
    const componentRef4_2 = useRef(null);
    const componentRefText_1 = useRef(null);
    const componentRefText_2 = useRef(null);
    const componentRefText_3 = useRef(null);
    const componentRefText_4 = useRef(null);
    const componentRefText_5 = useRef(null);
    const componentRefText_6 = useRef(null);

    // Agora, com useEffect, o three.js é utilizado para definir as transições em cada 'viewport'
    useEffect(() => {

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Adjust this threshold value as needed
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
            });
        }, observerOptions);

        const observer_1 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the class with the animation to the component
                    entry.target.classList.add('component');
                    entry.target.style.opacity = 1;
                } else {
                    // Remove the class when the component is not intersecting
                    entry.target.classList.remove('component');
                }
            });
        }, observerOptions);

        const observer_paper = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the class with the animation to the component
                    entry.target.style.left = `10rem`;
                    entry.target.style.opacity = 1;

                }
            });
        }, observerOptions);


        const observer_paper_meio = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the class with the animation to the component
                    entry.target.style.left = `-35rem`;
                    entry.target.style.opacity = 1;

                }
            });
        }, observerOptions);

        // Observe each component's ref
        observer.observe(componentRef2_1.current);
        observer.observe(componentRef2_2.current);
        observer.observe(componentRef2_3.current);
        observer.observe(componentRef2_4.current);
        observer.observe(componentRef2_5.current);

        observer_1.observe(componentRef3_1.current);
        observer_1.observe(componentRef3_2.current);
        observer_1.observe(componentRef3_3.current);
        // observer.observe(componentRef3_4.current);
        // observer.observe(componentRef3_5.current);

        observer_paper.observe(componentPaper_1.current);
        observer_paper_meio.observe(componentPaper_2.current);
        observer_paper.observe(componentPaper_3.current);

        observer.observe(componentRef4_1.current);
        observer.observe(componentRef4_2.current);
        observer.observe(componentRefText_1.current);
        observer.observe(componentRefText_2.current);
        observer.observe(componentRefText_3.current);
        observer.observe(componentRefText_4.current);
        observer.observe(componentRefText_5.current);
        observer.observe(componentRefText_6.current);

        // Clean up the observer when component is unmounted or ref changes
        return () => {
            observer.disconnect();
            observer_1.disconnect();
            observer_paper.disconnect();
            observer_paper_meio.disconnect();
        };
    }, []);

    // As seguintes constantes definem o estilo de alguns componentes


    const tailPaperStyle = {
        transition: 'left 0.5s ease-in, opacity 0.5s ease-in',
        '@media (min-width: 1250px)': {
            transform: 'rotate(0.5turn)',
        },
        '@media (max-width: 1250px)': {
            left: '10rem !important',
        },
    }

    const paperStyle2 = {
        backgroundColor: 'white',
        height: '10vh',
        width: '10vh',
        display: 'flex',
        marginTop: -20,
        borderRadius: 40,
        justifyContent: 'center',
        paddingTop: 1.5,
        opacity: 0, // Set initial opacity to 0
        transition: 'opacity 0.5s ease-in, margin-left 0.5s ease-in', // Add transition for smooth fading effect
    }

    const paperStyleProgress_1 = {
        backgroundColor: 'white',
        height: '10vh',
        width: '10vh',
        '@media (max-width: 700px)': {
            width: '10vh', height: '10vh',
        },
        marginTop: 35,
        borderRadius: 40,
        paddingTop: 1.5,
        opacity: 0,
        transition: 'opacity 1s ease-in',
    }

    const paperStyleProgress_2 = {
        backgroundColor: 'white',
        height: '10vh',
        width: '10vh',
        '@media (max-width: 700px)': {
            width: '10vh', height: '10vh',
        },
        marginTop: 30,
        borderRadius: 40,
        paddingTop: 1.5,
        opacity: 0,
        transition: 'opacity 1s ease-in',

    }

    const paperStyleProgress_3 = {
        backgroundColor: 'white',
        height: '10vh',
        width: '10vh',
        '@media (max-width: 700px)': {
            width: '10vh', height: '10vh',
        },
        marginTop: 30,
        borderRadius: 40,
        paddingTop: 1.5,
        opacity: 0,
        transition: 'opacity 1s ease-in',
    }

    const paperStyle3 = {
        backgroundColor: '#966BB9', height: '65vh', width: '40vh', display: 'flex', justifyContent: 'center', paddingTop: 5,
        opacity: 0, // Set initial opacity to 0
        transition: 'opacity 0.5s ease-in', marginBottom: 5,

    }
    const paperStyle3_2 = {
        backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', paddingTop: 5, boxShadow: 0,
        opacity: 0, // Set initial opacity to 0
        transition: 'opacity 0.5s ease-in', marginBottom: 5,
        width: '10rem'
    }

    return (
        <>

            <DrawerAppBar />

            <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>

                <Grid item>

                    <Grid ref={componentRefText_1} sx={{ display: 'flex', justifyContent: 'row', opacity: 0, transition: 'margin-left 0.5s ease-in, opacity 0.5s ease-in', }}>
                        <Typography sx={{
                            fontSize: 40,
                            color: 'white',
                            '@media (max-width: 420px)': {
                                fontSize: 30,
                            },
                        }}>Olá, eu sou o
                        </Typography>

                        <Typography sx={{
                            color: '#9143D1', fontSize: 40, marginLeft: 1.5,
                            '@media (max-width: 420px)': {
                                fontSize: 30,
                            },
                        }}>
                            Lucas
                        </Typography>
                    </Grid>

                    <Typography ref={componentRefText_2} sx={{
                        marginBottom: 2, fontSize: 30,
                        color: 'white',
                        opacity: 0, transition: 'margin-left 0.5s ease-in, opacity 0.5s ease-in', position: 'absolute'
                    }}>Texto 2</Typography>

                </Grid>
            </Grid>

            <Grid>
                <Divider sx={{ marginTop: 100 }} />

                <Typography ref={componentRefText_3} sx={{

                    marginLeft: '20vh',
                    color: 'white',
                    fontSize: 36, opacity: 0, transition: 'margin-left 0.5s ease-in, opacity 0.5s ease-in', position: 'absolute',
                    '@media (max-width: 600px)': {
                        fontSize: 30
                    },
                }}>Teste para texto com three.js</Typography>
                <Typography ref={componentRefText_4} sx={{
                    marginLeft: '20vh', fontSize: 30, top: '65rem',
                    color: 'white',
                    opacity: 0, transition: 'margin-left 0.5s ease-in, opacity 0.5s ease-in', position: 'absolute',
                    '@media (max-width: 600px)': {
                        fontSize: 26
                    },
                }}>Teste teste teste</Typography>
            </Grid>




            <Grid sx={{
                display: 'flex', justifyContent: 'center',
                '@media (max-width: 1250px)': {
                    marginRight: '50%'
                },
                '@media (max-width: 900px)': {
                    marginRight: '80%'
                },
            }}>

                {/* CADA PAPER É UM CÍRCULO */}
                {/* CADA TAILPAPER É UMA CAIXA DE TEXTO */}

                <Grid sx={{ position: 'absolute' }}>

                    <Paper sx={paperStyleProgress_1} ref={componentRef3_1} />

                    <TailPaper ref={componentPaper_1} bottom='31rem' left='1rem' />

                    <Paper sx={paperStyleProgress_2} ref={componentRef3_2} />

                    <TailPaper ref={componentPaper_2} isPropTrue={isPropTrue} bottom='10rem' left='-30rem' sx={tailPaperStyle} />

                    <Paper sx={paperStyleProgress_3} ref={componentRef3_3} />

                    <TailPaper bottom='-11rem' ref={componentPaper_3} sx={{}} left='1rem' />

                </Grid>

                {/* O Divider abaixo é a linha branca do meio */}

                <Divider variant='middle' sx={{ borderColor: 'white', borderWidth: 2, transform: 'rotate(0.25turn)', width: '60rem', marginTop: 80 }} />

            </Grid>

            {/* COMPETÊNCIAS (ÍCONES) */}

            <Grid columnGap={5} spacing={2} rowGap={15} container sx={{ display: 'flex', justifyContent: 'center', marginTop: '50rem', marginLeft: -5 }} >
                <Grid item ><Paper ref={componentRef2_1} sx={paperStyle2}>
                    <FaReact size={70} />
                </Paper></Grid>
                <Grid item>   <Paper ref={componentRef2_2} sx={paperStyle2}>
                    <FaCss3Alt size={70} />
                </Paper></Grid>
                <Grid item  >  <Paper ref={componentRef2_3} sx={paperStyle2}>
                    <FaHtml5 size={70} />
                </Paper></Grid>
                <Grid item  >    <Paper ref={componentRef2_4} sx={paperStyle2}>
                    <FaFigma size={70} />
                </Paper></Grid>
                <Grid item> <Paper ref={componentRef2_5} sx={paperStyle2}>
                    <Typography sx={{ fontWeight: 800, fontSize: 30, marginTop: 1, fontFamily: 'sans-serif' }}>JS</Typography>
                </Paper></Grid>

            </Grid>

            {/* ENTRE EM CONTATO */}

            <Divider sx={{ marginTop: 10, }} />

            <Typography ref={componentRefText_5} sx={{
                marginLeft: '20vh',
                marginTop: -10,
                color: 'white',
                fontSize: 30, opacity: 0, transition: 'margin-left 0.5s ease-in, opacity 0.5s ease-in',
            }}>Entre em</Typography>
            <Typography ref={componentRefText_6} sx={{
                marginLeft: '20vh', marginBottom: 3, fontSize: 36,
                color: 'white',
                opacity: 0, transition: 'margin-left 0.5s ease-in, opacity 0.5s ease-in',
            }}>Contato</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-around', marginRight: 5 }}>
                <Grid columnGap={5} spacing={2} rowGap={15} container sx={{}} >
                    <Grid item><Paper ref={componentRef4_1} sx={paperStyle3}> </Paper></Grid>

                    <Grid item>  <Paper ref={componentRef4_2} sx={paperStyle3_2}>
                    </Paper>
                    </Grid>
                </Grid>
            </Box>

        </>
    );
};

export default DashboardPage;
