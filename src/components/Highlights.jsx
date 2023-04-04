import React from 'react'
import Carousel from './Carousel'

function Highlights() {
  return (
   <>
        <div className='mt-16'>
          {/** ----------BUTTONS------------ */}
        <div className='ml-24'>
        <button className='border-2 ml-2 border-black w-48 h-16 text-m font-bold rounded-md'> Plan your visit</button>
        <button className='border-2 ml-2 border-black w-48 h-16 text-m font-bold rounded-md'> Subscribe to neswletter</button>
        <button className='border-2 ml-2 border-black w-48 h-16 text-m font-bold rounded-md '> Plan your visit</button>
        <button className='border-2 ml-2 border-black w-48 h-16 text-m font-bold rounded-md'> Subscribe to neswletter</button>
       
      
        </div>
       
        <Carousel/>
        </div>
   </>
  )
}

export default Highlights