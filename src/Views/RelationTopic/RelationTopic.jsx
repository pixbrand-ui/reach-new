import React from 'react';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
import { Images } from 'Constants';

class RelationTopic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expertList: [
        {
          image: Images.fav_expert_1.default,
          name: 'Kate Kendall',
          location: 'San Francisco, CA',
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          amount: '$5',
          rating: 5,
          calls: 18,
          messages: 23
        },
        {
          image: Images.fav_expert_2.default,
          name: 'Kate Kendall',
          location: 'San Francisco, CA',
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          amount: '$5',
          rating: 5,
          calls: 18,
          messages: 23
        },
        {
          image: Images.fav_expert_3.default,
          name: 'Kate Kendall',
          location: 'San Francisco, CA',
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          amount: '$5',
          rating: 5,
          calls: 18,
          messages: 23
        },
        {
          image: Images.fav_expert_4.default,
          name: 'Kate Kendall',
          location: 'San Francisco, CA',
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          amount: '$5',
          rating: 5,
          calls: 18,
          messages: 23
        },
        {
          image: Images.fav_expert_5.default,
          name: 'Kate Kendall',
          location: 'San Francisco, CA',
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          amount: '$5',
          rating: 5,
          calls: 18,
          messages: 23
        },
      ],


      listSize: 3,
      listTab: 'expert',


    }
  }

  sizeIncreaser = (arrayName, sizeName) => {
    let arrSize = this.state[arrayName].length;
    let size = this.state[sizeName] + 1;
    size <= arrSize ? size = size : size = arrSize;
    this.setState({ [sizeName]: size });
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  goBack = () =>{
    window.history.back();
  }


  render() {
    let listCount = this.state.listSize;

    return (
      <React.Fragment>

        <Header />

        <section id="fav_experts_sec" className="fav_experts_sec search_result_expert_sec">
          <div className="container">
            <div className="row">

              <div className="col-12">
                <div className="d-flex justify-content-between align-items-end category_listing_btns mob_justify_start">
                  <div>
                    <button className="f16 f400 clr_black mb-4" onClick={()=> this.goBack()}>
                      <i className="fa fa-chevron-left me-2"></i>Go back
                    </button>
                    <p class="f20 f400 clr_black">3924 Experts In Entrepreneurship Topic</p>
                  </div>

                  <div className="right_side_btns d-flex">

                    <p className="f16 f400 clr_black me-2 mb-2">Filter applied</p>

                    <button className='drop_wrapper'>
                      <UncontrolledButtonDropdown className="">
                        <DropdownToggle className="cmn_outline_grey_btn">
                          Filter by <i className="fa fa-chevron-down ps-1"></i>
                        </DropdownToggle>
                        <DropdownMenu className='no_dropdown menu_start'>
                          <ul className="category_cmn_dropdown">
                            <li>
                              <Link to='/sub-category'>Highest Rated</Link>
                            </li>
                            <li>
                              <Link to='/sub-category'>Lowest Price</Link>
                            </li>
                            <li>
                              <Link to='/sub-category'>Highest Price</Link>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>

                    </button>
                  </div>
                </div>
              </div>

              <div className={`col-12`}>
                {
                  this.state.expertList.slice(0, listCount).map((obj, key) => {
                    return (
                      <div className="fav_expert_card row" key={key}>
                        <div className="col-12 col-md-9 col-lg-10">

                          <div className="d-flex">
                            <div className="fav_expert_status">
                              <div className="fav_expert_img">
                                <img src={obj.image} alt="" className="w-100" />
                              </div>
                              <span className="online"></span>
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

                        <div className="col-12 col-md-3 col-lg-2">
                          <div className="expert_figures text-center">
                            <h2 className="f24 f600 clr_vlack mb-1">{obj.amount}</h2>
                            <p className="f14 f400 clr_grey mb-2">Per minute</p>
                            <Link to='/' className="theme_dark_btn  mb-2">Request Call <i className="fa fa-chevron-right ms-3"></i></Link>
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
                {
                  !this.state.expertList == '' && listCount < this.state.expertList.length ?
                  <div className="col-12 mt-4">
                    <div className="d-flex justify-content-center">
                      <button className="cmn_outline_grey_btn cat_load_btn" onClick={()=> this.sizeIncreaser('expertList' , 'listSize')}>Load more</button>
                    </div>
                  </div> 
                  :''
                }
              </div>

            </div>
          </div>
        </section>

      </React.Fragment>

    )
  }
}
export default RelationTopic;