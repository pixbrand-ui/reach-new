import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
import StarRatings from 'react-star-ratings';
// import Slider from "react-slick";
// import {CommonNotifyModal} from 'Modals';
import { Images } from 'Constants';

class SearchResult extends React.Component {
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

      listingList: [
        {
          coverImg: Images.cat_list_img_1.default,
          expertImg: Images.fav_expert_1.default,
          title: 'Get Top Tier PR  Media Exposure for Your Company for Free.',
          name: 'Adrian Salamunovic',
          location: 'San Francisco, CA',
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          amount: '$5',
          rating: 5,
          calls: 18,
          messages: 23
        },
        {
          coverImg: Images.cat_list_img_1.default,
          expertImg: Images.fav_expert_2.default,
          title: 'Get Top Tier PR  Media Exposure for Your Company for Free.',
          name: 'Adrian Salamunovic',
          location: 'San Francisco, CA',
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          amount: '$5',
          rating: 5,
          calls: 18,
          messages: 23
        },
        {
          coverImg: Images.cat_list_img_1.default,
          expertImg: Images.fav_expert_3.default,
          title: 'Get Top Tier PR  Media Exposure for Your Company for Free.',
          name: 'Adrian Salamunovic',
          location: 'San Francisco, CA',
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          amount: '$5',
          rating: 5,
          calls: 18,
          messages: 23
        },
        {
          coverImg: Images.cat_list_img_1.default,
          expertImg: Images.fav_expert_4.default,
          title: 'Get Top Tier PR  Media Exposure for Your Company for Free.',
          name: 'Adrian Salamunovic',
          location: 'San Francisco, CA',
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          amount: '$5',
          rating: 5,
          calls: 18,
          messages: 23
        },
        {
          coverImg: Images.cat_list_img_1.default,
          expertImg: Images.fav_expert_5.default,
          title: 'Get Top Tier PR  Media Exposure for Your Company for Free.',
          name: 'Adrian Salamunovic',
          location: 'San Francisco, CA',
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          amount: '$5',
          rating: 5,
          calls: 18,
          messages: 23
        },
      ],

      listSize: 3,
      listSize2: 3,
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


  render() {
    let listCount = this.state.listSize;
    let listCount2 = this.state.listSize2;

    return (
      <React.Fragment>

        <Header />

        <section id="fav_experts_sec" className="fav_experts_sec search_result_expert_sec">
          <div className="container">
            <div className="row">

              <div className="col-12">
                <p className="f20 f400 clr_black mb-3">Search Results For <span className="f500">Praveen</span></p>
                <div className="d-flex justify-content-between align-items-center category_listing_btns mob_justify_start">
                  <div className="d-flex listng_tabs">
                    <button className={`cmn_outline_grey_btn cmn_tab_btn ${this.state.listTab == 'expert' ? 'active' : ''}`} onClick={() => this.setState({ listTab: 'expert' })}>Experts</button>
                    <button className={`cmn_outline_grey_btn cmn_tab_btn ${this.state.listTab == 'listing' ? 'active' : ''}`} onClick={() => this.setState({ listTab: 'listing' })}>Listings</button>
                  </div>

                  <div className="right_side_btns d-flex align-items-center">

                    <p className="f16 f400 clr_black me-2 mb-2">Filter applied</p>

                    <button className='drop_wrapper'>
                      <UncontrolledButtonDropdown className="">
                        <DropdownToggle className="cmn_outline_grey_btn">
                          Showing <i className="fa fa-chevron-down ps-1"></i>
                        </DropdownToggle>
                        <DropdownMenu className='no_dropdown menu_start'>
                          <ul className="category_cmn_dropdown">
                            <li>
                              <Link to='/sub-category'>Recommended</Link>
                            </li>
                            <li>
                              <Link to='/sub-category'>Most Popular</Link>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </button>

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

              <div className={`col-12 cmn_tabs ${this.state.listTab == 'expert' ? 'show' : ''}`}>
                {
                  !this.state.expertList == '' ?
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
                  }) : 
                    <div className="no_search_result_found text-center">
                      <img src={Images.no_search_result.default} alt="" className="" />

                      <h2 className="f24 f600 clr_black mb-2 mt-3">Sorry, no results were found.</h2>
                      <p className="f15 f400 clr_grey">
                        Check your spelling  |  Try more general words | Try different words
                        that mean the same thing
                      </p>
                    </div>
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

              <div className={`col-12 cmn_tabs ${this.state.listTab == 'listing' ? 'show' : ''}`}>
                {
                  !this.state.listingList == '' ?
                    this.state.listingList.slice(0, listCount2).map((obj, key) => {
                      return (
                        <div className="fav_expert_card row">
                        <div className="col-12 col-lg-10">

                          <div className="d-flex cat_expert_list">
                            <div className="fav_expert_status">
                              <div className="cat_list_img">
                                <Link to="/">
                                  <img src={obj.coverImg} alt="" className="w-100" />
                                </Link>
                              </div>
                              <Link className="cat_expert_thumb d-block" to="/">
                                <img src={obj.expertImg} alt="" className="w-100" />
                              </Link>
                            </div>

                            <div className="fav_expert_details">
                              <Link className="f20 f600 clr_black mb-2 text_underline max_w_80" to="/">
                                {obj.title}
                              </Link>
                              <div className="d-flex align-items-center mb-2">
                                <p className="f15 f400 clr_grey me-2">{obj.name}</p>
                                <img src={Images.location.default} alt="" className="me-2" />
                                <p className="f15 f400 clr_grey">{obj.location}</p>
                              </div>
                              <p className="f16 f400 clr_black max_w_80 mb-3">
                                {obj.descryption}
                              </p>
                            </div>
                          </div>

                        </div>

                        <div className="col-12 col-lg-2">
                          <div className="expert_figures text-center">
                            <h2 className="f24 f600 clr_vlack mb-1">{obj.amount}</h2>
                            <p className="f14 f400 clr_grey mb-2">Per minute</p>
                            <Link to="/" className="theme_dark_btn  mb-2">Request A Call <i className="fa fa-chevron-right ms-3"></i></Link>

                            <div className="expert_star_rating d-flex align-items-center justify-content-center w-100">
                              <StarRatings
                                rating={obj.rating}
                                starRatedColor="#FFD203"
                                starEmptyColor='#E4E5E7'
                                numberOfStars={5}
                                name='expertRating'
                                starDimension='20px'
                                starSpacing= '0px'	
                                />
                              <p className="clr_grey f16 f400">(125)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
                    }) :
                    <div className="no_search_result_found text-center">
                      <img src={Images.no_search_result.default} alt="" className="" />

                      <h2 className="f24 f600 clr_black mb-2 mt-3">Sorry, no results were found.</h2>
                      <p className="f15 f400 clr_grey">
                        Check your spelling  |  Try more general words | Try different words
                        that mean the same thing
                      </p>
                    </div>
                }
                {
                  !this.state.listingList == '' && listCount2 < this.state.listingList.length ?
                    <div className="col-12 mt-4">
                      <div className="d-flex justify-content-center">
                        <button className="cmn_outline_grey_btn cat_load_btn" onClick={() => this.sizeIncreaser('listingList', 'listSize2')}>Load more</button>
                      </div>
                    </div>
                    : ''
                }
              </div>
            </div>
          </div>
        </section>

      </React.Fragment>

    )
  }
}
export default SearchResult;