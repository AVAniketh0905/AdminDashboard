import { Box, IconButton, useTheme } from "@mui/material"
import { ColorModeContext, tokens } from "@/themes/theme"
import { useContext } from "react"

import InputBase from "@mui/material/InputBase"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import SearchIcon from "@mui/icons-material/Search"

export default function TopBar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    const handleToggle = (modePressed: string) => {
        if (modePressed != theme.palette.mode) {
            colorMode.toggleColorMode();
        }
    }

    return (
        <Box
            component="div"
            display="flex"
            justifyContent="space-between"
            mt={3}
            pb={2}
            className="shadow-xl rounded-xl"
        >

            {/* Search bar */}
            <Box
                component="div"
                className="flex rounded-xl"
                sx={{
                    backgroundColor: colors.orangeAccent[800],
                    ":hover": { backgroundColor: colors.orangeAccent[400] }
                }}
            >
                <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search..." />
                <IconButton>
                    <SearchIcon htmlColor={colors.yellowAccent[400]} className="rounded-full" />
                </IconButton>
            </Box>

            {/* Other icons */}
            <Box display="flex" alignItems="center">
                <Box component="div" className="flex rounded-full" sx={{ backgroundColor: colors.greyAccent[400] }}>
                    <IconButton onClick={() => handleToggle('light')}>
                        <LightModeOutlinedIcon htmlColor={theme.palette.mode == 'light' ? colors.orangeAccent[800] : colors.greyAccent[600]} />
                    </IconButton>
                    <IconButton onClick={() => handleToggle('dark')}>
                        <DarkModeOutlinedIcon htmlColor={theme.palette.mode == 'dark' ? colors.yellowAccent[400] : colors.yellowAccent[200]} />
                    </IconButton>
                </Box>

                <IconButton>
                    <NotificationsOutlinedIcon htmlColor={theme.palette.mode == 'light' ? colors.orangeAccent[400] : colors.yellowAccent[300]} />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon htmlColor={theme.palette.mode == 'light' ? colors.orangeAccent[400] : colors.yellowAccent[300]} />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon htmlColor={theme.palette.mode == 'light' ? colors.orangeAccent[400] : colors.yellowAccent[300]} />
                </IconButton>
            </Box>
        </Box>
    )
}
