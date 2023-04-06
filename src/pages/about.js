import React from 'react';
import Head from "next/head";
import Layout from "../../components/layout"
import styles from "@/styles/About.module.css"
import Link from "next/link";
import Image from "next/image";
import { Inter } from 'next/font/google'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


const inter = Inter({ subsets: ['latin'] })

function about() {
  return (
    <Layout>
      <Head>
        <title>About | Happy Valley Thailand</title>
        <meta name="description" content="About | Happy Valley Thailand" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h3>HAPPY VALLEY LAMPHUN</h3>
          <p>High quality cannabis products from the<br /> natural and beautiful, Lamphun Province, Thailand</p>
          <FontAwesomeIcon icon={faChevronDown} className={styles.down} />
        </div>
      </div>

      <div className={styles.vision}>
        <div className={styles.visionWrapper}>
          <div className={styles.visionContent}>
            <p>Premium Cannabis</p>
            <h3>Our Vision</h3>
            <p>Cannabis has several healing properties and we proudly grow, hand-trim, and cure our cannabis for you to experience. <br /><br />Our Lamphun cannabis is produced with the purest quality standards in every phase of production by experienced growers.<br /><br /> We are committed to nurturing the body and soul and inspiring the mind by providing the world’s best sun-grown flowers and the highest quality cannabis products from the natural and beautiful, Lamphun Province, Thailand.</p>
            <button>
              <Link href="/licenses">Licenses&Legality</Link>
            </button>
          </div>
          <Image src="/main_bg.jpg" width={1900} height={1080} />
        </div>
      </div>
    </Layout>
  )
}

export default about