import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/IndexHeader'
import FaqBanner from '../../Components/FaqBanner'
import { Images } from 'Constants';

class FaqSingle extends React.Component {
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

        <FaqBanner />

        <section id="faq_search_section" class="faq_search_section">
            <div class="container">
              <div class="row">

                <div class="col-12">
                    <h2 class="f24 f600 clr_black mb-4">How to sign up works</h2>
                </div>

                <div class="col-12 col-md-6 col-lg-8">
                  <div class="mb-3">
                      <h2 class="f18 f600 clr_black mb-3">1. Sign up.</h2>
                      <p class="f16 f400 clr_grey mb-3">
                          <a href="javascript:void(0)" class="clr_blue text_underline">Signing up</a> is easy. And it's completely free. Whether you're looking for advice as a 
                          member or offering advice as an expert, you'll need to <a href="javascript:void(0)" class="clr_blue text_underline">create an account.</a> So your first 
                          step will be to figure out if you want to apply to be an expert and get paid for your 
                          advice or sign up as a member to get advice from experts. 
                      </p>
                      <div class="brdr_r_10">
                          <img src={Images.signup_img.default} alt="" class="w-100" />
                      </div>
                  </div>

                  <div class="mb-3">
                      <h2 class="f18 f600 clr_black mb-3">2. Verify your email</h2>
                      <p class="f16 f400 clr_grey mb-1">
                          Members can easily find experts to help with their business challenges by 
                          using our search. To schedule a call with an expert, the member provides a 
                          reason and approximate length of the call as well as 3 times and dates that 
                          work best for them. When <a href="javascript:void(0)" class="clr_blue text_underline">scheduling the call</a>, the member will be asked for a 
                          credit card. 
                      </p>
                      <p class="f16 f500 clr_black mb-4">A member is charged at that time for the initial call amount based on the rate and duration scheduled.</p>
                      <p class="f16 f400 clr_grey mb-3">
                          Experts have 72 hours to respond, or the call will expire (at no cost to the member). 
                          Experts will either confirm one of the requested times or send over new times that work 
                          better for them. This back and forth scheduling happens until a mutually agreed upon time 
                          is requested. Either party can also cancel the call if need be.
                      </p>
                      <div class="brdr_r_10">
                          <img src={Images.verify_your_email.default} alt="" class="w-100" />
                      </div>
                  </div>

                  <div class="mb-3">
                      <h2 class="f18 f600 clr_black mb-3">3. Select your intrested topics</h2>
                      <p class="f16 f400 clr_grey mb-3">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type 
                          specimen book. It has survived not only five centuries, but also the leap into 
                          electronic typesetting, remaining essentially unchanged. It was popularised in 
                          the 1960s with the release of Letraset sheets containing Lorem Ipsum passage
                      </p>
                      <div class="brdr_r_10">
                          <img src={Images.interested_topic_modal.default} alt="" class="w-100" />
                      </div>
                  </div>

                  <div class="mb-3">
                      <h2 class="f18 f600 clr_black mb-3">4. Connect and talk.</h2>
                      <p class="f16 f400 clr_grey mb-3">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type 
                          specimen book. It has survived not only five centuries, but also the leap into 
                          electronic typesetting, remaining essentially unchanged. It was popularised in 
                          the 1960s with the release of Letraset sheets containing Lorem Ipsum passage
                      </p>
                  </div>

                </div>

                <div class="col-12 col-md-6 col-lg-4">
                  <div class="policy_topics_sticky faq_contact_card">
                    <h2 class="f28 f600 clr_black mb-4 text-center">Can't find what <br />
                        you're looking for?
                    </h2>
                    <p class="f16 f400 clr_grey mb-4 text-center">
                        Send Us An Email. Phone Support Is Available By Appointment Only. 
                        Please Email Us Your Name, Phone Number, Problem/Issue And Availability 
                        Mon - Fri 9Am - 5Pm EDT.
                    </p>
                    <Link to="/contact-us" class="theme_dark_btn f18 f500">Contact Us <i class="fa fa-chevron-right ms-3"></i></Link>
                  </div>
                </div>

              </div>
            </div>
        </section>


        </React.Fragment>
      )
    }
  }



export default FaqSingle;