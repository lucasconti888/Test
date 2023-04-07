import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Facebook from './components/Media';
import { Grid, Box, Typography, Button, Slider } from '@mui/material';

const DashboardPage = (props) => {
    const [value, setValue] = useState(0)
    const [loading, setLoading] = useState(props.loading);

    function handleSlide(event) {
        setValue(event.target.value);
    }
    const location = useLocation();
    const account = location.state ? location.state.account : '';

    return (
        <Box sx={{
            // backgroundColor: 'rgba(126, 149, 255, 0.6)', 
            // background: 'linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)',
            background: 'radial-gradient(circle, rgba(82,49,128,0.8) 47%, rgba(82,49,128,0.8) 79%, rgba(82,49,128,0.8) 90%)',
        
        
        padding: 3, minHeight:'90vh'
        }}>

            <Grid sx={{ padding: 2 }}>
                <Typography sx={{ fontWeight: 800, }}>Welcome to the Dashboard, {account}!</Typography>
                {account && <Typography sx={{ fontWeight: 600, }}>You are logged in as {account}.</Typography>}
                <Typography>This is your dashboard page.</Typography>
                <Slider
                    size="small"
                    defaultValue={0}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    value={value}
                    onChange={handleSlide}
                    max={750}
                />
            </Grid>

            <Box sx={{
                marginLeft: loading ? 1 : `${value}px`,
                transition: 'margin-left 0.5s ease-out'
            }}>
                <Facebook />
            </Box>

            {value >= 300 && (
                <>
                    <Grid
                        sx={{
                            position: "fixed",
                            top: "30vh",
                            left: "10vh",
                            opacity: Math.min((value - 300) / 150, 1),
                            transition: "opacity 2s ease-in",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                width: "70vh",
                                height: "8vh",
                                justifyContent: "flex-start",
                                paddingLeft: 4,
                                textTransform: "none",
                                fontSize: "18px",
                                backgroundColor: "rgba(126, 149, 255, 1)",
                            }}
                        >
                            Ver dados
                        </Button>
                        <Button variant='contained' sx={{
                            width: '70vh', height: '8vh', justifyContent: 'flex-start', paddingLeft: 4, textTransform: 'none', fontSize: '18px', marginTop: 3,
                            backgroundColor: 'rgba(126, 149, 255, 1)'
                        }}>
                            Ver dados
                        </Button>
                    </Grid>
                </>
            )}

        </Box>

    );
};

export default DashboardPage;
