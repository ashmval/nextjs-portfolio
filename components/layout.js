/**
 * Images:
 * https://pixabay.com/vectors/cat-animal-doodle-kitten-pet-6102014/
 *
 */
import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import * as React from 'react'
import { Range } from 'react-range'

const name = 'Ashley Vallette'
export const siteTitle = 'Ashley\'s Personal Portfolio'
import { useTheme } from 'next-themes'

let imageModeString

const ThemeChanger = () => {
    const { theme, setTheme } = useTheme()

}




export default function Layout({ children }) {
    const { theme, setTheme } = useTheme()
    if (theme == ('dark')) {
        imageModeString = "/images/lamp.svg"
    } else {
        imageModeString = "/images/lamp-fill.svg"
    }

    ThemeChanger()
    return (
        <div className={styles.container}>
            <div>

                    <Image
                        priority
                        src={imageModeString}
                        height={25}
                        width={25}
                        alt="Toggle dark-mode"
                        title="Toggle dark-mode"
                        className="pawPrint"
                        onClick={() => {
                            if (theme == ('light')) {
                                setTheme('dark')
                            } else {
                                setTheme('light')
                            }
                        }
                        } />
            </div>
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
    )
}
