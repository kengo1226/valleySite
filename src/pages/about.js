import React from 'react';
import Head from "next/head";
import Layout from "../../components/layout"
import styles from "@/styles/About.module.css"
import Link from "next/link";
import Image from "next/image";
import { Inter } from 'next/font/google'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false
// import {motion} from "framer-motion";


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
            <h3>Our Cannabis</h3>
            <p>Cannabis has several healing properties and we proudly grow, hand-trim, and cure our cannabis for you to experience. <br /><br />Our Lamphun cannabis is produced with the purest quality standards in every phase of production by experienced growers.<br /><br /> We are committed to nurturing the body and soul and inspiring the mind by providing the world’s best sun-grown flowers and the highest quality cannabis products from the natural and beautiful, Lamphun Province, Thailand.</p>
            <button>
              <Link href="/licenses">Licenses&Legality</Link>
            </button>
          </div>
          <Image src="/cannabis_img.jpg" width={1900} height={1080} />
        </div>
      </div>

      <div className={styles.condition}>
      <h3>NATURAL FARMING<br />HIGH QUALITY CANNABIS</h3>
        <div className={styles.conditionWrapper}>
              <div className={styles.card}>
                <p><Image src="/sunshine.svg" width={256} height={256} /></p>
                <p>SUNSHINE</p>
                <p>We the right way. Working with is why we will ch those who share our philosophy offering products that are good for people but for the world. Happy Valley Lamphun’s goal is to spread the word with our flowers to make our world a better place.</p>
              </div>
              <div className={styles.card}>
                <p><Image src="/air.svg" width={256} height={256} /></p>
                <p>AIR</p>
                <p>We are firm believers in This is why we will continue to This is why we will continue to with our flowers to make our world a better place.</p>
              </div>
              <div className={styles.card}>
                <p><Image src="/water.svg" width={256} height={256} /></p>
                <p>WATER</p>
                <p>We the right way.is critical. This is why ships with those who share our philosophy offering products that are good for people but for the world. Happy Valley Lamphun’s goal is to spread the word with our flowers to make our world a better place.</p>
              </div>
        </div>
      </div>

      <div className={`${styles.middle} ${styles.bottom}`}>
        <p>At Happy Valley Lamphun, we believe in the principle of<br /> GROWING NATURALLY AND ORGANICALLY — for ourselves,<br /> our communities, and our whole world. </p>
      </div>

      <div className={styles.tour}>
        <div className={styles.tourWrapper}>
            <Image src="/middle_bg.jpg" width={1900} height={1080} />
            <div className={styles.tourContent}>
              <p>Take a Tour</p>
              <h3>Come Explore & Tour Our Farm</h3>
              <p>Come to Happy Valley Lamphun and explore our farm. Our facility is equipped to handle tours and we are all about transparency, quality product, and education. Please click here if you would like to join us and see our farm.<br /><br />
              Come to Happy Valley Lamphun and explore our farm. Our facility is equipped to handle tours and we are all about transparency, quality product, and education. Please click here if you would like to join us and see our farm.</p>
              <button>
                <Link href="/tour">Tour</Link>
              </button>
              <button>
                <Link href="/licenses">Licenses</Link>
              </button>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default about