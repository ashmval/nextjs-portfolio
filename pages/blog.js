import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'
import * as React from "react";
import styles from "../components/layout.module.css";

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

            <div className={styles.nav}>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </div>

            <div className={styles.nav}>
                <Link href="https://github.com/ashmval">
                    <a>Github</a>
                </Link>
            </div>
            <div className={styles.nav}>
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
            </div>

            {/* Add this <section> tag below the existing <section> tag */}
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small classNmae={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

