import '@/styles/globals.css';
// import '@/styles/transition.css';
// import Transition from '../../components/Transition';
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
  ) 
}
