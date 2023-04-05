import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";

// import layout
import Layout from "../../components/layout";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Home | Happy Valley Thailand</title>
        <meta name="description" content="Home | Happy Valley Thailand" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h3>HAPPY VALLEY<br /><span>LAMPHUN</span></h3>
          <p>Happy Valley Lamphun’s goal is to spread the word<br /> with our flowers to make our world a better place.</p>
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
            <h3>Our Vision</h3>
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

      <div>
        
      </div>
    </Layout>
  )
}
