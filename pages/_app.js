/**
 * Purpose: Ensure the layout is consistent throughout the application
 * Author: Ashley V
 * Since: 2022-04-18
 */

import '../styles/global.css'
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider forcedTheme={Component.theme || null}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

