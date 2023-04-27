import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";
import React, {useState} from "react";
// import {motion} from "framer-motion"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const name = "Happy Valley";
export const siteTitle = "Happy Valley Thailand";

export default function Layout({children}) {

const [openMenu, setOpenMenu] = useState(false);
const menuFunction = () => {
    setOpenMenu(!openMenu);
}

    return(
        <>
        {/* <motion.div 
        initial={{opacity: 0 }}
        animate={{opacity: 1 }}
        exit={{opacity: 0 }}
        > */}
            <Head>
                <title>{siteTitle}</title>
                <meta name="description" content={siteTitle} />
            </Head>
            <header className={styles.header}>
            {/* PC */}
                <div className={styles.headerWrapper}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <Image src="/happyvalley_textonly.png" width={300} height={100}></Image>
                        </Link>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/" scroll={false}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" scroll={false}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/licenses" scroll={false}>
                                    Licenses
                                </Link>
                            </li>
                            <li>
                                <Link href="/tour" scroll={false}>
                                    Tour
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" scroll={false}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.humburgerMenu} onClick={() => menuFunction()}>
                       <span className={openMenu ? styles.open : undefined}></span>
                       <span className={openMenu ? styles.open : undefined}></span>
                       <span className={openMenu ? styles.open : undefined}></span>
                    </div>
                </div>
            </header>
            {/* responsive menu */}
            <div className={`${styles.responsiveMenu} ${openMenu ? styles.open : undefined}`}>
                <ul>
                    <li>
                        <Link href="/" scroll={false}>Home</Link>
                    </li>
                    <li>
                        <Link href="/about" scroll={false}>About</Link>
                    </li>
                    <li>
                        <Link href="/licenses" scroll={false}>Licenses</Link>
                    </li>
                    <li>
                        <Link href="/tour" scroll={false}>Tour</Link>
                    </li>
                    <li>
                        <Link href="/contact" scroll={false}>Contact</Link>
                    </li>
                </ul>
            </div>
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>
                <div className={styles.footerWrapper}>
                    <ul>
                        <li>
                            <Link href="/" scroll={false}>HOME</Link>
                        </li>
                        <li>
                            <Link href="/about" scroll={false}>ABOUT</Link>
                        </li>
                        <li>
                            <Link href="/licenses" scroll={false}>LICENSES</Link>
                        </li>
                        <li>
                            <Link href="/tour" scroll={false}>TOUR</Link>
                        </li>
                    </ul>
                    <div>
                        <Image src="/happyvalley_textonly.png" width={500} height={300}></Image>
                    </div>
                </div>
            </footer>
            {/* </motion.div> */}
        </>
    )
}