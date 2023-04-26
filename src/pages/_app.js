import '@/styles/globals.css';
// import '@/styles/transition.css';
// import Transition from '../../components/Transition';
import { AnimatePresence } from "framer-motion";
import "@/styles/styles.css";
// import {useState, useEffect} from "react";

export default function App({ Component, pageProps, router }) {

  if (typeof window !== "undefined") {
    const removeFouc = (foucElement) => {
      foucElement.className = foucElement.className.replace('no-fouc', 'fouc');
    };
    removeFouc(document.documentElement);
  } 

  return (
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
  ) 
}
