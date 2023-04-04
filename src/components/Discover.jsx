import React from 'react'
import Card from "../components/Card.jsx";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Discover() {


    const scrollLeft = () => {
        document.getElementById("content2").scrollLeft -= 800;
    }

    const scrollRight = () => {
        document.getElementById("content2").scrollLeft += 800;
    }


  return (


    
    <>
    <br />
    <br />
    <hr />
    <div className="mt-20  relative">
      <div className="text-left ml-24 py-4 text-3xl font-bold">DISCOVER MORE</div>
      <div className="absolute right-0 top-0">
        <button onClick={scrollLeft} className="p-4 m-2 rounded-full border-2 border-black">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-4 m-2 rounded-full border-2 border-black mr-24">
          <FiChevronRight />
        </button>
      </div>
      <div  id='content2' className="carousel p-4  flex items-center justify-start overflow-x-auto scrollbar-hide scroll-smooth relative">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  </>
  )
}

export default Discover