"use client"

import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from '../themes/theme'
import TopBar from '@/components/topbar'
import SideBar from '@/components/sidebar';

export default function Home() {
  const { theme, colorMode } = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopBar />
        <SideBar />

        <main>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempore nesciunt labore illo quasi facilis omnis, dignissimos consequatur quibusdam velit quidem, aperiam nemo ullam, culpa praesentium necessitatibus eius et voluptatibus.</main>

      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
