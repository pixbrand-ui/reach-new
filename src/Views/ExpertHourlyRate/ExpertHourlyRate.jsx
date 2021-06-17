import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
// import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
// import StarRatings from 'react-star-ratings';
// import Slider from "react-slick";
// import {CommonNotifyModal} from 'Modals';
// import TagsInput from 'react-tagsinput'
import "react-tagsinput/react-tagsinput.css";
import { Images } from 'Constants';

class ExpertHourlyRate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      

    }
  }

  goBack = () =>{
    window.history.back();
  }


  componentDidMount() {

  }

  componentWillUnmount() {
    
  };

  
  render() {

    return (
      <React.Fragment>

        <Header />

        <section id="payment_method_sec" className="social_media_verification payment_method_sec">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <button className="f16 f400 clr_black mb-4" onClick={()=> this.goBack()}>
                            <i className="fa fa-chevron-left me-2"></i>Go back
                        </button>
                        <h2 className="f32 f600 clr_black mb-4">
                            Your Hourly Rate
                        </h2>
                    </div>

                    <div className="col-12 col-lg-7">

                        <div className="cmn_white_sec expertise_edit_sec">

                            <form action="" className="w-100">
                                
                                <div className="row">
                                    <div className="col-12 mb-4">
                                        <div className="custom_select_icon">
                                            <label for="city_4" className="f16 f400 clr_black mb-2 cursor_pointer">Hourly Rates*</label>
                                            <select name="" id="city_4" className="theme_input theme_grey_outline_input cursor_pointer">
                                                <option value="0">$20</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>
                                        <p className="f14 f400 clr_grey mt-2">Your hourly income after fees (15%): $85.00</p>
                                    </div>
                                    
                                    <div className="col-12">
                                        <div className="d-flex justify-content-end">
                                            <Link to="" className="theme_dark_btn coupon_apply_btn cmn_btn">Save</Link>
                                        </div>
                                    </div>
                                </div>

                            </form>

                        </div>
                        
                    </div>

                    <div className="col-12 col-lg-5">
                        
                        <img src={Images.billing_address.default} className="cmn_right_sec_img" />

                    </div>
                </div>
            </div>
        </section>
        

      </React.Fragment>
    )
  }
}



export default ExpertHourlyRate;