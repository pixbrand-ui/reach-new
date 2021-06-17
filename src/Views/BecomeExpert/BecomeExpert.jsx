import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/ExpertHeader'
// import StarRatings from 'react-star-ratings';
// import Slider from "react-slick";
// import {CommonNotifyModal} from 'Modals';
import { Images } from 'Constants';

class BecomeExpert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      

    }
  }



  componentDidMount() {

  }

  componentWillUnmount() {
    
  };

  
  render() {

    return (
      <React.Fragment>

        <Header />
        <section id="become_expert_step_1" className="favourite_cmn_banner_sec become_expert_step_1"
            style={{backgroundImage: `url(${Images.cmn_banner.default})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="user_img_info become_expert_banner">
                            <Link to="" className="d-flex align-items-center">
                                <div className="user_img">
                                    <img src={Images.user_img.default} alt="" />
                                </div>
                                <div className="user_info ms-3">
                                    <h6 className="f28 f600 clr_black mb-2"><span className="f400">Welcome,</span> Alexjender</h6>
                                    <p className="f16 f400 clr_black">Please take a moment to setup your expert account.</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="expert_form_sec" className="expert_form_sec bg_grey">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-7">

                        <div className="cmn_white_part">
                            <div className="row mx-0">

                                <form action="javascript:void(0)" className="w-100">

                                    <div className="row mx-0">
                                        <div className="col-12 mb-2">
                                            <div>
                                                <label for="u_email" className="f16 f400 clr_black mb-2 cursor_pointer">Email</label>
                                                <input type="email" id="u_email" className="theme_input theme_input_2" />
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 mb-2">
                                            <div>
                                                <label for="u_name" className="f16 f400 clr_black mb-2 cursor_pointer">Username*</label>
                                                <input type="text" id="u_name" className="theme_input theme_input_2" />
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 mb-2">
                                            <label for="mob_number" className="mb-2 cursor_pointer">Mobile number</label>
                                            <div className="input-group custom_drop_input">
                                            <UncontrolledButtonDropdown className="">
                                              <DropdownToggle className="border_none">
                                                <button className="btn bg_green clr_white f15 f500">
                                                  +91<i className="fa fa-caret-down f12 ms-1"></i>
                                                </button>
                                              </DropdownToggle>
                                              <DropdownMenu className=''>

                                                <ul>
                                                  <li><Link className="dropdown-item">+71</Link></li>
                                                  <li><Link className="dropdown-item">98</Link></li>
                                                  <li><Link className="dropdown-item">00</Link></li>
                                                </ul>

                                              </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                                <input type="text" id="mob_number" className="theme_input theme_input_2 form-control"
                                                    aria-label="Text input with dropdown button" />
                                            </div>
                                        </div>

                                        <div className="col-12 mb-3">
                                            <div className="custom_select_icon">
                                                <label for="city_4" className="f16 f400 clr_black mb-2 cursor_pointer">Your Timezone*</label>
                                                <select name="" id="city_4" className="theme_input theme_grey_outline_input cursor_pointer">
                                                    <option value="0">(GMT-08:00) Pacific Time (US & Canada)</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                </form>


                            </div>
                        </div>
                            <div className="d-flex justify-content-end mt-2">
                              <Link to="/personalise-profile" className="theme_dark_btn f18 f600">Continue</Link>
                            </div>


                    </div>
                </div>
            </div>
        </section>


      </React.Fragment>
    )
  }
}



export default BecomeExpert;