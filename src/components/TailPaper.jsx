import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import { Box, Paper } from '@mui/material';

export const TailPaper = forwardRef(({ bottom, left, sx, isPropTrue }, ref) => {
  const [className, setClassName] = useState('speaking-box-tail'); // Initial className

  // Update className based on the value of the prop
  useEffect(() => {
    if (isPropTrue) {
      setClassName('speaking-box-tail2'); // Replace 'new-class-name' with the desired className
    } else {
      setClassName('speaking-box-tail'); // Revert to original className
    }
  }, [isPropTrue]);

  return (
    <Box>
      <Paper
        ref={ref}
        sx={{
          width: '30rem',
          height: '15rem',
          position: 'absolute',
          left: left,
          opacity: 0,
          transition: 'left 0.5s ease-in, opacity 0.5s ease-in',
          bottom: bottom,
          ...sx, // Add the 'sx' prop here
          '@media (max-width: 700px)': {
            width: '60vw',
          },
        }}
      >
        <div className={className}></div> {/* Use the updated className here */}
      </Paper>
    </Box>
  );
});

export default TailPaper;
