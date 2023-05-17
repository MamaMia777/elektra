import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
const RingSection = () => {
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden items-center justify-between'>
      <motion.img

        variants={fadeIn('right', 'spring', 0.5 * 3, 1)}
        src='./tractor.jpg' alt='sia_elektra' className='xl:w-[500px] rounded-xl' />
      <div>
        <motion.p variants={textVariant(1)} className={`${styles.sectionSubText}`}>
          Leader of Sector. It is no coincidence that our country’s leading agricultural equipment manufacturers prefer ELP calaborating
          with Di-San in terms of quality and robustness.
        </motion.p>
        <motion.p variants={textVariant(2)} className={`${styles.sectionSubText} text-right mt-6`} >
          We are continuing our path with sure steps to move this leadership in our country to Europe.
        </motion.p>
      </div>

    </div>
  )
}

export default SectionWrapper(RingSection, "")