import React from 'react';

export default function QuestionForm() {

    return ( 
        <div id="section-carier">
        <div className="container">
            <div className="row">
                <div className="col-sm-5 mt-3 ps-sm-5 carier-form" data-aos="zoom-out" data-aos-duration="2000">
                    <h4 className="text-orange mb-4">Any Question</h4>
                    <h2 className="fs-60 mb-5">Would you like to work with us?</h2>
                    <div className="form-group">
                        <label for="form_name">Full Name</label>
                        <input id="form_name" type="text" name="name" className="form-control" placeholder="John Smith" required="required" />

                    </div>
                    <div className="form-group">
                        <label for="form_mail">Email Address *</label>
                        <input id="form_mail" type="text" name="name" className="form-control" placeholder="yourmail@email.com" required="required" />

                    </div>
                    <div className="form-group mb-4">
                        <label for="form_message">Message <i className="fa fa-link text-orange ms-4"></i></label>
                        <textarea id="form_message" type="text" name="name" className="form-control" rows="5" placeholder="Write Message..." required="required"></textarea>

                    </div>

                    <a href="" className="font-lato btn bg-theme fs-20 px-4 fw-light text-white">Send</a>
                </div>
                <div className="col-sm-7 pt-4" data-aos="zoom-in" data-aos-duration="2000">
                    <div className="mr--115">
                        <img src="http://firmadukkani.com/odev/proje-1/images/ask-question.png" alt="" className="w-100" />
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    );
}