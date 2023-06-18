import { useContext, useEffect, useState } from 'react';
import { Box, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { Mail } from '@mui/icons-material';
import { tokens, ColorModeContext } from '@/themes/theme';

const ListItemCompoent = ({ key, text, sx }: { key: number; text: string; sx: any }) => {
    return <IconButton className='text-center'>
        <ListItem key={key}>
            <ListItemIcon>
                <Mail sx={{ color: sx.color[300] }} />
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
                className={`flex-shrink-0 ${open ? 'w-24' : 'w-16'}`}
                classes={{
                    paper: `w-36 ${open ? 'md:w-64' : 'md:w-16'}`,
                }}
            >
                <List className='flex-col' sx={{
                    backgroundColor: colors.greyAccent[600],
                }}>
                    {
                        pages.map((text, index) => (
                            <ListItemCompoent sx={{ color: colors.yellowAccent }} key={index} text={text} />
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    );
};
