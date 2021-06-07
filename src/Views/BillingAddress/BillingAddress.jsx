import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
// import Slider from "react-slick";
// import {CommonNotifyModal} from 'Modals';
import { Images } from 'Constants';

class BillingAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

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
                    Billing Address
                  </h2>
                </div>

                <div class="col-12 col-lg-7">

                <div class="cmn_white_sec billing_address_sec">

                    <form action="" class="w-100">
                        <div class="row">
                            <div class="col-12 mb-3">
                                <div class="">
                                    <label for="address_5" class="f16 f400 clr_black mb-2 cursor_pointer">Address Line 1*</label>
                                    <input type="text" placeholder="Enter Address Line 1" name="address_5" id="address_5" class="theme_input theme_grey_outline_input" />
                                </div>
                            </div>

                            <div class="col-12 mb-3">
                                <div class="">
                                    <label for="address_6" class="f16 f400 clr_black mb-2 cursor_pointer">Address Line 2*</label>
                                    <input type="text" placeholder="Enter Address Line 2" name="address_6" id="address_6" class="theme_input theme_grey_outline_input" />
                                </div>
                            </div>

                            <div class="col-12 col-md-6 mb-3">
                                <div class="custom_select_icon">
                                    <label for="city_4" class="f16 f400 clr_black mb-2 cursor_pointer">City*</label>
                                    <select name="" id="city_4" class="theme_input theme_grey_outline_input cursor_pointer">
                                        <option value="0">--Select City--</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 mb-3">
                                <div class="custom_select_icon">
                                    <label for="State_4" class="f16 f400 clr_black mb-2 cursor_pointer">State/Province*</label>
                                    <select name="" id="State_4" class="theme_input theme_grey_outline_input cursor_pointer">
                                        <option value="0">--Select State--</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 mb-3">
                                <div class="">
                                    <label for="zipcode_4" class="f16 f400 clr_black mb-2 cursor_pointer">Zip code*</label>
                                    <input type="text" placeholder="Enter Address Line 2" name="zipcode_4" id="zipcode_4" class="theme_input theme_grey_outline_input" />
                                </div>
                            </div>

                            <div class="col-12 col-md-6 mb-3">
                                <div class="custom_select_icon">
                                    <label for="Country_4" class="f16 f400 clr_black mb-2 cursor_pointer">Country*</label>
                                    <select name="" id="Country_4" class="theme_input theme_grey_outline_input cursor_pointer">
                                        <option value="0">--Select Country--</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="col-12">
                              <div class="d-flex justify-content-end">
                                <a href="javascript:void(0)" class="theme_dark_btn coupon_apply_btn cmn_btn">Save</a>
                              </div>
                            </div>


                        </div>
                    </form>

                </div>

                </div>

                <div class="col-12 col-lg-5">
                  
                  <img src={Images.billing_address.default} class="cmn_right_sec_img cmn_sec_right_img" />

                </div>
              </div>
            </div>
          </section>

        </React.Fragment>
      )
    }
  }



export default BillingAddress;