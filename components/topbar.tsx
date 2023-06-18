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

    return (
        <Box component="div" display="flex" justifyContent="space-between" m={3}>

            <Box
                component="div"
                className="flex rounded-xl"
                sx={{ backgroundColor: colors.orangeAccent[800], ":hover": { backgroundColor: colors.orangeAccent[400] } }}
            >
                <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search..." />
                <IconButton>
                    <SearchIcon htmlColor={colors.yellowAccent[500]} className="rounded-full" />
                </IconButton>
            </Box>

            <Box display="flex" alignItems="center">
                <Box component="div" className="flex rounded-full" sx={{ backgroundColor: colors.greyAccent[400] }}>
                    <IconButton>
                        <LightModeOutlinedIcon htmlColor={theme.palette.mode == 'light' ? colors.yellowAccent[500] : colors.yellowAccent[800]} />
                    </IconButton>
                    <IconButton>
                        <DarkModeOutlinedIcon htmlColor={theme.palette.mode == 'dark' ? colors.yellowAccent[500] : colors.yellowAccent[800]} />
                    </IconButton>
                </Box>

                <IconButton>
                    <NotificationsOutlinedIcon htmlColor={colors.yellowAccent[500]} />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon htmlColor={colors.yellowAccent[500]} />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon htmlColor={colors.yellowAccent[500]} />
                </IconButton>
            </Box>
        </Box>
    )
}
