import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
// import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
// import Slider from "react-slick";
// import {CommonNotifyModal} from 'Modals';
import { Images } from 'Constants';

class FavouriteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fav_exp_card: [
        { image: Images.fav_expert_1.default , 
          name: "Kate Kendall" , 
          location: 'San Francisco, CA' , 
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          rate: "$5",
          rating: '5',
          calls: '18',
          messages: '23',
          online: true
        },
        { image: Images.fav_expert_2.default , 
          name: "Wes Yabinlatelee" , 
          location: 'London' , 
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          rate: "$10",
          rating: '3',
          calls: '20',
          messages: '43',
          online: false
        },
        { image: Images.fav_expert_3.default , 
          name: "Allie Grater" , 
          location: 'America' , 
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          rate: "$15",
          rating: '4',
          calls: '25',
          messages: '35',
          online: true
        },
        { image: Images.fav_expert_4.default , 
          name: "Lynne Gwafranca" , 
          location: 'Australia' , 
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          rate: "$15",
          rating: '5',
          calls: '20',
          messages: '30',
          online: false
        },
        { image: Images.fav_expert_5.default , 
          name: "Isabelle Ringing" , 
          location: 'Australia' , 
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          rate: "$10",
          rating: '2',
          calls: '10',
          messages: '40',
          online: true
        },
        { image: Images.fav_expert_6.default , 
          name: "Gene Eva Convenshun" , 
          location: 'China' , 
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          rate: "$4",
          rating: '0',
          calls: '0',
          messages: '10',
          online: true
        },
        { image: Images.fav_expert_7.default , 
          name: "Pamela Kern" , 
          location: 'Africa' , 
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          rate: "$3",
          rating: '2',
          calls: '20',
          messages: '30',
          online: true
        },
        { image: Images.fav_expert_8.default , 
          name: "Oscar Thomsen" , 
          location: 'London' , 
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          rate: "$5",
          rating: '5',
          calls: '20',
          messages: '35',
          online: false
        },

      ],
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

        <section id="favourite_cmn_banner_sec" className="favourite_cmn_banner_sec" style={{backgroundImage: `url(${Images.cmn_banner.default})`}}>
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <h1 className="f32 f600 clr_black">Favorite Experts</h1>
                  </div>
              </div>
          </div>
        </section>


        <section id="fav_experts_sec" className="fav_experts_sec">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                      {
                        this.state.fav_exp_card.map( (obj ,  key)=> {
                          return(
                            <div className="fav_expert_card row">
                          
                              <div className="col-12 col-lg-9 col-xl-10">
    
                                <div className="d-flex">
                                      <div className="fav_expert_status">
                                        <div className="fav_expert_img">
                                            <img src={obj.image} alt="" className="w-100" />
                                        </div>
                                        {
                                          obj.online ? <span className="online"></span> : ''
                                        }
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
                                          <div className="">
                                            <Link to='/' className="cmn_grey_btn">Mobile applications</Link>
                                            <Link to='/' className="cmn_grey_btn">Website designs</Link>
                                            <Link to='/' className="cmn_grey_btn">Web developments</Link>
                                            <Link to='/' className="cmn_grey_btn">Android apps</Link>
                                          </div>
                                      </div>
                                  </div>
                              </div>
    
                              <div className="col-12 col-lg-3 col-xl-2">
                                  <div className="expert_figures text-center">
                                      <h2 className="f24 f600 clr_vlack mb-1">{obj.rate}</h2>
                                      <p className="f14 f400 clr_grey mb-2">Per minute</p>
                                      <Link to="/" className="theme_dark_btn  mb-2">Request A Call <i className="fa fa-chevron-right ms-3"></i></Link>
                                      <ul>
                                          <li>
                                              <img src={Images.star_icon.default} alt="" />
                                              <p className="f16 f400 clr_grey ms-2">{obj.rating}</p>
                                          </li>
    
                                          <li>
                                              <img src={Images.phone_icon.default} alt="" />
                                              <p className="f16 f400 clr_grey ms-2">{obj.calls}</p>
                                          </li>
    
                                          <li>
                                              <img src={Images.chat_icon.default} alt="" />
                                              <p className="f16 f400 clr_grey ms-2">{obj.messages}</p>
                                          </li>
    
                                      </ul>
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



export default FavouriteList;