/**
 * Purpose: Ensure the layout is consistent throughout the application
 * Author: Ashley V
 * Since: 2022-04-18
 */

import '../styles/global.css'
import { ThemeProvider } from "next-themes";
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}
export default MyApp;
