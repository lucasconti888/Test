import React from 'react';
import { useLocation } from 'react-router-dom';
import Facebook from './components/Media';
import { Grid, Box, Typography, Button } from '@mui/material';

const DashboardPage = () => {
    // function handleClick() {
    //     const audio = new Audio(somBotao);
    //     audio.play();
    //   }
    const location = useLocation();
    const account = location.state ? location.state.account : '';

    return (
        <Box sx={{ backgroundColor: 'rgba(126, 149, 255, 0.8)', padding: 3 }}>

            <Grid sx={{padding:2}}>
                <Typography sx={{fontWeight:800, }}>Welcome to the Dashboard, {account}!</Typography>
                {account && <Typography sx={{fontWeight:600, }}>You are logged in as {account}.</Typography>}
                <Typography>This is your dashboard page.</Typography>
                {/* <Button onClick={handleClick}>Clique Aqui</Button> */}
            </Grid>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={6}>
                    <Facebook />
                </Grid>
                <Grid item xs={6}>
                    <Facebook />
                </Grid>
            </Grid>
        </Box>
    );
};

export default DashboardPage;
