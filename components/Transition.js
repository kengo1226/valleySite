import React from 'react';
import { motion, AnimatePresence} from "framer-motion";
import {useRouter} from "next/router";

const variants = {
    out: {
        opacity: 0,
    },
    in: {
        opacity: 1,
    }
}

const Transition = ({children}) => {
    // const {asPath} = useRouter();

    return (
        <div className="effect-1">
            <AnimatePresence initial={false} mode='wait' onExitComplete={() => window.scrollTo(0, 0)}>
                <motion.div
                    key={asPath}
                    variants={variants}
                    animate="in"
                    initial="out"
                    exit="out"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default Transition