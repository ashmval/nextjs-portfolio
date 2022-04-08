/**
 * Images: https://pixabay.com/vectors/monster-cute-beast-animal-funny-4271569/
 * https://pixabay.com/vectors/cat-pet-animal-mammal-feline-cute-6047457/
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

const ThemeChanger = () => {
    const { theme, setTheme } = useTheme()


}


export default function Layout({ children, home }) {
    const { theme, setTheme } = useTheme()

    ThemeChanger()
    return (
        <div className={styles.container}>
            <div>

                    <Image
                        priority
                        src="/images/lamp-fill.svg"
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
                    content="Learn how to build a personal website using Next.js"
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
                            src="/images/kitty.jpg"
                            className={utilStyles.borderCircle}
                            height={150}
                            width={150}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                        <nav className="nav">
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
                                <Link href="/blog">
                                    <a className="nav-item-one">Blog</a>
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
