/**
 * Purpose: Provide a web page for each file listed in /pages/projects/
 * Author: Ashley V
 * Since: 2022-04-18
 */

import Layout from '../../components/layout'
import { getAllProjectIds, getProjectData } from '../../lib/projects'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import * as React from "react";



export default function Project({ projectData }) {
    return (
        <Layout>
            <Head>
                <title>{projectData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{projectData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={projectData.date} />
                    <br />
                </div>
                <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
            </article>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const projectData = await getProjectData(params.id)
    return {
        props: {
            projectData
        }
    }
}
export async function getStaticPaths() {
    const paths = getAllProjectIds()
    return {
        paths,
        fallback: false
    }
}
