import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
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

        <section id="edit_profile_sec" className="social_media_verification edit_profile_sec">
          <div className="container">
            <div className="row">

              <div className="col-12">
                <button className="f16 f400 clr_black mb-4" onClick={()=> this.goBack()}>
                  <i className="fa fa-chevron-left me-2"></i>Go back
                </button>
                <h2 className="f32 f600 clr_black mb-4">
                  Notifications
                </h2>
              </div>

              <div className="col-12 col-lg-7">

                <div className="cmn_white_sec">
                  <form action="" className='w-100'>

                      <div className=" mb-3">
                          <label for="c_pwd" className="mb-2 f16 f400 clr_black cursor_pointer">Current Password</label>
                          <div className="input_wrapper">
                            <input 
                            type={this.state.showPassword1 ? 'text' : 'password'}
                            placeholder="Enter your current password" 
                            name="c_pwd" 
                            id="c_pwd" 
                            className="theme_input theme_grey_outline_input"
                            ref={(ip) => this.myInp1 = ip} />

                            <span className="cursor_pointer toggle_password" onClick={()=> { this.openDropdown("showPassword1") ; this.myInp1.focus() }}>
                              {
                                this.state.showPassword1 ? 
                                  <img src={Images.lock_show_icon.default} alt="" className="w_15 lock_show_icon" />
                                :
                                  <img src={Images.lock_icon.default} alt="" className="w_15 lock_icon" />
                              }
                            </span>
                        </div>
                      </div>

                      <div className="mb-3">
                          <label for="n_pwd" className="mb-2 f16 f400 clr_black cursor_pointer">New Password</label>
                          <div className="input_wrapper">
                            <input 
                            type={this.state.showPassword2 ? 'text' : 'password'}
                            placeholder="Enter new password" 
                            name="n_pwd" 
                            id="n_pwd" 
                            className="theme_input theme_grey_outline_input"
                            ref={(ip) => this.myInp2 = ip} />

                            <span className="cursor_pointer toggle_password" onClick={()=> { this.openDropdown("showPassword2") ; this.myInp2.focus()}}>
                              {
                                this.state.showPassword2 ? 
                                  <img src={Images.lock_show_icon.default} alt="" className="w_15 lock_show_icon" />
                                :
                                  <img src={Images.lock_icon.default} alt="" className="w_15 lock_icon" />
                              }
                            </span>
                        </div>
                      </div>

                      <div className=" mb-3">
                          <label for="c_n_pwd" className="mb-2 f16 f400 clr_black cursor_pointer">Confirm New Password</label>
                          <div className="input_wrapper">
                            <input 
                            type={this.state.showPassword3 ? 'text' : 'password'}
                            placeholder="Confirm new password" 
                            name="c_n_pwd" 
                            id="c_n_pwd" 
                            className="theme_input theme_grey_outline_input"
                            ref={(ip) => this.myInp3 = ip} />

                            <span className="cursor_pointer toggle_password" onClick={()=> { this.openDropdown("showPassword3") ; this.myInp3.focus()}}>
                              {
                                this.state.showPassword3 ? 
                                  <img src={Images.lock_show_icon.default} alt="" className="w_15 lock_show_icon" />
                                :
                                  <img src={Images.lock_icon.default} alt="" className="w_15 lock_icon" />
                              }
                            </span>
                          </div>
                      </div>

                      <div className="d-flex justify-content-end">
                          <Link to="" className='theme_dark_btn coupon_apply_btn cmn_btn'>Change Password</Link>
                      </div>
                  </form>
                </div>
              </div>

              <div className="col-12 col-lg-5">
                
                <img src={Images.change_password.default} className="w-100 cmn_sec_right_img" />

              </div>
            </div>
          </div>
        </section>


        </React.Fragment>
      )
    }
  }



export default ChangePassword;