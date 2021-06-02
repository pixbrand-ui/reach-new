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

        <section id="payment_method_sec" class="social_media_verification payment_method_sec">
          <div class="container">
            <div class="row">

              <div class="col-12">
                <button className="f16 f400 clr_black mb-4" onClick={() => this.goBack()}>
                  <i className="fa fa-chevron-left me-2"></i>Go back
                </button>
                <h2 class="f32 f600 clr_black mb-4">
                  Payment Methods
                </h2>
              </div>

              <div class="col-12 col-lg-7">

                <div class="credit_debit_card pb-2">
                <div class={`cmn_card  cmn_tab_btn ${this.state.creditTab == 'cred_deb_card' ? 'active' : ''}`} onClick={() => this.setState({creditTab:'cred_deb_card'})}>
                  <img src={Images.card_check_square.default} alt="" class="check" />
                    <div>
                      <img src={Images.credit_debit_card.default} alt="" class="card_img m_b_15" />
                      <h4 class="f20 f500 clr_black m_b_15">Credit/Debit Card</h4>
                      <p class="f14 f400 clr_grey">
                        Visa, mastercard, american
                        experess
                      </p>
                    </div>
                </div>

                <div class={`cmn_card  cmn_tab_btn ${this.state.creditTab == 'stripe_card' ? 'active' : ''}`} onClick={() => this.setState({creditTab:'stripe_card'})}>
                  <img src={Images.card_check_square.default} alt="" class="check" />
                    <div>
                      <img src={Images.stripe.default} alt="" class="large_img m_b_15" />
                      <p class="f14 f400 clr_grey">
                        Connect stripe
                      </p>
                    </div>
                </div>

              </div>

                <div class={`cmn_tabs credit_card_tabs ${this.state.creditTab == 'cred_deb_card' ? 'show' : ''}`}>

                  <div class="cmn_white_sec payment_tab_sec mb-3">
                    <div class="mb-3">
                      <h4 class="f20 f600 clr_black mb-3">Payment Details</h4>
                      <p class="f14 f400 clr_grey">To update, please supply a new card below.</p>
                    </div>

                    <div class="d-flex align-items-center justify-content-end mb-4">
                      <img src={Images.visa_card.default} alt="" class="me-2" />
                      <img src={Images.mastercard.default} alt="" class="me-2" />
                      <img src={Images.american_card.default} alt="" class="" />
                    </div>

                    <form action="" class="w-100">
                      <div class="row">
                        <div class="col-12 col-md-6 mb-3">
                          <div class="">
                            <label for="card_num" class="f16 f400 clr_black mb-2 cursor_pointer">Card number*</label>
                            <div class="input_wrapper">
                              <input type="text" placeholder="1234 5678 9012 3456" name="card_num" id="card_num" class="theme_input theme_grey_outline_input" />
                              <span class="top_10"><img src="./assets/img/credit-debit-card-green.png" alt="" class="w_18" /></span>
                            </div>
                          </div>
                        </div>

                        <div class="col-12 col-md-6 mb-3">
                          <div class="">
                            <label for="cvv" class="f16 f400 clr_black mb-2 cursor_pointer">CVV*</label>
                            <div class="input_wrapper">
                              <input type="number" placeholder="123" name="cvv" id="cvv" class="theme_input theme_grey_outline_input" />
                            </div>
                          </div>
                        </div>

                        <div class="col-12 col-md-6 mb-3">
                          <div class="custom_select_icon">
                            <label for="month" class="f16 f400 clr_black mb-2 cursor_pointer">Month*</label>
                            <select name="" id="month" class="theme_input theme_grey_outline_input cursor_pointer">
                              <option value="0">MM</option>
                              <option value="1">MM</option>
                              <option value="2">MM</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-12 col-md-6 mb-3">
                          <div class="custom_select_icon">
                            <label for="year" class="f16 f400 clr_black mb-2 cursor_pointer">Year*</label>
                            <select name="" id="year" class="theme_input theme_grey_outline_input cursor_pointer ">
                              <option value="0">YYYY</option>
                              <option value="1">YYYY</option>
                              <option value="2">YYYY</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-12">
                          <div class="d-flex justify-content-between align-items-center">
                            <p class="f14 f400 clr_grey">* Your information is kept 100% private!</p>
                            <Link to="/" class="theme_dark_btn coupon_apply_btn cmn_btn">Save</Link>
                          </div>
                        </div>


                      </div>
                    </form>

                  </div>

                  <div class="cmn_white_sec billing_part">
                    <div class="mb-3">
                      <h4 class="f20 f600 clr_black mb-3">Billing Address</h4>
                    </div>

                    <form action="" class="w-100">
                      <div class="row">
                        <div class="col-12 mb-3">
                          <div class="">
                            <label for="address_1" class="f16 f400 clr_black mb-2 cursor_pointer">Address Line 1*</label>
                            <input type="text" placeholder="Enter Address Line 1" name="address_1" id="address_1" class="theme_input theme_grey_outline_input" />
                          </div>
                        </div>

                        <div class="col-12 mb-3">
                          <div class="">
                            <label for="address_2" class="f16 f400 clr_black mb-2 cursor_pointer">Address Line 2*</label>
                            <input type="text" placeholder="Enter Address Line 2" name="address_2" id="address_2" class="theme_input theme_grey_outline_input" />
                          </div>
                        </div>

                        <div class="col-12 col-md-6 mb-3">
                          <div class="custom_select_icon">
                            <label for="city_2" class="f16 f400 clr_black mb-2 cursor_pointer">City*</label>
                            <select name="" id="city_2" class="theme_input theme_grey_outline_input cursor_pointer">
                              <option value="0">--Select City--</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-12 col-md-6 mb-3">
                          <div class="custom_select_icon">
                            <label for="State_2" class="f16 f400 clr_black mb-2 cursor_pointer">State/Province*</label>
                            <select name="" id="State_2" class="theme_input theme_grey_outline_input cursor_pointer">
                              <option value="0">--Select State--</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-12 col-md-6 mb-3">
                          <div class="">
                            <label for="zipcode_2" class="f16 f400 clr_black mb-2 cursor_pointer">Zip code*</label>
                            <input type="text" placeholder="Enter Address Line 2" name="zipcode_2" id="zipcode_2" class="theme_input theme_grey_outline_input" />
                          </div>
                        </div>

                        <div class="col-12 col-md-6 mb-3">
                          <div class="custom_select_icon">
                            <label for="Country_2" class="f16 f400 clr_black mb-2 cursor_pointer">Country*</label>
                            <select name="" id="Country_2" class="theme_input theme_grey_outline_input cursor_pointer">
                              <option value="0">--Select Country--</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-12">
                          <div class="d-flex justify-content-end">
                            <Link to="/" class="theme_dark_btn coupon_apply_btn cmn_btn">Save</Link>
                          </div>
                        </div>


                      </div>
                    </form>

                  </div>

                </div>

                <div class={`cmn_tabs credit_card_tabs ${this.state.creditTab == 'stripe_card' ? 'show' : ''}`}>

                      <div class="cmn_white_sec payment_tab_sec mb-3">
                        <div class="d-flex align-items-center justify-content-between">
                          <div>
                            <div class="stripe_img mb-3">
                              <img src={Images.stripe.default} alt="" />
                            </div>
                              <p class="f14 f400 clra-grey">Connect your stripe for future payment</p>
                            </div>
                            <div>
                              <button 
                                class={`theme_outline_btn cmn_btn toggle_connect_btn ${this.state.connectBtn ? 'connect_btn' : 'disconnect_btn cmn_outline_grey_btn clr_grey'}`}
                                onClick={()=> this.setState({connectBtn: !this.state.connectBtn})}
                                >
                                {this.state.connectBtn ? 'Connect' : 'Disconnect'}
                              </button>
                            </div>

                          </div>
                        </div>

                        <div class="cmn_white_sec billing_part">
                          <div class="mb-3">
                            <h4 class="f20 f600 clr_black mb-3">Billing Address</h4>
                        </div>

                        <form action="" class="w-100">
                          <div class="row">
                            <div class="col-12 mb-3">
                              <div class="">
                                <label for="address_3" class="f16 f400 clr_black mb-2 cursor_pointer">Address Line 1*</label>
                                <input type="text" placeholder="Enter Address Line 1" name="address_3" id="address_3" class="theme_input theme_grey_outline_input" />
                              </div>
                              </div>

                              <div class="col-12 mb-3">
                                <div class="">
                                  <label for="address_4" class="f16 f400 clr_black mb-2 cursor_pointer">Address Line 2*</label>
                                  <input type="text" placeholder="Enter Address Line 2" name="address_4" id="address_4" class="theme_input theme_grey_outline_input" />
                                </div>
                                </div>

                                <div class="col-12 col-md-6 mb-3">
                                  <div class="custom_select_icon">
                                    <label for="city_3" class="f16 f400 clr_black mb-2 cursor_pointer">City*</label>
                                    <select name="" id="city_3" class="theme_input theme_grey_outline_input cursor_pointer">
                                      <option value="0">--Select City--</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                    </select>
                                  </div>
                                </div>

                                <div class="col-12 col-md-6 mb-3">
                                  <div class="custom_select_icon">
                                    <label for="State_3" class="f16 f400 clr_black mb-2 cursor_pointer">State/Province*</label>
                                    <select name="" id="State_3" class="theme_input theme_grey_outline_input cursor_pointer">
                                      <option value="0">--Select State--</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                    </select>
                                  </div>
                                </div>

                                <div class="col-12 col-md-6 mb-3">
                                  <div class="">
                                    <label for="zipcode_3" class="f16 f400 clr_black mb-2 cursor_pointer">Zip code*</label>
                                    <input type="text" placeholder="Enter Address Line 2" name="zipcode_3" id="zipcode_3" class="theme_input theme_grey_outline_input" />
                                  </div>
                                  </div>

                                  <div class="col-12 col-md-6 mb-3">
                                    <div class="custom_select_icon">
                                      <label for="Country_3" class="f16 f400 clr_black mb-2 cursor_pointer">Country*</label>
                                      <select name="" id="Country_3" class="theme_input theme_grey_outline_input cursor_pointer">
                                        <option value="0">--Select Country--</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div class="col-12">
                                    <div class="d-flex justify-content-end">
                                      <Link to="/" class="theme_dark_btn coupon_apply_btn cmn_btn">Save</Link>
                                    </div>
                                  </div>


                                </div>
                                </form>

                            </div>

                          </div>
              
              </div>

              <div class="col-12 col-lg-5">

                <img src={Images.payment_method.default} class="cmn_right_sec_img" />

              </div>
          </div>
        </div>
      </section>

        </React.Fragment>
      )
    }
  }



export default PaymentMethod;