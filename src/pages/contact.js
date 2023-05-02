import React from 'react'
import Head from "next/head";
import Layout from "../../components/layout"
import styles from "@/styles/Contact.module.css"
import { Inter } from 'next/font/google'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

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
                <h4>HAPPY VALLEY LAMPHUN</h4>
                <h3>CONTACT US</h3>
                <p>High quality cannabis products from the<br /> natural and beautiful, Lamphun Province, Thailand</p>
                <FontAwesomeIcon icon={faChevronDown} className={styles.down} />
            </div>
        </div>

        <div className={styles.contactForm}>
            <h2>Contact Us</h2>
            <form action="https://happy.form.newt.so/v1/kfvIM9hdp" method='post'>
                <label htmlFor="name">Name</label>
                <input id='name' name='name' required />
                <label htmlFor="email">Email</label>
                <input id='email' name='email' required />
                <label htmlFor="message">Message</label>
                <textarea id='message' name='message' required></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>

        <div className={styles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15148.492471505306!2d98.9508078!3d18.3416668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dbc55195ab473b%3A0x890e9931c8c66465!2sHappy%20Valley%20Medical%20Cannabis%20Farm%20-%20L%20A%20M%20P%20H%20U%20N!5e0!3m2!1sja!2sjp!4v1682652951669!5m2!1sja!2sjp" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </Layout>
  )
}

export default contact