import React from "react";
import hospital from "../../../assets/hospital.jpg";

function Banner() {
  return (
    <div className="carousel w-full">
      <div id="slide1" className=" relative w-full">
        <img src={hospital} className="w-full" alt="" />
      </div>
    </div>
  );
}

export default Banner;
