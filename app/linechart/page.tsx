"use client"

import HeadingComponent from "@/components/heading"
import LineChartComponenet from "@/components/linechartcompo"


export default function LineChartPage() {
    return (
        <main>
            <HeadingComponent heading='Line Chart' subheading='Interactive Line Charts...' />
            <LineChartComponenet />
        </main>
    )
}
