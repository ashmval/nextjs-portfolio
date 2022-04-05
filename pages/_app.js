import '../styles/global.css'
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider forcedTheme={Component.theme || null}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
