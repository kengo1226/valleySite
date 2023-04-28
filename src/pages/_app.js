import {useState, useEffect} from "react";
import '@/styles/globals.css';
// import '@/styles/transition.css';
import "@/styles/styles.css";
// framer motion
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }) {

  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return isRendered ? (
      <AnimatePresence mode='wait'>
        <Component {...pageProps} />
      </AnimatePresence>
  ) : (
    <></>
  )
}
