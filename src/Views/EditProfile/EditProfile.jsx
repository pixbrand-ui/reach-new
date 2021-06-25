import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/ExpertHeader'
import { Images } from 'Constants';

class EditProfile extends React.Component {
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

        <section id="edit_profile_sec" className="user_account_sec edit_profile_sec">
          <div className="container">
            <div className="row">

              <div className="col-12">
                <button className="f16 f400 clr_black mb-4" onClick={()=> this.goBack()}>
                  <i className="fa fa-chevron-left me-2"></i>Go back
                </button>
                <h2 className="f32 f600 clr_black mb-4">
                  Edit Profile
                </h2>
              </div>
              <div className="col-12 col-lg-7">

                <div className="user_account_card user_edit_pro_card">
                  <Link to="/basic-information" className="d-flex justify-content-between align-items-center">
                    <div>
                      <h3 className="f20 f600 clr_black mb-2">Basic Information</h3>
                      <p className="f14 f400 clr_grey">Basic Information, Topics, Photo, Become an expert.</p>
                    </div>
                    <div>
                      <i className="fa fa-chevron-right clr_grey"></i>
                    </div>
                  </Link>
                </div>

                <div className="user_account_card user_edit_pro_card">
                  <Link to="timezone" className="d-flex justify-content-between align-items-center">
                    <div>
                      <h3 className="f20 f600 clr_black mb-2">Timezone</h3>
                      <p className="f14 f400 clr_grey">Credit Card, Debit card, Stripe, billing address Details</p>
                    </div>
                    <div>
                      <i className="fa fa-chevron-right clr_grey"></i>
                    </div>
                  </Link>
                </div>

                <div className="user_account_card user_edit_pro_card">
                  <Link to="interested-topic" className="d-flex justify-content-between align-items-center">
                    <div>
                      <h3 className="f20 f600 clr_black mb-2">Interested Topics</h3>
                      <p className="f14 f400 clr_grey">Connect your social media account</p>
                    </div>
                    <div>
                      <i className="fa fa-chevron-right clr_grey"></i>
                    </div>
                  </Link>
                </div>


              </div>

              <div className="col-12 col-lg-5">
                
                <img src={Images.edit_profile.default} className="w-100" />

              </div>
            </div>
          </div>
        </section>

        </React.Fragment>
      )
    }
  }



export default EditProfile;