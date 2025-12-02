import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-green-200 text-base-content rounded p-10">
      <div>
        <Link to={"/"}>
          <img className="w-14 rounded-full" src={logo} alt="logo" />
        </Link>
      </div>
      <nav className="grid grid-flow-col gap-4">
        <Link to={"/about-us"} className="link link-hover">
          About us
        </Link>
        <Link to={"/"} className="link link-hover">
          Home
        </Link>
        <Link to={"/plants"} className="link link-hover">
          All PLants
        </Link>
        <Link to={"/myprofile"} className="link link-hover">
          My-Profile
        </Link>
      </nav>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/instagram-new--v1.png"
              alt="instagram-new--v1"
            />
          </a>
          <a>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/facebook.png"
              alt="facebook"
            />
          </a>
          <a>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/pinterest--v1.png"
              alt="pinterest--v1"
            />
          </a>
        </div>
      </nav>
      <aside>
        <p>© 2025 GreenNest. All rights reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
