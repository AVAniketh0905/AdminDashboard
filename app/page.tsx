"use client"

import DashboardComponent from '@/components/dashboard';
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
        <main>
          <DashboardComponent />
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
