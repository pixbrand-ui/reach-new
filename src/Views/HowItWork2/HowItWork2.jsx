import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
import Slider from "react-slick";
import { Images } from 'Constants';

import TestSlider from 'Components/TestSlider';

class HowItWork2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testi_slider: [
        { video: Images.pattern.default, poster: Images.test_video_poster.default, videoId: 'video1', player: false },
        { video: Images.pattern.default, poster: Images.test_video_poster.default, videoId: 'video2', player: false },
        { video: Images.pattern.default, poster: Images.test_video_poster.default, videoId: 'video3', player: false },
        { video: Images.pattern.default, poster: Images.test_video_poster.default, videoId: 'video4', player: false },
        { video: Images.pattern.default, poster: Images.test_video_poster.default, videoId: 'video5', player: false },
      ],
    }
  }

  componentDidMount() {

  }

  componentWillUnmount = () => {

  }

  toggleDropdown = (dropName) =>{
    this.setState({[dropName]: !this.state[dropName] })
  }


  render() {

    const testi_slider = {
      dots: false,
      infinite: false,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      cssEase: 'linear',
      prevArrow: <span ><img src={Images.left_nav.default} alt="" className="left_nav cmn_nav" /></span>,
      nextArrow: <span ><img src={Images.right_nav.default} alt="" className="right_nav cmn_nav" /></span>,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
          }
        },
        {
          breakpoint: 545,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
          }
        }
      ]
    };

    return (
      <React.Fragment>

        <Header />

        <section id="how_it_work_banner" className="how_it_work_banner">
          <div className="w-100 how_work_banner_2 text-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                  <h1 className="f40 f600 clr_black mb-3">The Story of Charles</h1>
                  <p className="f16 f400 clr_black mb-3">It is a long established fact that a reader will be
                    distracted by the readable
                    content of a page when looking at its layout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work_overlap_sec" className="work_overlap_sec">
          <div className="container">
            <div className="row justify-content-center m-0">
              <div className="col-12 col-md-11 col-lg-9">
                <div className="row">

                  <div className="col-12 mb-4">
                    <div className="brdr_r_10">
                      <img src={Images.work_overlap_img.default} alt="" className="w-100" />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <h4 className="f18 f600 clr_black mb-3">2021</h4>
                    <p className="f16 f400 clr_grey mb-3">
                      Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                      Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
                      Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type
                      And Scrambled It To Make A Type Specimen Book.
                    </p>
                    <p className="f16 f400 clr_grey">
                      It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic
                      Typesetting, Remaining Essentially Unchanged. It Was Popularised In The 1960S
                      With The Release Of Letraset.
                    </p>
                  </div>

                  <div className="col-12 col-md-6">
                    <h4 className="f18 f600 clr_black mb-3">PRESENT</h4>
                    <p className="f16 f400 clr_grey mb-3">
                      Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
                      Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S,
                      When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type
                      Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into
                      Electronic Typesetting, Remaining Essentially Unchanged. It Was Popularised In
                      The 1960S With The Release Of Letraset.
                    </p>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="what_you_looking_sec" className="what_you_looking_sec">
          <div className="container">
            <div className="row justify-content-center m-0">
              <div className="col-12 col-md-11 col-lg-9">
                <div className="row justify-content-center">

                  <div className="col-12 col-md-10 mb-5">
                    <h2 className="f32 f600 clr_black text-center mb-4">Can't find what you're looking for?</h2>
                    <p className="f16 f400 clr_grey text-center">
                      Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum
                      Has Been The
                      Industry's Standard Dummy Text Ever Since The 1500S, When An Unknown Printer Took A
                      Galley Of Type And
                      Scrambled It To Make A Type Specimen Book.
                    </p>
                  </div>

                  <div className="col-12 col-md-4 content_wrapper">
                    <div className="what_looking_content">
                      <h2 className="f24 f600 clr_green mb-3">
                        6 million+ monthly
                        active Charles
                      </h2>
                      <p className="f16 f400 clr_grey">
                        Browse our community of experts to find the right one
                        for you.
                      </p>
                    </div>
                  </div>

                  <div className="col-12 col-md-4 content_wrapper">
                    <div className="what_looking_content">
                      <h2 className="f24 f600 clr_green mb-3">
                        200,000+ Experts
                        on Charles
                      </h2>
                      <p className="f16 f400 clr_grey">
                        Browse our community of experts to find the right one
                        for you.
                      </p>
                    </div>
                  </div>

                  <div className="col-12 col-md-4 content_wrapper">
                    <div className="what_looking_content">
                      <h2 className="f24 f600 clr_green mb-3">
                        $2 billion paid out
                        to Experts
                      </h2>
                      <p className="f16 f400 clr_grey">
                        Browse our community of experts to find the right one
                        for you.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </section>

        <section id="img_content_sec" className="img_content_sec">
          <div className="container">
            <div className="row justify-content-center m-0">
              <div className="col-12 col-md-11 col-lg-9">
                <div className="row mb-5">

                  <div className="col-12 col-md-6">
                    <div className="brdr_r_10 img_content_img">
                      <img src={Images.img_content_1.default} className="w-100" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-1 d-none d-lg-block"></div>

                  <div className="col-12 col-md-6 col-lg-5">
                    <div className="d-flex align-items-center h-100">
                      <div>
                        <h2 className="f32 f600 clr_black mb-5">
                          Randomised words which don't look even slightly believable.
                        </h2>
                        <p className="f16 f400 clr_grey mb-3">
                          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                          Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
                          Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled
                          It To Make A Type Specimen Book.
                        </p>
                        <p className="f16 f400 clr_grey">
                          It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic
                          Typesetting, Remaining Essentially Unchanged. It Was Popularised In The 1960S
                          With The Release Of Letraset.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="row">

                  <div className="col-12 col-md-6 col-lg-5 mob_order_2">
                    <div className="d-flex align-items-center h-100">
                      <div>
                        <h2 className="f32 f600 clr_black mb-5">
                          The generated Lorem Ipsum
                          is therefore always free
                        </h2>
                        <p className="f16 f400 clr_grey mb-3">
                          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                          Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
                          Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled
                          It To Make A Type Specimen Book.
                        </p>
                        <p className="f16 f400 clr_grey">
                          It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic
                          Typesetting, Remaining Essentially Unchanged. It Was Popularised In The 1960S
                          With The Release Of Letraset.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-1 d-none d-lg-block"></div>

                  <div className="col-12 col-md-6">
                    <div className="brdr_r_10 img_content_img">
                      <img src={Images.img_content_1.default} className="w-100" alt="" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </section>

        <section id="testimonials_section" className="testimonials_section">
          <div className="container position_relative">
            <img src={Images.green_dots.default} alt="" className="dot_img" />

            <div className="testi_slides_wrapper cmn_slide_navs">
              <Slider {...testi_slider} classNameName="testi_slider cmn_slide_pdng ">
                {
                  this.state.testi_slider.map((obj, key) => {
                    return <TestSlider data={obj} key={key} />
                  })

                }
              </Slider>
            </div>
            
          </div>
        </section>

        <section id="gide_us_sec" className="gide_us_sec">
          <div className="container">
            <div className="row justify-content-center m-0">

              <div className="col-12 col-md-11 col-lg-9">
                <div className="row">
                  <h2 className="f332 f600 clr_black text-center mb-5">What Guides Us</h2>

                  <div className="col-12 col-md-6 guide_separator">
                    <div className="guide_us_card text-center">
                      <div className="guide_img">
                        <img src={Images.expert_1.default} alt="" className="w-100" />
                      </div>
                      <h2 className="f24 f600 clr_black mb-3">Find expert</h2>
                      <p className="f16 f400 clr_grey mb-3">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature.
                      </p>
                      <Link to='/expert-list' className="theme_dark_btn mx-auto cmn_btn">Find Expert</Link>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="guide_us_card  text-center">
                      <div className="guide_img">
                        <img src={Images.expert_2.default} alt="" className="w-100" />
                      </div>
                      <h2 className="f24 f600 clr_black mb-3">Terms of Use</h2>
                      <p className="f16 f400 clr_grey mb-3">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature.
                      </p>
                      <Link to='/become-expert' className="theme_dark_btn mx-auto cmn_btn">Become an Expert</Link>
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



export default HowItWork2;