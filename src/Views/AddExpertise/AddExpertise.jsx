import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
// import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/ExpertHeader'
// import StarRatings from 'react-star-ratings';
// import Slider from "react-slick";
// import {CommonNotifyModal} from 'Modals';
import { Images } from 'Constants';

class AddExpertise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      

    }
  }



  componentDidMount() {

  }

  componentWillUnmount() {
    
  };

  
  render() {

    return (
      <React.Fragment>

        <Header />

        <section id="become_expert_step_1" class="favourite_cmn_banner_sec become_expert_step_1"
            style={{backgroundImage: `url(${Images.cmn_banner.default})`}}>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="f28 f600 clr_black mb-3">Add Your Areas of Expertise</h2>
                        <p class="f14 f400 clr_black">Add expertise listings to your profile to make it easier for others to find you.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="no_expert_list_sec" class="expert_form_sec bg_grey no_expert_list_sec">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="expert_content d-flex justify-content-center">
                            <div class="text-center no_expert_list_content">
                                <img src={Images.add_expertise_new.default} alt="" />
                                <h2 class="f24 f600 clr_black mb-3">No expertise listings</h2>
                                <p class="f15 f400 clr_grey mb-3">Create a listing to be found in search.</p>
                                <a href="/new-expertise" class="theme_dark_btn cmn_btn f18 f600 mb-2 d-flex">New area of expertise</a>
                                {/* <a href="personalize_profile_page.php" class="cmn_outline_grey_btn cmn_btn d-flex f18 f600">Go back</a> */}
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



export default AddExpertise;