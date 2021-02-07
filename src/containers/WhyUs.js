import React from 'react';

export default function WhyUs() {

    return ( 
        <div id="section-about-3">
        <div className="container">
            <div className="row pt-4 mt-5">
                <div className="col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                    <div className="ml--115">
                        <img src="http://firmadukkani.com/odev/proje-1/images/why-us.png" alt="" className="w-100" />
                    </div>
                </div>
                <div className="col-sm-6 mt-5 ps-sm-5" data-aos="fade-left" data-aos-duration="2000">
                    <h4 className="text-orange mb-4">Why Us</h4>
                    <h2 className="fs-60 mb-5">Why will you choose <span className="text-orange">Biz</span><span className="text-blue">Planner</span>
                    </h2>
                    <p className="py-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        <br /> elit, sed do eiusmod tempor incididunt ut labore et
                    </p>
                    <ul className="about-list ps-0 py-4">
                        <li><i className="text-orange border-orange"></i> Lorem ipsum dolor sit amet, consectetur adipiscing
                        </li>
                        <li><i className="text-blue border-blue"></i> Lorem ipsum dolor sit amet, consectetur adipiscing
                        </li>
                        <li><i className="text-yellow border-yellow"></i> Lorem ipsum dolor sit amet, consectetur adipiscing
                        </li>

                    </ul>
                    <a href="" className="font-lato btn bg-theme fs-20 px-4 fw-light text-white">Learn More</a>
                </div>
            </div>
        </div>
    </div>
    );
}