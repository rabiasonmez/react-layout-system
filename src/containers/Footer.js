import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row" data-aos="fade-up" data-aos-duration="2000">
          <div className="col-sm-12 text-center mb-5 ">
            <a href="index.html">
              {" "}
              <img
                src="http://firmadukkani.com/odev/proje-1/images/logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="col-sm-6 offset-sm-3 text-center mb-5">
            <div className="row">
              <div className="col-sm">
                <a
                  href="#"
                  className="text-decoration-none text-white text-yellow"
                >
                  Home
                </a>
              </div>
              <div className="col-sm">
                <a href="#" className="text-decoration-none">
                  About Us
                </a>
              </div>
              <div className="col-sm">
                <a href="#" className="text-decoration-none">
                  Services
                </a>
              </div>
              <div className="col-sm">
                <a href="#" className="text-decoration-none">
                  Project
                </a>
              </div>
              <div className="col-sm">
                <a href="#" className="text-decoration-none">
                  Blog
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 pt-5 footer-bottom">
          <div className="col-sm-8 offset-sm-2 mb-5 mt-5 text-center">
            <p>143 your bizplanner address goes here, New York</p>
            <p> +00 123 456 789 | info@bizplanner.com</p>
            <p> www.bizplanner.com </p>
            <p className="mt-5">
              Copyright ©{" "}
              <a
                href="https://dribbble.com/rakibkowshar"
                className="text-white"
              >
                Rakib Kowshar
              </a>
              . 2020 All rights reserved{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
