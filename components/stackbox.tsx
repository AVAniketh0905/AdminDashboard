import { tokens } from "@/themes/theme";
import { Box, Typography, useTheme } from "@mui/material";
import ProgressBar from "./progress";

export interface StackProps {
    title: string;
    icon: any;
    subtitle: string;
    progress: string;
    increase: string;
}

export default function StackBox({ title, icon, subtitle, progress, increase }: StackProps) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const isLightMode = Boolean(theme.palette.mode == 'light')

    return (
        <Box className="w-3/4 p-5 rounded-xl" sx={{
            background: isLightMode ? colors.whiteAccent[400] : colors.greyAccent[500],
        }}>
            <Box className="flex justify-between">
                <Box display="flex flex-col">
                    <Box display="flex justify-between">
                        {icon}
                        <Typography variant="h4" sx={{
                            color: isLightMode ? colors.orangeAccent[400] : colors.yellowAccent[400],
                        }} className="font-bold">{title}</Typography>
                    </Box>
                    <Box className="flex flex-col justify-between">
                        <Typography variant="h5" sx={{
                            color: isLightMode ? colors.greyAccent[400] : colors.whiteAccent[400],
                        }} className="font-bold">{subtitle}</Typography>
                        <Typography variant="h5" className="font-italic" sx={{
                            color: isLightMode ? colors.orangeAccent[400] : colors.yellowAccent[400],
                        }}>{increase}</Typography>
                    </Box>
                </Box>
                <Box className="flex p-3 text-center justify-center rounded-full shadow-xl">
                    <ProgressBar progress={progress} />
                </Box>
            </Box>
        </Box>
    )
}
