import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'
import styles from "../components/layout.module.css";
import * as React from "react"

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>

            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className={utilStyles.headingMd}>
                <p>
                     Welcome, stay a while.
                </p>
                <p>

                    Explore my GitHub or check out my blog.

                </p>
                <div>
                    <Link href="/resume.pdf">
                        <a>Download Resume</a>
                    </Link>
                </div>

                <div>
                    <Link href="/miniGolfKiosk/miniGolfKiosk.html">
                        <a>View Project</a>
                    </Link>
                </div>
            </section>



        </Layout>
    )
}

