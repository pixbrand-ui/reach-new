import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
// import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/ExpertHeader'
// import StarRatings from 'react-star-ratings';
// import Slider from "react-slick";
import {CommonNotifyModal} from 'Modals';
// import TagsInput from 'react-tagsinput'
import "react-tagsinput/react-tagsinput.css";
import { Images } from 'Constants';

class AccountVerify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }


  componentDidMount() {

  }

  componentWillUnmount() {
    
  }

  openModal = (modalName) =>{
    this.setState({[modalName] : true })
  }
  
  closeModal = (modalName) =>{
    this.setState({[modalName] : false })
  }

  
  render() {

    return (
      <React.Fragment>

        <Header />

        <section id="become_expert_step_1" className="favourite_cmn_banner_sec become_expert_step_1"
            style={{backgroundImage: `url(${Images.cmn_banner.default})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="f28 f600 clr_black mb-3">Verify your account</h2>
                        <p className="f14 f400 clr_black">Connect social accounts to add credibility (optional)</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="no_expert_list_sec" className="expert_form_sec bg_grey no_expert_list_sec">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-7">

                        <div className="cmn_white_sec">
                            <div className="social_media_row">
                                <div className="social_labels d-flex align-items-center">
                                    <img src={Images.google_icon.default} alt="" className="me-3" />
                                    <span className="f16 f400 clr_black">Gmail</span>
                                </div>
                                <div>
                                    <button 
                                        className={`theme_outline_btn cmn_btn toggle_connect_btn ${this.state.connectBtn1 ? 'disconnect_btn cmn_outline_grey_btn clr_grey' : 'connect_btn'}`}
                                        onClick={()=> this.setState({connectBtn1: !this.state.connectBtn1})}
                                        >
                                        {this.state.connectBtn1 ? 'Disconnect' : 'Connect'}
                                    </button>
                                </div>
                            </div>

                            <div className="social_media_row">
                                <div className="social_labels d-flex align-items-center">
                                    <img src={Images.facebook_icon.default} alt="" className="me-3" />
                                    <span className="f16 f400 clr_black">Facebook</span>
                                </div>
                                <div>
                                    <button 
                                        className={`theme_outline_btn cmn_btn toggle_connect_btn ${this.state.connectBtn2 ? 'disconnect_btn cmn_outline_grey_btn clr_grey' : 'connect_btn'}`}
                                        onClick={()=> this.setState({connectBtn2: !this.state.connectBtn2})}
                                        >
                                        {this.state.connectBtn2 ? 'Disconnect' : 'Connect'}
                                    </button>
                                </div>
                            </div>
                            <div className="social_media_row">
                                <div className="social_labels d-flex align-items-center">
                                    <img src={Images.linkedin_icon.default} alt="" className="me-3" />
                                    <span className="f16 f400 clr_black">Linkedin</span>
                                </div>
                                <div>
                                    <button 
                                        className={`theme_outline_btn cmn_btn toggle_connect_btn ${this.state.connectBtn3 ? 'disconnect_btn cmn_outline_grey_btn clr_grey' : 'connect_btn'}`}
                                        onClick={()=> this.setState({connectBtn3: !this.state.connectBtn3})}
                                        >
                                        {this.state.connectBtn3 ? 'Disconnect' : 'Connect'}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end mt-3">
                            <div className="">
                                <button className="theme_dark_btn cmn_btn m_w_170" onClick={()=> this.openModal('expertiseModal')}>Start using reach</button>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
        </section>

        {/* Link send Modal */}
        <CommonNotifyModal open={(this.state.expertiseModal) ? true : false} toggle={()=> this.closeModal('expertiseModal')} className={'expertiseModal custom_modal_pdng'}>
            <div class="acc_deactive_modal_body text-center">
                <img src={Images.check_fill.default} alt="" class="modal_top_img m_b_20" />
                <h2 class="f28 f600 clr_black m_b_20">
                    Your Application Has Been Received
                </h2>
                <p class="f16 f400 clr_grey m_b_20">
                    Alexjender, Your application has been received and will be 
                    processed with 24 hours. An email will be sent once it's been reviewed.
                </p>
                <Link to="/user-profile" class="theme_dark_btn cmn_btn" >Close</Link>
            </div>
        </CommonNotifyModal>

      </React.Fragment>
    )
  }
}



export default AccountVerify;