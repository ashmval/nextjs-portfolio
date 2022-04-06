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
                <h2>
                    About Me
                </h2>
                <p>
                    {/*Fix this */}
                </p>
                    <div>
                        <h3>Work Experience</h3>
                        <ul>
                            <li className="title">
                                <strong>Grizzly Works, Canada</strong> - Web Developer, 2021 - Current
                            </li>
                            <li className="title">
                                <p>
                                    <strong>KOA Campgrounds, Charlottetown/Cornwall </strong> - Cleaner, May 2021 - September 2021
                                </p>
                            </li>
                            <li className="title">
                                <p>
                                    <strong> Buchanan Technologies, Charlottetown </strong> - Service Desk Analyst, December 2020 - May 2021
                                </p>
                            </li>
                            <li className="title">
                                <p>
                                    <strong>Haemonetics, Edmonton </strong>- Application Support Analyst, April 2020 - July 2020
                                </p>
                            </li>
                            <li className="title">
                                <p>
                                    <strong>Western Drug Distribution, Edmonton </strong>- Software Support Analyst, May 2017 - March 2020
                                </p>
                            </li>
                        </ul>
                    </div>
                <div>
                    <h3>Education</h3>
                    <ul>
                        <li className="title">
                            <strong>Northern Alberta Institute of Technology</strong> - Computer Network Administration,
                            2013 - 2014
                            <p>
                                Graduated the Computer Network Administration program with courses covering topics such
                                as Linux, Active Directory, scripting fundamentals, technical communication, network
                                fundamentals, virtualization and client/server fundamentals
                            </p>
                        </li>
                        <li className="title">
                            <strong>Holland College</strong> - Computer Information Systems, September 2021 - April 2023
                            <p>
                                Attended Holland College with courses such as Object Oriented Programming, Web
                                Development, Andriod Development, Business Communications, Networking Principes and
                                Databases.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </Layout>
    )
}

