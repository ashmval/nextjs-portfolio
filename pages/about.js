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
                <div>
                    <h3>Skills</h3>
                    <table className="skills">

                        <tr>
                            <td>
                                <li> SQL</li>
                            </td>
                            <td>
                                <li>HTML</li>
                            </td>
                            <td>
                                <li>CSS</li>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <li>JavaScript</li>
                            </td>
                            <td>
                                <li>jQuery</li>
                            </td>
                            <td>
                                <li>
                                    Next.js
                                </li>
                            </td>
                        </tr>
                    </table>

                </div>

                <div>
                    <h3>Work Experience</h3>
                    <ul>
                        <li className="title">
                            <p>
                                <span className="employer">Grizzly Works, Canada </span>
                                <br />
                                <span className="titleName">
                                    Web Developer
                                </span>
                                <span className="dates">
                                     December 2021 - Present
                                </span>
                            </p>
                        </li>
                        <li className="title">
                            <p>
                                <span className="employer">KOA Campgrounds, Charlottetown/Cornwall </span>
                                <br />
                                <span className="titleName">
                                    Cleaner
                                </span>
                                <span className="dates">
                                 May 2021 - September 2021
                                </span>
                            </p>
                        </li>
                        <li className="title">
                            <p>
                                <span className="employer">Buchanan Technologies, Charlottetown</span>
                                <br />
                                <span className="titleName">
                                    Service Desk Analyst
                                </span>
                                <span className="dates">
                                 December 2020 - May 2021
                                </span>
                            </p>
                        </li>
                        <li className="title">
                            <p>
                                <span className="employer">Haemonetics, Edmonton</span>
                                <br />
                                <span className="titleName">
                                    Application Support Analyst
                                </span>
                                <span className="dates">
                                     April 2020 - July 2020
                                </span>
                            </p>
                        </li>
                        <li className="title">
                            <p>
                                <span className="employer">Western Drug Distribution, Edmonton</span>
                                <br />
                                <span className="titleName">
                                    Software Support Analyst
                                </span>
                                <span className="dates">
                                     May 2017 - March 2020
                                </span>
                            </p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Education</h3>
                    <ul>
                        <li className="title">
                            <span className="employer">
                                Northern Alberta Institute of Technology
                            </span>
                            <span className="titleName">
                                Computer Network Administration
                            </span>
                            <span className="dates">
                                2013 - 2014
                            </span>
                            <p>
                                Graduated the Computer Network Administration program with courses covering topics such
                                as Linux, Active Directory, scripting fundamentals, technical communication, network
                                fundamentals, virtualization and client/server fundamentals
                            </p>
                        </li>
                        <li className="title">
                            <span className="employer">
                                Holland College
                            </span>
                            <span className="titleName">
                                Computer Information Systems
                            </span>
                            <span className="dates">
                                2021 - April 2023
                            </span>
                            <p>
                                Attended Holland College with courses such as Object Oriented Programming, Web
                                Development, Android Development, Business Communications, Networking Principles and
                                Databases.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </Layout>
    )
}

