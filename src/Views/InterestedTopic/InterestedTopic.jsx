import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
// import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/ExpertHeader'
// import Slider from "react-slick";
// import {CommonNotifyModal} from 'Modals';
import TagsInput from 'react-tagsinput'
import "react-tagsinput/react-tagsinput.css";
import { Images } from 'Constants';

class InterestedTopic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ['Development' , 'Web applications' , 'websites-ui'],
      tag: '',
    }
  }


  goBack = () =>{
    window.history.back();
  }

  handleChange(tags) {
    this.setState({tags})
  }
 
  handleChangeInput(tag) {
    this.setState({tag})
  }

  componentDidMount() {

  }

  componentWillUnmount = () => {

  };


  render() {

    return (
      <React.Fragment>

        <Header></Header>

        <section id="basic_info_sec" class="basic_info_sec">
          <div class="container">
            <div class="row">

              <div class="col-12 mb-4">
                <button className="f16 f400 clr_black mb-4" onClick={()=> this.goBack()}>
                  <i className="fa fa-chevron-left me-2"></i>Go back
                </button>
                <h2 class="f32 f600 clr_black">
                  Interested Topics
                </h2>
              </div>

              <div class="col-12 col-lg-7">

                <div class="cmn_white_part">
                  <div class="row mx-0">

                    <form action="javascript:void(0)" class="w-100">

                        <div class="col-12 mb-2">
                          <div class="taginput">
                            <label for="bio" class="f16 f400 clr_black mb-2 cursor_pointer w-100">Add Interest/topics</label>
                            <TagsInput
                              value={this.state.tags}
                              onChange={(e)=> this.handleChange(e)}
                              inputValue={this.state.tag}
                              onChangeInput={(e)=> this.handleChangeInput(e)}
                            />

                          </div>
                        </div>

                        <div class="col-12">
                          <div class="d-flex justify-content-end">
                            <Link to='/' class="theme_dark_btn f18 f600">Save</Link>
                          </div>
                        </div>

                    </form>

                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-5">
                
                <img src={Images.interested_topics.default} class="w-100" />

              </div>
                      
            </div>
          </div>
        </section>

        </React.Fragment>
      )
    }
  }



export default InterestedTopic;