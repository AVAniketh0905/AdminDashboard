import { tokens } from "@/themes/theme";
import { Box, useTheme } from "@mui/material";
import dynamic from "next/dynamic";

const ResponsiveBar = dynamic(() => import("@nivo/bar").then(m => m.ResponsiveBar), { ssr: false });

export default function BarChartComponenet() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const isLightMode = Boolean(theme.palette.mode == 'light')

    const data = [
        {
            "country": "AD",
            "hot dog": 63,
            "hot dogColor": "hsl(17, 70%, 50%)",
            "burger": 170,
            "burgerColor": "hsl(68, 70%, 50%)",
            "sandwich": 26,
            "sandwichColor": "hsl(73, 70%, 50%)",
            "kebab": 74,
            "kebabColor": "hsl(201, 70%, 50%)",
            "fries": 137,
            "friesColor": "hsl(340, 70%, 50%)",
            "donut": 35,
            "donutColor": "hsl(294, 70%, 50%)"
        },
        {
            "country": "AE",
            "hot dog": 139,
            "hot dogColor": "hsl(53, 70%, 50%)",
            "burger": 21,
            "burgerColor": "hsl(301, 70%, 50%)",
            "sandwich": 91,
            "sandwichColor": "hsl(348, 70%, 50%)",
            "kebab": 39,
            "kebabColor": "hsl(242, 70%, 50%)",
            "fries": 104,
            "friesColor": "hsl(41, 70%, 50%)",
            "donut": 8,
            "donutColor": "hsl(23, 70%, 50%)"
        },
        {
            "country": "AF",
            "hot dog": 127,
            "hot dogColor": "hsl(129, 70%, 50%)",
            "burger": 2,
            "burgerColor": "hsl(348, 70%, 50%)",
            "sandwich": 90,
            "sandwichColor": "hsl(189, 70%, 50%)",
            "kebab": 113,
            "kebabColor": "hsl(155, 70%, 50%)",
            "fries": 31,
            "friesColor": "hsl(300, 70%, 50%)",
            "donut": 143,
            "donutColor": "hsl(144, 70%, 50%)"
        },
        {
            "country": "AG",
            "hot dog": 50,
            "hot dogColor": "hsl(147, 70%, 50%)",
            "burger": 104,
            "burgerColor": "hsl(91, 70%, 50%)",
            "sandwich": 65,
            "sandwichColor": "hsl(168, 70%, 50%)",
            "kebab": 29,
            "kebabColor": "hsl(188, 70%, 50%)",
            "fries": 22,
            "friesColor": "hsl(258, 70%, 50%)",
            "donut": 134,
            "donutColor": "hsl(226, 70%, 50%)"
        },
        {
            "country": "AI",
            "hot dog": 177,
            "hot dogColor": "hsl(25, 70%, 50%)",
            "burger": 32,
            "burgerColor": "hsl(89, 70%, 50%)",
            "sandwich": 18,
            "sandwichColor": "hsl(249, 70%, 50%)",
            "kebab": 192,
            "kebabColor": "hsl(254, 70%, 50%)",
            "fries": 98,
            "friesColor": "hsl(279, 70%, 50%)",
            "donut": 69,
            "donutColor": "hsl(341, 70%, 50%)"
        },
        {
            "country": "AL",
            "hot dog": 166,
            "hot dogColor": "hsl(266, 70%, 50%)",
            "burger": 173,
            "burgerColor": "hsl(96, 70%, 50%)",
            "sandwich": 98,
            "sandwichColor": "hsl(297, 70%, 50%)",
            "kebab": 115,
            "kebabColor": "hsl(115, 70%, 50%)",
            "fries": 6,
            "friesColor": "hsl(90, 70%, 50%)",
            "donut": 27,
            "donutColor": "hsl(220, 70%, 50%)"
        },
        {
            "country": "AM",
            "hot dog": 77,
            "hot dogColor": "hsl(250, 70%, 50%)",
            "burger": 30,
            "burgerColor": "hsl(97, 70%, 50%)",
            "sandwich": 116,
            "sandwichColor": "hsl(10, 70%, 50%)",
            "kebab": 196,
            "kebabColor": "hsl(270, 70%, 50%)",
            "fries": 200,
            "friesColor": "hsl(287, 70%, 50%)",
            "donut": 43,
            "donutColor": "hsl(86, 70%, 50%)"
        }
    ]

    return (
        <Box component="div" height={500} className="rounded-xl" sx={{
            backgroundColor: isLightMode ? colors.whiteAccent[700] : colors.blackAccent[600],
        }}>
            <ResponsiveBar
                data={data}
                theme={{
                    textColor: isLightMode ? colors.blackAccent[100] : colors.whiteAccent[300],
                    axis: {
                        ticks: {
                            text: {
                                fill: isLightMode ? colors.blackAccent[100] : colors.whiteAccent[300],
                            },
                            line: {
                                stroke: isLightMode ? colors.blackAccent[100] : colors.whiteAccent[300],
                            },

                        },
                    },
                    grid: {
                        line: {
                            stroke: isLightMode ? colors.blackAccent[100] : colors.whiteAccent[300],
                        },
                    },
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
                keys={[
                    'hot dog',
                    'burger',
                    'sandwich',
                    'kebab',
                    'fries',
                    'donut'
                ]}
                indexBy="country"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.25}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'fries'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'sandwich'
                        },
                        id: 'lines'
                    }
                ]}
                borderRadius={3}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'country',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'food',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                enableGridY={false}
                enableLabel={false}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'right-to-left',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                motionConfig="wobbly"
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
            />
        </Box>
    )
}
