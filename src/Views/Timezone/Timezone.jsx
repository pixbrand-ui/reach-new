import React from 'react';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/ExpertHeader'
import { Images } from 'Constants';

class Timezone extends React.Component {
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

  componentWillUnmount = () => {

  };


  render() {

    return (
      <React.Fragment>

        <Header></Header>

        <section id="basic_info_sec" className="basic_info_sec">
          <div className="container">
            <div className="row">

              <div className="col-12 mb-4">
                <button className="f16 f400 clr_black mb-4" onClick={()=> this.goBack()}>
                  <i className="fa fa-chevron-left me-2"></i>Go back
                </button>
                <h2 className="f32 f600 clr_black">
                  Timezone
                </h2>
              </div>

              <div className="col-12 col-lg-7">

                <div className="cmn_white_part">
                  <div className="row mx-0">

                    <form action="javascript:void(0)" className="w-100">

                        <div className="col-12 mb-2">
                          <div className="custom_select_icon">
                            <label for="bio" className="f16 f400 clr_black mb-2 cursor_pointer">Your Timezone</label>
                            <select name="" id="" className="theme_input theme_input_2 cursor_pointer">
                                <option value="0">(GMT-08:00) Pacific Time (US & Canada)</option>
                                <option value="0">(GMT-08:00) Pacific Time (US & Canada)</option>
                                <option value="0">(GMT-08:00) Pacific Time (US & Canada)</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="d-flex justify-content-end">
                            <Link to='/' className="theme_dark_btn f18 f600">Save</Link>
                          </div>
                        </div>

                    </form>

                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-5">
                
                <img src={Images.timezone_img.default} className="w-100" />

              </div>
                      
            </div>
          </div>
        </section>

        </React.Fragment>
      )
    }
  }



export default Timezone;