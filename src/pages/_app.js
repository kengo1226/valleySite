import '@/styles/globals.css';
// import '@/styles/transition.css';
import "@/styles/styles.css";
// framer motion
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }) {

  return (
      <AnimatePresence mode='wait'>
        <Component {...pageProps} />
      </AnimatePresence>
  ) 
}
