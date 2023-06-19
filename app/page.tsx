"use client"

import HeadingComponent from '@/components/heading';
import SideBar from '@/components/sidebar';
import TopBar from '@/components/topbar';
import { useMode, ColorModeContext } from '@/themes/theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';


export default function Home() {
  const { theme, colorMode } = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopBar />
        <SideBar />
        <HeadingComponent heading='DashBoard' subheading='Welcome Back!' />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
