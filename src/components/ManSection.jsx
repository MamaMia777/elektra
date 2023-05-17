import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
const ManSection = () => {
  return (
    <div className='xl:mt-12 xl:flex-row-reverse flex-col-reverse flex gap-10 overflow-hidden items-center justify-between'>
      <motion.img

        variants={fadeIn('left', 'spring', 0.5 * 3, 1)}
        src='./building.jpg' alt='SIA_ELEKETRA' className='xl:w-[500px] rounded-md' />

      <div>

        <motion.p variants={textVariant(1)} className={`${styles.sectionSubText} mb-6`}>
          SIA Elektra Plus, established on November 8, 2000, offers reliable supply and provision of spare parts for agricultural,
          communal, and construction equipment in the Baltic and European Union markets.
        </motion.p>
        <motion.p variants={textVariant(2)} className={`${styles.sectionSubText} mb-6 text-right`} >
          As representatives of multiple equipment manufacturers, we ensure access to high-quality machinery and components.
        </motion.p>
        <motion.p variants={textVariant(3)} className={`${styles.sectionSubText} `}>
          Located in Bauska, Latvia (BauskaLV3901), just 60km from Riga along the VIA Baltica highway connecting Latvia,
          Lithuania, and Poland, our company boasts a 1500 sq.m. production facility on a 6257 sq.m.
          site with asphalted access roads. Choose us for exceptional service and comprehensive solutions.
        </motion.p>
      </div>

    </div>
  )
}

export default SectionWrapper(ManSection, "")