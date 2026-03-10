'use client';
import { createTheme, ThemeOptions } from '@mui/material/styles';

import { darkPalette, lightPalette } from './palette';

export const getCustomTheme = (mode: 'light' | 'dark') => {
  const themeOptions: ThemeOptions = {
    palette: mode === 'light' ? lightPalette : darkPalette,
    typography: {
      fontFamily: 'var(--font-roboto), Roboto, Arial, sans-serif',
      h1: { fontWeight: 700 },
      body1: { fontSize: '0.9rem' },
      button: { fontWeight: 500 },
    },
    shape: {
      borderRadius: 10,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  };

  return createTheme(themeOptions);
};