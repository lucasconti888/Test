import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Facebook from './components/Media';
import { Grid, Box, Typography, Button, Slider, Paper } from '@mui/material';
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const DashboardPage = (props) => {
    const [value, setValue] = useState(false)
    const [loading, setLoading] = useState(props.loading);

    const location = useLocation();
    const account = location.state ? location.state.account : '';

    const handleSwitchToggle = () => {
        setValue(true);
    };
    
    const handleSwitchOff = () => {
        setValue(false);
    };

    return (
        <Box sx={{
            background: 'radial-gradient(circle, rgba(12,0,122,1) 64%, rgba(0,30,94,0.9613095238095238) 79%)',
            padding: 3,
            minHeight:'90vh'
        }}>
            <Grid sx={{ padding: 2 }}>
                {account && <Typography sx={{ fontWeight: 600, color:'white' }}>You are logged in as {account}.</Typography>}

                <Paper sx={{width:'4rem', paddingLeft:10, marginLeft:-6, marginTop:3, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-end'}}>
                    <Typography sx={{ fontWeight: 600 }}>Menu</Typography>
                <Switch 
                    onChange={value ? handleSwitchOff : handleSwitchToggle}
                    checked={value}
                    {...label} 
                />
                </Paper>
            </Grid>

            <Box sx={{
                marginLeft: value ? (loading ? 1 : '600px') : 1,
                transition: 'margin-left 0.5s ease-out'
            }}>
                <Facebook />
            </Box>

            {value && (
    <Grid
        sx={{
            position: "fixed",
            top: "30vh",
            left: "10vh",
            width: value ? 1 : 0,
            transition:  "width 2s ease-in" ,
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
        <Button 
            variant='contained' 
            sx={{
                width: '70vh', 
                height: '8vh', 
                justifyContent: 'flex-start', 
                paddingLeft: 4, 
                textTransform: 'none', 
                fontSize: '18px', 
                marginTop: 3,
                backgroundColor: 'rgba(126, 149, 255, 1)'
            }}
        >
            Ver dados
        </Button>
    </Grid>

            )}
        </Box>
    );
};

export default DashboardPage;
