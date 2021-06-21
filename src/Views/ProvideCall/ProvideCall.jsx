import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
// import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
// import Slider from "react-slick";
import {CommonNotifyModal, LoginModal} from 'Modals';
import { Images } from 'Constants';

class PromotionalOffers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  goBack = () =>{
    window.history.back();
  }

  openModal = (modalName) =>{
    this.setState({[modalName] : true })
  }
  
  closeModal = (modalName) =>{
    this.setState({[modalName] : false })
  }

  openCloseModal = (closeModal , openModal) =>{
    this.setState({[closeModal]: false})
    this.setState({[openModal]: true})
  }

  componentDidMount() {

  }

  componentWillUnmount = () => {

  };


  render() {

    return (
      <React.Fragment>

        <Header />

        <section id="booking_call_info_sec" className="single_listing_sec booking_call_info_sec bg_grey">
            <div className="container">
                <div className="row">

                    <div className="col-12 mb-4">
                      <button className="f16 f400 clr_black mb-4" onClick={() => this.goBack()}>
                        <i className="fa fa-chevron-left me-2"></i>Go back
                      </button>
                        <h2 className="f32 f600 clr_black ">Provide Call Information</h2>
                    </div>

                    <div className="col-12 col-md-6 col-lg-7">

                        <div className="cmn_white_sec billing_address_sec mb-3">
                            <h2 className="f20 f600 clr_black mb-4">1. Message & Call Duration</h2>

                            <form action="javascript:void(0)" className="w-100">
                                <div className="row">
                                    <div className="col-12 mb-3">
                                        <div className="">
                                            <label htmlFor="message_" className="f16 f400 clr_black mb-1 cursor_pointer">Message to
                                                Kate Kendall *</label>
                                            <textarea name="" id="message_" cols="" rows="3"
                                                className="theme_input theme_input_2 w-100"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-12 mb-3">
                                        <div className="custom_select_icon">
                                            <label htmlFor="estimate_length" className="f16 f400 clr_black mb-1 cursor_pointer">Set
                                                Estimated Length *</label>
                                            <select name="" id="estimate_length"
                                                className="theme_input theme_input_2 theme_grey_outline_input cursor_pointer">
                                                <option value="0">15 minutes ($37.50)</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>
                                    </div>

                                    <p className="f14 f400 clr_grey">
                                        You will be charged $37.50 for the current scheduled call length.
                                        If the call goes over the scheduled time, you will be charged the
                                        balance at a rate of $2.50/min. If the call goes less than the scheduled
                                        time, you will be refunded the balance.
                                    </p>

                                </div>
                            </form>

                        </div>

                        <div className="cmn_white_sec billing_address_sec mb-3">
                            <h2 className="f20 f600 clr_black mb-4">2. Suggest Times When You're Free To Talk</h2>

                            <form action="javascript:void(0)" className="w-100">
                                <div className="row">

                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="custom_select_icon">
                                            <select name="" id=""
                                                className="theme_input theme_input_2 theme_grey_outline_input cursor_pointer">
                                                <option value="0">Thu, Mar 11 2021</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="custom_select_icon">
                                            <select name="" id=""
                                                className="theme_input theme_input_2 theme_grey_outline_input cursor_pointer">
                                                <option value="0">7:00 PM</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="custom_select_icon">
                                            <select name="" id=""
                                                className="theme_input theme_input_2 theme_grey_outline_input cursor_pointer">
                                                <option value="0">Thu, Mar 11 2021</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="custom_select_icon">
                                            <select name="" id=""
                                                className="theme_input theme_input_2 theme_grey_outline_input cursor_pointer">
                                                <option value="0">7:00 PM</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="custom_select_icon">
                                            <select name="" id=""
                                                className="theme_input theme_input_2 theme_grey_outline_input cursor_pointer">
                                                <option value="0">Thu, Mar 11 2021</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="custom_select_icon">
                                            <select name="" id=""
                                                className="theme_input theme_input_2 theme_grey_outline_input cursor_pointer">
                                                <option value="0">7:00 PM</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>
                                    </div>

                                    <p className="f14 f400 clr_grey mb-3">
                                        Change my Timezone <Link to="" className="clr_blue f500">Change</Link>
                                    </p>

                                    <div className="col-12">
                                        <div className="custom_select_icon">
                                            <label htmlFor="y_timezone" className='f16 f400 clr_black mb-1 cursor_pointer'>Your Timezone</label>
                                            <select name="" id="y_timezone"
                                                className="theme_input theme_input_2 theme_grey_outline_input cursor_pointer">
                                                <option value="0">(GMT-08:00) Pacific Time (US & Canada)</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                            </form>

                        </div>

                        <div className="cmn_white_sec billing_address_sec mb-3">
                            <div className="mb-4">
                                <h4 className="f20 f600 clr_black">3. Payment Details</h4>
                            </div>

                            <div className="d-flex align-items-center justify-content-end mb-4">
                                <img src={Images.visa_card.default} alt="" className="me-2" />
                                <img src={Images.mastercard.default} alt="" className="me-2" />
                                <img src={Images.american_card.default} alt="" className="" />
                            </div>

                            <form action="javascript:void(0)" className="w-100">
                                <div className="row">
                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="">
                                            <label htmlFor="card_num" className="f16 f400 clr_black mb-2 cursor_pointer">Card
                                                number*</label>
                                            <div className="input_wrapper">
                                                <input type="text" placeholder="1234 5678 9012 3456" name="card_num"
                                                    id="card_num"
                                                    className="theme_input theme_input_2 theme_grey_outline_input" />
                                                <span className="top_10">
                                                  <img src="./assets/img/credit-debit-card-green.png"alt="" className="w_18" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="">
                                            <label htmlFor="cvv" className="f16 f400 clr_black mb-2 cursor_pointer">CVV*</label>
                                            <div className="input_wrapper">
                                                <input type="number" placeholder="123" name="cvv" id="cvv"
                                                    className="theme_input theme_input_2 theme_grey_outline_input" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="custom_select_icon">
                                            <label htmlFor="month" className="f16 f400 clr_black mb-2 cursor_pointer">Month*</label>
                                            <select name="" id="month"
                                                className="theme_input theme_input_2 theme_grey_outline_input cursor_pointer">
                                                <option value="0">MM</option>
                                                <option value="1">MM</option>
                                                <option value="2">MM</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="custom_select_icon">
                                            <label htmlFor="year" className="f16 f400 clr_black mb-2 cursor_pointer">Year*</label>
                                            <select name="" id="year"
                                                className="theme_input theme_input_2 theme_grey_outline_input cursor_pointer ">
                                                <option value="0">YYYY</option>
                                                <option value="1">YYYY</option>
                                                <option value="2">YYYY</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="">
                                            <p className="f14 f400 clr_grey">* Your information is kept 100% private!</p>
                                        </div>
                                    </div>


                                </div>
                            </form>

                        </div>

                        <div className="cmn_white_sec billing_address_sec mb-3">
                            <h4 className="f20 f600 clr_black mb-4">4. Billing Address</h4>
                            <form action="javascript:void(0)" className="w-100">
                                <div className="row">
                                    <div className="col-12 mb-3">
                                        <div className="">
                                            <label htmlFor="address_5" className="f16 f400 clr_black mb-2 cursor_pointer">Address
                                                Line 1*</label>
                                            <input type="text" placeholder="Enter Address Line 1" name="address_5"
                                                id="address_5" className="theme_input theme_input_2 theme_grey_outline_input" />
                                        </div>
                                    </div>

                                    <div className="col-12 mb-3">
                                        <div className="">
                                            <label htmlFor="address_6" className="f16 f400 clr_black mb-2 cursor_pointer">Address
                                                Line 2*</label>
                                            <input type="text" placeholder="Enter Address Line 2" name="address_6"
                                                id="address_6" className="theme_input theme_input_2 theme_grey_outline_input" />
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="custom_select_icon">
                                            <label htmlFor="city_4" className="f16 f400 clr_black mb-2 cursor_pointer">City*</label>
                                            <select name="" id="city_4"
                                                className="theme_input theme_input_2 theme_grey_outline_input cursor_pointer">
                                                <option value="0">--Select City--</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="custom_select_icon">
                                            <label htmlFor="State_4"
                                                className="f16 f400 clr_black mb-2 cursor_pointer">State/Province*</label>
                                            <select name="" id="State_4"
                                                className="theme_input theme_input_2 theme_grey_outline_input cursor_pointer">
                                                <option value="0">--Select State--</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="">
                                            <label htmlFor="zipcode_4" className="f16 f400 clr_black mb-2 cursor_pointer">Zip
                                                code*</label>
                                            <input type="text" placeholder="Enter Address Line 2" name="zipcode_4"
                                                id="zipcode_4" className="theme_input theme_input_2 theme_grey_outline_input" />
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="custom_select_icon">
                                            <label htmlFor="Country_4"
                                                className="f16 f400 clr_black mb-2 cursor_pointer">Country*</label>
                                            <select name="" id="Country_4"
                                                className="theme_input theme_input_2 theme_grey_outline_input cursor_pointer">
                                                <option value="0">--Select Country--</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>
                                    </div>


                                </div>
                            </form>

                        </div>

                        <p className="f14 f400 clr_grey mb-3">
                            Notifications will be sent to +1 9123 456 789 
                            and Kate_Kendall@Gmail.Com <Link to="javascript:void(0)" className="f500 clr_blue">Edit</Link>
                        </p>

                        <div className="cmn_white_sec billing_address_sec mb-3">

                            <form action="" className="w-100">
                                <div className="row">

                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="">
                                            <label htmlFor="email_add" className="f16 f400 clr_black mb-2 cursor_pointer">Email Address*</label>
                                            <div className="input_wrapper">
                                                <input type="number" placeholder="123" name="email_add" id="email_add"
                                                    className="theme_input theme_input_2 theme_grey_outline_input" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="">
                                            <label htmlFor="cell_phone" className="f16 f400 clr_black mb-2 cursor_pointer">Cell Phone*</label>
                                            <div className="input_wrapper">
                                                <input type="number" placeholder="123" name="cell_phone" id="cell_phone"
                                                    className="theme_input theme_input_2 theme_grey_outline_input" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12">
                                        <div className="">
                                            <p className="f14 f400 clr_grey">Cell phone is only used for notifications</p>
                                        </div>
                                    </div>


                                </div>
                            </form>

                        </div>

                        <div className="col-12 mb-5">
                            <div className="d-flex justify-content-between align-items-center f_wrap">
                                <p className="f14 f400 clr_grey">By scheduling a call you agree with our <Link to="javascript:void(0)" className="clr_blue text_underline">Terms of Service.</Link></p>
                                <button className="theme_dark_btn coupon_apply_btn cmn_btn" onClick={()=> this.openModal('booking_done')}>Book now</button>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-1 d-lg-block d-none"></div>

                    <div className="col-12 col-md-6 col-lg-4">

                        <div className="wrapper_for_pos_sicky">
                            <div className="single_expert_sec mb-4 bg_white">
                                <div className="single_expert_bg" style={{backgroundImage: `url(${Images.cmn_banner.default})`}}></div>

                                <div className="sinle_expert_profile text-center">
                                    <div className="profile_img">
                                        <Link to="javascript:void(0)" className="d-block">
                                          <img src={Images.fav_expert_1.default} alt="" className="w-100" />
                                        </Link>
                                    </div>
                                    <h2 className="f24 f600  mb-3"><Link to="javascript:void(0)" className="clr_black">Kate Kendall</Link></h2>
                                    <p className="clr_grey f15 f400 mb-3">
                                        <img src={Images.location.default} alt="" className="mb-1" /> San Francisco, CA
                                    </p>
                                    <p className="f16 f400 clr_black">$2.50/min</p>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </section>

        <CommonNotifyModal open={(this.state.booking_done) ? true : false} toggle={()=> this.closeModal('booking_done')} className={'booking_done'}>
          {/* <span className="modal_closer" onClick={()=> this.closeModal('promotionalModal')}><img src={Images.cross.default} alt="" /></span> */}
            <div className="acc_deactive_modal_body text-center">
                <img src={Images.check_fill.default} alt="" className="modal_top_img mb-4" />
                <h2 className="f28 f600 clr_black m_b_20">
                    Your Call Booking Is
                    Successfully Done
                </h2>
                <p className="f16 f400 clr_black m_b_20">
                    Hey Alexjender, your call booking is 
                    successfully done. waiting for expert accecptance.
                </p>
                <p className="f16 f400 clr_black m_b_20">
                    Your booking id is 987654321
                </p>
                <Link to='/' className="theme_dark_btn cmn_btn coupon_apply_btn" data-dismiss="modal">Ok, back to home</Link>
            </div>
        </CommonNotifyModal>


        </React.Fragment>
      )
    }
  }



export default PromotionalOffers;