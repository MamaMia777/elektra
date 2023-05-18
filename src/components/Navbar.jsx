import React from 'react'
import { styles } from '../styles'


const Navbar = () => {
  return (
    <nav className={`${styles.paddingX} w-full flex flex-col py-5 fixed top-0 z-10 bg-primary`}>
      <div className={`w-full max-w-7xl mx-auto flex gap-4`}>
        <div className='pr-2 border-r-[rgba(0,0,0,1)] border-r-2 bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-400 text-clip bg-clip-text text-transparent'>stgroup@inbox.lv</div>
        <div className='font-bold bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-300 text-clip bg-clip-text text-transparent'>+371 29241080</div>
      </div>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <img src="./logo.svg" alt="icon" className='w-[40px]' />
        <h3 className='text-[25px] xl:text-[50px] leading-none font-bold bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-700 text-clip bg-clip-text text-transparent  '>ELP</h3>
        <img src="./logo.svg" alt="icon" className='w-[40px]' />
      </div>
    </nav>
  )
}

export default Navbar