import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto mb-[3rem]'>
      <div className={`${styles.paddingX} 
      absolute inset-0 top-[120px] max-w-7xl
       mx-auto flex flex-col gap-[4rem] sm:flex-row lg:flex-row items-center`}>
        <div className='w-full'>
          <h1 className={`${styles.sectionHeadText} bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-700 text-clip bg-clip-text text-transparent`}>ELP-Supplying spare parts for agricultural, communal, and construction equipment</h1>
          <p className={`${styles.sectionSubText} mt-10 text-justify w-full`}>
            The company represents multiple manufacturers of machinery and related components. Location: Bauska, Latvia (BauskaLV3901), 60km from Riga, along the VIA Baltica highway connecting Latvia, Lithuania, and Poland. The company owns a production facility covering an area of 1500 sq.m. on a total site area of 6257 sq.m. Access roads are asphalted.</p>

        </div>
        <div className='relative scale-75 sm:scale-100 xl:scale-150'>
          <motion.img
            src="./mechanism.png"
            alt="ring"
            className='w-[500px] px-4'
            animate={{
              y: [0, 30, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'loop'
            }}

          />

        </div>

      </div>

    </section>
  )
}

export default Hero