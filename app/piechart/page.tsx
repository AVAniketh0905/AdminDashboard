"use client"

import HeadingComponent from "@/components/heading"
import PieChartComponenet from "@/components/piechartcompo"


export default function PieChartPage() {
    return (
        <main>
            <HeadingComponent heading='Pie Chart' subheading='Interactive Pie Charts...' />
            <PieChartComponenet />
        </main>
    )
}
