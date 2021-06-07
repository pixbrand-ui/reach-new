import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
// import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
// import Slider from "react-slick";
// import {CommonNotifyModal} from 'Modals';
import { Images } from 'Constants';

class UserSetting extends React.Component {
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
                  Setting
                </h2>
              </div>
              <div class="col-12 col-lg-7">

                <div class="user_account_card user_edit_pro_card">
                  <Link to="notification" class="d-flex justify-content-between align-items-center">
                    <div>
                      <h3 class="f20 f600 clr_black mb-2">Notification Settings</h3>
                      <p class="f14 f400 clr_grey">Basic Information, Topics, Photo, Become an expert.</p>
                    </div>
                    <div>
                      <i class="fa fa-chevron-right clr_grey"></i>
                    </div>
                  </Link>
                </div>

                <div class="user_account_card user_edit_pro_card">
                  <Link to="promotional-offers" class="d-flex justify-content-between align-items-center">
                    <div>
                      <h3 class="f20 f600 clr_black mb-2">Promotional & Offer</h3>
                      <p class="f14 f400 clr_grey">Credit Card, Debit card, Stripe, billing address Details</p>
                    </div>
                    <div>
                      <i class="fa fa-chevron-right clr_grey"></i>
                    </div>
                  </Link>
                </div>

                <div class="user_account_card user_edit_pro_card">
                  <Link to="change-password" class="d-flex justify-content-between align-items-center">
                    <div>
                      <h3 class="f20 f600 clr_black mb-2">Change Password</h3>
                      <p class="f14 f400 clr_grey">Connect your social media account</p>
                    </div>
                    <div>
                      <i class="fa fa-chevron-right clr_grey"></i>
                    </div>
                  </Link>
                </div>


              </div>

              <div class="col-12 col-lg-5">
                
                <img src={Images.setting.default} class="w-100" />

              </div>
            </div>
          </div>
        </section>

        </React.Fragment>
      )
    }
  }



export default UserSetting;