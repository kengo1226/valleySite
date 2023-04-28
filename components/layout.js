import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";
import React, {useState} from "react";
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false
// framer motion
import { motion } from "framer-motion"

const name = "Happy Valley";
export const siteTitle = "Happy Valley Thailand";

export default function Layout({children}) {

const [openMenu, setOpenMenu] = useState(false);
const menuFunction = () => {
    setOpenMenu(!openMenu);
}

    return(
        <>
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
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/licenses">
                                    Licenses
                                </Link>
                            </li>
                            <li>
                                <Link href="/tour">
                                    Tour
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
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
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/licenses">Licenses</Link>
                    </li>
                    <li>
                        <Link href="/tour">Tour</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
                <main className={styles.main}>{children}</main>
            </motion.div>
            <footer className={styles.footer}>
                <div className={styles.footerWrapper}>
                    <ul>
                        <li>
                            <Link href="/">HOME</Link>
                        </li>
                        <li>
                            <Link href="/about">ABOUT</Link>
                        </li>
                        <li>
                            <Link href="/licenses">LICENSES</Link>
                        </li>
                        <li>
                            <Link href="/tour">TOUR</Link>
                        </li>
                    </ul>
                    <div>
                        <Image src="/happyvalley_textonly.png" width={500} height={300}></Image>
                    </div>
                    
                </div>
                <p>© 2023 Happy Valley Lamphun All Rights Reserved.</p>
            </footer>
        </>
    )
}