import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/ExpertHeader'
// import Slider from "react-slick";
// import {CommonNotifyModal} from 'Modals';
import { Images } from 'Constants';

class PaymentBilling extends React.Component {
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

        <Header></Header>

        <section id="edit_profile_sec" className="user_account_sec edit_profile_sec">
          <div className="container">
            <div className="row">

              <div className="col-12">
                <button className="f16 f400 clr_black mb-4" onClick={()=> this.goBack()}>
                  <i className="fa fa-chevron-left me-2"></i>Go back
                </button>
                <h2 className="f32 f600 clr_black mb-4">
                  Payment & Billing
                </h2>
              </div>
              <div className="col-12 col-lg-7">

                <div className="user_account_card user_edit_pro_card">
                  <a href="/payment-method" className="d-flex justify-content-between align-items-center">
                    <div>
                      <h3 className="f20 f600 clr_black mb-2">Payment Method</h3>
                      <p className="f14 f400 clr_grey">Basic Information, Topics, Photo, Become an expert.</p>
                    </div>
                    <div>
                      <i className="fa fa-chevron-right clr_grey"></i>
                    </div>
                  </a>
                </div>

                <div className="user_account_card user_edit_pro_card">
                  <a href="/billing-address" className="d-flex justify-content-between align-items-center">
                    <div>
                      <h3 className="f20 f600 clr_black mb-2">Billing Address</h3>
                      <p className="f14 f400 clr_grey">Credit Card, Debit card, Stripe, billing address Details</p>
                    </div>
                    <div>
                      <i className="fa fa-chevron-right clr_grey"></i>
                    </div>
                  </a>
                </div>

                <div className="user_account_card user_edit_pro_card">
                  <a href="payout-details" className="d-flex justify-content-between align-items-center">
                    <div>
                      <h3 className="f20 f600 clr_black mb-2">Payout Detail</h3>
                      <p className="f14 f400 clr_grey">Connect your social media account</p>
                    </div>
                    <div>
                      <i className="fa fa-chevron-right clr_grey"></i>
                    </div>
                  </a>
                </div>


              </div>

              <div className="col-12 col-lg-5">
                
                <img src={Images.payment_billing.default} className="w-100" />

              </div>
            </div>
          </div>
        </section>

        </React.Fragment>
      )
    }
  }



export default PaymentBilling;