'use client';

import React from 'react';

import { keyframes } from '@emotion/react';

import { Box, Typography, Backdrop, useTheme } from '@mui/material';

// 1. Definer animasjonene med Emotion
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
    50% { opacity: 0.7; transform: scale(0.95); }
`;

interface AppPageLoadingProps {
  open?: boolean;
}

export default function AppPageLoading({ open = true }: AppPageLoadingProps) {
  const theme = useTheme();

  // Felles stil for ringene for å unngå duplisering
  const ringBase = {
    position: 'absolute',
    borderRadius: '50%',
    border: '6px solid transparent', // Litt tykkere "bredde" som du ønsket
  };

  return (
    <Backdrop
      open={open}
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        color: 'primary.main',
        backgroundColor: theme.palette.mode === 'light'
          ? 'rgba(244, 247, 249, 0.9)' // Din background.default i light mode
          : 'rgba(10, 25, 41, 0.9)',    // Din background.default i dark mode
        display: 'flex',
        flexDirection: 'column',
        backdropFilter: 'blur(4px)', // Gir en moderne glass-effekt
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: 200, // Økt størrelse for å "fylle" mer visuelt
          height: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* YTRE RING - Din Primary farge */}
        <Box
          sx={{
            ...ringBase,
            width: 200,
            height: 200,
            borderTopColor: 'primary.main',
            borderRightColor: 'primary.main',
            animation: `${spinCW} 4s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
          }}
        />

        {/* MIDTRE RING - Din Secondary farge */}
        <Box
          sx={{
            ...ringBase,
            width: 150,
            height: 150,
            borderBottomColor: 'secondary.main',
            borderLeftColor: 'secondary.main',
            borderWidth: '5px',
            animation: `${spinCCW} 2.5s linear infinite`,
          }}
        />

        {/* INDRE RING - Warning/Gull farge fra paletten din */}
        <Box
          sx={{
            ...ringBase,
            width: 100,
            height: 100,
            borderTopColor: 'warning.main',
            borderWidth: '4px',
            animation: `${spinCW} 1.2s ease-in-out infinite`,
          }}
        />

        {/* SENTRAL TEKST */}
        <Box sx={{ textAlign: 'center', animation: `${pulse} 2s infinite` }}>
          <Typography
            variant="button"
            sx={{
              display: 'block',
              color: 'text.primary',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '1px',
            }}
          >
            Laster
          </Typography>
          <Typography
            variant="button"
            sx={{
              display: 'block',
              color: 'text.secondary',
              fontSize: '0.6rem',
            }}
          >
            Data
          </Typography>
        </Box>
      </Box>
    </Backdrop>
  );
}