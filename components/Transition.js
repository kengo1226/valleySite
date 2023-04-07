import React from 'react';
import { motion, AnimatePresence} from "framer-motion";
import {useRouter} from "next/router";

const variants = {
    out: {
        opacity: 0,
        // y: 40,
        transition: {
            duration: 0.45
        }
    },
    in: {
        opacity: 1,
        // y: 0,
        transition: {
            duration: 0.45,
            delay: 0
        }
    }
}

const Transition = ({children}) => {
    const {asPath} = useRouter();

    return (
        <div className="effect-1">
            <AnimatePresence initial={false} exitBeforeEnter>
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