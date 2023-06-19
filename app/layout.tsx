"use client"

import { useMode, ColorModeContext } from '@/themes/theme'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import './globals.css'
import { Inter } from 'next/font/google'
import SideBar from '@/components/sidebar'
import TopBar from '@/components/topbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard App',
  description: 'portfolio app by dekomori_sanae09',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { theme, colorMode } = useMode();

  return (
    <html lang="en">
      <body className={`m-5 ${inter.className}`}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <SideBar />
            <TopBar />
            {children}
          </ThemeProvider>
        </ColorModeContext.Provider>
      </body>
    </html>
  )
}
