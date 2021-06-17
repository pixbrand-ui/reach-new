import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
// import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
// import StarRatings from 'react-star-ratings';
// import Slider from "react-slick";
// import {CommonNotifyModal} from 'Modals';
// import TagsInput from 'react-tagsinput'
import "react-tagsinput/react-tagsinput.css";
import { Images } from 'Constants';

class ExpertList extends React.Component {
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

  componentWillUnmount() {
    
  };

  
  render() {

    return (
      <React.Fragment>

        <Header />

        <section id="expert_listing" class="user_account_sec edit_profile_sec expert_listing">
            <div class="container">
                <div class="row">

                    <div class="col-12">
                        <button className="f16 f400 clr_black mb-4" onClick={()=> this.goBack()}>
                            <i className="fa fa-chevron-left me-2"></i>Go back
                        </button>
                        <h2 class="f32 f600 clr_black mb-4">
                            Your Expertise Listings
                        </h2>
                    </div>

                    <div class="col-12">

                        <div class="fav_expert_card row bg_white">
                            <div class="col-12 col-lg-10">

                                <div class="d-flex cat_expert_list">
                                    <div class="fav_expert_status">
                                        <div class="cat_list_img">
                                            <Link to="">
                                                <img src={Images.expert_listing.default} alt="" class="w-100" />
                                            </Link>
                                        </div>
                                    </div>

                                    <div class="fav_expert_details">
                                        <Link class="f20 f500 clr_black mb-2 max_w_80" to="">
                                            Get Top Tier PR Media Exposure for Your Company for Free.
                                        </Link>
                                        <p class="f15 f400 mb-2">Created in a few seconds in 
                                            <span class="f500 clr_green"> Product & Design / Lean Startup</span>
                                        </p>
                                        <p class="f16 f400 clr_black max_w_80 mb-3">
                                            I will show you how to get you top-tier media exposure.
                                            Whether you want to be featured or Mashable,
                                            WSJ or Forbes, Inc. or Fast Company I’ve done it dozens of
                                            times and I have the experience to show you how you can do it ...
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div class="col-12 col-lg-2">
                                <div class="d-flex align-items-center justify-content-end mob_justify_center h-100">
                                    <Link to="/expert-edit" class="theme_dark_btn cmn_btn  mb-2 cat_load_btn">Edit</Link>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="col-12">
                        <div class="d-flex justify-content-between flex-wrap">
                            <div>
                                <Link to="/new-expertise" class="cmn_btn cmn_outline_grey_btn w-auto expertise_btn mb-2">+ Create new expertise</Link>
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



export default ExpertList;