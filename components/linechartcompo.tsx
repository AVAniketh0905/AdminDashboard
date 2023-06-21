import { tokens } from "@/themes/theme";
import { Box, useTheme } from "@mui/material";
import dynamic from "next/dynamic";

const ResponsiveLine = dynamic(() => import("@nivo/line").then(m => m.ResponsiveLine), { ssr: false });

export default function LineChartComponenet() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const isLightMode = Boolean(theme.palette.mode == 'light');

    const data = [
        {
            "id": "japan",
            "color": "hsl(241, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 88
                },
                {
                    "x": "helicopter",
                    "y": 26
                },
                {
                    "x": "boat",
                    "y": 56
                },
                {
                    "x": "train",
                    "y": 121
                },
                {
                    "x": "subway",
                    "y": 161
                },
                {
                    "x": "bus",
                    "y": 253
                },
                {
                    "x": "car",
                    "y": 12
                },
                {
                    "x": "moto",
                    "y": 299
                },
                {
                    "x": "bicycle",
                    "y": 209
                },
                {
                    "x": "horse",
                    "y": 126
                },
                {
                    "x": "skateboard",
                    "y": 31
                },
                {
                    "x": "others",
                    "y": 69
                }
            ]
        },
        {
            "id": "france",
            "color": "hsl(134, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 157
                },
                {
                    "x": "helicopter",
                    "y": 52
                },
                {
                    "x": "boat",
                    "y": 179
                },
                {
                    "x": "train",
                    "y": 138
                },
                {
                    "x": "subway",
                    "y": 36
                },
                {
                    "x": "bus",
                    "y": 58
                },
                {
                    "x": "car",
                    "y": 283
                },
                {
                    "x": "moto",
                    "y": 289
                },
                {
                    "x": "bicycle",
                    "y": 273
                },
                {
                    "x": "horse",
                    "y": 255
                },
                {
                    "x": "skateboard",
                    "y": 69
                },
                {
                    "x": "others",
                    "y": 6
                }
            ]
        },
        {
            "id": "us",
            "color": "hsl(352, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 56
                },
                {
                    "x": "helicopter",
                    "y": 255
                },
                {
                    "x": "boat",
                    "y": 281
                },
                {
                    "x": "train",
                    "y": 79
                },
                {
                    "x": "subway",
                    "y": 59
                },
                {
                    "x": "bus",
                    "y": 120
                },
                {
                    "x": "car",
                    "y": 169
                },
                {
                    "x": "moto",
                    "y": 14
                },
                {
                    "x": "bicycle",
                    "y": 139
                },
                {
                    "x": "horse",
                    "y": 186
                },
                {
                    "x": "skateboard",
                    "y": 278
                },
                {
                    "x": "others",
                    "y": 51
                }
            ]
        },
        {
            "id": "germany",
            "color": "hsl(88, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 112
                },
                {
                    "x": "helicopter",
                    "y": 241
                },
                {
                    "x": "boat",
                    "y": 21
                },
                {
                    "x": "train",
                    "y": 45
                },
                {
                    "x": "subway",
                    "y": 270
                },
                {
                    "x": "bus",
                    "y": 62
                },
                {
                    "x": "car",
                    "y": 28
                },
                {
                    "x": "moto",
                    "y": 25
                },
                {
                    "x": "bicycle",
                    "y": 292
                },
                {
                    "x": "horse",
                    "y": 4
                },
                {
                    "x": "skateboard",
                    "y": 39
                },
                {
                    "x": "others",
                    "y": 136
                }
            ]
        },
        {
            "id": "norway",
            "color": "hsl(259, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 121
                },
                {
                    "x": "helicopter",
                    "y": 274
                },
                {
                    "x": "boat",
                    "y": 48
                },
                {
                    "x": "train",
                    "y": 207
                },
                {
                    "x": "subway",
                    "y": 255
                },
                {
                    "x": "bus",
                    "y": 152
                },
                {
                    "x": "car",
                    "y": 160
                },
                {
                    "x": "moto",
                    "y": 23
                },
                {
                    "x": "bicycle",
                    "y": 291
                },
                {
                    "x": "horse",
                    "y": 253
                },
                {
                    "x": "skateboard",
                    "y": 194
                },
                {
                    "x": "others",
                    "y": 39
                }
            ]
        }
    ]

    return (
        <Box component="div" height={500} className="rounded-xl" sx={{
            backgroundColor: isLightMode ? colors.whiteAccent[700] : colors.blackAccent[600],
        }}>
            <ResponsiveLine
                data={data}
                theme={{
                    textColor: isLightMode ? colors.blackAccent[100] : colors.whiteAccent[100],
                    legends: {
                        text: {
                            fill: isLightMode ? colors.blackAccent[100] : colors.whiteAccent[300],
                        }
                    },
                    tooltip: {
                        container: {
                            background: isLightMode ? colors.whiteAccent[700] : colors.blackAccent[600],
                            color: isLightMode ? colors.blackAccent[100] : colors.whiteAccent[800],
                        }
                    }
                }}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </Box>
    )
}