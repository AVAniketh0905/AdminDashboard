"use client"

import HeadingComponent from '@/components/heading';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import BarChartComponenet from '@/components/barchartcompo';
import LineChartComponenet from '@/components/linechartcompo';
import PieChartComponenet from '@/components/piechartcompo';
import StackBox from '@/components/stackbox';
import ProgressBar from '@/components/progress';
import { tokens } from '@/themes/theme';

export default function Home() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const isLightMode = Boolean(theme.palette.mode == 'light')

  return (
    <main>
      <Box>
        <HeadingComponent heading='DashBoard' subheading='Welcome Back!' />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <StackBox
              title='Total Orders'
              subtitle='Last year expenses'
              icon={<NotificationsActiveIcon />}
              progress="0.45"
              increase="200%"
            />
          </Grid>
          <Grid item xs={4}>
            <StackBox
              title='Total Orders'
              subtitle='Last year expenses'
              icon={<NotificationsActiveIcon />}
              progress="0.75"
              increase="150%"
            />
          </Grid>
          <Grid item xs={4}>
            <StackBox
              title='Total Orders'
              subtitle='Last year expenses'
              icon={<NotificationsActiveIcon />}
              progress="0.25"
              increase="100%"
            />
          </Grid>
          <Grid item xs={8}>
            {/* todo */}
            <LineChartComponenet />
          </Grid>
        </Grid>
      </Box>
    </main>
  )
}
