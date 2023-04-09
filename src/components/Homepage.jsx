import React from 'react'
import videoBg from '../assets/videoBackground.mp4'
import {BsArrowDown} from 'react-icons/bs'

function Introduction() {
  return (
   <> 
    <div className='h-full'>
      <div className='w-full h-[650px] flex'>
        <div >
        <video className='w-[10000px] h-[570px] 2xl:h-[650px] object-cover' src={videoBg} autoPlay loop muted/>
        </div>
          
        
          <p className='absolute w-full h-[300px] flex justify-center items-center md:text-6xl  text-4xl text-white font-bold'>A PLACE FOR CULTURE</p>
          <p className='absolute w-full h-[420px] flex justify-center items-center md:text-6xl  text-4xl text-white font-bold'>AND SCIENCE, FOR</p>
          <p className='absolute w-full h-[530px] flex justify-center items-center md:text-6xl  text-4xl text-white font-bold'>EXCHANGE AND DEBATE</p>
          <div className='absolute w-full h-[750px] flex justify-center items-center '>
          <button className='border border-white w-52 h-16 text-white'>
            <span>PROGRAMLAR</span>
          </button>
          </div>
          <div className='absolute w-full h-[1000px]  flex justify-center items-center text-white'> <BsArrowDown/></div>
          <div className='absolute md:left-32 left-10 md:h-[1150px] h-[1250px] flex justify-center items-center '>
            <button className='border border-white w-52 h-16 bg-black  text-white text-m rounded-md hover:bg-gray-700'> Plan your visit</button>
            <button className='border border-white w-52 h-16 ml-1 bg-gray-200 hover:bg-gray-400 text-m rounded-md'> Subscribe to neswletter</button>
          </div>
        </div>
   </div>
   
     

      </>

  )
}

export default Introduction