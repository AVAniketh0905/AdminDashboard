import { useEffect, useState } from 'react';
import { Box, Drawer, IconButton, ListItem, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material';
import { tokens } from '@/themes/theme';
import { Dashboard } from '@mui/icons-material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import { useRouter } from 'next/navigation';
import { CalendarIcon } from '@mui/x-date-pickers';

const ListItemCompoent = ({ text, icon, sx }: { text: string; icon: React.JSX.Element; sx: any }) => {
    const router = useRouter();

    const handleRouting = () => {
        router.push(text != 'Dashboard' ? `/${text.toLowerCase()}` : '/');
    }

    return <IconButton className='text-center' onClick={handleRouting} sx={{ borderRadius: 0, borderTopRightRadius: 30, borderBottomRightRadius: 30 }}>
        <ListItem className='flex w-full' >
            <ListItemIcon sx={{ color: sx.color[400] }}>
                {icon}
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
    const pages = [
        {
            text: 'Dashboard',
            icon: <Dashboard />,
        },
        {
            text: 'About',
            icon: <AssignmentIcon />,
        },
        {
            text: 'Calendar',
            icon: <CalendarIcon />,
        }]
    const charts = [
        {
            text: 'Bar Chart',
            icon: <BarChartIcon />,
        },
        {
            text: 'Line Chart',
            icon: <SsidChartIcon />,
        },
        {
            text: 'Pie Chart',
            icon: <PieChartIcon />,
        }
    ]


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
        <Box component="div" className="flex overflow-hidden">
            <Drawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
            >
                <ListItem className='flex flex-col p-5 border-r-4 h-screen' sx={{
                    background: theme.palette.mode == 'light' ? colors.whiteAccent[500] : colors.greyAccent[500],
                    borderRightColor: colors.yellowAccent[400],
                }}>
                    <Box component="div" sx={{ backgroundColor: theme.palette.mode == 'light' ? colors.whiteAccent[200] : colors.greyAccent[800] }} className="flex text-center mb-5 rounded-xl justify-between">
                        <ListItem className='flex flex-col w-full'>
                            <ListItemText className='text-center' sx={{ color: colors.yellowAccent[500] }}>User</ListItemText>
                        </ListItem>
                    </Box>

                    <Box component="div" className='flex ml-1 mb-1 w-full justify-start text-left'>
                        <Typography sx={{ color: theme.palette.mode == 'light' ? colors.orangeAccent[300] : colors.yellowAccent[700] }}>Pages</Typography>
                    </Box>

                    <Box component="div" className='flex flex-col border-l-2 justify-start' sx={{ borderLeftColor: theme.palette.mode == 'light' ? colors.whiteAccent[400] : colors.greyAccent[600] }}>
                        {
                            pages.map((object, index) => (
                                theme.palette.mode == 'light'
                                    ?
                                    <ListItemCompoent key={index} icon={object.icon} sx={{ color: colors.orangeAccent }} text={object.text} />
                                    :
                                    <ListItemCompoent key={index} icon={object.icon} sx={{ color: colors.yellowAccent }} text={object.text} />

                            ))
                        }
                    </Box>

                    <Box component="div" className='flex ml-1 mt-2 mb-1 w-full justify-start text-left'>
                        <Typography sx={{ color: theme.palette.mode == 'light' ? colors.orangeAccent[300] : colors.yellowAccent[700] }}>Charts</Typography>
                    </Box>

                    <Box component="div" className='flex flex-col border-l-2 justify-start' sx={{ borderLeftColor: theme.palette.mode == 'light' ? colors.whiteAccent[400] : colors.greyAccent[600] }}>
                        {
                            charts.map((object, index) => (
                                theme.palette.mode == 'light'
                                    ?
                                    <ListItemCompoent key={index} icon={object.icon} sx={{ color: colors.orangeAccent }} text={object.text} />
                                    : 
                                    <ListItemCompoent key={index} icon={object.icon} sx={{ color: colors.yellowAccent }} text={object.text} />

                            ))
                        }
                    </Box>

                </ListItem>
            </Drawer>
        </Box>
    );
};
