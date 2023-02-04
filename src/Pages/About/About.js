import React from "react";
import pic from "../../assets/about.png";
import "./About.css";
function About() {
  return (
    <section
      className="mt-32"
      style={
        {
          // background: `url(${appointment})`,
        }
      }
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="p-20">
            <h1 className=" text-black text-4xl font-bold ">About</h1>
            <h2 className="text-black text-4xl font-bold ">Dr. Jamal Uddin</h2>
            <br />
            <p className="text-black ">
              Nam vehicula malesuada lectus, interdum fringilla nibh. Duis
              aliquam vitae metus a pharetra. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nam vehicula malesuada lectus,
              interdum fringilla nibh. Duis aliquam vitae metus a pharetra.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              fermentum augue quis augue ornare, eget faucibus felis pharetra.
              Proin condimentum et leo quis fringilla.
            </p>
          </div>
          <img
            src={pic}
            alt=""
            className="mt-12 hidden md:block lg:w-1/2 rounded-lg shadow-2xl Dr"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
