import { tokens, ColorModeContext } from '@/themes/theme';
import { Card, CardContent, Grid, Typography, useTheme } from '@mui/material';
import { useContext } from "react";


export default function DashboardComponent() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Grid container spacing={2} sx={{
            padding: 2, backgroundColor: colors.greyAccent[600]
        }}>
            <Grid item xs={12} md={6} lg={4}>
                <Card sx={{ backgroundColor: colors.greyAccent[700] }}>
                    <CardContent>
                        <Typography variant="h3" component="div" sx={{ color: colors.greyAccent[100] }}>
                            Live Cases by Country
                        </Typography>
                        <Typography sx={{ color: colors.greyAccent[100] }} variant="body2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid >
    )
}
