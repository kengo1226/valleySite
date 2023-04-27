import '@/styles/globals.css';
// import '@/styles/transition.css';
// import Transition from '../../components/Transition';
// import { AnimatePresence } from "framer-motion";
import "@/styles/styles.css";
// import {useState, useEffect} from "react";

export default function App({ Component, pageProps }) {

  if (typeof window !== "undefined") {
    const removeFouc = (foucElement) => {
      foucElement.className = foucElement.className.replace('no-fouc', 'fouc');
    };
    removeFouc(document.documentElement);
  } 

  return (
        <Component {...pageProps} />
  ) 
}
