import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
// import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/IndexHeader'
// import Slider from "react-slick";
// import {CommonNotifyModal} from 'Modals';
import { Images } from 'Constants';

class Notification extends React.Component {
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

  componentWillUnmount = () => {

  };


  render() {

    return (
      <React.Fragment>

        <Header />

        <section id="notification_sec" class="social_media_verification edit_profile_sec">
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
                    <p class="f20 f600 clr_black mb-3">Emails</p>
                    <form action="javascript:void(0)" method="post">
                      <div class="social_media_row notification_row">
                          <div class="social_labels d-flex align-items-center">
                              <span class="f16 f400 clr_black">Gmail</span>
                          </div>

                          <div class="d-flex align-items-center">
                              <div class="">
                                  <label class="switch custom_switch">
                                      <input type="checkbox" />
                                      <span class="slider"></span>
                                  </label>
                              </div>
                          </div>
                      </div>

                      <div class="social_media_row notification_row">
                          <div class="social_labels d-flex align-items-center">
                              <span class="f16 f400 clr_black">Recommendations</span>
                          </div>

                          <div class="d-flex align-items-center">
                              <div class="">
                                  <label class="switch custom_switch">
                                      <input type="checkbox" />
                                      <span class="slider"></span>
                                  </label>
                              </div>
                          </div>
                      </div>

                      <div class="social_media_row notification_row">
                          <div class="social_labels d-flex align-items-center">
                              <span class="f16 f400 clr_black">Charles Updates</span>
                          </div>

                          <div class="d-flex align-items-center">
                              <div class="">
                                  <label class="switch custom_switch">
                                      <input type="checkbox" />
                                      <span class="slider"></span>
                                  </label>
                              </div>
                          </div>
                      </div>

                      <p class="f20 f600 clr_black">SMS</p>
                      <div class="social_media_row notification_row">
                          <div class="social_labels d-flex align-items-center">
                              <span class="f16 f400 clr_black">Call Management</span>
                          </div>

                          <div class="d-flex align-items-center">
                              <div class="">
                                  <label class="switch custom_switch">
                                      <input type="checkbox" />
                                      <span class="slider"></span>
                                  </label>
                              </div>
                          </div>
                      </div>

                      <div class="social_media_row notification_row">
                          <div class="social_labels d-flex align-items-center">
                              <span class="f16 f400 clr_black">Call Reminders</span>
                          </div>

                          <div class="d-flex align-items-center">
                              <div class="">
                                  <label class="switch custom_switch">
                                      <input type="checkbox" />
                                      <span class="slider"></span>
                                  </label>
                              </div>
                          </div>
                      </div>  
                    </form> 
                </div>
              </div>

              <div class="col-12 col-lg-5">
                
                <img src={Images.notifications.default} class="w-100" />

              </div>
            </div>
          </div>
        </section>

        </React.Fragment>
      )
    }
  }



export default Notification;