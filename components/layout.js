/**
 * Purpose: Provides layout structure for all files inside the pages folder
 * Author: Ashley V
 * Since: 2022-04-18
 * Images: https://pixabay.com/vectors/cat-animal-doodle-kitten-pet-6102014/
 *
 */
import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import * as React from 'react'

const name = 'Ashley Vallette'
export const siteTitle = 'Ashley\'s Personal Portfolio'
import {
    ChakraProvider,
} from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'
import {ChevronDownIcon} from "@chakra-ui/icons";

const colors = {
    900: '#538f93',
    800: '#39bfc9',
    700: '#03494f',
}


const theme = extendTheme({ colors })

export default function Layout({ children }) {
 return (
        <ChakraProvider theme={theme}>
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="A personal portfolio site made with Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                    <>
                        <Image
                            priority
                            src="/images/cat.svg"
                            height={150}
                            width={150}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                        <h4 className={utilStyles.headingMd}>Analytical, creative, and a bit neurodivergent.</h4>
                        <nav>
                            <div className="nav">
                                <Link href="/">
                                    <a className="nav-item-one">Home</a>
                                </Link>
                            </div>
                            <div  className="nav">
                                <Link href="/about">
                                    <a className="nav-item-one">About</a>
                                </Link>
                            </div>
                            <div className="nav">
                                <Link href="https://github.com/ashmval">
                                    <a className="nav-item-one">Github</a>
                                </Link>
                            </div>

                            <div className="nav">
                                <Link href="/projects">
                                    <a className="nav-item-one">Projects</a>
                                </Link>
                            </div>

                        </nav>

                    </>

            </header>
            <main>{children}</main>

        </div>
        </ChakraProvider>
    )
}
