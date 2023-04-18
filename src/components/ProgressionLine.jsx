import React from 'react';
import { Grid, Paper, Typography, Avatar, Divider } from '@mui/material';
// import makeStyles from '@mui/material';

// const useStyles = makeStyles(() => ({
//   divider: {
//     height: '100%',
//     transform: 'rotate(90deg)', // Rotate the divider 90 degrees clockwise
//   },
// }));

export const ProgressionLine = () => {
  // const classes = useStyles();

  return (
    <Grid container alignItems="center">
      {/* Vertical line */}
      <Grid item xs={4} sm={4} md={4}>
        <Divider orientation="vertical" className={classes.divider} />
      </Grid>
      {/* Content */}
      <Grid item xs={4} sm={4} md={4}>
        <Paper elevation={0} variant="outlined">
          <Typography align="center" variant="body1">
            Step 1
          </Typography>
          <Avatar alt="Step 1" src="/path/to/step1.png" />
        </Paper>
      </Grid>
      {/* Vertical line */}
      <Grid item xs={4} sm={4} md={4}>
        <Divider orientation="vertical" className={classes.divider} />
      </Grid>
      {/* Content */}
      <Grid item xs={4} sm={4} md={4}>
        <Paper elevation={0} variant="outlined">
          <Typography align="center" variant="body1">
            Step 2
          </Typography>
          <Avatar alt="Step 2" src="/path/to/step2.png" />
        </Paper>
      </Grid>
      {/* Vertical line */}
      <Grid item xs={4} sm={4} md={4}>
        <Divider orientation="vertical" className={classes.divider} />
      </Grid>
      {/* Content */}
      <Grid item xs={4} sm={4} md={4}>
        <Paper elevation={0} variant="outlined">
          <Typography align="center" variant="body1">
            Step 3
          </Typography>
          <Avatar alt="Step 3" src="/path/to/step3.png" />
        </Paper>
      </Grid>
      {/* Vertical line */}
      <Grid item xs={4} sm={4} md={4}>
        <Divider orientation="vertical" className={classes.divider} />
      </Grid>
    </Grid>
  );
};
