import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
import StarRatings from 'react-star-ratings';
// import Slider from "react-slick";
// import {CommonNotifyModal} from 'Modals';
import { Images } from 'Constants';

class SingleListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [ 
        { image: Images.fav_expert_1.default,
          name: 'Kate Kendall',
          date: 'Mar 5, 2021',
          review: 'Tony provided an unbiased overview of the actual requirements and expectations in operating a FedEx route business and provided more clarity to the actual day to day challenges.'
        },
        { image: Images.fav_expert_1.default,
          name: 'Kate Kendall',
          date: 'Mar 5, 2021',
          review: 'Tony provided an unbiased overview of the actual requirements and expectations in operating a FedEx route business and provided more clarity to the actual day to day challenges.'
        },
        { image: Images.fav_expert_1.default,
          name: 'Kate Kendall',
          date: 'Mar 5, 2021',
          review: 'Tony provided an unbiased overview of the actual requirements and expectations in operating a FedEx route business and provided more clarity to the actual day to day challenges.'
        },
        { image: Images.fav_expert_1.default,
          name: 'Kate Kendall',
          date: 'Mar 5, 2021',
          review: 'Tony provided an unbiased overview of the actual requirements and expectations in operating a FedEx route business and provided more clarity to the actual day to day challenges.'
        },
        { image: Images.fav_expert_1.default,
          name: 'Kate Kendall',
          date: 'Mar 5, 2021',
          review: 'Tony provided an unbiased overview of the actual requirements and expectations in operating a FedEx route business and provided more clarity to the actual day to day challenges.'
        },
      ],

      listSize: 3,
      loadMore: true,

    }
  }

  sizeIncreaser = (listName , listSize) => {
    let arrSize = this.state[listName].length;
    let size = this.state[listSize] + 1;
    size <= arrSize ? size = size : size = arrSize;
    this.setState({[listSize]: size});
  }


  goBack = () =>{
    window.history.back();
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    
  };

  
  render() {
    let listCount = this.state.listSize;

    return (
      <React.Fragment>

        <Header />

        <section id="single_listing_sec" className="single_listing_sec">
            <div className="container">
                <div className="row">

                    <div className="col-12 mb-3">
                      <button className="f16 f400 clr_black mb-3" onClick={()=> this.goBack()}>
                        <i className="fa fa-chevron-left me-2"></i>Go back
                      </button>
                    </div>

                    <div className="col-12 col-md-6 col-lg-7">
                        <div className="media_exposure mb-4">
                            <h2 className="f32 f600 clr_black mb-3">Get Top Tier PR Media Exposure For Your
                                Company For Free.
                            </h2>

                            <div className="mb-3">
                                <p className="f15 f400 d-inline-block me-2 clr_grey">Created 7 years ago in</p><Link to="/category-list" className="clr_green f15 f500">Business / Business Development</Link>
                            </div>

                            <div className="media_img mb-3">
                                <img src={Images.single_listing_page.default} alt="" className="w-100" />
                            </div>

                            <div>
                                <p className="f16 f400 mb-3 clr_black">
                                    I will show you how to get you top-tier media exposure. Whether you
                                    want to be featured in TechCrunch or Mashable, WSJ or Forbes, Inc. or
                                    Fast Company I’ve done it dozens of times and I have the experience to
                                    show you how you can do it.
                                </p>
                                <p className="f16 f400 clr_black">
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout. The point of using Lorem Ipsum is
                                    that it has a more-or-less normal distribution of letters, as opposed to using
                                    'Content here, content here', making it look like readable English.
                                </p>
                            </div>

                        </div>

                        <div className="related_topics pb-3 mb-3">
                            <h2 className="f24 f600 clr_black mb-3">Related Topics</h2>
                            <div className="">
                                <Link to='/' className="cmn_grey_btn">Mobile applications</Link>
                                <Link to='/' className="cmn_grey_btn">Website designs</Link>
                                <Link to='/' className="cmn_grey_btn">Web developments</Link>
                                <Link to='/' className="cmn_grey_btn">Android apps</Link>
                            </div>
                        </div>

                        <div className="reviews">
                          <h2 className="f24 f600 clr_black mb-3">Reviews</h2>

                          {
                            this.state.reviews.slice(0 , listCount).map( (obj , key)=> {
                              return(
                                <div className="review_card">
                                  <div className="review_img">
                                      <img src={obj.image} alt="" className="w-100" />
                                  </div>
                                  <div className="review_detail">

                                      <div className="d-flex justify-content-between w-100 mb-4">
                                          <h5 className="f16 f600 clr_black">{obj.name}</h5>
                                          <p className="f14 f400 clr_grey">{obj.date}</p>
                                      </div>

                                      <div className="review_msg">
                                          <p className="f14 f400 clr_black">
                                            {obj.review}
                                          </p>
                                      </div>


                                  </div>
                                </div>
                              )
                            })
                          }

                        </div>

                        {
                          this.state.loadMore && listCount < this.state.reviews.length ?
                            <div className="d-flex justify-content-center">
                              <button className="cmn_outline_grey_btn cat_load_btn" onClick={()=> this.sizeIncreaser('reviews' , 'listSize')}>Load more</button>
                            </div>
                          :''
                        }

                    </div>

                    <div className="col-lg-1 d-lg-block d-none"></div>


                    <div className="col-12 col-md-6 col-lg-4">

                        <div className="wrapper_for_pos_sicky">
                            <div className="expert_figures text-center single_list_figure mb-4">
                                <div>
                                    <h2 className="f24 f600 clr_vlack mb-1">$5</h2>
                                    <p className="f14 f400 clr_grey mb-2">Per minute</p>
                                    <Link to="/" className="theme_dark_btn f600  mb-2 w-100 clr_green">Request A Call <i className="fa fa-chevron-right ms-1"></i></Link>
                                    <button className="cmn_outline_grey_btn mb-2 w-100 f16 f600 clr_grey" onClick={()=> this.setState({favExpert: !this.state.favExpert})}>
                                      {
                                        this.state.favExpert ?  'Removed From Favorites' : 'Save to Favorites'
                                      } 
                                      <i className={`fa-heart ms-1 ${this.state.favExpert ? 'fas clr_red' : 'far'}`}></i>
                                    </button>
                                    <p className="clr_grey f14 f400 mb-2">Saved 19 times</p>
                                    
                                    <div className="d-flex rating_wrapper justify-content-center">
                                      <StarRatings
                                        rating={3}
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

                            <div className="single_user_info">

                                <div className="user_img_info mb-3">
                                    <div className="d-flex">
                                        <div className="user_img">
                                            <Link to='/'><img src={Images.expert_2.default} alt="" /></Link>
                                        </div>
                                        <div className="user_info ms-3">
                                            <Link to='/'>
                                                <h6 className="f16 f600 clr_black mb-2">Tony DiNitto</h6>
                                            </Link>
                                            <p className="f14 f400 clr_grey">Raleigh, NC</p>
                                            <Link to='/' className="f14 f400 clr_blue text_underline">Send message</Link>
                                        </div>
                                    </div>
                                </div>

                                <p className="f14 f400 clr_black mb-3">
                                    Start-up Equity: I can help you determine exactly how
                                    much equity each person in your start up deserves.
                                    Inventor of the Grunt Fund, author of Slicing Pie, multiple start-ups, angel investor, teaches.
                                </p>

                                <ul className="single_user_ul">
                                    <li className="d-inline-flex align-items-center">
                                        <Link to='/' className="clr_black w-100 text-center"><img src={Images.star_icon.default} alt="" className="me-2" />5</Link>
                                    </li>
                                    <li className="d-inline-flex align-items-center">
                                        <Link to='/' className="clr_black w-100 text-center"><img src={Images.phone_icon.default} alt="" className="me-2" />18</Link>
                                    </li>
                                    <li className="d-inline-flex align-items-center">
                                        <Link to='/' className="clr_black w-100 text-center"><img src={Images.chat_icon.default} alt="" className="me-2" />23</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

      </React.Fragment>
    )
  }
}



export default SingleListing;