import React from 'react'
import videoBg from '../assets/videoBackground.mp4'

function Introduction() {
  return (
   <> 
    <div className='w-full h-[600px] flex'>
          <video className='w-[10000px]' src={videoBg} autoPlay loop muted/>
        
          <p className='absolute w-full h-[300px] flex justify-center items-center text-5xl text-white font-bold'>A PLACE FOR CULTURE</p>
          <p className='absolute w-full h-[400px] flex justify-center items-center text-5xl text-white font-bold'>AND SCIENCE, FOR</p>
          <p className='absolute w-full h-[500px] flex justify-center items-center text-5xl text-white font-bold'>EXCHANGE AND DEBATE</p>
          <div className='absolute w-full h-[750px] flex justify-center items-center '>
          <button className='border border-white w-52 h-16 text-white'>
            <span>PROGRAMLAR</span>
          </button>
          </div>
          <div className='absolute w-full h-[1000px] flex justify-center items-center text-white'> aaa</div>
          <div className='absolute w-[600px] h-[1200px] flex justify-center items-center '>
            <button className='border border-white w-52 h-16 bg-black  text-white text-m rounded-md hover:bg-gray-700'> Plan your visit</button>
            <button className='border border-white w-52 h-16 ml-1 bg-gray-200 hover:bg-gray-400 text-m rounded-md'> Subscribe to neswletter</button>
          </div>
   </div>
   
     

      </>

  )
}

export default Introduction