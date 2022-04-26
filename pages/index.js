/**
 * Purpose: Main index file, welcome the person to the website.
 * Author: Ashley V
 * Since: 2022-04-18
 */

import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import * as React from "react"
import {Heading, Image} from "@chakra-ui/react";



export default function Home() {
    return (
        <Layout home>

            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className={`${utilStyles.headingMd} ${utilStyles.spacingTop}`}>
                <Heading as='h2' size='xl' style={{textAlign: "center"}}>
                    Welcome
                </Heading>
                <p className={utilStyles.padding5px}>
                    Explore my GitHub or check out my projects.
                </p>
            </section>
        </Layout>
    )
}

