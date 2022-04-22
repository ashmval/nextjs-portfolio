/**
 * Purpose: List out and present all files located in /pages/projects/
 * Author: Ashley V
 * Since: 2022-04-18
 */

import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

import { getSortedProjectsData } from '../lib/projects'
import styles from "../components/layout.module.css";
import * as React from "react"

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData()
    return {
        props: {
            allProjectsData
        }
    }
}

export default function Projects({ allProjectsData }) {
    return (
        <Layout projects>

            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Projects</h2>
                <p>
                    Here are some of the projects I've worked on during my time in the Computer Information Systems program at Holland College.
                </p>
                <ul className={utilStyles.list}>
                    {allProjectsData.map(({ id, title, date }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/projects/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                        ))}
                </ul>
            </section>

        </Layout>
    )
}

