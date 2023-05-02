import React from 'react';
import Head from "next/head";
import Layout from "../../components/layout"
// import styles from "@/styles/About.module.css"
import styles from "@/styles/FuturePlan.module.css"
import Link from "next/link";
import Image from "next/image";
import { Inter } from 'next/font/google'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import {motion} from "framer-motion"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

function tour() {
  return (
    <Layout>
      <Head>
        <title>Future Plan | Happy Valley Thailand</title>
        <meta name="description" content="Tour | Happy Valley Thailand" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h4>HAPPY VALLEY LAMPHUN</h4>
          <h3>FUTURE PLANS</h3>
          <p>Make the world a better place by providing cannabis<br /> that is organic, healthy, and good for communities.</p>
          <FontAwesomeIcon icon={faChevronDown} className={styles.down} />
        </div>
      </div>

      <div className={styles.catch}>
        <div className={styles.catchText}>
          <h3>ORGANIC CANNABIS</h3>
          <p>Come to Happy Valley Lamphun and explore our farm. Our facility is equipped to handle tours and we are all about transparency, quality product, and education. Please click here if you would like to join us and see our farm.</p>
        </div>
        <div className={styles.catchBtnContainer}>
        <button>
            <Link href="/tour">READ MORE</Link>
        </button>
        </div>
      </div>

      <div className={styles.vision}>
        <div className={styles.visionWrapper}>
          <div className={styles.visionContent}>
            <p>Future Plans</p>
            <h3>Large Greenhouse</h3>
            <p>Currently, our farm is situated on 9 rai (approximately 14,400 Square meters). Over the coming year, we will grow to be the largest producing greenhouse cannabis farm in all of Thailand. Our location provides significant advantages to our business when compared to traditional indoor farms. Our land is free from pesticides and other harmful substances that could otherwise harm our crop and end product.</p>
            <button>
              <Link href="/contact">Get in Touch</Link>
            </button>
          </div>
          <Image src="/tour_img.jpg" width={1900} height={1080} />
        </div>
      </div>

      <div className={styles.tour}>
        <div className={styles.tourWrapper}>
            <Image src="/future_img2.jpg" width={1900} height={1080} />
            <div className={styles.tourContent}>
              <p>Our Goals</p>
              <h3>Make the world a better place</h3>
              <p>We have been able to progress quickly because of your continued support. Our current phase is farm 1 which we call the initial phase of our project. By 2024, our goal is to expand to farm 2 which is 30 rai (approximately 48,000 square meters). Our vision and goals are to spread locally Thai-grown flowers all over the world and in doing so, we hope that we can make the world a better place by providing cannabis that is organic, healthy, and good for communities.</p>
              <button>
                <Link href="/about">About Us</Link>
              </button>
            </div>
        </div>
      </div>

      <div className={`${styles.middle} ${styles.bottom}`}>
        <p>At Happy Valley Lamphun, we believe in the principle of<br /> GROWING NATURALLY AND ORGANICALLY — for ourselves,<br /> our communities, and our whole world. </p>
      </div>
    </Layout>
  )
}

export default tour