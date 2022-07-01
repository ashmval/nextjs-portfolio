import Image from "next/image";

/**
 * Purpose: Custom 404 page; to be modified at some point
 * Author: Ashley V
 * Since: 2022-04-18
 */
import Layout, { siteTitle } from '../components/layout'
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import {Container, Grid, GridItem, Heading} from "@chakra-ui/react";
import * as React from "react";

export default function Custom404() {
    return (
        <Layout error>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.padding5px}  ${utilStyles.spacingTop}`}>
                <Heading as='h2' size='xl' style={{textAlign: "center"}}>
                    Error: 404 - Page not found
                </Heading>

                            <Image
                                priority
                                src={"/images/alien.svg"}
                                height={300}
                                width={700}
                                />



            </section>
        </Layout>
    )
}
