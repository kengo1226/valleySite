import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
// import {motion} from "framer-motion";

// import layout
import Layout from "../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Home | Happy Valley Thailand</title>
        <meta name="description" content="The official website of Happy Valley Lamphun. Our plantation is a government-approved grower of medical canabis." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h3>HAPPY VALLEY<br /><span>LAMPHUN</span></h3>
          <p>Happy Valley Lamphun’s goal is to spread the word<br /> with our flowers to make our world a better place.</p>
          <FontAwesomeIcon icon={faChevronDown} className={styles.down} />
        </div>
      </div>

    
      <div className={styles.about}>
        <h3>A TRUE LABOR OF LOVE</h3>
        <p>At Happy Valley Lamphun, we believe in the principle of GROWING NATURALLY AND ORGANICALLY — for ourselves, our communities, and our whole world. We aim to share our products around the world, deepen the connection between us and the natural world, nurture meaningful relationships, and enhance the human experience.</p>
        <button>
          <Link href="/about">
            ABOUT US
          </Link>
        </button>
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
          <Image src="/main_bg.jpg" width={1900} height={1080} />
        </div>
      </div>

      <div className={styles.middle}>
        <p>Current Global Legal<br />Market<br />USD 16.5 Billion</p>
      </div>

      <div className={styles.tour}>
        <div className={styles.tourWrapper}>
            <Image src="/middle_bg.jpg" width={1900} height={1080} />
            <div className={styles.tourContent}>
              <p>TAKE A TOUR</p>
              <h3>Come Explore & Tour Our Farm</h3>
              <p>Come to Happy Valley Lamphun and explore our farm. Our facility is equipped to handle tours and we are all about transparency, quality product, and education. Please click here if you would like to join us and see our farm.<br /><br />
              Come to Happy Valley Lamphun and explore our farm. Our facility is equipped to handle tours and we are all about transparency, quality product, and education. Please click here if you would like to join us and see our farm.</p>
              <button>
                <Link href="/tour">Tour</Link>
              </button>
            </div>
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.container}>
            <p className={styles.green}>HIGH QUALITY</p>
            <h3>Come Explore & Tour Our Farm</h3>
            <div className={styles.featureWrapper}>
              <div className={styles.card}>
                <p>Partnerships</p>
                <p>We are firm believers in spreading our products the right way. Working with those that share our vision for offering organic, sustainable, and local cannabis is critical. This is why we will continue to develop partnerships with those who share our philosophy offering products that are good for people but for the world. Happy Valley Lamphun’s goal is to spread the word with our flowers to make our world a better place.</p>
              </div>
              <div className={styles.card}>
                <p>Purely Amazing Flower</p>
                <p>Our aim is to grow with the highest level of quality, we are proud of what we grow. That’s why our expert cultivators craft our cannabis flower by hand, in state-of-the-art greenhouses, directly under the beautiful sunlight of Thailand. We believe in 100% organic cannabis and aim to promote health, happiness, and abundance to everyone through this powerful plant. Our passion is creating a pure and safe product with no pesticides or chemicals used during cultivation.</p>
              </div>
              <div className={styles.card}>
                <p>Licenses and Legality</p>
                <p>Our experience goes beyond serving individual clients. We provide high-quality flowers to government-run hospitals and clinics all through Thailand. On top of this, we are one the very first Cannabis farms to be licensed organically. Please feel free to view all of our licenses by clicking on the Licenses link or if you have any further questions, please feel free to contact us anytime.</p>
              </div>
            </div>
            <div className={styles.movie}>
              <video controls src={"/compressedVideo.mp4"} />
            </div>
          </div>
      </div>

      <div className={`${styles.middle} ${styles.bottom}`}>
        <p>At Happy Valley Lamphun, we believe in the principle of<br /> GROWING NATURALLY AND ORGANICALLY — for ourselves,<br /> our communities, and our whole world. </p>
      </div>
    </Layout>
  )
}
