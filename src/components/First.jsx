import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
const First = () => {
  return (
    <div className='mt-15'>
      <h1 className={`${styles.sectionHeadText} bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-700 text-clip bg-clip-text text-transparent mb-[3rem]`}>Gallery</h1>
      <div className='grid grid-cols-2 gap-5'>

        <motion.div
          variants={fadeIn('right', 'spring', 0.5 * 1, 1.5)}
        >
          <img className='rounded-md' src="./transport/t1.jpg" alt="ring" />

        </motion.div>
        <motion.div
          variants={fadeIn('left', 'spring', 0.5 * 1, 1.5)}
        >
          <img className='rounded-md' src="./transport/t2.jpg" alt="ring" />

        </motion.div>
        <motion.div
          variants={fadeIn('right', 'spring', 0.5 * 1.5, 1)}
        >
          <img className='rounded-md' src="./transport/t3.jpg" alt="ring" />

        </motion.div>
        <motion.div
          variants={fadeIn('left', 'spring', 0.5 * 1.5, 1)}
        >
          <img className='rounded-md' src="./transport/t4.jpg" alt="ring" />

        </motion.div>


      </div >
    </div>

  )
}

export default SectionWrapper(First, "first")