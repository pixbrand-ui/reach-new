import React from 'react';
import { Link } from "react-router-dom";

import { Images } from 'Constants';
// import { CommonNotifyModal, LoginModal } from 'Modals';

class FaqBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  componentDidMount() {
  
  }

  componentWillUnmount() {

  }



  render() {

    return (
      <React.Fragment>

        <section id="faq_cmn_banner" className="faq_cmn_banner" style={{backgroundImage: `url(${Images.faq_banner.default})`}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-6">
                <h2 className="f32 f600 clr_black text-center mb-4">How Can We Help You?</h2>
                <div className="faq_banner_input">
                  <Link to="faq-search">
                    <img src={Images.search_icon_grey.default} alt="" />
                  </Link>
                  <input type="text" placeholder="Type keywords to find your answer" />
                </div>
                <p className="f16 f400 clr_black text-center">You can also browse the topics below to find what you are looking for.</p>
              </div>
            </div>
          </div>
        </section>

      </React.Fragment>
    )
  }
}


export default FaqBanner;
