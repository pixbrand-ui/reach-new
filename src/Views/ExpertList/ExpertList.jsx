import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
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

        <section id="expert_listing" className="user_account_sec edit_profile_sec expert_listing">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <button className="f16 f400 clr_black mb-4" onClick={()=> this.goBack()}>
                            <i className="fa fa-chevron-left me-2"></i>Go back
                        </button>
                        <h2 className="f32 f600 clr_black mb-4">
                            Your Expertise Listings
                        </h2>
                    </div>

                    <div className="col-12">

                        <div className="fav_expert_card row bg_white">
                            <div className="col-12 col-lg-10">

                                <div className="d-flex cat_expert_list">
                                    <div className="fav_expert_status">
                                        <div className="cat_list_img">
                                            <Link to="">
                                                <img src={Images.expert_listing.default} alt="" className="w-100" />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="fav_expert_details">
                                        <Link className="f20 f500 clr_black mb-2 max_w_80" to="">
                                            Get Top Tier PR Media Exposure for Your Company for Free.
                                        </Link>
                                        <p className="f15 f400 mb-2">Created in a few seconds in 
                                            <span className="f500 clr_green"> Product & Design / Lean Startup</span>
                                        </p>
                                        <p className="f16 f400 clr_black max_w_80 mb-3">
                                            I will show you how to get you top-tier media exposure.
                                            Whether you want to be featured or Mashable,
                                            WSJ or Forbes, Inc. or Fast Company I’ve done it dozens of
                                            times and I have the experience to show you how you can do it ...
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-12 col-lg-2">
                                <div className="d-flex align-items-center justify-content-end mob_justify_center h-100">
                                    <Link to="/expert-edit" className="theme_dark_btn cmn_btn  mb-2 cat_load_btn">Edit</Link>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="col-12">
                        <div className="d-flex justify-content-between flex-wrap">
                            <div>
                                <Link to="/new-expertise" className="cmn_btn cmn_outline_grey_btn w-auto expertise_btn mb-2">+ Create new expertise</Link>
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