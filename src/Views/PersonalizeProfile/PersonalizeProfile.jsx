import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/ExpertHeader'
import { Images } from 'Constants';

class PersonalizeProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      

    }
  }



  componentDidMount() {

  }

  componentWillUnmount() {
    
  }
  goBack = () =>{
    window.history.back();
  }

  
  render() {

    return (
      <React.Fragment>

        <Header />

        <section id="become_expert_step_1" className="favourite_cmn_banner_sec become_expert_step_1"
            style={{backgroundImage: `url(${Images.cmn_banner.default})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="f28 f600 clr_black mb-3">Personalize Your Profile Page</h2>
                        <p className="f14 f400 clr_black">Your profile page is where others can learn more about you when making calls.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="expert_form_sec" className="expert_form_sec bg_grey">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-7">

                        <div className="cmn_white_part">
                            <div className="row ml-0 mr-0">

                                <form action="javascript:void(0)" className="w-100">

                                    <div className="row mr-0 ml-0">
                                        <div className="col-12 mb-2">
                                            <div>
                                                <label for="bio" className="f16 f400 clr_black mb-2 cursor_pointer">Bio</label>
                                                <textarea name="" id="bio" cols="" rows="4" className="theme_input theme_input_2 w-100">Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of Slicing Pie, multiple start-ups, angel investor, teaches.
                                                </textarea>
                                            </div>
                                        </div>

                                        <div className="col-12 mb-2">
                                            <div>
                                                <label for="resume" className="f16 f400 clr_black mb-2 cursor_pointer">Mini resume/title</label>
                                                <textarea name="" id="resume" cols="" rows="4" className="theme_input theme_input_2 w-100">Start-up Equity: I can help you determine exactly how much equity each person in your start up deserves. Inventor of the Grunt Fund, author of Slicing Pie, multiple start-ups, angel investor, teaches.
                                                </textarea>
                                            </div>
                                        </div>

                                        <div className="col-12 mb-3">
                                            <div className="custom_select_icon">
                                                <label for="hourly_rate" className="f16 f400 clr_black mb-2 cursor_pointer">Hourly Rates</label>
                                                <select name="" id="hourly_rate" className="theme_input theme_grey_outline_input cursor_pointer">
                                                    <option value="0">$20</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                </select>
                                            </div>
                                        </div>
                                        <p className="f14 f400 clr_grey">Your hourly income after fees (15%): $85.00</p>
                                    </div>

                                </form>


                            </div>
                        </div>
                            <div className="d-flex justify-content-end mt-2 expert_from_btns">
                                <button className="cmn_outline_grey_btn clr_grey f16 f600 me-2" onClick={()=> this.goBack()}>Go back</button>
                                <Link to="/add-expertise" className="theme_dark_btn cmn_btn f18 f600">Continue</Link>
                            </div>


                    </div>
                </div>
            </div>
        </section>
        


      </React.Fragment>
    )
  }
}



export default PersonalizeProfile;