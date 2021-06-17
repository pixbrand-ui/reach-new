import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
// import Slider from "react-slick";
// import {CommonNotifyModal} from 'Modals';
import { Images } from 'Constants';

class PaymentMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditTab: 'cred_deb_card',
      connectBtn:false,

    }
  }


  goBack = () => {
    window.history.back();
  }

  componentDidMount() {

  }

  componentWillUnmount = () => {

  };


  render() {

    return (
      <React.Fragment>

        <Header></Header>

        <section id="payment_method_sec" className="social_media_verification payment_method_sec">
          <div className="container">
            <div className="row">

              <div className="col-12">
                <button className="f16 f400 clr_black mb-4" onClick={() => this.goBack()}>
                  <i className="fa fa-chevron-left me-2"></i>Go back
                </button>
                <h2 className="f32 f600 clr_black mb-4">
                  Payment Methods
                </h2>
              </div>

              <div className="col-12 col-lg-7">

                <div className="credit_debit_card pb-2">
                <div className={`cmn_card  cmn_tab_btn ${this.state.creditTab == 'cred_deb_card' ? 'active' : ''}`} onClick={() => this.setState({creditTab:'cred_deb_card'})}>
                  <img src={Images.card_check_square.default} alt="" className="check" />
                    <div>
                      <img src={Images.credit_debit_card.default} alt="" className="card_img m_b_15" />
                      <h4 className="f20 f500 clr_black m_b_15">Credit/Debit Card</h4>
                      <p className="f14 f400 clr_grey">
                        Visa, mastercard, american
                        experess
                      </p>
                    </div>
                </div>

                <div className={`cmn_card  cmn_tab_btn ${this.state.creditTab == 'stripe_card' ? 'active' : ''}`} onClick={() => this.setState({creditTab:'stripe_card'})}>
                  <img src={Images.card_check_square.default} alt="" className="check" />
                    <div>
                      <img src={Images.stripe.default} alt="" className="large_img m_b_15" />
                      <p className="f14 f400 clr_grey">
                        Connect stripe
                      </p>
                    </div>
                </div>

              </div>

                <div className={`cmn_tabs credit_card_tabs ${this.state.creditTab == 'cred_deb_card' ? 'show' : ''}`}>

                  <div className="cmn_white_sec payment_tab_sec mb-3">
                    <div className="mb-3">
                      <h4 className="f20 f600 clr_black mb-3">Payment Details</h4>
                      <p className="f14 f400 clr_grey">To update, please supply a new card below.</p>
                    </div>

                    <div className="d-flex align-items-center justify-content-end mb-4">
                      <img src={Images.visa_card.default} alt="" className="me-2 mb-2" />
                      <img src={Images.mastercard.default} alt="" className="me-2 mb-2" />
                      <img src={Images.american_card.default} alt="" className=" mb-2" />
                    </div>

                    <form action="" className="w-100">
                      <div className="row">
                        <div className="col-12 col-md-6 mb-3">
                          <div className="">
                            <label for="card_num" className="f16 f400 clr_black mb-2 cursor_pointer">Card number*</label>
                            <div className="input_wrapper">
                              <input type="text" placeholder="1234 5678 9012 3456" name="card_num" id="card_num" className="theme_input theme_grey_outline_input" />
                              <span className="top_10"><img src="./assets/img/credit-debit-card-green.png" alt="" className="w_18" /></span>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-6 mb-3">
                          <div className="">
                            <label for="cvv" className="f16 f400 clr_black mb-2 cursor_pointer">CVV*</label>
                            <div className="input_wrapper">
                              <input type="number" placeholder="123" name="cvv" id="cvv" className="theme_input theme_grey_outline_input" />
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-6 mb-3">
                          <div className="custom_select_icon">
                            <label for="month" className="f16 f400 clr_black mb-2 cursor_pointer">Month*</label>
                            <select name="" id="month" className="theme_input theme_grey_outline_input cursor_pointer">
                              <option value="0">MM</option>
                              <option value="1">MM</option>
                              <option value="2">MM</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-12 col-md-6 mb-3">
                          <div className="custom_select_icon">
                            <label for="year" className="f16 f400 clr_black mb-2 cursor_pointer">Year*</label>
                            <select name="" id="year" className="theme_input theme_grey_outline_input cursor_pointer ">
                              <option value="0">YYYY</option>
                              <option value="1">YYYY</option>
                              <option value="2">YYYY</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="f14 f400 clr_grey">* Your information is kept 100% private!</p>
                            <Link to="/" className="theme_dark_btn coupon_apply_btn cmn_btn">Save</Link>
                          </div>
                        </div>


                      </div>
                    </form>

                  </div>

                  <div className="cmn_white_sec billing_part">
                    <div className="mb-3">
                      <h4 className="f20 f600 clr_black mb-3">Billing Address</h4>
                    </div>

                    <form action="" className="w-100">
                      <div className="row">
                        <div className="col-12 mb-3">
                          <div className="">
                            <label for="address_1" className="f16 f400 clr_black mb-2 cursor_pointer">Address Line 1*</label>
                            <input type="text" placeholder="Enter Address Line 1" name="address_1" id="address_1" className="theme_input theme_grey_outline_input" />
                          </div>
                        </div>

                        <div className="col-12 mb-3">
                          <div className="">
                            <label for="address_2" className="f16 f400 clr_black mb-2 cursor_pointer">Address Line 2*</label>
                            <input type="text" placeholder="Enter Address Line 2" name="address_2" id="address_2" className="theme_input theme_grey_outline_input" />
                          </div>
                        </div>

                        <div className="col-12 col-md-6 mb-3">
                          <div className="custom_select_icon">
                            <label for="city_2" className="f16 f400 clr_black mb-2 cursor_pointer">City*</label>
                            <select name="" id="city_2" className="theme_input theme_grey_outline_input cursor_pointer">
                              <option value="0">--Select City--</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-12 col-md-6 mb-3">
                          <div className="custom_select_icon">
                            <label for="State_2" className="f16 f400 clr_black mb-2 cursor_pointer">State/Province*</label>
                            <select name="" id="State_2" className="theme_input theme_grey_outline_input cursor_pointer">
                              <option value="0">--Select State--</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-12 col-md-6 mb-3">
                          <div className="">
                            <label for="zipcode_2" className="f16 f400 clr_black mb-2 cursor_pointer">Zip code*</label>
                            <input type="text" placeholder="Enter Address Line 2" name="zipcode_2" id="zipcode_2" className="theme_input theme_grey_outline_input" />
                          </div>
                        </div>

                        <div className="col-12 col-md-6 mb-3">
                          <div className="custom_select_icon">
                            <label for="Country_2" className="f16 f400 clr_black mb-2 cursor_pointer">Country*</label>
                            <select name="" id="Country_2" className="theme_input theme_grey_outline_input cursor_pointer">
                              <option value="0">--Select Country--</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="d-flex justify-content-end">
                            <Link to="/" className="theme_dark_btn coupon_apply_btn cmn_btn">Save</Link>
                          </div>
                        </div>


                      </div>
                    </form>

                  </div>

                </div>

                <div className={`cmn_tabs credit_card_tabs ${this.state.creditTab == 'stripe_card' ? 'show' : ''}`}>

                      <div className="cmn_white_sec payment_tab_sec mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <div className="stripe_img mb-3">
                              <img src={Images.stripe.default} alt="" />
                            </div>
                              <p className="f14 f400 clra-grey">Connect your stripe for future payment</p>
                            </div>
                            <div>
                              <button 
                                className={`theme_outline_btn cmn_btn toggle_connect_btn ${this.state.connectBtn ? 'disconnect_btn cmn_outline_grey_btn clr_grey' : 'connect_btn'}`}
                                onClick={()=> this.setState({connectBtn: !this.state.connectBtn})}
                                >
                                {this.state.connectBtn ? 'Disconnect' : 'Connect'}
                              </button>
                            </div>

                          </div>
                        </div>

                        <div className="cmn_white_sec billing_part">
                          <div className="mb-3">
                            <h4 className="f20 f600 clr_black mb-3">Billing Address</h4>
                        </div>

                        <form action="" className="w-100">
                          <div className="row">
                            <div className="col-12 mb-3">
                              <div className="">
                                <label for="address_3" className="f16 f400 clr_black mb-2 cursor_pointer">Address Line 1*</label>
                                <input type="text" placeholder="Enter Address Line 1" name="address_3" id="address_3" className="theme_input theme_grey_outline_input" />
                              </div>
                              </div>

                              <div className="col-12 mb-3">
                                <div className="">
                                  <label for="address_4" className="f16 f400 clr_black mb-2 cursor_pointer">Address Line 2*</label>
                                  <input type="text" placeholder="Enter Address Line 2" name="address_4" id="address_4" className="theme_input theme_grey_outline_input" />
                                </div>
                                </div>

                                <div className="col-12 col-md-6 mb-3">
                                  <div className="custom_select_icon">
                                    <label for="city_3" className="f16 f400 clr_black mb-2 cursor_pointer">City*</label>
                                    <select name="" id="city_3" className="theme_input theme_grey_outline_input cursor_pointer">
                                      <option value="0">--Select City--</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="col-12 col-md-6 mb-3">
                                  <div className="custom_select_icon">
                                    <label for="State_3" className="f16 f400 clr_black mb-2 cursor_pointer">State/Province*</label>
                                    <select name="" id="State_3" className="theme_input theme_grey_outline_input cursor_pointer">
                                      <option value="0">--Select State--</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="col-12 col-md-6 mb-3">
                                  <div className="">
                                    <label for="zipcode_3" className="f16 f400 clr_black mb-2 cursor_pointer">Zip code*</label>
                                    <input type="text" placeholder="Enter Address Line 2" name="zipcode_3" id="zipcode_3" className="theme_input theme_grey_outline_input" />
                                  </div>
                                  </div>

                                  <div className="col-12 col-md-6 mb-3">
                                    <div className="custom_select_icon">
                                      <label for="Country_3" className="f16 f400 clr_black mb-2 cursor_pointer">Country*</label>
                                      <select name="" id="Country_3" className="theme_input theme_grey_outline_input cursor_pointer">
                                        <option value="0">--Select Country--</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div className="col-12">
                                    <div className="d-flex justify-content-end">
                                      <Link to="/" className="theme_dark_btn coupon_apply_btn cmn_btn">Save</Link>
                                    </div>
                                  </div>


                                </div>
                                </form>

                            </div>

                          </div>
              
              </div>

              <div className="col-12 col-lg-5">

                <img src={Images.payment_method.default} className="cmn_right_sec_img" />

              </div>
          </div>
        </div>
      </section>

        </React.Fragment>
      )
    }
  }



export default PaymentMethod;