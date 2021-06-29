import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/ExpertHeader'
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

        <section id="become_expert_step_1" className="favourite_cmn_banner_sec become_expert_step_1"
            style={{backgroundImage: `url(${Images.cmn_banner.default})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="f28 f600 clr_black mb-3">Add Your Areas of Expertise</h2>
                        <p className="f14 f400 clr_black">Add expertise listings to your profile to make it easier for others to find you.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="no_expert_list_sec" className="expert_form_sec bg_grey no_expert_list_sec">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="expert_content d-flex justify-content-center">
                            <div className="text-center no_expert_list_content">
                                <img src={Images.add_expertise_new.default} alt="" />
                                <h2 className="f24 f600 clr_black mb-3">No expertise listings</h2>
                                <p className="f15 f400 clr_grey mb-3">Create a listing to be found in search.</p>
                                <Link to="/new-expertise" className="theme_dark_btn cmn_btn f18 f600 mb-2 d-flex">New area of expertise</Link>
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