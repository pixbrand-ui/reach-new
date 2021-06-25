import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'

import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

import { Images } from 'Constants';


class ExpertAvailability extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  goBack = () =>{
    window.history.back();
  }


  componentDidMount() {

  }

  componentWillUnmount() {
    
  }
  
  render() {
      

    return (
      <React.Fragment>

        <Header />

        <section id="availabilty_sec" class="social_media_verification availabilty_sec">
            <div class="container">
                <div class="row">

                    <div class="col-12">
                        <button className="f16 f400 clr_black mb-4" onClick={()=> this.goBack()}>
                            <i className="fa fa-chevron-left me-2"></i>Go back
                        </button>
                        <h2 class="f32 f600 clr_black mb-4">
                            Unavailability
                        </h2>
                    </div>

                    <div class="col-12">

                        <div class="cmn_white_sec expertise_edit_sec availability_form">
                            <div class="row">
                                
                                <div class="col-12 col-md-12 col-lg-7 col-lg-6 brdr_r_grey">
                                
                                    {/* ----------------Calendar------------------- */}
                                    <Datetime 
                                        className='customDatepicker'
                                    />
                                    
                                    <div class="custom_check_2 mb-3">
                                        <input type="checkbox" id="html" />
                                        <label htmlFor="html" class="f16 f400 clr_grey">Offline</label>
                                    </div>

                                    <Link href="javascript:void(0)" class="f16 f400 clr_red text_underline mb-3">Clear all offlines</Link>

                                    <p class="f14 f400 clr_grey">Where you are offline. your profile will not show in Lisitng. <Link to="javascript:void(0)" class="clr_blue text_underline mb-3">Know more</Link></p>


                                </div>

                                <div class="col-12 col-md-12 col-lg-4">
                                    <form action="post">
                                        <div class="custom_select_icon mb-3">
                                            <label htmlFor="s_time" class="f16 f400 clr_black mb-2 cursor_pointer">Start time*</label>
                                            <select name="" id="s_time" class="theme_input theme_input_2 theme_grey_outline_input cursor_pointer">
                                                <option value="0">--Start time--</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>

                                        <div class="custom_select_icon mb-3">
                                            <label htmlFor="e_time" class="f16 f400 clr_black mb-2 cursor_pointer">End time*</label>
                                            <select name="" id="e_time" class="theme_input theme_input_2 theme_grey_outline_input cursor_pointer">
                                                <option value="0">--End time--</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>

                                        <div>
                                            <Link to="" class="theme_dark_btn cmn_btn avlble_form_btn">Save</Link>
                                        </div>

                                    </form>
                                </div>

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



export default ExpertAvailability;