'use client';

import React from 'react';

import { keyframes } from '@emotion/react';

import { Box, Typography } from '@mui/material';

const spinCW = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const spinCCW = keyframes`
    0% { transform: rotate(360deg); }
    100% { transform: rotate(0deg); }
`;

const pulse = keyframes`
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(0.95); }
`;

export const AppContentLoading = () => {
  const ringStyle = {
    position: 'absolute',
    borderRadius: '50%',
    borderStyle: 'solid',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%', // Tar all tilgjengelig plass fra forelder
        minHeight: '200px',
        flexGrow: 1,
        overflow: 'hidden',
      }}
    >
      <Box sx={{ position: 'relative', width: 140, height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        <Box sx={{
          ...ringStyle,
          width: 140, height: 140,
          borderWidth: '6px',
          borderColor: 'primary.main',
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent',
          animation: `${spinCW} 3s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
        }} />

        <Box sx={{
          ...ringStyle,
          width: 100, height: 100,
          borderWidth: '5px',
          borderColor: 'secondary.main',
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          animation: `${spinCCW} 2s linear infinite`,
        }} />

        {/* Indre */}
        <Box sx={{
          ...ringStyle,
          width: 65, height: 65,
          borderWidth: '3px',
          borderColor: 'warning.main',
          borderTopColor: 'transparent',
          animation: `${spinCW} 1s ease-in-out infinite`,
        }} />

        <Box sx={{ textAlign: 'center', animation: `${pulse} 2s infinite`, zIndex: 1 }}>
          <Typography variant="button" sx={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, color: 'text.primary', lineHeight: 1 }}>
            Laster
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};