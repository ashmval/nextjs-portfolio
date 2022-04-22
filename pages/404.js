import Image from "next/image";

/**
 * Purpose: Custom 404 page; to be modified at some point
 * Author: Ashley V
 * Since: 2022-04-18
 */
import Layout, { siteTitle } from '../components/layout'
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";


export default function Custom404() {
    return (
        <Layout error>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>

                <Image
                    priority
                    src={"/images/alien.svg"}
                    height={320}
                    width={320}
                    className={utilStyles.alien404}/>
                <h2 className={utilStyles.heading2Xl}>
                    Error: 404 - Page not found.
                </h2>

            </section>
        </Layout>
    )
}
