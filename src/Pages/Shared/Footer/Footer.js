import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="p-10 bg-neutral text-neutral-content">
      <div className="footer ">
        <div>
          <span className="footer-title text-white">Services</span>
          <Link to="/" className="link link-hover">
            Medichine
          </Link>
          <Link to="/" className="link link-hover">
            Liver
          </Link>
          <Link to="/" className="link link-hover">
            Hart
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/" className="link link-hover">
            About us
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
          <Link to="/" className="link link-hover">
            Jobs
          </Link>
          <Link to="/" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="/" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
