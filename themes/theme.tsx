"use client"

import { createContext, useState, useMemo } from 'react';
import { ThemeOptions, createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

// dark
const darkTheme = {
    blackAccent: {
        100: "#d3d4d6",
        200: "#a7a9ad",
        300: "#7a7e83",
        400: "#4e535a",
        500: "#222831",
        600: "#1b2027",
        700: "#14181d",
        800: "#0e1014",
        900: "#07080a"
    },
    greyAccent: {
        100: "#d7d8da",
        200: "#b0b2b5",
        300: "#888b90",
        400: "#61656b",
        500: "#393e46",
        600: "#2e3238",
        700: "#22252a",
        800: "#17191c",
        900: "#0b0c0e"
    },
    orangeAccent: {
        100: "#ffe2d0",
        200: "#fec6a1",
        300: "#fea972",
        400: "#fd8d43",
        500: "#fd7014",
        600: "#ca5a10",
        700: "#98430c",
        800: "#652d08",
        900: "#331604"
    },
    yellowAccent: {
        100: "#fff7d8",
        200: "#fff0b1",
        300: "#ffe88b",
        400: "#ffe164",
        500: "#ffd93d",
        600: "#ccae31",
        700: "#998225",
        800: "#665718",
        900: "#332b0c"
    },
    whiteAccent: {
        100: "#fcfcfc",
        200: "#f8f8f8",
        300: "#f5f5f5",
        400: "#f1f1f1",
        500: "#eeeeee",
        600: "#bebebe",
        700: "#8f8f8f",
        800: "#5f5f5f",
        900: "#303030"
    },
}

// light
const lightTheme = {
    blackAccent: {
        100: "#07080a",
        200: "#0e1014",
        300: "#14181d",
        400: "#1b2027",
        500: "#222831",
        600: "#4e535a",
        700: "#7a7e83",
        800: "#a7a9ad",
        900: "#d3d4d6",
    },
    greyAccent: {
        100: "#0b0c0e",
        200: "#17191c",
        300: "#22252a",
        400: "#2e3238",
        500: "#393e46",
        600: "#61656b",
        700: "#888b90",
        800: "#b0b2b5",
        900: "#d7d8da",
    },
    orangeAccent: {
        100: "#331604",
        200: "#652d08",
        300: "#98430c",
        400: "#ca5a10",
        500: "#fd7014",
        600: "#fd8d43",
        700: "#fea972",
        800: "#fec6a1",
        900: "#ffe2d0",
    },
    yellowAccent: {
        100: "#332b0c",
        200: "#665718",
        300: "#998225",
        400: "#ccae31",
        500: "#ffd93d",
        600: "#ffe164",
        700: "#ffe88b",
        800: "#fff0b1",
        900: "#fff7d8",
    },
    whiteAccent: {
        100: "#303030",
        200: "#5f5f5f",
        300: "#8f8f8f",
        400: "#bebebe",
        500: "#eeeeee",
        600: "#f1f1f1",
        700: "#f5f5f5",
        800: "#f8f8f8",
        900: "#fcfcfc",
    },
}

export const tokens = (mode: string) => ({
    ...(mode === 'dark' ? darkTheme : lightTheme),
})

export const themeSettings = (mode: string) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode as PaletteMode,
            ...(mode === 'dark' ?
                {
                    primary: {
                        main: colors.orangeAccent[500],
                    },
                    secondary: {
                        main: colors.yellowAccent[500],
                    },
                    neutral: {
                        main: colors.greyAccent[500],
                        dark: colors.blackAccent[500],
                        light: colors.whiteAccent[500],
                    },
                    background: {
                        default: colors.blackAccent[500],
                        paper: colors.blackAccent[700],
                    },
                }
                :
                {
                    primary: {
                        main: colors.orangeAccent[500],
                    },
                    secondary: {
                        main: colors.yellowAccent[500],
                    },
                    neutral: {
                        main: colors.whiteAccent[900],
                        dark: colors.greyAccent[500],
                        light: colors.whiteAccent[700],
                    },
                    background: {
                        default: colors.whiteAccent[500],
                        paper: colors.whiteAccent[700],
                    },
                }
            ),

        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    }
}

export const ColorModeContext = createContext({
    toggleColorMode: () => { },
})

export const useMode = () => {
    const [mode, setMode] = useState(localStorage.getItem('mode') || 'dark');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode == 'light' ? 'dark' : 'light'));
            },
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return { theme, colorMode };
};

