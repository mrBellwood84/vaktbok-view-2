import { PaletteOptions } from '@mui/material/styles';

export const lightPalette: PaletteOptions = {
    mode: 'light',
    primary: { main: '#2c3e50' },
    secondary: { main: '#e67e22' },
    error: { main: '#d32f2f' },
    warning: { main: '#f39c12' },
    background: {
        default: '#f4f7f9',
        paper: '#ffffff',
    },
    text: {
        primary: '#1a1a1a',
        secondary: '#4f4f4f',
    },
};

export const darkPalette: PaletteOptions = {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#f2994a' },
    error: { main: '#f44336' },
    warning: { main: '#ffa726' },
    background: {
        default: '#0a1929',
        paper: '#132f4c',
    },
    text: {
        primary: '#ffffff',
        secondary: '#b2bac2',
    },
};