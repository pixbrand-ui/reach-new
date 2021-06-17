import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
import StarRatings from 'react-star-ratings';
// import Slider from "react-slick";
// import {CommonNotifyModal} from 'Modals';
import { Images } from 'Constants';

class CategoryListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expertCard: [
        {
          coverImg: Images.cat_list_img_1.default,
          expertImg: Images.fav_expert_1.default,
          title: 'Video Marketing for Small Business Owners - a Specific Strategy Explained',
          name: 'Adrian Salamunovic',
          location: 'San Francisco, CA',
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          amount: "$5",
          rating: 1,
        },
        {
          coverImg: Images.cat_list_img_1.default,
          expertImg: Images.fav_expert_2.default,
          title: 'Video Marketing for Small Business Owners - a Specific Strategy Explained',
          name: 'Adrian Salamunovic',
          location: 'London',
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          amount: "$45",
          rating: 3,
        },
        {
          coverImg: Images.cat_list_img_1.default,
          expertImg: Images.fav_expert_8.default,
          title: 'Video Marketing for Small Business Owners - a Specific Strategy Explained',
          name: 'Adrian Salamunovic',
          location: 'America',
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          amount: "$35",
          rating: 2,
        },
        {
          coverImg: Images.cat_list_img_1.default,
          expertImg: Images.fav_expert_1.default,
          title: 'Video Marketing for Small Business Owners - a Specific Strategy Explained',
          name: 'Adrian Salamunovic',
          location: 'Australia',
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          amount: "$25",
          rating: 4,
        },
        {
          coverImg: Images.cat_list_img_1.default,
          expertImg: Images.fav_expert_2.default,
          title: 'Video Marketing for Small Business Owners - a Specific Strategy Explained',
          name: 'Adrian Salamunovic',
          location: 'Africa',
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          amount: "$15",
          rating: 3,
        },
        {
          coverImg: Images.cat_list_img_1.default,
          expertImg: Images.fav_expert_8.default,
          title: 'Video Marketing for Small Business Owners - a Specific Strategy Explained',
          name: 'Adrian Salamunovic',
          location: 'North America',
          descryption: 'Bio Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of...',
          amount: "$5",
          rating: 5,
        },

      ],

      listSize: 3,
      loadMore: true,


    }
  }

  sizeIncreaser = () => {
    let arrSize = this.state.expertCard.length;
    let size = this.state.listSize + 1;
    size <= arrSize ? size = size : size = arrSize;
    size == arrSize ? this.state.loadMore = false : this.state.loadMore = true;
    this.setState({listSize: size});
  }

  componentDidMount() {

  }

  componentWillUnmount = () => {
    
  };

  
  render() {
    let listCount = this.state.listSize;

    return (
      <React.Fragment>

        <Header />

        <section id="favourite_cmn_banner_sec" className="favourite_cmn_banner_sec" style={{ backgroundImage: `url(${Images.cmn_banner.default})` }}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8 col-md-6">
                <h1 className="f28 f600 clr_black mb-3">Digital Marketing</h1>
                <p className="f16 f400 clr_black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris condimentum viverra quam at pulvinar. Curabitur facilisis ante mattis orci.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="fav_experts_sec" className="fav_experts_sec">
          <div className="container">
            <div className="row m-0">

              <div className="col-12 px-0">
                <div className="d-flex justify-content-between category_listing_btns">
                  <div className="d-flex left_side_btns">
                    <Link to="/" className="cmn_outline_grey_btn">Wordpress</Link>
                    <Link to="/" className="cmn_outline_grey_btn">Software development</Link>
                    <Link to="sub-category-list" className="cmn_outline_grey_btn">Website design</Link>
                    <Link to="/" className="cmn_outline_grey_btn">Shopify</Link>

                    <button className='drop_wrapper'>
                      <UncontrolledButtonDropdown className="">
                        <DropdownToggle className="cmn_outline_grey_btn">
                          + 10 more <i className="fa fa-chevron-down ps-1"></i>
                        </DropdownToggle>
                        <DropdownMenu className='no_dropdown menu_start'>
                          <ul className="category_cmn_dropdown">
                            <li>
                              <Link to='/sub-category'>Wordpress</Link>
                            </li>
                            <li>
                              <Link to='/sub-category'>Software development</Link>
                            </li>

                            <li>
                              <Link to='/sub-category'>Website design</Link>
                            </li>

                            <li>
                              <Link to='/sub-category'>Shopify</Link>
                            </li>

                            <li>
                              <Link to='/sub-category'>Woocommerce</Link>
                            </li>

                            <li>
                              <Link to='/sub-category'>Webflow</Link>
                            </li>

                            <li>
                              <Link to='/sub-category'>Angular js</Link>
                            </li>

                            <li>
                              <Link to='/sub-category'>PHP</Link>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </button>

                  </div>

                  <div className="right_side_btns d-flex mob_justify_center">

                    <button className='drop_wrapper'>
                      <UncontrolledButtonDropdown className="">
                        <DropdownToggle className="cmn_outline_grey_btn">
                          Showing <i class="fa fa-chevron-down ps-1"></i>
                        </DropdownToggle>
                        <DropdownMenu className='no_dropdown menu_start '>
                          <ul className="category_cmn_dropdown">
                            <li>
                              <Link to='/'>Recommended</Link>
                            </li>
                            <li>
                              <Link to="/">Most Popular</Link>
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
                        <DropdownMenu className='no_dropdown menu_start mob_pos_right'>
                          <ul className="category_cmn_dropdown">
                            <li>
                              <Link to="/">Highest Rated</Link>
                            </li>
                            <li>
                              <Link to="/">Lowest Price</Link>
                            </li>
                            <li>
                              <Link to="/">Highest  Price</Link>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </button>

                  </div>
                </div>
              </div>

              <div className="col-12 mb-3 px-0">
                {
                  this.state.expertCard.slice(0 , listCount).map( (obj , key) => {
                    return(
                      <div className="fav_expert_card row">
                        <div className="col-12 col-lg-10">

                          <div className="d-flex cat_expert_list">
                            <div className="fav_expert_status">
                              <div className="cat_list_img">
                                <Link to="/single-listing">
                                  <img src={obj.coverImg} alt="" className="w-100" />
                                </Link>
                              </div>
                              <Link className="cat_expert_thumb d-block" to="/single-listing">
                                <img src={obj.expertImg} alt="" className="w-100" />
                              </Link>
                            </div>

                            <div className="fav_expert_details">
                              <Link className="f20 f600 clr_black mb-2 text_underline max_w_80" to="/single-listing">
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
                            {/* <ul className="rating_ul no_after">
                              {
                                this.state.starRating.slice(0 , obj.rating).map( (obj , key)=> {
                                  return(
                                    <li><img src={Images.star_rating_icon.default} alt="" /></li>
                                  )
                                })
                              }
                              <li><p className="clr_grey f16 f400">(125)</p></li>
                            </ul> */}

                            <div className="expert_star_rating d-flex align-items-center justify-content-center w-100">
                              <StarRatings
                                rating={obj.rating}
                                starRatedColor="#FFD203"
                                starEmptyColor='#E4E5E7'
                                // changeRating={this.changeRating}
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
                  })
                }
              </div>

              {
                this.state.loadMore ?
                  <div className="col-12">
                    <div className="d-flex justify-content-center">
                      <button className="cmn_outline_grey_btn cat_load_btn" onClick={()=> this.sizeIncreaser()}>Load more</button>
                    </div>
                  </div>
                  : ''
              }
            </div>
          </div>
        </section>


      </React.Fragment>
    )
  }
}



export default CategoryListing;