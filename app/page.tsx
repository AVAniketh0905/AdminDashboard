"use client"

import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from '../themes/theme'
import TopBar from '@/components/topbar'
import SideBar from '@/components/sidebar';
import DashboardComponent from '@/components/dashboard';


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
