"use client"

import SideBar from "@/components/sidebar";
import TopBar from "@/components/topbar";
import { ColorModeContext, useMode } from "@/themes/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

export default function About() {
    const { theme, colorMode } = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <TopBar />
                <SideBar />
                <main>
                    about
                </main>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
