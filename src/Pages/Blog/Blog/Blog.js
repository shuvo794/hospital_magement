import React from "react";
import blog1 from "../../../assets/Blog-1.jpg";
import blog2 from "../../../assets/Blog-2.jpg";
import blog3 from "../../../assets/blog-3.jpg";
import "../Blog.css";
function Blog() {
  return (
    <div>
      <h3 className="text-xl font-bold text-black uppercase text-center pt-5 pb-5">
        Latest from our blog
      </h3>
      <div className="card-desgin">
        <div className="card w-96  bg-base-100 shadow-xl">
          <figure>
            <img src={blog1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">MEDICAL CARE</h2>
            <p>Fusce porttitor dui ultricies placerat adipiscing</p>
          </div>
        </div>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={blog2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">HEALTH</h2>
              <p>Important tips for your health and better living</p>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={blog3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">MEDICAL CARE</h2>
              <p>Fusce porttitor dui ultricies placerat adipiscing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
