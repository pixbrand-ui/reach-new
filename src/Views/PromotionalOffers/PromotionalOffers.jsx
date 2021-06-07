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

        <section id="edit_profile_sec" class="social_media_verification edit_profile_sec">
          <div class="container">
            <div class="row">

              <div class="col-12">
                <button className="f16 f400 clr_black mb-4" onClick={()=> this.goBack()}>
                  <i className="fa fa-chevron-left me-2"></i>Go back
                </button>
                <h2 class="f32 f600 clr_black mb-4">
                  Promotional & Offer
                </h2>
              </div>

              <div class="col-12 col-lg-7">

                <div class="cmn_white_sec">
                  <form action="javascript:void(0)" method='post' class='w-100'>
                      <div class="mb-3">
                          <label for="promo_code" class='f16 f400 clr_black mb-2 cursor_pointer'>Add Promotional Code</label>
                          <input type="text" class="theme_input theme_grey_outline_input" id="promo_code" placeholder="Enter your promotional code" />
                      </div>

                      <div class="d-flex justify-content-end">
                          <button class='theme_dark_btn coupon_apply_btn cmn_btn' onClick={()=> this.openModal('promotionalModal')}>Apply</button>
                      </div>
                  </form>
                </div>

              </div>

              <div class="col-12 col-lg-5">
                
                <img src={Images.promotional_offers.default} class="w-100" />

              </div>
            </div>
          </div>
        </section>

        <CommonNotifyModal open={(this.state.promotionalModal) ? true : false} toggle={()=> this.closeModal('promotionalModal')} className={'promotionalModal'}>
          {/* <span class="modal_closer" onClick={()=> this.closeModal('promotionalModal')}><img src={Images.cross.default} alt="" /></span> */}
          <div class="promo_modal_body text-center">
              <img src={Images.big_check_icon.default} alt="" class="modal_top_img m_b_20" />
              <h2 class="f28 f600 clr_black m_b_20">
                  Promotional Code
                  Applied
              </h2>
              <p class="f16 f400 clr_grey m_b_20">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
              <Link class="theme_dark_btn cmn_btn" onClick={()=> this.closeModal('promotionalModal')}>Ok</Link>
          </div>
        </CommonNotifyModal>


        </React.Fragment>
      )
    }
  }



export default PromotionalOffers;