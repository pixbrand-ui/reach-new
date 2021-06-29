import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
import { Images } from 'Constants';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }


  componentDidMount() {

  }

  componentWillUnmount() {
    
  }

  
  render() {

    return (
      <React.Fragment>

        <Header />

        <section id="get_in_touch_sec" className="get_in_touch_sec">
            <div className="container">
                <div className="row">

                    <div className="col-12 mb-3">
                        <h2 className="f32 f700 clr_black">
                            Get In Touch.
                        </h2>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="get_touch_content green_top_border">
                            <h4 className="f20 f600 clr_black mb-3">For general inquiries:</h4>
                            <a href="mailto:support@charles.com" className="f16 f400 clr_black">support@charles.com</a>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="get_touch_content purple_top_border">
                            <h4 className="f20 f600 clr_black mb-3">For press & blog
                              inquiries:
                            </h4>
                            <a href="mailto:blogpost@charles.com" className="f16 f400 clr_black">blogpost@charles.com</a>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="get_touch_content yellow_top_border">
                            <h4 className="f20 f600 clr_black mb-3">Office address</h4>
                            <p className="f16 f400 clr_black">116 dummy new montomery St.
                                suite 400 Sans Francisco, CA
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section id="send_message_sec" className="send_message_sec">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-lg-6">
                        <img src={Images.contact_us_img.default} alt="" className="w-100" />
                    </div>

                    <div className="col-12 col-lg-6">
                        <h1 className="f80 f600 clr_black mb-5">
                            Send a Message.
                        </h1>
                        <form action="" className="w-100 cmn_theme_form">
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <div className="">
                                      <label htmlFor="y_name" className="f16 f400 clr_black mb-2 cursor_pointer">Your name*</label>
                                      <input type="text" placeholder="Enter your name" name="y_name"
                                          id="y_name" className="theme_input theme_grey_outline_input" />
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 mb-3">
                                    <div className="">
                                      <label htmlFor="y_email" className="f16 f400 clr_black mb-2 cursor_pointer">Your Email*</label>
                                      <input type="email" placeholder="Enter Your Email" name="y_email"
                                          id="y_email" className="theme_input theme_grey_outline_input" />
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 mb-3">
                                    <div className="">
                                      <label htmlFor="com_name" className="f16 f400 clr_black mb-2 cursor_pointer">Company name (optional)</label>
                                      <input type="text" placeholder="Enter Your Email" name="com_name"
                                          id="com_name" className="theme_input theme_grey_outline_input" />
                                    </div>
                                </div>

                                <div className="col-12 mb-3">
                                    <div className="custom_select_icon">
                                      <label htmlFor="topic" className="f16 f400 clr_black mb-2 cursor_pointer">Topic*</label>
                                      <select name="" id="topic" className="theme_input theme_grey_outline_input cursor_pointer">
                                        <option value="0">--Select Topic--</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                      </select>
                                    </div>
                                </div>

                                <div className="col-12 mb-3">
                                    <div className="">
                                      <label htmlFor="message" className="f16 f400 clr_black mb-2 cursor_pointer">Message*</label>
                                      <textarea placeholder="Write your message" name="message"
                                          id="message" className="theme_input theme_grey_outline_input" rows="5"></textarea>
                                    </div>
                                </div>

                                

                                <div className="col-12">
                                    <div className="d-flex justify-content-end">
                                      <button className="theme_dark_btn coupon_apply_btn cmn_btn">Send message</button>
                                    </div>
                                </div>


                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </section>


      </React.Fragment>
    )
  }
}



export default ContactUs;