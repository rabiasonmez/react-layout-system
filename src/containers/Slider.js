import React from 'react';

export default function Slider() {

    return ( 
        <div id="section-header">
            <div className="container">
                <div className="row header-row-bg" data-aos="fade-up" data-aos-duration="1000">
                    <div className="col-sm-6" data-aos="fade-left" data-aos-duration="2000">
                        <h1 className="fs-70 fw-bolder"><span className="text-yellow">Creative</span> solutions<br /> to improve your
                            <br /> <span className="text-orange">business!</span>
                        </h1>
                        <p className="mt-4">We work hand-in-hand with industry-leading brands to help redefine<br /> the possibilities and potential of digital engagements. </p>
                        <div className="header-buttons my-5 row">
                            <div className="col-sm-5 mt-2">
                                <a href="" className="btn bg-theme btn-header">Get Started</a></div>
                            <div className="col-sm-5 mt-2 pt-3">
                                <a href="" className="text-center btn-play">
                                    <span className="rounded rounded-pill"><i className="fa fa-play mr-3" aria-hidden="true"></i></span>
                                    <span className="text-orange">Play Video</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                        <div className="mt-2 mr--115">
                            <img src="http://firmadukkani.com/odev/proje-1/http://firmadukkani.com/odev/proje-1/images/header-image.png" alt="" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}