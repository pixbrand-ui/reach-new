import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/IndexHeader'
import { Images } from 'Constants';

class Policy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      policy: [
        {
          image: Images.policy_img_1.default,
          title: 'Terms Of Use',
          details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.'
        },
        {
          image: Images.policy_img_2.default,
          title: 'Privacy Policy',
          details: 'It is a long established fact that a reader will be distracted by the readable content of a page'
        },
        {
          image: Images.policy_img_3.default,
          title: 'Community Guidelines',
          details: 'when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution'
        },
        {
          image: Images.policy_img_4.default,
          title: 'Cookie Policy',
          details: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text'
        },
        {
          image: Images.policy_img_5.default,
          title: 'Benefit Guidelines',
          details: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
          image: Images.policy_img_6.default,
          title: 'Security Policy',
          details: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.'
        },
        {
          image: Images.policy_img_1.default,
          title: 'Payment',
          details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.'
        },
        {
          image: Images.policy_img_2.default,
          title: 'Developer',
          details: 'It is a long established fact that a reader will be distracted by the readable content of a page'
        },
        {
          image: Images.policy_img_3.default,
          title: 'Accessibility',
          details: 'when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution'
        },

      ],

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

        <section id="policy_sec" className="policy_sec">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-6">
                <div className="content">
                  <h2 className="f32 f600 clr_black mb-4 text-center">Policy</h2>
                  <p className="f16 f500 clr_black text-center">
                    Thanks for taking the time to learn about our policies! Our mission
                    at Patreon is to fund the creative class, and these policies are designed
                    to help us all achieve that goal by setting a few guidelines.
                  </p>

                </div>
              </div>
            </div>

            <div className="row policy_main_row">

              {
                this.state.policy.map( (obj , key)=> {
                  return(
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="policy_card">
                        
                        <Link to="/single-policy">
                          <div className="policy_img">
                            <img src={obj.image} alt="" className="w-100" />
                          </div>

                          <h2 className="f20 f600 clr_black text-center">{obj.title}</h2>
                          <p className="clr_grey f16 f400 text-center">
                            {obj.details}
                          </p>
                        </Link>

                      </div>
                    </div>
                  )
                })
              }
              
            </div>

          </div>
        </section>
        

        </React.Fragment>
          )
    }
  }



          export default Policy;