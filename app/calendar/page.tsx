"use client"

import HeadingComponent from '@/components/heading'
import SideBar from '@/components/sidebar'
import TopBar from '@/components/topbar'
import { ColorModeContext, useMode } from '@/themes/theme'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'

export default function Calendar() {
    const { theme, colorMode } = useMode()

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <TopBar />
                <SideBar />
                <HeadingComponent heading='Calendar' subheading='Keep track of important dates...' />
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
