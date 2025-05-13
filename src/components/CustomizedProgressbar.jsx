import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#E9F4F3',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background: 'linear-gradient(to right, #0E2E50, #2E429E)',
    transition: 'all 1.2s ease-in-out',
  },
}));

function CustomLinearProgress({ value }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate the bar filling
    const timeout = setTimeout(() => {
      setProgress(value);
    }, 200); // Delay slightly for a smoother feel

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="">
      <BorderLinearProgress variant="determinate" value={progress} />
    </div>
  );
}

export default CustomLinearProgress;
