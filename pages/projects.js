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

export default function Projects({ allPostsData }) {
    return (
        <Layout projects>

            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className={utilStyles.headingMd}>
                <h2>
                    Projects
                </h2>
                <p>

                    Here are some of the projects I've worked on during my time in the Computer Information Systems program at Holland College.
                </p>
                <div>
                    <li>
                        <Link href="/miniGolfKiosk/miniGolfKiosk.html">
                            <a>Put-Put-Par-Tee</a>
                        </Link>
                        <span>
                            : A project I converted from vanilla JavaScript to jQuery.
                            While converting to jQuery, the overall look and design changed as well.
                        </span>
                    </li>

                    <p>
                    </p>
                </div>
            </section>



        </Layout>
    )
}

