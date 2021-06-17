import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
// import Slider from "react-slick";
// import {CommonNotifyModal} from 'Modals';
import { Images } from 'Constants';

class UserCall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCall: [
        {
          image: Images.fav_expert_1.default,
          name: 'Kate Kendall',
          location: 'San Francisco, CA',
          descryption: 'Would like to understand better how the service works and whether it can be adapted for ...',
          reqTime: 'Monday 9:50 PM',
          callDuration: false,
          callTime: '0%', 
          expertResponse: 'Waiting for Acceptance',
          expertResponseClr: 'clr_grey',
          callNow: false,
          message: false,
          msgBox: false,
        },
        {
          image: Images.fav_expert_2.default,
          name: 'Kate Kendall',
          location: 'London',
          descryption: 'Would like to understand better how the service works and whether it can be adapted for ...',
          reqTime: 'Just Now',
          callDuration: true,
          callTime: '70%', 
          expertResponse: 'Accpeted by Expert',
          expertResponseClr: 'clr_green',
          callNow: true,
          message: true,
          msgBox: false,
        },
        {
          image: Images.fav_expert_3.default,
          name: 'Kate Kendall',
          location: 'America',
          descryption: 'Would like to understand better how the service works and whether it can be adapted for ...',
          reqTime: 'Just Now',
          callDuration: true,
          callTime: '90%', 
          expertResponse: 'Accpeted by Expert',
          expertResponseClr: 'clr_green',
          callNow: false,
          message: true,
          msgBox: false,
        },
      ],

      historyCall: [
        {
          image: Images.fav_expert_1.default,
          name: 'Kate Kendall',
          location: 'San Francisco, CA',
          descryption: 'Would like to understand better how the service works and whether it can be adapted for ...',
          reqTime: 'Monday 9:50 PM',
          expertResponse: 'Finish Call',
          expertResponseClr: 'clr_grey',
          msgBox: false,
        },
        {
          image: Images.fav_expert_2.default,
          name: 'Kate Kendall',
          location: 'London',
          descryption: 'Would like to understand better how the service works and whether it can be adapted for ...',
          reqTime: 'Just Now',
          expertResponse: 'Cancelled',
          expertResponseClr: 'clr_red',
          msgBox: false,
        },
        {
          image: Images.fav_expert_3.default,
          name: 'Kate Kendall',
          location: 'America',
          descryption: 'Would like to understand better how the service works and whether it can be adapted for ...',
          reqTime: 'Just Now',
          expertResponse: 'Rejected',
          expertResponseClr: 'clr_grey',
          msgBox: false,
        },

      ],




      callTab: 'active',

    }
  }


  toggleMsgBox = (index , listname) => {
    // this.setState({msgBox : key})
    let arr = [...this.state[listname]];
    arr[index]['msgBox'] = arr[index]['msgBox'] == false ? true : false;
    this.setState({ [listname]: arr });

  }

  componentDidMount() {

  }

  componentWillUnmount = () => {

  };


  render() {

    return (
      <React.Fragment>

        <Header></Header>
          <section id="call_req_banner_sec" className="favourite_cmn_banner_sec call_req_banner_sec" style={{backgroundImage: `url(${Images.cmn_banner.default})`}}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="f32 f600 clr_black">Calls Requests</h1>
                </div>
                <div className="col-12 call_tabs_pos">
                  <div className="call_req_tabs">
                    <button className={`cmn_tab_btn ${this.state.callTab == 'active' ? 'active' : ''}`} onClick={()=> this.setState({callTab: 'active'})}>Active (3)</button>
                    <button className={`cmn_tab_btn ${this.state.callTab == 'history' ? 'active' : ''}`}  onClick={()=> this.setState({callTab: 'history'})}>History</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="active_calls" className={`fav_experts_sec cmn_tabs ${this.state.callTab == 'active' ? 'show' : ''}`}>
            <div className="container">
                <div className="row">

                    <div className="col-12">
                      {
                        this.state.activeCall.map( (obj , key) => {
                          return(
                            <div className="fav_expert_card row" key={key}>
                              <div className="col-12 col-lg-9 col-xl-10">

                                  <div className="d-flex">
                                    <div className="fav_expert_status user_call_info">
                                      <div className="fav_expert_img">
                                        <img src={obj.image} alt="" className="w-100" />
                                      </div>
                                    </div>

                                    <div className="fav_expert_details">
                                        <h2 className="f20 f600 clr_black mb-2">{obj.name}</h2>
                                        <div className="d-flex align-items-center mb-2">
                                          <img src={Images.location.default} alt="" className="me-2" />
                                          <p className="f15 f400 clr_grey">{obj.location}</p>
                                        </div>
                                        <p className="f16 f400 clr_black max_w_80 mb-3">
                                          {obj.descryption}
                                        </p>

                                        <div className="review_card user_call_msg">
                                            <div className="d-flex w-100">
                                                <button className="f15 f600 clr_green call_request_btn" onClick={()=> this.toggleMsgBox(key , 'activeCall')}>Requested</button>
                                                <p className="f15 f600 clr_grey ms-3">{obj.reqTime}</p>
                                            </div>

                                            <div className={`review_msg user_call_request mt-3 ${obj.msgBox ? 'show' : ''}`}>
                                              <span className="close_msg cursor_pointer"><img src={Images.black_cross.default} alt="" onClick={()=> this.toggleMsgBox(key , 'activeCall')} /></span>
                                                
                                              <div className='d-flex mb-3'>
                                                <div>
                                                  <p className="f15 f400 clr_grey title">
                                                    Set Estimated Length:
                                                  </p>
                                                </div>
                                                <div>
                                                  <p className="f15 f500 clr_black">15 minutes ($15.00)</p>
                                                </div>
                                              </div>

                                              <div className='d-flex'>
                                                  <div>
                                                    <p className="f15 f400 clr_grey title">
                                                      Suggest Timeslots:
                                                    </p>
                                                  </div>
                                                  <div>
                                                    <p className="f15 f500 clr_black mb-2">Mon, Mar 8 2021 | 8:00 PM</p>
                                                    <p className="f15 f500 clr_black mb-2">Mon, Mar 8 2021 | 8:00 PM</p>
                                                    <p className="f15 f500 clr_black">Mon, Mar 8 2021 | 8:00 PM</p>
                                                  </div>
                                              </div>
                                            </div>

                                            {
                                              obj.callDuration ?
                                              <div className="call_duration d-flex align-items-center mt-2">
                                                <p className="d-flex align-items-center 15 f400 clr_grey">
                                                  <img src={Images.clock_icon.default} alt="" width='25' />
                                                  <span>Call duration</span>
                                                </p>

                                                <div className="call_timer">
                                                    <div className="timer_duration">
                                                        <div className="fill" style={{width: `${obj.callTime}`}}></div>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <p className="f15 f400 clr_grey">14:59 min left</p>
                                                    </div>
                                                </div>
                                              </div> 

                                              : ''
                                            }
                                        </div>
                                        
                                    </div>
                                </div>

                              </div>

                              <div className="col-12 col-lg-3 col-xl-2">
                                <div className="d-flex justify-content-end  mob_justify_center user_calling_btns">
                                    <div className="text-end">
                                      <p className={`f16 f500 mb-3 ${obj.expertResponseClr}`}>{obj.expertResponse}</p>
                                      {
                                        obj.callNow ? 
                                        <Link to="/" className="cmn_btn theme_dark_btn f18 f500 mb-2">
                                          <img src={Images.video_icon.default} alt="" className="me-3" />Call Now
                                        </Link> : ''
                                      }
                                      {
                                        obj.message ? 
                                        <Link to="/" className="cmn_btn cmn_outline_grey_btn">
                                          <img src={Images.user_msg_icon.default} alt="" className="me-3" />Message
                                        </Link> : ''
                                      }
                                    </div>
                                </div>
                              </div>
                          </div>
                          )
                        })
                      }

                    </div>

                </div>
            </div>
          </section>

          <section id="active_calls" className={`fav_experts_sec cmn_tabs ${this.state.callTab == 'history' ? 'show' : ''}`}>
            <div className="container">
                <div className="row">

                    <div className="col-12">
                      {
                        this.state.historyCall.map( (obj , key) => {
                          return(
                            <div className="fav_expert_card row" key={key}>
                              <div className="col-12 col-lg-9 col-xl-10">

                                  <div className="d-flex">
                                    <div className="fav_expert_status user_call_info">
                                      <div className="fav_expert_img">
                                        <img src={obj.image} alt="" className="w-100" />
                                      </div>
                                    </div>

                                    <div className="fav_expert_details">
                                        <h2 className="f20 f600 clr_black mb-2">{obj.name}</h2>
                                        <div className="d-flex align-items-center mb-2">
                                          <img src={Images.location.default} alt="" className="me-2" />
                                          <p className="f15 f400 clr_grey">{obj.location}</p>
                                        </div>
                                        <p className="f16 f400 clr_black max_w_80 mb-3">
                                          {obj.descryption}
                                        </p>

                                        <div className="review_card user_call_msg">
                                            <div className="d-flex w-100">
                                                <button className="f15 f600 clr_green call_request_btn" onClick={()=> this.toggleMsgBox(key , 'historyCall')}>Requested</button>
                                                <p className="f15 f600 clr_grey ms-3">{obj.reqTime}</p>
                                            </div>

                                            <div className={`review_msg user_call_request mt-3 ${obj.msgBox ? 'show' : ''}`}>
                                              <span className="close_msg cursor_pointer"><img src={Images.black_cross.default} alt="" onClick={()=> this.toggleMsgBox(key , 'historyCall')}/></span>
                                                
                                              <div className='d-flex mb-3'>
                                                <div>
                                                  <p className="f15 f400 clr_grey title">
                                                    Set Estimated Length:
                                                  </p>
                                                </div>
                                                <div>
                                                  <p className="f15 f500 clr_black">15 minutes ($15.00)</p>
                                                </div>
                                              </div>

                                              <div className='d-flex'>
                                                  <div>
                                                    <p className="f15 f400 clr_grey title">
                                                      Suggest Timeslots:
                                                    </p>
                                                  </div>
                                                  <div>
                                                    <p className="f15 f500 clr_black mb-2">Mon, Mar 8 2021 | 8:00 PM</p>
                                                    <p className="f15 f500 clr_black mb-2">Mon, Mar 8 2021 | 8:00 PM</p>
                                                    <p className="f15 f500 clr_black">Mon, Mar 8 2021 | 8:00 PM</p>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>

                              </div>

                              <div className="col-12 col-lg-3 col-xl-2">
                                <div className="d-flex justify-content-end  mob_justify_center user_calling_btns">
                                    <div className="text-end">
                                      <p className={`f16 f500 ${obj.expertResponseClr}`}>{obj.expertResponse}</p>
                                    </div>
                                </div>
                              </div>
                          </div>
                          )
                        })
                      }

                    </div>

                </div>
            </div>
          </section>

        
        </React.Fragment>
      )
    }
  }



export default UserCall;