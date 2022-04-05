import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import styles from "../components/layout.module.css";
import * as React from "react";

export default function About() {
    return (
        <Layout about>

            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>

                </p>
                <p>

                </p>
            </section>

        </Layout>
    )
}

