import { Box, Drawer } from "@mui/material";


export default function SideBar() {
    return (
        <Box component="nav">
            <Drawer
                variant="temporary"
                anchor="left"
                ModalProps={{
                    keepMounted: false,
                }}
            />
        </Box>
    )
}
