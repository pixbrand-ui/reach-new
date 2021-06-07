import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
// import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
// import Slider from "react-slick";
// import {CommonNotifyModal} from 'Modals';
import { Images } from 'Constants';

class SocialMedia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // connectBtn1: true,
      // connectBtn2: true,
      // connectBtn3: true
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

        <section id="edit_profile_sec" class="social_media_verification edit_profile_sec">
          <div class="container">
            <div class="row">

              <div class="col-12">
                <button className="f16 f400 clr_black mb-4" onClick={()=> this.goBack()}>
                  <i className="fa fa-chevron-left me-2"></i>Go back
                </button>
                <h2 class="f32 f600 clr_black mb-4">
                  Social Media Verification
                </h2>
              </div>

              <div class="col-12 col-lg-7">

                <div class="cmn_white_sec">
                  <form action="javascript:void(0)" method='post'>
                    
                    <div class="social_media_row">
                        <div class="social_labels d-flex align-items-center">
                            <img src={Images.google_icon.default} alt="" class="me-3" /><span class="f16 f400 clr_black">Gmail</span>
                        </div>
                        <div>
                          <button 
                            class={`theme_outline_btn cmn_btn toggle_connect_btn ${this.state.connectBtn1 ? 'disconnect_btn cmn_outline_grey_btn clr_grey' : 'connect_btn'}`}
                            onClick={()=> this.setState({connectBtn1: !this.state.connectBtn1})}
                            >
                            {this.state.connectBtn1 ? 'Disconnect' : 'Connect'}
                          </button>
                        </div>
                    </div>

                    <div class="social_media_row">
                        <div class="social_labels d-flex align-items-center">
                            <img src={Images.facebook_icon.default} alt="" class="me-3" /><span class="f16 f400 clr_black">Facebook</span>
                        </div>
                        <div>
                          <button 
                            class={`theme_outline_btn cmn_btn toggle_connect_btn ${this.state.connectBtn2 ? 'disconnect_btn cmn_outline_grey_btn clr_grey' : 'connect_btn'}`}
                            onClick={()=> this.setState({connectBtn2: !this.state.connectBtn2})}
                            >
                            {this.state.connectBtn2 ? 'Disconnect' :'Connect' }
                          </button>
                        </div>
                    </div>

                    <div class="social_media_row">
                        <div class="social_labels d-flex align-items-center">
                            <img src={Images.linkedin_icon.default} alt="" class="me-3" /><span class="f16 f400 clr_black">Linkedin</span>
                        </div>
                        <div>
                          <button 
                            class={`theme_outline_btn cmn_btn toggle_connect_btn ${this.state.connectBtn3 ? 'disconnect_btn cmn_outline_grey_btn clr_grey' : 'connect_btn'}`}
                            onClick={()=> this.setState({connectBtn3: !this.state.connectBtn3})}
                            >
                            {this.state.connectBtn3 ? 'Disconnect' : 'Connect'}
                          </button>
                        </div>
                    </div>
                    
                  </form>
                </div>
              </div>

              <div class="col-12 col-lg-5">
                
                <img src={Images.social_media_verification.default} class="w-100" />

              </div>
            </div>
          </div>
        </section>

        </React.Fragment>
      )
    }
  }



export default SocialMedia;