"use client"

import HeadingComponent from '@/components/heading'
import { useMode } from '@/themes/theme'
import React from 'react'

export default function Calendar() {
    const { theme } = useMode();

    return (
        <main>
            <HeadingComponent heading='Calendar' subheading='Keep track of important dates...' />
        </main>
    )
}
