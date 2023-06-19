"use client"

import HeadingComponent from "@/components/heading";
import { useMode } from "@/themes/theme";

export default function About() {
    const { theme } = useMode();

    return (
        <main>
            <HeadingComponent heading="About" subheading="A little about me..." />
        </main>
    )
}
