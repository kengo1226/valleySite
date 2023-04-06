import React from 'react';
import Layout from "../../components/layout"
import styles from "@/styles/About.module.css"
import Head from "next/head";

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
          <h3>HAPPY VALLEY<br /><span>LAMPHUN</span></h3>
          <p>Happy Valley Lamphun’s goal is to spread the word<br /> with our flowers to make our world a better place.</p>
        </div>
      </div>
    </Layout>
  )
}

export default about