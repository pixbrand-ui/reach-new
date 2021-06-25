import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/IndexHeader'
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

        <section id="notification_sec" className="social_media_verification edit_profile_sec">
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
                    <p className="f20 f600 clr_black mb-3">Emails</p>
                    <form action="javascript:void(0)" method="post">
                      <div className="social_media_row notification_row">
                          <div className="social_labels d-flex align-items-center">
                              <span className="f16 f400 clr_black">Gmail</span>
                          </div>

                          <div className="d-flex align-items-center">
                              <div className="">
                                  <label className="switch custom_switch">
                                      <input type="checkbox" />
                                      <span className="slider"></span>
                                  </label>
                              </div>
                          </div>
                      </div>

                      <div className="social_media_row notification_row">
                          <div className="social_labels d-flex align-items-center">
                              <span className="f16 f400 clr_black">Recommendations</span>
                          </div>

                          <div className="d-flex align-items-center">
                              <div className="">
                                  <label className="switch custom_switch">
                                      <input type="checkbox" />
                                      <span className="slider"></span>
                                  </label>
                              </div>
                          </div>
                      </div>

                      <div className="social_media_row notification_row">
                          <div className="social_labels d-flex align-items-center">
                              <span className="f16 f400 clr_black">Charles Updates</span>
                          </div>

                          <div className="d-flex align-items-center">
                              <div className="">
                                  <label className="switch custom_switch">
                                      <input type="checkbox" />
                                      <span className="slider"></span>
                                  </label>
                              </div>
                          </div>
                      </div>

                      <p className="f20 f600 clr_black">SMS</p>
                      <div className="social_media_row notification_row">
                          <div className="social_labels d-flex align-items-center">
                              <span className="f16 f400 clr_black">Call Management</span>
                          </div>

                          <div className="d-flex align-items-center">
                              <div className="">
                                  <label className="switch custom_switch">
                                      <input type="checkbox" />
                                      <span className="slider"></span>
                                  </label>
                              </div>
                          </div>
                      </div>

                      <div className="social_media_row notification_row">
                          <div className="social_labels d-flex align-items-center">
                              <span className="f16 f400 clr_black">Call Reminders</span>
                          </div>

                          <div className="d-flex align-items-center">
                              <div className="">
                                  <label className="switch custom_switch">
                                      <input type="checkbox" />
                                      <span className="slider"></span>
                                  </label>
                              </div>
                          </div>
                      </div>  
                    </form> 
                </div>
              </div>

              <div className="col-12 col-lg-5">
                
                <img src={Images.notifications.default} className="w-100" />

              </div>
            </div>
          </div>
        </section>

        </React.Fragment>
      )
    }
  }



export default Notification;