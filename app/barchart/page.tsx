"use client"

import BarChartComponenet from '@/components/barchartcompo'
import HeadingComponent from '@/components/heading'

export default function BarChartPage() {
    return (
        <main>
            <HeadingComponent heading='Bar Chart' subheading='Interactive Bar Charts...' />
            <BarChartComponenet />
        </main>
    )
}
