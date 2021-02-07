import React from 'react';

export default function Team() {

    return ( 
        <div id="section-team">
        <div className="container">
            <div className="row text-center">
                <h4 className="text-orange mb-4">Our Team</h4>
                <h2 className="fs-60 mb-5">Meet Our Awasome Team</h2>
            </div>
            <div className="row">
                <div className="col-sm team-item mb-5" data-aos="flip-left" data-aos-duration="2000">
                    <h5 className="mb-0"><strong>Jane Foster</strong></h5>
                    <p>Designer</p>
                    <div className="team-img">
                        <img src="http://firmadukkani.com/odev/proje-1/images/team-1.jpg" alt="" />
                    </div>
                    <div className="social-links text-end pe-4">
                        <a href="#" className="fa fa-facebook rounded-pill"></a>
                        <a href="#" className="fa fa-instagram rounded-pill"></a>
                        <a href="#" className="fa fa-linkedin rounded-pill"></a>
                        <a href="#" className="fa fa-twitter rounded-pill"></a>
                    </div>
                </div>
                <div className="col-sm team-item team-item-2 pe-4 mb-5" data-aos="flip-left" data-aos-duration="2000">
                    <h5 className="mb-0 text-end"><strong>Chris Trance</strong></h5>
                    <p className="text-end">UI/UX Designer</p>
                    <div className="team-img">
                        <img src="http://firmadukkani.com/odev/proje-1/images/team-2.jpg" alt="" />
                    </div>
                    <div className="social-links text-start ps-4">
                        <a href="#" className="fa fa-facebook rounded-pill"></a>
                        <a href="#" className="fa fa-instagram rounded-pill"></a>
                        <a href="#" className="fa fa-linkedin rounded-pill"></a>
                        <a href="#" className="fa fa-twitter rounded-pill"></a>
                    </div>
                </div>
                <div className="col-sm team-item ps-4 mb-5" data-aos="flip-left" data-aos-duration="2000">
                    <h5 className="mb-0"><strong>Jane Foster</strong></h5>
                    <p>Designer</p>
                    <div className="team-img">
                        <img src="http://firmadukkani.com/odev/proje-1/images/team-3.jpg" alt="" />
                    </div>
                    <div className="social-links text-end pe-4">
                        <a href="#" className="fa fa-facebook rounded-pill"></a>
                        <a href="#" className="fa fa-instagram rounded-pill"></a>
                        <a href="#" className="fa fa-linkedin rounded-pill"></a>
                        <a href="#" className="fa fa-twitter rounded-pill"></a>
                    </div>
                </div>
                <div className="col-sm team-item team-item-2 mb-5" data-aos="flip-left" data-aos-duration="2000">
                    <h5 className="mb-0 text-end"><strong>Chris Trance</strong></h5>
                    <p className="text-end">UI/UX Designer</p>
                    <div className="team-img">
                        <img src="http://firmadukkani.com/odev/proje-1/images/team-4.jpg" alt="" />
                    </div>
                    <div className="social-links text-start ps-4">
                        <a href="#" className="fa fa-facebook rounded-pill"></a>
                        <a href="#" className="fa fa-instagram rounded-pill"></a>
                        <a href="#" className="fa fa-linkedin rounded-pill"></a>
                        <a href="#" className="fa fa-twitter rounded-pill"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}