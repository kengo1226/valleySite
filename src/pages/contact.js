import React from 'react'
import Head from "next/head";
import Layout from "../../components/layout"
import styles from "@/styles/Contact.module.css"
import { Inter } from 'next/font/google'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ['latin'] })

function contact() {
  return (
    <Layout>
        <Head>
        <title>Contact | Happy Valley Thailand</title>
        <meta name="description" content="Contact | Happy Valley Thailand" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <div className={styles.hero}>
            <div className={styles.heroText}>
                <h3>HAPPY VALLEY LAMPHUN</h3>
                <p>High quality cannabis products from the<br /> natural and beautiful, Lamphun Province, Thailand</p>
                <FontAwesomeIcon icon={faChevronDown} className={styles.down} />
            </div>
        </div>

        <div className={styles.contactForm}>
            <h2>Contact Us</h2>
            <form action="https://happy.form.newt.so/v1/kfvIM9hdp" method='post'>
                <label htmlFor="name">Name</label>
                <input id='name' name='name' />
                <label htmlFor="email">Email</label>
                <input id='email' name='email' />
                <label htmlFor="message">Message</label>
                <textarea id='message' name='message'></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </Layout>
  )
}

export default contact