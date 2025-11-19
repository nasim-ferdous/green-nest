import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">privacy</a>
        <a className="link link-hover">Policy</a>
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
