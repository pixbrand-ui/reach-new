import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
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

        <section id="edit_profile_sec" className="social_media_verification edit_profile_sec">
          <div className="container">
            <div className="row">

              <div className="col-12">
                <button className="f16 f400 clr_black mb-4" onClick={()=> this.goBack()}>
                  <i className="fa fa-chevron-left me-2"></i>Go back
                </button>
                <h2 class="f32 f600 clr_black mb-4">
                  Promotional & Offer
                </h2>
              </div>

              <div className="col-12 col-lg-7">

                <div className="cmn_white_sec">
                  <form action="javascript:void(0)" method='post' className='w-100'>
                      <div className="mb-3">
                          <label for="promo_code" className='f16 f400 clr_black mb-2 cursor_pointer'>Add Promotional Code</label>
                          <input type="text" className="theme_input theme_grey_outline_input" id="promo_code" placeholder="Enter your promotional code" />
                      </div>

                      <div className="d-flex justify-content-end">
                          <button className='theme_dark_btn coupon_apply_btn cmn_btn' onClick={()=> this.openModal('promotionalModal')}>Apply</button>
                      </div>
                  </form>
                </div>

              </div>

              <div className="col-12 col-lg-5">
                
                <img src={Images.promotional_offers.default} className="w-100" />

              </div>
            </div>
          </div>
        </section>

        <CommonNotifyModal open={(this.state.promotionalModal) ? true : false} toggle={()=> this.closeModal('promotionalModal')} className={'promotionalModal'}>
          {/* <span className="modal_closer" onClick={()=> this.closeModal('promotionalModal')}><img src={Images.cross.default} alt="" /></span> */}
          <div className="promo_modal_body text-center">
            <img src={Images.big_check_icon.default} alt="" className="modal_top_img m_b_20" />
            <h2 className="f28 f600 clr_black m_b_20">
                Promotional Code
                Applied
            </h2>
            <p className="f16 f400 clr_grey m_b_20">
                Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <Link className="theme_dark_btn cmn_btn" onClick={()=> this.closeModal('promotionalModal')}>Ok</Link>
          </div>
        </CommonNotifyModal>


        </React.Fragment>
      )
    }
  }



export default PromotionalOffers;