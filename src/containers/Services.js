import React from 'react';

export default function Services() {

    return ( 
        <div id="section-services">
        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-sm-12 text-center mb-5" data-aos="fade-up" data-aos-duration="2000">
                    <h4 className="text-orange mb-2">Feature </h4>
                    <h2 className="fs-60">Special Services</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-10 offset-sm-1">
                    <div className="row">
                        <div className="col-sm-4 px-3" data-aos="flip-left" data-aos-duration="2000">
                            <div className="card text-center d-block p-3 border-0">
                                <img src="http://firmadukkani.com/odev/proje-1/images/services-ux-design.png" className="w-auto" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title text-capitalize my-4">UI/UX Design</h3>
                                    <p className="card-text text-center mt-3">
                                        We provide the best Marketing by following the latest trends of the market.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 px-3" data-aos="flip-left" data-aos-duration="2500">
                            <div className="card text-center d-block p-3 border-0">
                                <img src="http://firmadukkani.com/odev/proje-1/images/services-digital-marketing.png" className="" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title text-capitalize my-4">Digital Marketing</h3>
                                    <p className="card-text text-center mt-3">
                                        We provide the best Marketing by following the latest trends of the market.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 px-3" data-aos="flip-left" data-aos-duration="3000">
                            <div className="card text-center d-block p-3 border-0">
                                <img src="http://firmadukkani.com/odev/proje-1/images/services-graphic-design.png" className="" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title text-capitalize my-4 text-yellow">Graphic Design</h3>
                                    <p className="card-text text-center mt-3">
                                        We provide the best Marketing by following the latest trends of the market.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    );
}