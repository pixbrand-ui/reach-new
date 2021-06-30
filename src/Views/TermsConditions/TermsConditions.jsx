import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Header from '../../Components/IndexHeader'
import { Images } from 'Constants';

class TermsConditions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

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

        <section id="cookie_sec" className="cookie_sec">
          <div className="container">
            <div className="row align-items-center">

              <div className="col-12 col-md-9">
                <p className="f16 f400 clr_black">
                  <img src={Images.clock_icon_dark.default} alt="" className="me-1" />
                  We use cookies to improve your experience using this site.
                </p>
              </div>

              <div className="col-12 col-md-3">
                <div className="d-flex justify-content-end">
                  <Link to="" className="cmn_blue_btn">Accept</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="single_policy_sec" className="single_policy_sec">
            <div className="container">

                <div className="row align-items-center m_b_150 ">
                    <div className="col-12 col-md-3 mob_mb_20">
                      <img src={Images.policy_img_1.default} alt="" className="w-100" />
                    </div>

                    <div className="col-md-1 d-md-block d-none"></div>

                    <div className="col-12 col-md-6">
                        <h2 className="f32 f600 clr_black mb-4">Terms & Condition</h2>
                        <p className="f16 f400 clr_black">
                            Be respectful of the people and communities on Patreon.
                            People are different. That’s what’s beautiful about the internet
                            and creativity: communities of varying types can assemble and
                            flourish. We want Patreon to be an intimate and safe venue for a
                            diverse range of creators and their communities. Please also look
                            at our Benefit Guidelines for more details about benefits.
                        </p>
                    </div>
                </div>

                <div className="row">

                    <div className="col-12 col-md-4 ">
                        <div className="policy_topics_sticky">
                            <h2 className="f24 f600 clr_black mb-3">TOPICS</h2>
                            <ul className="policy_topics">
                                <li>
                                    <Link 
                                      to="acceptance"
                                      className="f16 f500 clr_green"
                                      spy={true}
                                      activeClass="active"
                                      offset={-100}
                                      duration={1000}
                                      >
                                        Acceptance of Terms
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                      to="modification" 
                                      className="f16 f500 clr_green"
                                      spy={true}
                                      activeClass="active"
                                      offset={-100}
                                      duration={1000}
                                    >
                                      Modification
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                      to="eligibility" 
                                      className="f16 f500 clr_green"
                                      spy={true}
                                      activeClass="active"
                                      offset={-100}
                                      duration={1000}
                                    >
                                      Eligibility
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                    to="how_the_site" 
                                    className="f16 f500 clr_green"
                                    spy={true}
                                    activeClass="active"
                                    offset={-100}
                                    duration={1000}
                                    >
                                      How the Site, Application & Services Work
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                      to="" 
                                      className="f16 f500 clr_green"
                                      spy={true}
                                      activeClass="active"
                                      offset={-100}
                                      duration={1000}
                                    >
                                      User Account Registration
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                      to="" 
                                      className="f16 f500 clr_green"
                                      spy={true}
                                      activeClass="active"
                                      offset={-100}
                                      duration={1000}
                                    >
                                        Listings
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                      to="no_endoresement" 
                                      className="f16 f500 clr_green"
                                      spy={true}
                                      activeClass="active"
                                      offset={-100}
                                      duration={1000}
                                    >
                                        No Endorsement
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                      to="appoint_fin_terms" 
                                      className="f16 f500 clr_green"
                                      spy={true}
                                      activeClass="active"
                                      offset={-100}
                                      duration={1000}
                                    >
                                      Appointments and Financial Terms
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                      to="gen_fin_terms" 
                                      className="f16 f500 clr_green"
                                      spy={true}
                                      activeClass="active"
                                      offset={-100}
                                      duration={1000}
                                    >
                                      General Financial Terms
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                      to="" 
                                      className="f16 f500 clr_green"
                                      spy={true}
                                      activeClass="active"
                                      offset={-100}
                                      duration={1000}
                                    >
                                      Application License
                                    </Link>
                                </li>
                            </ul>
                            <Link to="/policy" className="f16 f500 clr_green">Back to Policy</Link>
                        </div>
                    </div>

                    <div className="col-12 col-md-8">

                        <div className="policy_cmn_brdr pb-3 mb-3" id="acceptance">
                            <h2 className="f24 f600 clr_black mb-4">Acceptance of Terms</h2>
                            <p className="f16 f400 clr_grey mb-4">
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

                        <div className="policy_cmn_brdr pb-3 mb-4" id="modification">
                            <h2 className="f24 f600 clr_black mb-4">Modification</h2>
                            <h3 className="f20 f500 clr_black mb-4">
                                To summarize: While it can be hard to grow a patron base, no one likes being
                                spammed. Be creative and original, don’t post repetitive comments or send unwanted
                                private messages to other members of the community.
                            </h3>
                            <p className="f16 f400 clr_grey mb-2">
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

                            <ul className="policy_modify_ul">
                                <li>
                                    <p className="f16 f400 clr_grey">
                                        Don’t create pledging schemes; don’t contact other creators to have a pledge-for-a-pledge kind
                                        of trade deal.
                                    </p>
                                </li>

                                <li>
                                    <p className="f16 f400 clr_grey">
                                        Don’t use Patreon to release or link to malware or phishing schemes.
                                    </p>
                                </li>

                                <li>
                                    <p className="f16 f400 clr_grey">
                                        Don’t make misleading posts to grow your patronage.
                                    </p>
                                </li>

                                <li>
                                    <p className="f16 f400 clr_grey">
                                        Don’t post comments on other creators’ pages promoting your own page.
                                    </p>
                                </li>

                                <li>
                                    <p className="f16 f400 clr_grey">
                                        Don’t send a large number of unsolicited private messages asking for support.
                                    </p>
                                </li>

                                <li>
                                    <p className="f16 f400 clr_grey">
                                        Don't use incorrect tagging in order to drive more search results.
                                    </p>
                                </li>

                                <li>
                                    <p className="f16 f400 clr_grey">
                                        Don’t post multiple paid posts per day if you are a per-post creator.
                                    </p>
                                </li>

                            </ul>

                        </div>

                        <div className="policy_cmn_brdr pb-3 mb-4">
                            <div id="eligibility">
                                <h2 className="f24 f600 clr_black mb-4">Eligibility</h2>
                                <p className="f16 f400 clr_grey mb-4">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                    took a galley of type and scrambled it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic typesetting, remaining essentially
                                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </p>
                            </div>

                            <div id="no_endoresement">
                                <h2 className="f18 f600 clr_black mb-4">No Endorsement</h2>
                                <p className="f16 f400 clr_grey mb-4">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                    took a galley of type and scrambled it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic typesetting, remaining essentially
                                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </p>
                            </div>

                            <div id="appoint_fin_terms">
                                <h2 className="f18 f600 clr_black mb-4">Appointments and Financial Terms</h2>
                                <p className="f16 f400 clr_grey mb-4">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                    took a galley of type and scrambled it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic typesetting, remaining essentially
                                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </p>
                            </div>

                            <div id="gen_fin_terms">
                                <h2 className="f18 f600 clr_black mb-4">General Financial Terms</h2>
                                <p className="f16 f400 clr_grey">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                    took a galley of type and scrambled it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic typesetting, remaining essentially
                                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </p>
                            </div>

                        </div>

                        <div className="policy_cmn_brdr pb-3 mb-4" id='how_the_site'>
                            <h2 className="f24 f600 clr_black mb-4">How the Site, Application & Services Work</h2>
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

                        <div>
                            <h2 className="f24 f600 clr_black mb-4">Acceptance of Terms</h2>
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

                </div>

            </div>
        </section>
        

        </React.Fragment>
      )
    }
  }



export default TermsConditions;