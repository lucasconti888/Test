import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid, Input, Typography } from '@mui/material';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'gabi' && password === 'gabi') {
      navigate('/dashboard', { state: { account: username } });
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
      <Typography>Login</Typography>
      <Input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} 
      sx={{marginTop:2}}/>
      <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} 
      sx={{marginTop:2, marginBottom:2}}/>
      <Button variant='outlined' onClick={handleLogin}>Login</Button>
    </Box>
  );
};

export default LoginPage;
