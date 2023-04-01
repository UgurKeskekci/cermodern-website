import React from 'react'
import videoBg from '../assets/videoBackground.mp4'

function Introduction() {
  return (
    <div className='w-full h-[600px] flex'>
        <video className='w-[10000px]' src={videoBg} autoPlay loop muted/>
        
          <p className='absolute w-full h-[400px] flex justify-center items-center'>A PLACE FOR CULTER</p>
          <p className='absolute w-full h-[450px] flex justify-center items-center'>AND SCIENCE, FOR</p>
          <p className='absolute w-full h-[500px] flex justify-center items-center'>EXCHANGE AND DEBATE</p>
        
    </div>



  )
}

export default Introduction