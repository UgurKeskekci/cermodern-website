import React from "react";
import Card from "../components/Card.jsx";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Carousel() {

    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 400;
    }

    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 400;
    }

  return (
    <>
      <div className="bg-gray-100 w-[100vw]  relative scrollbar-hide">
        
        <div className="absolute right-0 top-5">
          <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
            <FiChevronLeft />
          </button>
          <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
            <FiChevronRight />
          </button>
        </div>
        <div id="content" className="carousel scroll-smooth p-4  flex items-center justify-center overflow-x-auto relative">
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
  );
}

export default Carousel;
