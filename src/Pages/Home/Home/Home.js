import React from "react";
import About from "../../About/About";

import Banner from "../Banner/Banner";
import Services from "../../Services/Services";
import Blogs from "../../Blog/Blogs/Blogs";
import Contuc from "../../Contuct/Contuc";

function Home() {
  return (
    <div>
      <Banner />
      <Services />
      <About />
      <Blogs />
      <Contuc />
    </div>
  );
}

export default Home;
