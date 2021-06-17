import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
// import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/ExpertHeader'
// import Slider from "react-slick";
// import {CommonNotifyModal} from 'Modals';
import { Images } from 'Constants';

class FavouriteGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fav_exp_card: [
        { image: Images.fav_expert_1.default , 
          name: "Kate Kendall" , 
          location: 'San Francisco, CA' , 
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          rate: "$5",
          online: true
        },
        { image: Images.fav_expert_2.default , 
          name: "Wes Yabinlatelee" , 
          location: 'London' , 
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          rate: "$10",
          online: false
        },
        { image: Images.fav_expert_3.default , 
          name: "Allie Grater" , 
          location: 'America' , 
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          rate: "$15",
          online: true
        },
        { image: Images.fav_expert_4.default , 
          name: "Lynne Gwafranca" , 
          location: 'Australia' , 
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          rate: "$15",
          online: false
        },
        { image: Images.fav_expert_5.default , 
          name: "Isabelle Ringing" , 
          location: 'Australia' , 
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          rate: "$10",
          online: true
        },
        { image: Images.fav_expert_6.default , 
          name: "Gene Eva Convenshun" , 
          location: 'China' , 
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          rate: "$4",
          online: true
        },
        { image: Images.fav_expert_7.default , 
          name: "Pamela Kern" , 
          location: 'Africa' , 
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          rate: "$3",
          online: true
        },
        { image: Images.fav_expert_8.default , 
          name: "Oscar Thomsen" , 
          location: 'London', 
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          rate: "$5",
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

          <section id="fav_grid_sec" className="fav_grid_sec pb-5">
            <div className="container">
              <div className="row related_experts_row">
                {
                  this.state.fav_exp_card.map( (obj , key)=> {
                    return(
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="related_experts_card expert_cmn_card">

                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="fav_expert_status">
                              <div className="fav_expert_img">
                                <img src={obj.image} alt="" className="w-100" />
                              </div>
                              {
                                obj.online ? <span className="online"></span> : ''
                              }
                            </div>
                            <div className="text-center">
                              <h6 className="f28 f600 clr_black">{obj.rate}</h6>
                              <p className="f15 f400 clr_black">per hour</p>
                            </div>
                          </div>

                          <div>
                            <h5 className="f20 f600 clr_black mb-2">{obj.name}</h5>
                            <p className="f15 f400 clr_grey mb-2"><img src={Images.location.default} alt="" className='me-1' />{obj.location}</p>
                            <p className="f15 f400 clr_grey mb-3">
                              {obj.descryption}
                            </p>

                            <div className="mb-4 grid_list_btns">
                              <Link to='' className="cmn_light_green_btn">Mobile applications</Link>
                              <Link to='' className="cmn_light_green_btn">Mobile applications</Link>
                              <Link to='' className="cmn_light_green_btn">+3</Link>
                            </div>

                            <div className="rel_expert_big_btn grid_list_big_btns">
                              <Link to='' className="theme_dark_btn ml-0 f16 f600">Request A Call</Link>
                              <Link to='' className="cmn_outline_grey_btn f16 f600 me-0 clr_grey">Message</Link>
                            </div>
                          </div>

                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </section>


        </React.Fragment>
      )
    }
  }



export default FavouriteGrid;