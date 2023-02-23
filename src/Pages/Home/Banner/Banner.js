import React from "react";

import "./Bnner.css";
import hospital from "../../../assets/doctor-3.jpg";
function Banner() {
  return (
    <div className="carousel w-full banner">
      <div id="slide1" className=" relative w-full">
        <div className="fix-banner">
          <div className="text-white">
            <h2>WE WILL HELP YOU TO BECOME HEALTHY</h2>
            <p className="text-white">
              Feugiat primis ultrice in ligula risus auctor tempus feugiat
              impedit Porta semper lacus cursus, feugiat primis ultrice in
              ligula risus auctor tempus feugiat dolor impedit magna purus at
              pretium donec
            </p>
          </div>
          <div className="image-fix">
            <img src={hospital} className="w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
