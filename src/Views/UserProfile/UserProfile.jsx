import React, { useRef } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/ExpertHeader'
import Slider from "react-slick";
// import {CommonNotifyModal} from 'Modals';
import { Images } from 'Constants';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  componentDidMount() {

  }

  componentWillUnmount = () => {

  };


  render() {

    return (
      <React.Fragment>
        <Header></Header>

              <section className='user_profile_banner' id='user_profile_banner'>
                <div className="container">
                  <div className="fav_expert_card row user_profile_row">
                    <div className="col-12 col-lg-9 col-xl-10">

                      <div className="d-flex">
                        <div className="fav_expert_status user_pro_status">
                            <div className="fav_expert_img">
                              <img src={Images.user_profile_img.default} alt="" className="w-100" />
                            </div>
                            <span className="online"></span>
                          </div>

                          <div className="fav_expert_details user_profile_details">
                            <h2 className="f32 f600 clr_white mb-2">Alexjender Maxwell <span className="f20">(Alex_123)</span></h2>
                            <div className="d-flex align-items-center mb-2">
                              <img src={Images.location_icon_white.default} alt="" className="me-2" />
                                <p className="f15 f400 clr_white">San Francisco, CA</p>
                                  </div>
                              <p className="f16 f400 clr_white max_w_80 mb-3">
                                Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of Slicing Pie, multiple start-ups, angel investor, teaches entrepreneurship at Northwestern University and the University of Chicago
                                  </p>
                            </div>
                          </div>

                        </div>

                        <div className="col-12 col-lg-3 col-xl-2 d-flex">
                          <div className="expert_figures text-center user_profile_figures m-auto w-100">
                            <ul>
                              <li>
                                <img src={Images.star_icon_white.default} alt="" />
                                  <p className="f16 f400 clr_white mt-2">5</p>
                                  </li>

                                <li>
                                  <img src={Images.phone_icon_white.default} alt="" />
                                    <p className="f16 f400 clr_white mt-2">18</p>
                                  </li>

                                  <li>
                                    <img src={Images.chat_icon_white.default} alt="" />
                                      <p className="f16 f400 clr_white mt-2">23</p>
                                  </li>

                              </ul>
                          </div>
                      </div>
                  </div>

                </div>
              </section>

              <section id="user_account_sec" className="user_account_sec">
                <div className="container">
                  <div className="row">

                    <div className="col-12">
                      <h2 className="f32 f600 clr_black mb-4">
                        Your Account
                      </h2>
                    </div>
                    <div className="col-12 col-lg-6">

                      <div className="user_account_card">
                        <Link to="/edit-profile" className="d-flex justify-content-between align-items-center">
                          <div>
                            <h3 className="f20 f600 clr_black mb-2">Edit Profile</h3>
                            <p className="f14 f400 clr_grey">Basic Information, Topics, Photo, Become an expert.</p>
                          </div>
                          <div>
                            <i className="fa fa-chevron-right clr_grey"></i>
                          </div>
                        </Link>
                      </div>

                      <div className="user_account_card">
                        <Link to="/payment-billing" className="d-flex justify-content-between align-items-center">
                          <div>
                            <h3 className="f20 f600 clr_black mb-2">Payment & Billing</h3>
                            <p className="f14 f400 clr_grey">Credit Card, Debit card, Stripe, billing address Details</p>
                          </div>
                          <div>
                            <i className="fa fa-chevron-right clr_grey"></i>
                          </div>
                        </Link>
                      </div>

                      <div className="user_account_card">
                        <Link to="social_media_verification.php" className="d-flex justify-content-between align-items-center">
                          <div>
                            <h3 className="f20 f600 clr_black mb-2">Social Media Verification</h3>
                            <p className="f14 f400 clr_grey">Connect your social media account</p>
                          </div>
                          <div>
                            <i className="fa fa-chevron-right clr_grey"></i>
                          </div>
                        </Link>
                      </div>

                      <div className="user_account_card">
                        <Link to="setting.php" className="d-flex justify-content-between align-items-center">
                          <div>
                            <h3 className="f20 f600 clr_black mb-2">Settings</h3>
                            <p className="f14 f400 clr_grey">Notifications, Change Password.</p>
                          </div>
                          <div>
                            <i className="fa fa-chevron-right clr_grey"></i>
                          </div>
                        </Link>
                      </div>

                      <div className="user_account_card">
                        <Link to="support.php" className="d-flex justify-content-between align-items-center">
                          <div>
                            <h3 className="f20 f600 clr_black mb-2">Support</h3>
                            <p className="f14 f400 clr_grey">How It Works, Help Center, Terms of Service</p>
                          </div>
                          <div>
                            <i className="fa fa-chevron-right clr_grey"></i>
                          </div>
                        </Link>
                      </div>

                    </div>

                    <div className="col-12 col-lg-6">

                      <div className="user_apply_card text-center">
                        <h2 className="f32 f600 clr_white mb-3">
                          Get Paid For Your
                          Professional Advice
                        </h2>
                        <p className="f16 f400 clr_white mb-3">
                          There's A World Full Of Business Owners And
                          Entrepreneurs Out There Who Are Seeking Your
                          Valued Advice And Feedback.
                        </p>
                        <Link to="become_expert_step_1.php" className="theme_dark_btn cmn_btn mx-auto">Apply To Be An Expert <i className="fa fa-chevron-right ms-2"></i></Link>
                      </div>

                      <div className="user_account_card">
                        <Link to="deactivate_account_1.php" className="d-flex justify-content-between align-items-center">
                          <div>
                            <h3 className="f20 f600 clr_black mb-2">Deactivate Account</h3>
                            <p className="f14 f400 clr_grey">Basic Information, Topics, Photo, Become an expert.</p>
                          </div>
                          <div>
                            <i className="fa fa-chevron-right clr_grey"></i>
                          </div>
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              </section>

        </React.Fragment>
      )
    }
  }



export default UserProfile;