import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
// import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
// import Slider from "react-slick";
// import {CommonNotifyModal} from 'Modals';
import { Images } from 'Constants';

class Support extends React.Component {
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

        <section id="edit_profile_sec" class="user_account_sec edit_profile_sec">
          <div class="container">
            <div class="row">

              <div class="col-12">
                <button className="f16 f400 clr_black mb-4" onClick={()=> this.goBack()}>
                  <i className="fa fa-chevron-left me-2"></i>Go back
                </button>
                <h2 class="f32 f600 clr_black mb-4">
                  Support
                </h2>
              </div>
              <div class="col-12 col-lg-7">

                <div class="user_account_card user_edit_pro_card">
                  <Link to="/" class="d-flex justify-content-between align-items-center">
                    <div>
                      <h3 class="f20 f600 clr_black mb-2">How it works</h3>
                      <p class="f14 f400 clr_grey">Basic Information, Topics, Photo, Become an expert.</p>
                    </div>
                    <div>
                      <i class="fa fa-chevron-right clr_grey"></i>
                    </div>
                  </Link>
                </div>

                <div class="user_account_card user_edit_pro_card">
                  <Link to="/" class="d-flex justify-content-between align-items-center">
                    <div>
                      <h3 class="f20 f600 clr_black mb-2">Frequently Asked Questions</h3>
                      <p class="f14 f400 clr_grey">Credit Card, Debit card, Stripe, billing address Details</p>
                    </div>
                    <div>
                      <i class="fa fa-chevron-right clr_grey"></i>
                    </div>
                  </Link>
                </div>

                <div class="user_account_card user_edit_pro_card">
                  <Link to="/" class="d-flex justify-content-between align-items-center">
                    <div>
                      <h3 class="f20 f600 clr_black mb-2">Term & Condition</h3>
                      <p class="f14 f400 clr_grey">Connect your social media account</p>
                    </div>
                    <div>
                      <i class="fa fa-chevron-right clr_grey"></i>
                    </div>
                  </Link>
                </div>

                <div class="user_account_card user_edit_pro_card">
                  <Link to="/" class="d-flex justify-content-between align-items-center">
                    <div>
                      <h3 class="f20 f600 clr_black mb-2">Privacy Policy</h3>
                      <p class="f14 f400 clr_grey">Connect your social media account</p>
                    </div>
                    <div>
                      <i class="fa fa-chevron-right clr_grey"></i>
                    </div>
                  </Link>
                </div>

                <p class="f14 clr_grey f400 mt-3">Need help? <Link to="" class="clr_blue text_underline">Contact Support</Link></p>
              </div>

              <div class="col-12 col-lg-5">
                
                <img src={Images.support.default} class="w-100" />

              </div>
            </div>
          </div>
        </section>

        </React.Fragment>
      )
    }
  }



export default Support;