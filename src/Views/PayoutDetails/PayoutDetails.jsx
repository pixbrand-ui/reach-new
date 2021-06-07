import React, { useRef } from 'react';
import { Row, Col, Container, Collapse, Button, CardBody, Card } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
// import Slider from "react-slick";
// import {CommonNotifyModal} from 'Modals';
import { Images } from 'Constants';

class PayoutDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      accordion: [
        { title: 'February 2021' },
        { title: 'March 2021' },
        { title: 'April 2021' },
        { title: 'May 2021' },
        { title: 'June 2021' },
      ],

      transaction_row: [
        {
          image: Images.user_img.default,
          name: 'Kate Kendall',
          calltime: '15 Minutes',
          callType: 'Video call',
          amount: '-$75',
          card: Images.small_mastercard.default,
          time: 'Yesterday at 4:23 PM'
        },
        {
          image: Images.user_img_2.default,
          name: 'Allie Grater',
          calltime: '12 Minutes',
          callType: 'Video call',
          amount: '-$65',
          card: Images.small_visa_card.default,
          time: 'Yesterday at 4:23 PM'
        },
        {
          image: Images.user_img.default,
          name: 'Kate Kendall',
          calltime: '10 Minutes',
          callType: 'Video call',
          amount: '-$55',
          card: Images.small_american_card.default,
          time: 'Yesterday at 4:23 PM'
        },
        {
          image: Images.user_img_3.default,
          name: 'Wes Yabinatellee',
          calltime: '8 Minutes',
          callType: 'Video call',
          amount: '-$50',
          card: Images.small_mastercard.default,
          time: 'Yesterday at 4:23 PM'
        },
        

      ]

    }
  }


  goBack = () => {
    window.history.back();
  }

  accordionKey = (key) => {
    this.state.accordionKey === key ? key = false : key = key;
    this.setState({accordionKey: key})
  }

  componentDidMount() {

  }

  componentWillUnmount = () => {

  };


  render() {

    return (
      <React.Fragment>

        <Header></Header>

        <section id="payment_method_sec" class="social_media_verification payment_method_sec">
          <div class="container">
            <div class="row">

              <div class="col-12">
                <button className="f16 f400 clr_black mb-4" onClick={() => this.goBack()}>
                  <i className="fa fa-chevron-left me-2"></i>Go back
                  </button>
                <h2 class="f32 f600 clr_black mb-4">
                  Payout Detail
                  </h2>
              </div>

              <div class="col-12 col-lg-4">
                <div class="payout_card text-center">
                  <p class="f20 f700 clr_white mb-3">Total Payments Made</p>
                  <h2 class="f30 f500 clr_white mb-3 d-flex justify-content-center">$<span class="f60 f600 clr_green ms-2">120</span></h2>
                  <p class="f16 f400 clr_white">As of March 2021</p>
                </div>
              </div>

              <div class="col-12 col-lg-8">

                <div class="cmn_white_sec">

                  <h4 class="f20 f600 clr_black mb-3">All Transactions</h4>

                  {
                    !this.state.accordion == '' ?

                    // ---------If accordion list found----------
                    this.state.accordion.map((obj, key) => {
                      return (
                        <div className="payout_accordion">
                          <button onClick={()=>this.accordionKey(key)} className="clr_grey f16 f400">
                                <span>{obj.title}</span>
                                
                              <span className='accordion_icon'>
                                {
                                  this.state.accordionKey === key ? <i className="fa fa-chevron-up"></i> : <i className="fa fa-chevron-down"></i>
                                }
                              </span>
                          </button>
                          <Collapse isOpen={this.state.accordionKey === key}>
                              <Card>
                                  <CardBody>
                                    {
                                      this.state.transaction_row.map((obj, key) => {
                                        return (
                                          <div class="transaction_row">

                                            <div class="">
                                              <Link to="/" class="d-flex align-items-center">
                                                <div class="trn_user_img">
                                                  <img src={obj.image} alt="" />
                                                </div>
                                                <div>
                                                  <h5 class="f18 f600 clr_black mb-1">{obj.name}</h5>
                                                  <p class="f16 f400 clr_grey">{obj.calltime} | {obj.callType}</p>

                                                </div>
                                              </Link>
                                            </div>

                                            <div>
                                              <div class="d-flex align-items-center mb-2 justify-content-end">
                                                <h5 class="f18 f600 clr_black">{obj.amount}</h5>
                                                <img src={obj.card} alt="" class="ms-2" width="25" />
                                              </div>
                                              <div class="text-end">
                                                <p class="f16 f400 clr_grey">
                                                  {obj.time}
                                                </p>
                                              </div>
                                            </div>

                                          </div>
                                        )
                                      })
                                    }
                                  </CardBody>
                              </Card>
                          </Collapse>
                      </div>
                      )
                    }) :

                    // ----------If accordion List not Found----------

                    <div class="payout_empty">
                      <div>
                          <img src={Images.payout_empty.default} alt="" class="mb-1" />
                          <p class="f20 f500 clr_black">There Are No Transactions Yet.</p>
                      </div>
                    </div>
                  
                  }

                </div>
              </div>
            </div>
          </div>
        </section>

      </React.Fragment>
    )
  }
}



export default PayoutDetails;