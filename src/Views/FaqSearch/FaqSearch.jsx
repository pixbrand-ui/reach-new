import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/IndexHeader'
import FaqBanner from '../../Components/FaqBanner'
import { Images } from 'Constants';

class FaqSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faqSearch: true
    }
  }


  componentDidMount() {

  }

  componentWillUnmount = () => {

  }


  render() {

    return (
      <React.Fragment>

        <Header />

        <FaqBanner />

        <section id="faq_search_section" className="faq_search_section">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                      {
                        this.state.faqSearch ?
                        <h2 className="f24 f600 clr_black mb-4">24 results found for "member"</h2>
                        :
                        <h2 className="f24 f600 clr_black">0 results found for "member"</h2>

                      }
                    </div>

                    <div className="col-12 col-md-6 col-lg-8">
                      {
                        this.state.faqSearch ?
                          <div>
                            <div className="policy_cmn_brdr pb-3 mb-3">
                              <h2 className="f18 f600 clr_black mb-3">Acceptance of Terms</h2>
                              <p className="f16 f400 clr_grey">
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                  when an unknown printer took a galley of type and scrambled it to make a type 
                                  specimen book.
                              </p>
                            </div>

                            <div className="policy_cmn_brdr pb-3 mb-3">
                              <h2 className="f18 f600 clr_black mb-3">Appointments and Financial Terms</h2>
                              <p className="f16 f400 clr_grey">
                                  It is a long established fact that a reader will be distracted by
                                  the readable content of a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a more-or-less normal distribution
                                  of letters, as opposed to using 'Content here, content here', making it
                                  look like readable English. Many desktop publishing packages and web page
                                  editors now use Lorem Ipsum as their default model text, and a search for
                                  'lorem ipsum' will uncover many web sites still in their infancy. Various
                                  versions have evolved over the years, sometimes by accident, sometimes on
                                  purpose (injected humour and the like).
                              </p>
                            </div>

                            <div className="policy_cmn_brdr pb-3 mb-3">
                              <h2 className="f18 f600 clr_black mb-3">General Financial Terms</h2>
                              <p className="f16 f400 clr_grey">
                                  It is a long established fact that a reader will be distracted by
                                  the readable content of a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a more-or-less normal distribution
                                  of letters, as opposed to using 'Content here, content here', making it
                                  look like readable English. Many desktop publishing packages and web page
                                  editors now use Lorem Ipsum as their default model text, and a search for
                                  'lorem ipsum' will uncover many web sites still in their infancy. Various
                                  versions have evolved over the years, sometimes by accident, sometimes on
                                  purpose (injected humour and the like).
                              </p>
                            </div>

                            <div className="policy_cmn_brdr pb-3 mb-3">
                              <h2 className="f18 f600 clr_black mb-3">Appointments and Financial Terms</h2>
                              <p className="f16 f400 clr_grey">
                                  It is a long established fact that a reader will be distracted by
                                  the readable content of a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a more-or-less normal distribution
                                  of letters, as opposed to using 'Content here, content here', making it
                                  look like readable English. Many desktop publishing packages and web page
                                  editors now use Lorem Ipsum as their default model text, and a search for
                                  'lorem ipsum' will uncover many web sites still in their infancy. Various
                                  versions have evolved over the years, sometimes by accident, sometimes on
                                  purpose (injected humour and the like).
                              </p>
                            </div>

                            <div className="pb-3 mb-3">
                              <h2 className="f18 f600 clr_black mb-3">No Endorsement</h2>
                              <p className="f16 f400 clr_grey">
                                  It is a long established fact that a reader will be distracted by
                                  the readable content of a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a more-or-less normal distribution
                                  of letters, as opposed to using 'Content here, content here', making it
                                  look like readable English. Many desktop publishing packages and web page
                                  editors now use Lorem Ipsum as their default model text, and a search for
                                  'lorem ipsum' will uncover many web sites still in their infancy. Various
                                  versions have evolved over the years, sometimes by accident, sometimes on
                                  purpose (injected humour and the like).
                              </p>
                            </div>

                          </div>
                          :
                          <div className="d-flex justify-content-center faq_search_blank mt-5">
                            <img src={Images.faq_search_blank.default} alt="" />
                            <h2 className="f24 f600 clr_black text-center w-100">0 results found for "member"</h2>
                          </div>
                      }
                    </div>


                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="policy_topics_sticky faq_contact_card">
                      <h2 className="f28 f600 clr_black mb-4 text-center">Can't find what <br />
                          you're looking for?
                      </h2>
                      <p className="f16 f400 clr_grey mb-4 text-center">
                          Send Us An Email. Phone Support Is Available By Appointment Only. 
                          Please Email Us Your Name, Phone Number, Problem/Issue And Availability 
                          Mon - Fri 9Am - 5Pm EDT.
                      </p>
                      <Link to="/contact-us" className="theme_dark_btn f18 f500">Contact Us <i className="fa fa-chevron-right ms-3"></i></Link>
                    </div>
                  </div>

                </div>
            </div>
        </section>


        </React.Fragment>
      )
    }
  }



export default FaqSearch;