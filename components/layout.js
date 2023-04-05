import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";

const name = "Happy Valley";
export const siteTitle = "Happy Valley Thailand";

export default function Layout({children}) {
    return(
        <>
            <Head>
                <title>{siteTitle}</title>
                <meta name="description" content={siteTitle} />
            </Head>
            <header className={styles.header}>
                <div className={styles.headerWrapper}>
                    <div className={styles.logo}>
                        <Link href="/">
                            {name}
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
                        </ul>
                    </nav>
                </div>
                <main>{children}</main>
            </header>
        </>
    )
}