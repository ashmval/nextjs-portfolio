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
            <section title="I'm a sub-nav!" className={utilStyles.headingMd}>
                <br />
                <nav className="">
                    <div className="">
                        <li>
                            <Link href="#workExperience">
                                <a className="nav-item-one">Work Experience</a>
                            </Link>
                        </li>

                    </div>
                    <div className="">
                        <li>
                            <Link href="#education">
                                <a className="nav-item-one">Education</a>
                            </Link>
                        </li>
                    </div>
                    <div className="">
                        <li>
                            <Link href="#skills">
                                <a className="nav-item-one">Skills</a>
                            </Link>
                        </li>
                    </div>
                    <div>
                        <li>
                            <Link href="/resume.pdf">
                                <a>Download Resume</a>
                            </Link>
                        </li>

                    </div>

                </nav>
                <h2>
                    About Me
                </h2>
                <div>
                    <h3 id="workExperience">Work Experience</h3>
                    <ul>
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
                    <h3 id="education">Education</h3>
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

                <div>
                    <h3 id="skills">Skills</h3>
                    <ul>
                        <li>
                            SQL
                        </li>
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            jQuery
                        </li>
                        <li>
                            Next.js
                        </li>
                        <li>
                            Java
                        </li>
                        <li>
                            Windows, Mac, and Linux
                        </li>
                        <li>
                            Visual Studio
                        </li>
                        <li>
                            Jira
                        </li>
                        <li>
                            Computer Networking
                        </li>
                        <li>
                            Office 365 Administration
                        </li>
                        <li>
                            SQL Server Administration
                        </li>
                        <li>
                            Confluence
                        </li>
                        <li>
                            Adobe Illustrator
                        </li>
                        <li>
                            C#
                        </li>
                        <li>
                            XML
                        </li>
                        <li>
                            eCommerce (Lightspeed, Shopify, NopCommerce)
                        </li>
                    </ul>

                </div>

            </section>
        </Layout>
    )
}

