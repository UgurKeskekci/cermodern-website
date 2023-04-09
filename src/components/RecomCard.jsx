import React from 'react'

function RecomCard({img,category, desc, title, details,date}) {


  return (
    <>
    <div className="card bg-white w-[300px] h-[450px] m-2 rounded-lg shadow-lg font-roboto">
      <div className="top">
        <img
          className="w-[300px] h-[300px] object-cover  p-2"
          src={img}
          alt="img"
        />
      </div>
      <div className="bottom flex flex-col justify-center items-start p-3 bg-">
        <div className="title  my-1">
        {category}
        </div>
        <div className="category text-sm text-gray-400">
         {desc}
        </div>
        <div className="category text-bold">
         {title}
        </div>
        <div className="category my-1">
        {details}
        </div>

        

        
       
      </div>
      <div className="absolute category text-xs font-light bottom-0 underline">
        {date}
      </div>
    </div>
  </>
  )
}

export default RecomCard