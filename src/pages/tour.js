import React from 'react';
import Head from "next/head";
import Layout from "../../components/layout"
// import styles from "@/styles/About.module.css"
import styles from "@/styles/Tour.module.css"
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
        <title>Tour | Happy Valley Thailand</title>
        <meta name="description" content="Tour | Happy Valley Thailand" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h3>HAPPY VALLEY LAMPHUN</h3>
          <p>Feel free to reach out to us and come join us on the farm.<br />At Happy Valley Lamphun</p>
          <FontAwesomeIcon icon={faChevronDown} className={styles.down} />
        </div>
      </div>

      <div className={styles.catch}>
        <div className={styles.catchText}>
          <h3>ORGANIC CANNABIS</h3>
          <p>we are all about transparency. Our staff is on hand to welcome you and provide an informational response to any questions that you might have regarding our farm or cannabis-related topics. You will get the chance to better understand how organic cannabis has amazing benefits for your health and your life.</p>
        </div>
      </div>

      <div className={styles.vision}>
        <div className={styles.visionWrapper}>
          <div className={styles.visionContent}>
            <p>Farm Tour</p>
            <h3>Understand Cannabis</h3>
            <p>If you’ve ever wanted to experience how top-shelf cannabis is grown and processed, then Happy Valley Lamphun should be at the top of your bucket list.<br /><br /> Our farm is open to day tours and overnight stays so that you can learn more about the art of growing, refining, and curing premium indoor and outdoor cannabis.<br /><br /> We would look forward to showing you the process of how we make some of the purest and most premium cannabis in the world.</p>
            <button>
              <Link href="/contact">Get in Touch</Link>
            </button>
          </div>
          <Image src="/tour_img.jpg" width={1900} height={1080} />
        </div>
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