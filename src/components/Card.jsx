import React from 'react'

function Card() {
  return (
    <div className='card bg-white md:w-[450px] md:h-[620px] h-[1000px] w-[450px] ml-6 flex relative'>
        <div className="top">
            <img className='w-[450px] h-[620px]' src="https://fristartmuseum.org/wp-content/uploads/Otobong-gallery-shots-3.jpg" alt="img" />
        </div>
       
            <div className="absolute w-[470px] h-[880px] flex justify-center items-center text-xl text-white "> CONCERT </div>
            <div className="absolute w-[470px] h-[930px] flex justify-center items-center text-xl text-white font-bold"> Star Dust Music </div>
            <div className="absolute w-[470px] h-[1050px] flex justify-center items-center text-xl text-white"> New Presentations of Collections  </div>
            <div className="absolute w-[470px] h-[1150px] flex justify-center items-center text-xl text-white "> Fri 07/04/2023, 07:00 pm </div>
            
        
    </div>
  )
}

export default Card