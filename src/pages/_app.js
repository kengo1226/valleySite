import '@/styles/globals.css';
// import '@/styles/transition.css';
import "@/styles/styles.css";
import dynamic from "next/dynamic";
// import {useState, useEffect} from "react";

const ScrollReveal = dynamic(
  import('../../components/ScrollReveal'),
  {ssr: false,}
);

export default function App({ Component, pageProps }) {

  return (
      <>
        <ScrollReveal />
        <Component {...pageProps} />
      </>
  ) 
}
