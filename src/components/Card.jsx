import React from 'react'

function Card() {
  return (
    <div className='card bg-white w-[200px] h-[400px] ml-4'>
        <div className="top">
            <img className='w-[200px] h-[300px]' src="https://wallpaper.dog/large/20342206.png" alt="img" />
        </div>
        <div className="bottom flex flex-col justify-center items-start p-3">
            <div className="title"> art gallery   </div>
            <div className="category"> category </div>
            <div>
            <div className="price">price</div>    
            </div>
        </div>
    </div>
  )
}

export default Card