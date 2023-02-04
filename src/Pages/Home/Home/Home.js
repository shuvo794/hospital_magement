import React from "react";
import About from "../../About/About";

import Banner from "../Banner/Banner";
import Services from "../../Services/Services";
import Blogs from "../../Blog/Blogs/Blogs";

function Home() {
  return (
    <div>
      <Banner />
      <Services />
      <About />
      <Blogs />
    </div>
  );
}

export default Home;
