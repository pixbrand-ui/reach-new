import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
import StarRatings from 'react-star-ratings';
import {CommonNotifyModal} from 'Modals';
import { Images } from 'Constants';

class ViewProfile extends React.Component {
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

      relatedTopics: [
        {
          image: Images.cat_list_img_1.default,
          title: 'Get Top Tier PR Media Exposure for Your Company for Free.',
          descrypt: 'Owned FedEx routes for years and ran and owned bread routes (Mission, Sara Lee, Bimbo, etc) as well. Years spent consulting new route owners as well as brokering routes...'
        },
        {
          image: Images.charles_blog_1.default,
          title: 'Get Top Tier PR Media Exposure for Your Company for Free.',
          descrypt: 'Owned FedEx routes for years and ran and owned bread routes (Mission, Sara Lee, Bimbo, etc) as well. Years spent consulting new route owners as well as brokering routes...'
        },
        {
          image: Images.charles_blog_2.default,
          title: 'Get Top Tier PR Media Exposure for Your Company for Free.',
          descrypt: 'Owned FedEx routes for years and ran and owned bread routes (Mission, Sara Lee, Bimbo, etc) as well. Years spent consulting new route owners as well as brokering routes...'
        },
        {
          image: Images.charles_blog_3.default,
          title: 'Get Top Tier PR Media Exposure for Your Company for Free.',
          descrypt: 'Owned FedEx routes for years and ran and owned bread routes (Mission, Sara Lee, Bimbo, etc) as well. Years spent consulting new route owners as well as brokering routes...'
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
    
  }

  openModal = (modalName) =>{
    this.setState({[modalName] : true })
  }
  
  closeModal = (modalName) =>{
    this.setState({[modalName] : false })
  }

  
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
                        
                        <div className="single_expert_sec mb-4">
                          <div className="single_expert_bg" style={{backgroundImage: `url(${Images.cmn_banner.default})`}}></div>

                          <div className="sinle_expert_profile text-center">
                              <div className="profile_img">
                                  <Link to='' className="d-block"><img src={Images.fav_expert_1.default} alt="" className="w-100" /></Link>
                              </div>
                              <h2 className="f24 f600  mb-3"><Link to='' className="clr_black">Kate Kendall</Link></h2>
                              <p className="clr_grey f15 f400 mb-3">
                                  <img src={Images.location.default} alt="" className="ms-1" /> San Francisco, CA
                                  <img src={Images.clock_icon.default} alt="" className="ms-2 mb-1" />9:00 AM - 11:00 PM
                              </p>
                              <p className="f16 f400 clr_black">
                                  I've bought, sold, flipped, managed, ran, brokered, and consulted
                                  on different types of routes (eg. FedEx, Snyders, Flowers, Pepperidge
                                  Farm, Bimbo Bakeries, Mission Tortilla, etc). I can quickly help you
                                  determine if routes are right for you or not, as well as help you determine… <span className="f500 clr_black text_underline cursor_pointer" onClick={()=> this.openModal('detailExpert')}>Read More</span>
                              </p>
                          </div>
                        </div>

                        <div className="related_topics pb-3 mb-3">
                          <h2 className="f24 f600 clr_black mb-3">Related Topics</h2>

                            {
                              this.state.relatedTopics.map((obj , key)=> {
                                return(
                                  <div className="fav_expert_card row">
                                    <div className="col-12">
                                      <div className="d-flex cat_expert_list single_expert_list">
                                          <div className="fav_expert_status">
                                              <div className="cat_list_img">
                                                  <Link to="/single-listing">
                                                    <img src={obj.image} alt="" className="w-100" />
                                                  </Link>
                                              </div>
                                          </div>
                                          <div className="fav_expert_details">
                                              <Link className="f20 f600 clr_black mb-2" to="/single-listing">
                                                {obj.title}
                                              </Link>
                                              <div className="d-flex align-items-center mb-2">
                                                <p className="f15 f400 clr_grey me-2">Adrian Salamunovic</p>
                                                <img src={Images.location.default} alt="" className="me-2" />
                                                <p className="f15 f400 clr_grey">San Francisco, CA</p>
                                              </div>
                                              <p className="f16 f400 clr_black  mb-3">
                                                {obj.descrypt}
                                              </p>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
                                )
                              })
                            }

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
                            <div className="expert_figures text-center single_list_figure mb-2">
                                <div>
                                    <h2 className="f24 f600 clr_vlack mb-1">$5</h2>
                                    <p className="f14 f400 clr_grey mb-2">Per minute</p>
                                    <Link to="/" className="theme_dark_btn f600  mb-2 w-100 clr_white bg_green">Request A Call <i className="fa fa-chevron-right ms-1"></i></Link>
                                    
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

                            <div className="single_user_info mb-2">
                              <ul className="single_user_ul">
                                <li className="d-inline-flex align-items-center">
                                    <Link to="" className="clr_black w-100 text-center"><span className="f600 f20">1270</span> <br /> <span className="f14 f400">Call</span></Link>
                                </li>
                                <li className="d-inline-flex align-items-center">
                                    <Link to="" className="clr_black w-100 text-center"><span className="f600 f20">05</span> <br /> <span className="f14 f400">Reveiws</span></Link>
                                </li>
                              </ul>
                            </div>

                            <div className="verified_user expert_cmn_card mb-2">
                              <h2 className="f20 f600 clr_black mb-3">Verified</h2>

                              <div className="user_verified_account">

                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <img src={Images.phone_icon_dark.default} alt="" className="me-2" />
                                        <Link to='' className="clr_black f15 f400">XXX-XXX-28</Link>
                                    </div>
                                    <div>
                                        <p className="clr_grey f15 f400">(XXX) XXX-XX28</p>
                                    </div>
                                </div>


                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <img src={Images.facebook_icon.default} alt="" className="me-2" />
                                        <Link to='' className="clr_black f15 f400">Facebook</Link>
                                    </div>
                                    <div>
                                        <Link to='' className="clr_blue text_underline f15 f400">Visit Profile</Link>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <img src={Images.linkedin_icon.default} alt="" className="me-2" />
                                        <Link to='' className="clr_black f15 f400">Linkedin</Link>
                                    </div>
                                    <div>
                                        <p className="clr_grey f15 f400">Not Connected</p>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <img src={Images.google_icon.default} alt="" className="me-2" />
                                        <Link to='' className="clr_black f15 f400">Gmail</Link>
                                    </div>
                                    <div>
                                        <p className="clr_grey f15 f400">Not Connected</p>
                                    </div>
                                </div>

                              </div>
                            </div>

                            <div className="interested_topics expert_cmn_card mb-2">
                              <h2 className="f20 f600 clr_black mb-3">Interested Topics</h2>
                              <div className="">
                                  <Link to='' className="cmn_grey_btn">Mobile applications</Link>
                                  <Link to='' className="cmn_grey_btn">Website designs</Link>
                                  <Link to='' className="cmn_grey_btn">Android apps</Link>
                                  <Link to='' className="cmn_grey_btn">Web developments</Link>
                                  <Link to='' className="cmn_grey_btn">Apps</Link>
                                  <Link to='' className="cmn_grey_btn">Wordpress</Link>
                                  <Link to='' className="cmn_grey_btn">Woocommerce website</Link>

                              </div>
                            </div>
                            <p className="f15 f400 clr_black text-center">Member since June 2014</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Detail Expert modal */}
        <CommonNotifyModal open={(this.state.detailExpert) ? true : false} toggle={()=> this.closeModal('detailExpert')} className={'detail_expert_modal'}>
          <span className="modal_closer" onClick={()=> this.closeModal('detailExpert')}><img src={Images.cross.default} alt="" /></span>
            <div className="mb-4 brdr_r_5">
                <div className="single_expert_bg" style={{backgroundImage: `url(${Images.cmn_banner.default})`}}></div>

                <div className="sinle_expert_profile text-center">
                    <div className="profile_img">
                        <Link to="javascript:void(0)" className="d-block"><img src={Images.fav_expert_1.default} alt="" className="w-100" /></Link>
                    </div>
                    <h2 className="f24 f600  mb-3"><a href="javascript:void(0)" className="clr_black">Kate Kendall</a></h2>
                    <p className="clr_grey f15 f400 mb-3">
                        <img src={Images.location.default} alt="" className="mb-1" /> San Francisco, CA
                        <img src={Images.clock_icon.default} alt="" className="ms-2 mb-1" />9:00 AM - 11:00 PM
                    </p>
                    <p className="f16 f400 clr_black mb-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. 
                    </p>

                    <p className="f16 f400 clr_black mb-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. 
                    </p>

                    <p className="f16 f400 clr_black mb-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. 
                    </p>
                </div>
            </div>

        </CommonNotifyModal>
        

      </React.Fragment>
    )
  }
}



export default ViewProfile;