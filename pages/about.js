/**
 * Purpose: List out previous experience and provide a link to my resume.
 * Author: Ashley V
 * Since: 2022-04-18
 */

import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import * as React from "react";
import Image from "next/image";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button, Grid, GridItem,
} from '@chakra-ui/react'

import {ChevronDownIcon} from "@chakra-ui/icons";
import { Heading } from '@chakra-ui/react'




export default function About() {
    return (
            <Layout about>

                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <section title="I'm a sub-nav!" className={utilStyles.padding5px} style={{margin: "right"}}>
                    <br />


                </section>

                <section className={utilStyles.padding5px}>
                <Heading as='h2' size='xl' style={{textAlign: "center"}}>
                        About Me
                </Heading>                    <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Sub Navigation
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Link href={"#interests"}>
                                <a>Interests</a>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href={"#workExperience"}>
                                <a>Work Experience</a>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href={"#education"}>
                                <a>Education</a>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href={"#skills"}>
                                <a>Skills</a>
                            </Link>
                        </MenuItem>


                    </MenuList>
                </Menu>



                    <div>
                        <h3 className={utilStyles.headingLg} id="interests">Interests</h3>
                        <p className={utilStyles.padding5px}>
                            Reading, learning, and house plants
                        </p>
                    </div>

                    <div>
                        <h3 className={utilStyles.headingLg} id="workExperience">Work Experience</h3>
                        <ul className={utilStyles.list}>
                            <li className={utilStyles.listItem}>
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
                            <li className={utilStyles.listItem}>
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
                            <li className={utilStyles.listItem}>
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
                            <li className={utilStyles.listItem}>
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

                        <h3 className={utilStyles.headingLg} id="education">Education</h3>

                        <ul className={utilStyles.list}>
                            <li className={utilStyles.listItem}>
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
                            <li className={utilStyles.listItem}>
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
                        <h3 className={utilStyles.headingLg} id="skills">Skills</h3>
                        <h5 className={utilStyles.titleName}>
                            Languages and Frameworks
                        </h5>
                        <p className={utilStyles.padding5px}>
                           HTML, CSS, JavaScript, jQuery, Next.js, Java, C#, XML, SQL

                       </p>

                        <h5 className={utilStyles.titleName}>
                            Operating Systems
                        </h5>

                        <p className={utilStyles.padding5px}>
                            Linux, Windows, Mac
                        </p>

                        <h5 className={utilStyles.titleName}>
                            Project Management Tools
                        </h5>
                        <p className={utilStyles.padding5px}>
                            Jira,
                            Confluence,
                            SalesForce
                        </p>


                        <h5 className={utilStyles.titleName}>
                            eCommerce Tools
                        </h5>
                        <p className={utilStyles.padding5px}>
                            Lightspeed,
                            Shopify,
                            NopCommerce
                        </p>

                        <h5 className={utilStyles.titleName}>
                            Administration Tools
                        </h5>
                        <p className={utilStyles.padding5px}>


                        SQL Server Administration, Office 365 Administration

                        </p>

                        <h5 className={utilStyles.titleName}>
                            Coding Environments
                        </h5>
                        <p className={utilStyles.padding5px}>
                            NetBeans,
                            WebStorm,
                            Visual Studio
                        </p>
                        <h5 className={utilStyles.titleName}>
                            Creative Tools
                        </h5>
                        <p className={utilStyles.padding5px}>
                            Adobe Illustrator,

                            Adobe PhotoShop,

                            Adobe InDesign
                        </p>



                    </div>
                </section>
            </Layout>
    )
}

