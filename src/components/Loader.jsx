import React from 'react'
import { motion } from 'framer-motion'

const loaderVariants = {
    animate1:{
        x: [-20,20],
        y:[0,-30],
        transition:{
            x:{
                yoyo:'infinity',
                duration:0.5,
            },
            y:{
                yoyo:'infinity',
                duration:0.25,
                ease: 'easeOut',
            },
        }
    }
}

const Loader = () =>{
    return(
        <>
        <motion.div className='loader-framer'>
        variants={loaderVariants}
        animate='animate1'
        </motion.div>

        </>
    )
}

export default Loader