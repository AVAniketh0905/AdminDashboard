import { tokens } from '@/themes/theme';
import { Box, Typography, useTheme } from '@mui/material';


export default function HeadingComponent({ heading, subheading }: { heading: string, subheading: string }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box mt={5} display="flex flex-col" justifyContent="space-between">
            <Typography variant="h1" sx={{ color: theme.palette.mode == 'light' ? colors.blackAccent[400] : colors.whiteAccent[600] }}>{heading}</Typography>
            <Typography variant='h4' sx={{ color: theme.palette.mode == 'light' ? colors.blackAccent[700] : colors.whiteAccent[700] }}>{subheading}</Typography>
        </Box>
    )
}
