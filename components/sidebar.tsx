import { useContext, useEffect, useState } from 'react';
import { Box, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { Mail } from '@mui/icons-material';
import { tokens, ColorModeContext } from '@/themes/theme';

const ListItemCompoent = ({ key, text, sx }: { key: number; text: string; sx: any }) => {
    return <IconButton className='text-center' sx={{ borderRadius: 15 }}>
        <ListItem key={key}>
            <ListItemIcon>
                <Mail sx={{ color: sx.color[500] }} />
            </ListItemIcon>
            <ListItemText sx={{ color: sx.color[500] }}>{text}</ListItemText>
        </ListItem>
    </IconButton>
}

export default function SideBar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const colorMode = useContext(ColorModeContext);


    const [open, setOpen] = useState(false);
    const [threshold, setThreshold] = useState(30);
    const pages = ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5'];

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const mouseX = event.clientX;
            const screenWidth = window.innerWidth;

            if (mouseX <= threshold && !open) {
                setOpen(true);
                setThreshold(160);
            } else if (mouseX > threshold && open) {
                setOpen(false);
                setThreshold(30);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [open, threshold]);

    return (
        <Box component="div" className="flex overflow-hidden" >
            <Drawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
            >
                <ListItem className='flex flex-col p-5 border-r-4 justify-evenly h-screen' sx={{
                    background: theme.palette.mode == 'light' ? colors.whiteAccent[500] : colors.greyAccent[500],
                    borderRightColor: colors.yellowAccent[400],
                }}>
                    {
                        pages.map((text, index) => (
                            theme.palette.mode == 'light'
                                ?
                                <ListItemCompoent sx={{ color: colors.orangeAccent }} key={index} text={text} />
                                : 
                                <ListItemCompoent sx={{ color: colors.yellowAccent }} key={index} text={text} />

                        ))
                    }
                </ListItem>
            </Drawer>
        </Box>
    );
};
