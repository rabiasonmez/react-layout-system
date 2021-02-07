import React from 'react';

export default function AboutUs() {

    return ( 
        <div id="section-about-1">
        <div className="container">
            <div className="row pt-4 mt-5">
                <div className="col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    <div className="ml--115">
                        <img src="http://firmadukkani.com/odev/proje-1/images/about-us.png" alt="" className="w-100" />
                    </div>
                </div>
                <div className="col-sm-6 mt-5 ps-sm-5" data-aos="fade-left" data-aos-duration="2000">
                    <h4 className="text-orange mb-4">About Us</h4>
                    <h2 className="fs-60 mb-5">We are awesome digital business <span className="text-blue">agency</span> </h2>
                    <ul className="about-list ps-0 py-4">
                        <li><i className="text-orange border-orange"></i> Lorem ipsum dolor sit amet, consectetur adipiscing
                            <br /> elit, sed do eiusmod tempor incididunt ut labore et
                        </li>
                        <li><i className="text-blue border-blue"></i> Lorem ipsum dolor sit amet, consectetur adipiscing
                            <br /> elit, sed do eiusmod tempor incididunt ut labore et
                        </li>
                        <li><i className="text-yellow border-yellow"></i> Lorem ipsum dolor sit amet, consectetur adipiscing
                            <br /> elit, sed do eiusmod tempor incididunt ut labore et
                        </li>

                    </ul>
                    <a href="" className="font-lato btn bg-theme fs-20 px-4 py-2 fw-light text-white mt-3">Discover</a>
                </div>
            </div>
        </div>
    </div>
   
    );
}