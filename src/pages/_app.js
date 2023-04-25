import '@/styles/globals.css';
// import '@/styles/transition.css';
// import Transition from '../../components/Transition';
import { AnimatePresence } from "framer-motion";
// import {useState, useEffect} from "react";

export default function App({ Component, pageProps, router }) {

  return (
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
  ) 
}
