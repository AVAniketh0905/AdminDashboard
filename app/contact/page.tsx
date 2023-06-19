"use client"

import HeadingComponent from "@/components/heading";
import SideBar from "@/components/sidebar";
import TopBar from "@/components/topbar";
import { useMode, ColorModeContext } from "@/themes/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

export default function Contact() {
    const { theme } = useMode();

    return (
        <main>
            <HeadingComponent heading="Contact" subheading="Connect with me for more!" />
        </main>         
    )
}
