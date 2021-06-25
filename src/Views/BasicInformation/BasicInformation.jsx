import React from 'react';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/ExpertHeader'
import { Images } from 'Constants';

class BasicInformation extends React.Component {
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
                  Basic Information
                </h2>
              </div>
              <div className="col-12 col-lg-7">

                <div className="cmn_white_part">
                  <div className="row mx-0">

                    <form action="javascript:void(0)" className="w-100">

                      <div className="col-12 mb-3">
                        <label for="profile_picture" className="cursor_pointer">
                          <div className="choose_img">
                            <div className="profile_img">
                              <img src="" alt="" className="main_img" />
                              <span className='f18 f500 clr_black'>AM</span>
                              <img src={Images.edit_icon.default} alt="" className="edit_icon" />
                            </div>
                            <span className="f16 f500 clr_black">Chooose image</span>
                            <input type="file" id="profile_picture" />
                          </div>
                        </label>
                      </div>

                    
                      <div className="row mr-0 ml-0">
                        <div className="col-12 col-md-6 mb-2">
                          <div>
                            <label for="f_name" className="f16 f400 clr_black mb-2 cursor_pointer cursor_pointer">Full name*</label>
                            <input type="text" id="f_name" className="theme_input theme_input_2" />
                          </div>
                        </div>

                        <div className="col-12 col-md-6 mb-2">
                          <div>
                            <label for="u_name" className="f16 f400 clr_black mb-2 cursor_pointer">Username*</label>
                            <input type="text" id="u_name" className="theme_input theme_input_2" />
                          </div>
                        </div>

                        <div className="col-12 mb-2">
                          <div>
                            <label for="bio" className="f16 f400 clr_black mb-2 cursor_pointer">Bio</label>
                            <textarea name="" id="bio" cols="" rows="3" className="theme_input theme_input_2 w-100">Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of Slicing Pie, multiple start-ups, angel investor, teaches.</textarea>
                          </div>
                        </div>

                        <div className="col-12 col-md-6 mb-2">
                          <div>
                            <label for="u_email" className="f16 f400 clr_black mb-2 cursor_pointer">Email*</label>
                            <input type="email" id="u_email" className="theme_input theme_input_2" />
                          </div>
                        </div>

                        <div className="col-12 col-md-6 mb-2">
                          <label for="mob_number" className="mb-2 cursor_pointer">Mobile number</label>
                          <div className="input-group custom_drop_input">

                              <UncontrolledButtonDropdown className="">
                                <DropdownToggle className="border_none">
                                  <button className="btn bg_green clr_white f15 f500">
                                    +91<i className="fa fa-caret-down f12 ms-1"></i>
                                  </button>
                                </DropdownToggle>
                                <DropdownMenu className=''>

                                  <ul>
                                    <li><Link className="dropdown-item">Action</Link></li>
                                    <li><Link className="dropdown-item">Another action</Link></li>
                                    <li><Link className="dropdown-item">Something else here</Link></li>
                                  </ul>

                                </DropdownMenu>
                              </UncontrolledButtonDropdown>
                            <input type="text" id="mob_number" className="theme_input theme_input_2 form-control" aria-label="Text input with dropdown button" />
                          </div>
                        </div>

                        <div className="col-12 mb-3">
                          <div>
                            <label for="location" className="f16 f400 clr_black mb-2 cursor_pointer">Your Location*</label>
                            <input type="text" id="location" className="theme_input theme_input_2" />
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="d-flex justify-content-end">
                            <Link to='/' className="theme_dark_btn f18 f600">Save Changes</Link>
                          </div>
                        </div>

                      </div>
                    </form>


                  </div>
                </div>


              </div>

              <div className="col-12 col-lg-5">
                
                <img src={Images.basic_information_img.default} className="w-100 cmn_sec_right_img" />

              </div>
            </div>
          </div>
        </section>

        </React.Fragment>
      )
    }
  }



export default BasicInformation;