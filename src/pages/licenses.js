import React from 'react';
import Head from "next/head";
import Layout from "../../components/layout"
// import styles from "@/styles/About.module.css"
import styles from "@/styles/Licenses.module.css"
import Link from "next/link";
import Image from "next/image";
import { Inter } from 'next/font/google'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import {motion} from "framer-motion"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

function licenses() {
  return (
    <Layout>
      <Head>
        <title>Licenses | Happy Valley Thailand</title>
        <meta name="description" content="Tour | Happy Valley Thailand" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h3>HAPPY VALLEY LAMPHUN</h3>
          <p>We provide high-quality flowers to government-run<br /> hospitals and clinics all through Thailand.</p>
          <FontAwesomeIcon icon={faChevronDown} className={styles.down} />
        </div>
      </div>

      <div className={styles.catch}>
        <div className={styles.catchText}>
          <h3>Licenses and Legality</h3>
          <p>Our experience goes beyond serving individual clients. We provide high-quality flowers to government-run hospitals and clinics all through Thailand. On top of this, we are one the very first Cannabis farms to be licensed organically. Please feel free to view all of our licenses by clicking on the Licenses & Legality icon or if you have any further questions, please feel free to contact us anytime.</p>
        </div>
      </div>

      <div className={styles.vision}>
        <div className={styles.visionWrapper}>
          <div className={styles.visionContent}>
            <p>Organic</p>
            <h3>Good Agricultural Practice</h3>
            <p>Happy Valley is a state-of-the-art medical cannabis facility seeking to produce, trade, and export medical-grade cannabis products with the aim of bringing relief to people in need around the world.<br /><br /> We have been practicing organic methods since day one, only using enzymes, bacteria, funguses, and co-planting for pest control and nutrient balance in the super/living soil.<br /><br /> These practices have led Happy Valley Lamphun to receive their G.A.P. (Good Agricultural Practice) Certificate and organic certificate from the Thai Government.</p>
            {/* <button>
              <Link href="/licenses">Get in Touch</Link>
            </button> */}
          </div>
          <Image src="/tour_img.jpg" width={1900} height={1080} />
        </div>
      </div>

      <div className={styles.tour}>
        <div className={styles.tourWrapper}>
            <Image src="/asean_img.jpg" width={1900} height={1080} />
            <div className={styles.tourContent}>
              <p>Take a Tour</p>
              <h3>ASEAN GAP License</h3>
              <p>ASEAN GAP is a standard for good agricultural practice during the production, harvesting, and postharvest handling of fresh fruit and vegetables in the ASEAN region.<br /><br />
              The practices in ASEAN GAP are aimed at preventing or minimizing the risk of hazards occurring.<br /><br />
              This is a standard for sustainable and organic practices. Happy Valley Lamphun practices organic methods and has been doing so since day one. Happy Valley uses only enzymes, bacteria, funguses, and co-planting for pest control and nutrient balance in their super/living soil. These practices have led Happy Valley Lamphun to receive their G.A.P. (Good Agricultural Practice) Certificate and organic certificate from the Thai Government.</p>
              {/* <button>
                <Link href="/tour">Tour</Link>
              </button> */}
            </div>
        </div>
      </div>

      <div className={styles.licensePaper}>
        <div className={styles.pdfBox}>
          <h4>ASEAN GAP License</h4>
          <iframe src="https://docs.google.com/viewerng/viewer?url=https://valley-site-n2sslzd3n-kengo1226.vercel.app/license_1.pdf&embedded=true" width={800} height={800} loading='lazy'></iframe>
        </div>

        <div className={styles.pdfBox}>
          <h4>Distributing License or processing controlled herbs for commercial Purposes Granted by the Ministry of Health of Thailand (Below)</h4>
          <p>The license for processing and selling cannabis is licensed by the Ministry of Health in Thailand.</p>
          <iframe src="/License_2-1.pdf" width={800} height={800} loading='lazy'></iframe>
        </div>

        <div className={styles.pdfBox}>
          <h4>Registration and license for the cultivation and planting of cannabis (Below)</h4>
          <p>A license for the cultivation of cannabis is granted by the Food and Drug Administration (FDA).</p>
          <iframe src="/license_3-1.pdf" width={800} height={800} loading='lazy'></iframe>
        </div>
      </div>

      <div className={`${styles.middle} ${styles.bottom}`}>
        <p>At Happy Valley Lamphun, we believe in the principle of<br /> GROWING NATURALLY AND ORGANICALLY — for ourselves,<br /> our communities, and our whole world. </p>
      </div>
    </Layout>
  )
}

export default licenses