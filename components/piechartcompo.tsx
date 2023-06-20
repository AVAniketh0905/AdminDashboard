import { tokens } from "@/themes/theme";
import { Box, useTheme } from "@mui/material";
import dynamic from "next/dynamic";

const ResponsivePie = dynamic(() => import("@nivo/pie").then(m => m.ResponsivePie), { ssr: false });

export default function PieChartComponenet() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const isLightMode = Boolean(theme.palette.mode == 'light')

    const data = [
        {
            "id": "python",
            "label": "python",
            "value": 567,
            "color": "hsl(24, 70%, 50%)"
        },
        {
            "id": "make",
            "label": "make",
            "value": 567,
            "color": "hsl(52, 70%, 50%)"
        },
        {
            "id": "stylus",
            "label": "stylus",
            "value": 372,
            "color": "hsl(168, 70%, 50%)"
        },
        {
            "id": "ruby",
            "label": "ruby",
            "value": 191,
            "color": "hsl(100, 70%, 50%)"
        },
        {
            "id": "css",
            "label": "css",
            "value": 559,
            "color": "hsl(99, 70%, 50%)"
        }
    ]


    return (
        <Box component="div" height={500} className="rounded-xl" sx={{
            backgroundColor: isLightMode ? colors.whiteAccent[700] : colors.blackAccent[600],
        }}>
            <ResponsivePie
                data={data}
                theme={{
                    textColor: isLightMode ? colors.blackAccent[100] : colors.whiteAccent[800],
                    legends: {
                        text: {
                            fill: isLightMode ? colors.blackAccent[100] : colors.whiteAccent[300],
                        }
                    },
                    tooltip: {
                        container: {
                            background: isLightMode ? colors.blackAccent[900] : colors.whiteAccent[800],
                        }
                    }
                }}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                startAngle={68}
                sortByValue={true}
                innerRadius={0.5}
                padAngle={6}
                cornerRadius={13}
                activeOuterRadiusOffset={9}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0
                        ]
                    ]
                }}
                enableArcLinkLabels={false}
                arcLinkLabelsSkipAngle={11}
                arcLinkLabelsTextOffset={4}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsOffset={-12}
                arcLinkLabelsDiagonalLength={22}
                arcLinkLabelsStraightLength={12}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsRadiusOffset={0.6}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2
                        ]
                    ]
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
                motionConfig="wobbly"
                transitionMode="centerRadius"
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />
        </Box>
    )
}