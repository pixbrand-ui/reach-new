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

        <section id="availabilty_sec" className="social_media_verification availabilty_sec">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <button className="f16 f400 clr_black mb-4" onClick={()=> this.goBack()}>
                            <i className="fa fa-chevron-left me-2"></i>Go back
                        </button>
                        <h2 className="f32 f600 clr_black mb-4">
                            Unavailability
                        </h2>
                    </div>

                    <div className="col-12">

                        <div className="cmn_white_sec expertise_edit_sec availability_form">
                            <div className="row">
                                
                                <div className="col-12 col-md-12 col-lg-7 col-lg-6 brdr_r_grey">
                                
                                    {/* ----------------Calendar------------------- */}
                                    <Datetime 
                                        className='customDatepicker'
                                    />
                                    
                                    <div className="custom_check_2 mb-3">
                                        <input type="checkbox" id="html" />
                                        <label htmlFor="html" className="f16 f400 clr_grey">Offline</label>
                                    </div>

                                    <Link href="javascript:void(0)" className="f16 f400 clr_red text_underline mb-3">Clear all offlines</Link>

                                    <p className="f14 f400 clr_grey">Where you are offline. your profile will not show in Lisitng. <Link to="javascript:void(0)" className="clr_blue text_underline mb-3">Know more</Link></p>


                                </div>

                                <div className="col-12 col-md-12 col-lg-4">
                                    <form action="post">
                                        <div className="custom_select_icon mb-3">
                                            <label htmlFor="s_time" className="f16 f400 clr_black mb-2 cursor_pointer">Start time*</label>
                                            <select name="" id="s_time" className="theme_input theme_input_2 theme_grey_outline_input cursor_pointer">
                                                <option value="0">--Start time--</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>

                                        <div className="custom_select_icon mb-3">
                                            <label htmlFor="e_time" className="f16 f400 clr_black mb-2 cursor_pointer">End time*</label>
                                            <select name="" id="e_time" className="theme_input theme_input_2 theme_grey_outline_input cursor_pointer">
                                                <option value="0">--End time--</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>

                                        <div>
                                            <Link to="" className="theme_dark_btn cmn_btn avlble_form_btn">Save</Link>
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