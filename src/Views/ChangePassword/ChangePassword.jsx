import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
// import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
// import Slider from "react-slick";
import {CommonNotifyModal, LoginModal} from 'Modals';
import { Images } from 'Constants';

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  goBack = () =>{
    window.history.back();
  }

  openDropdown = (dropName) => {
    this.setState({[dropName]: !this.state[dropName]})
  }

  componentDidMount() {

  }

  componentWillUnmount = () => {

  };


  render() {

    return (
      <React.Fragment>

        <Header />

        <section id="edit_profile_sec" class="social_media_verification edit_profile_sec">
          <div class="container">
            <div class="row">

              <div class="col-12">
                <button className="f16 f400 clr_black mb-4" onClick={()=> this.goBack()}>
                  <i className="fa fa-chevron-left me-2"></i>Go back
                </button>
                <h2 class="f32 f600 clr_black mb-4">
                  Notifications
                </h2>
              </div>

              <div class="col-12 col-lg-7">

                <div class="cmn_white_sec">
                  <form action="" class='w-100'>

                      <div class=" mb-3">
                          <label for="c_pwd" class="mb-2 f16 f400 clr_black cursor_pointer">Current Password</label>
                          <div class="input_wrapper">
                            <input 
                            type={this.state.showPassword1 ? 'text' : 'password'}
                            placeholder="Enter your current password" 
                            name="c_pwd" 
                            id="c_pwd" 
                            class="theme_input theme_grey_outline_input"
                            ref={(ip) => this.myInp1 = ip} />

                            <span class="cursor_pointer toggle_password" onClick={()=> { this.openDropdown("showPassword1") ; this.myInp1.focus()}}>
                              {
                                this.state.showPassword1 ? 
                                  <img src={Images.lock_show_icon.default} alt="" class="w_15 lock_show_icon" />
                                :
                                  <img src={Images.lock_icon.default} alt="" class="w_15 lock_icon" />
                              }
                            </span>
                        </div>
                      </div>

                      <div class=" mb-3">
                          <label for="n_pwd" class="mb-2 f16 f400 clr_black cursor_pointer">New Password</label>
                          <div class="input_wrapper">
                            <input 
                            type={this.state.showPassword2 ? 'text' : 'password'}
                            placeholder="Enter new password" 
                            name="n_pwd" 
                            id="n_pwd" 
                            class="theme_input theme_grey_outline_input"
                            ref={(ip) => this.myInp2 = ip} />

                            <span class="cursor_pointer toggle_password" onClick={()=> { this.openDropdown("showPassword2") ; this.myInp2.focus()}}>
                              {
                                this.state.showPassword2 ? 
                                  <img src={Images.lock_show_icon.default} alt="" class="w_15 lock_show_icon" />
                                :
                                  <img src={Images.lock_icon.default} alt="" class="w_15 lock_icon" />
                              }
                            </span>
                        </div>
                      </div>

                      <div class=" mb-3">
                          <label for="c_n_pwd" class="mb-2 f16 f400 clr_black cursor_pointer">Confirm New Password</label>
                          <div class="input_wrapper">
                            <input 
                            type={this.state.showPassword3 ? 'text' : 'password'}
                            placeholder="Confirm new password" 
                            name="c_n_pwd" 
                            id="c_n_pwd" 
                            class="theme_input theme_grey_outline_input"
                            ref={(ip) => this.myInp3 = ip} />

                            <span class="cursor_pointer toggle_password" onClick={()=> { this.openDropdown("showPassword3") ; this.myInp3.focus()}}>
                              {
                                this.state.showPassword3 ? 
                                  <img src={Images.lock_show_icon.default} alt="" class="w_15 lock_show_icon" />
                                :
                                  <img src={Images.lock_icon.default} alt="" class="w_15 lock_icon" />
                              }
                            </span>
                          </div>
                      </div>

                      <div class="d-flex justify-content-end">
                          <a href="" class='theme_dark_btn coupon_apply_btn cmn_btn'>Change Password</a>
                      </div>
                  </form>
                </div>
              </div>

              <div class="col-12 col-lg-5">
                
                <img src={Images.change_password.default} class="w-100 cmn_sec_right_img" />

              </div>
            </div>
          </div>
        </section>


        </React.Fragment>
      )
    }
  }



export default ChangePassword;