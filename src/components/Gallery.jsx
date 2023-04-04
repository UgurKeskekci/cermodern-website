import React from 'react'

function Gallery() {
  return (
    <>
   
    <div className='h-full'>
    <div className='w-full h-[660px] flex'>
      <div >
      <img className='w-[10000px] h-[660px] object-cover' src='https://media.nomadicmatt.com/historical-acropolis.jpg' alt='img' />
      </div>
        
      <div className='absolute w-full h-[950px] flex justify-center items-center '>
        <div className='h-[180px]  justify-center items-center bg-gray-100'>
        <p className='  w-full mt-10 ml-6 justify-center items-center text-2xl text-black font-bold'>A PLACE FOR CULTURE</p>
       
        <p className='  w-[550px] mt-2  ml-6 justify-center items-center text-black text-sm'> Long historical place descriptionLong historical place descriptionLong historical place descriptionLong historical place descriptionLong historical place descriptionLong historical place description</p>
    
        </div>
       
      </div>
       
        
       
      </div>
 </div>
    </>
    
  )
}

export default Gallery