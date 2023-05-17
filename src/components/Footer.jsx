import React from 'react'
import { styles } from '../styles'


const Footer = () => {
  return (
    <nav className={`${styles.paddingX} w-full py-5 bottom-0 z-10 bg-primary flex justify-center gap-2`}>
      <div className='sm:w-[50vw] w-full py-4 flex justify-around '>
        <div>
          <h1 className='font-bold'>Rekvizīti</h1>
          <p>SIA "ELEKTRA PLUS"</p>
          <p>Reg.Nr.LV40003517323</p>
          <p>Luminor Bank AS Latvijas filiāle</p>
          <p>SWIFT kods: RIKO LV 2X</p>
          <p>Konts LV39RIKO 0002013263600</p>
        </div>

        <div >
          <p className='font-bold'>Valdes Loceklis   Aleksandrs Frolovs</p>
          <p className='mt-4'>stgroup@inbox.lv</p>
          <p className='mt-4'>+371 29241080</p>
        </div>
      </div>

    </nav>
  )
}

export default Footer