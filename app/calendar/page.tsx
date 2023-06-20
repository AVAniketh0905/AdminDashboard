"use client"

import HeadingComponent from '@/components/heading'
import { tokens } from '@/themes/theme'
import { Box, useTheme } from '@mui/material'
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function Calendar() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <HeadingComponent heading='Calendar' subheading='Keep track of important dates...' />
            <main>
                <Box display="flex">
                    <DateCalendar renderLoading={
                        () => <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            Loading...</Box>
                    } />
                </Box>
            </main>
        </LocalizationProvider>
    )
}
