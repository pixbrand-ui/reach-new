import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
// import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/ExpertHeader'
// import StarRatings from 'react-star-ratings';
// import Slider from "react-slick";
// import {CommonNotifyModal} from 'Modals';
import TagsInput from 'react-tagsinput'
import "react-tagsinput/react-tagsinput.css";
import { Images } from 'Constants';

class NewExpertiseImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ['Development' , 'Web applications' , 'websites-ui'],
      tag: '',

    }
  }

  handleChange(tags) {
    this.setState({tags})
  }
 
  handleChangeInput(tag) {
    this.setState({tag})
  }


  componentDidMount() {

  }

  componentWillUnmount() {
    
  };

  
  render() {

    return (
      <React.Fragment>

        <Header />

        <section id="become_expert_step_1" className="favourite_cmn_banner_sec become_expert_step_1"
            style={{backgroundImage: `url(${Images.cmn_banner.default})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="f28 f600 clr_black mb-3">New Area of Expertise</h2>
                        <p className="f14 f400 clr_black">Add expertise listings to your profile to make it easier for others to find you.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="no_expert_list_sec" className="expert_form_sec bg_grey no_expert_list_sec">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-7">

                        <div className="cmn_white_sec expertise_edit_sec">

                            <form action="javascript:void(0)" className="w-100">
                                <div className="row">
                                    <div className="col-12 mb-3">
                                        <div className="">
                                            <label for="title" className="f16 f400 clr_black mb-2 cursor_pointer">Title*</label>
                                            <input type="text" placeholder="I will give you advice on..." name="title"
                                                id="title" className="theme_input theme_grey_outline_input theme_input_2" />
                                            <p className="text-end f12 f400 clr_grey mt-2">80 character left</p>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="custom_select_icon">
                                            <label for="Category"
                                                className="f16 f400 clr_black mb-2 cursor_pointer">Category*</label>
                                            <select name="" id="Category"
                                                className="theme_input theme_grey_outline_input cursor_pointer">
                                                <option value="0">--Select City--</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="custom_select_icon">
                                            <label for="sub_cat" className="f16 f400 clr_black mb-2 cursor_pointer">Sub -
                                                Category*</label>
                                            <select name="" id="sub_cat"
                                                className="theme_input theme_grey_outline_input cursor_pointer">
                                                <option value="0">--Select State--</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 mb-2">
                                        <div>
                                            <label for="Description"
                                                className="f16 f400 clr_black mb-2 cursor_pointer">Description</label>
                                            <textarea name="" id="Description" cols="" rows="3"
                                                className="theme_input theme_grey_outline_input theme_input_2 w-100"
                                                placeholder="Describe your experience, training, etc that demonstrate your skills & passion. Also, describe the benefits they'll receive."></textarea>
                                        </div>
                                    </div>

                                    <div className="col-12 mb-3">
                                        <div className="col-12 mb-2">
                                          <div className="taginput">
                                            <label for="topics" className="f16 f400 clr_black mb-2 cursor_pointer w-100">Add Interest/topics</label>
                                            <TagsInput
                                              value={this.state.tags}
                                              onChange={(e)=> this.handleChange(e)}
                                              inputValue={this.state.tag}
                                              onChangeInput={(e)=> this.handleChangeInput(e)}
                                            />
                                          </div>
                                        </div>
                                    </div>

                                </div>
                            </form>

                        </div>
                        
                        <div className="col-12 my-3">
                            <div className="d-flex justify-content-end align-items-center">
                                <Link to="/new-expertise" className="cmn_outline_grey_btn coupon_apply_btn cmn_btn me-2">Go back</Link>
                                <Link to="/add-expertise-list" className="theme_dark_btn coupon_apply_btn cmn_btn">Continue</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-1 d-none d-lg-block"></div>

                    <div class="col-12 col-lg-4">
                      <div class="expertise_profile_img">
                        <img src={Images.expertise_profile.default} alt="" class='w-100' />

                        <div class="profile_controls">
                            <a href="javascript:void(0)" class="theme_dark_btn no_effect_btn me-2">Change</a>
                            <a href="javascript:void(0)" class="cmn_btn bg_red_btn">Remove</a>
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



export default NewExpertiseImg;