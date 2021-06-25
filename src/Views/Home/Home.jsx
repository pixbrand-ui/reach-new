import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/IndexHeader'
import Slider from "react-slick";
import { Images } from 'Constants';

import TestSlider from 'Components/TestSlider/';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      browse_slider: [
        { image: Images.browse_img_1.default, title: 'Entrepreneurship' },
        { image: Images.browse_img_2.default, title: 'Digital marketing' },
        { image: Images.browse_img_3.default, title: 'Start-ups' },
        { image: Images.browse_img_4.default, title: 'Social media marketing' },
        { image: Images.browse_img_3.default, title: 'Digital marketing' },
        { image: Images.browse_img_2.default, title: 'Entrepreneurship' },
      ],

      charles_blog_slider: [
        { image: Images.charles_blog_1.default, title: 'Digital marketing made easy', descryption: 'A practical guide to understand what is digital...' },
        { image: Images.charles_blog_2.default, title: 'How to write a mission statement', descryption: 'A practical guide to understand what is digital...' },
        { image: Images.charles_blog_3.default, title: 'What is an infographic?', descryption: 'A practical guide to understand what is digital...' },
        { image: Images.charles_blog_1.default, title: 'Digital marketing made easy', descryption: 'A practical guide to understand what is digital...' },
        { image: Images.charles_blog_2.default, title: 'How to write a mission statement', descryption: 'A practical guide to understand what is digital...' },
        { image: Images.charles_blog_3.default, title: 'Digital marketing made easy', descryption: 'A practical guide to understand what is digital...' },
      ],

      explore_card: [
        { image: Images.explore_card_1_dark.default, title: 'Entrepreneurship' },
        { image: Images.explore_card_2_dark.default, title: 'Digital marketing' },
        { image: Images.explore_card_3_dark.default, title: 'Start-ups', imgClass: 'rocket_img' },
        { image: Images.explore_card_4_dark.default, title: 'Social media marketing', imgClass: 'likeUp' },
        { image: Images.explore_card_4_dark.default, title: 'Social media marketing', imgClass: 'likeUp' },
        { image: Images.explore_card_4_dark.default, title: 'Social media marketing', imgClass: 'likeUp' },
        { image: Images.explore_card_4_dark.default, title: 'Social media marketing', imgClass: 'likeUp' },
        { image: Images.explore_card_4_dark.default, title: 'Social media marketing', imgClass: 'likeUp' },
      ],

      testi_slider: [
        { video: Images.pattern.default, poster: Images.test_video_poster.default, videoId: 'video1', player: false },
        { video: Images.pattern.default, poster: Images.test_video_poster.default, videoId: 'video2', player: false },
        { video: Images.pattern.default, poster: Images.test_video_poster.default, videoId: 'video3', player: false },
        { video: Images.pattern.default, poster: Images.test_video_poster.default, videoId: 'video4', player: false },
        { video: Images.pattern.default, poster: Images.test_video_poster.default, videoId: 'video5', player: false },
      ],

    }
  }

  toggleDropdown = (dropName) => {
    this.setState({ [dropName]: !this.state[dropName] })
  }

  componentDidMount() {

  }

  componentWillUnmount = () => {

  }


  render() {

    const browse_slider = {
      dots: false,
      infinite: false,
      speed: 2500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      cssEase: 'linear',
      prevArrow: <span ><img src={Images.left_nav.default} alt="" className="left_nav cmn_nav" /></span>,
      nextArrow: <span ><img src={Images.right_nav.default} alt="" className="right_nav cmn_nav" /></span>,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
            speed: 1000,
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
            speed: 1000,
          }
        }
      ]
    };

    const charles_blog_slider = {
      dots: false,
      infinite: false,
      speed: 2500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      cssEase: 'linear',
      prevArrow: <span ><img src={Images.left_nav.default} alt="" className="left_nav cmn_nav" /></span>,
      nextArrow: <span ><img src={Images.right_nav.default} alt="" className="right_nav cmn_nav" /></span>,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
            speed: 1000,
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
            speed: 1000,
          }
        }
      ]
    };

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

        <section id="banner_section" className="banner_section bg_dark_green">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-6">
                <div className="banner_content">
                  <h1 className="f60 f600 clr_white mb-4">
                    Startup Advice from
                    World Class Experts
                  </h1>

                  <div>
                    <h5 className="clr_green f14 f500 mb-2">VERIFIED EXPERT</h5>
                    <div className="banner_heading mb-2">
                      <h2 className="clr_white f24 f500">Kate kendall</h2>
                    </div>
                    <p className="f16 f400 clr_white mb-3">Founder and CEO of CloudPeeps. Created The Fetch.</p>
                    <div className="banner_btns m_b_30">
                      <Link className="theme_outline_btn f13 f400" to='/'>Fundraising</Link>
                      <Link className="theme_outline_btn f13 f400" to='/'>Marketplaces</Link>
                      <Link className="theme_outline_btn f13 f400" to='/'>Email Marketing</Link>
                      <Link className="theme_outline_btn f13 f400" to='/'>Community Building</Link>
                    </div>
                    <div className="banner_big_btns">
                      <Link to='/' className="theme_dark_btn open_filter_list">Find your expert</Link>
                      <Link to='/' className="theme_outline_btn clr_white green_hover ps-3 ms-2">Become an expert</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-12 col-lg-6 position_relative">
                <div className="d-flex align-items-end h-100">
                  <img src={Images.index_banner_girl.default} alt="" className="w-100" />
                </div>
                <div className="banner_dot_img">
                  <img src={Images.white_dots.default} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="most_browse_topic_sec" className="professsional_sec most_browse_topic_sec">
          <div className="container">
            <div className="row">
              <div classNameName="col-12">
                <h2 className="f32 f600 clr_black mb-4">Most Browse Topics</h2>

                <div className="most_browse_topic_slide cmn_slide_navs">

                  <Slider {...browse_slider} classNameName="browse_slider">
                    {
                      this.state.browse_slider.map((obj, i) => {
                        return (
                          <div className="experts_slide cmn_slide_pdng">
                            <div className="expert_img browse_img browse_img">
                              <img src={obj.image} alt="" />
                            </div>
                            <div className="expert_details">
                              <h6 className="clr_black f20 f500 mb-2">{obj.title}</h6>
                            </div>
                          </div>
                        )
                      })

                    }
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how_it_work_sec" className="how_it_work_sec bg_dark_green">
          <div className="container">
            <div className="row">

              <div className="col-12 col-md-8 col-lg-6">
                <h2 className="f32 f600 clr_white mb-4">How it works?</h2>
                <p className="f16 f400 clr_white">
                  Upgrade to a curated experience packed with tools and benefits, dedicated
                  to businesses
                </p>

                <ul className="mt-4 work_sec_ul mb-3">
                  <li>
                    <span>1</span>
                    <div>
                      <h6 className="f20 f500 clr_white mb-2">Find an Expert</h6>
                      <p className="f16 f400 clr_white">
                        Browse our community of experts to find
                        the right one for you.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span>2</span>
                    <div>
                      <h6 className="f20 f500 clr_white mb-2">Request a Call</h6>
                      <p className="f16 f400 clr_white">
                        At this time, you will be pre-charged for the
                        estimated length of the call, based on the expert's per-minute rate.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span>3</span>
                    <div>
                      <h6 className="f20 f500 clr_white mb-2">Connect Directly</h6>
                      <p className="f16 f400 clr_white">
                        Call the conference line provided. After the call,
                        the charge will be adjusted to reflect the actual length of the call.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="banner_big_btns">
                  <Link to="/" className="theme_dark_btn">Find your expert</Link>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-6 d-flex align-items-center">
                <img src={Images.how_it_works_img.default} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </section>

        <section id="explore_categories_sec" className="explore_categories_sec">
          <div className="container">
            <div className="row">
              <div className="col-12 position_relative mb-5">
                <div className="explore_dot_img">
                  <img src={Images.green_dots.default} alt="" />
                </div>
                <h2 className="f32 clr_black f600">Explore the catagories</h2>
              </div>
            </div>
            <div className="row explore_card_row">

              {
                this.state.explore_card.map((obj, index) => {
                  return (
                    <div className="col-12 col-md-6 col-lg-3">
                      <Link to='/'>
                        <div className="explore_card">
                          <div className="explore_card_img">
                            <img src={obj.image} alt="" className={`${obj.imgClass}`} />
                          </div>
                          <h6 className="clr_black f18 f500">{obj.title}</h6>
                        </div>
                      </Link>
                    </div>
                  )
                })

              }

            </div>
          </div>
        </section>

        <section id="testimonials_section" className="testimonials_section">
          <div className="container position_relative">
            <img src={Images.green_dots.default} alt="" className="dot_img" />

            <div className="testi_slides_wrapper cmn_slide_navs">
              <Slider {...testi_slider}>
                {
                  this.state.testi_slider.map((obj, key) => {
                    return <TestSlider data={obj} key={key} />
                  })

                }
              </Slider>
            </div>
            
          </div>
        </section>

        <section id="expert_card_sec" className="expert_card_sec">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="expert_card" style={{ backgroundImage: `url(${Images.expert_banner.default})` }}>
                  <div className="content">
                    <h2 className="f32 f600 clr_white">Are you an expert?</h2>
                    <p className="clr_white f16 f400">
                      Join a community of passionate experts and thought-leaders who are being
                      sought out by fellow entrepreneurs.
                    </p>
                    <div className="banner_big_btns">
                      <Link to="/" className="theme_dark_btn">Find your expert</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="charles_blog_sec" className="charles_blog_sec">
          <div className="container">
            <div className="row">
              <div classNameName="col-12">
                <h2 className="f32 f600 clr_black mb-4">Charles Blogs</h2>

                <div className="charles_blog_slide cmn_slide_navs">

                  <Slider {...charles_blog_slider} classNameName="charles_blog_slider">
                    {
                      this.state.charles_blog_slider.map((obj, i) => {
                        return (
                          <div className="experts_slide cmn_slide_pdng">
                            <div className="expert_img charles_blog_img">
                              <img src={obj.image} alt="" />
                            </div>
                            <div className="expert_details">
                              <h6 className="clr_black f20 f500 mb-2">{obj.title}</h6>
                              <p class="f16 f400 clr_grey">{obj.descryption}</p>
                            </div>
                          </div>
                        )
                      })

                    }
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="newsletter_sec" class="newsletter_sec">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="newsletter" style={{ backgroundImage: `url(${Images.newsletter_bg.default})` }}>
                  <div class="row justify-content-center">
                    <div class="col-12 col-lg-7">
                      <div class="d-flex align-items-center h-100">
                        <div class="newsletter_content max_w_75">
                          <h2 class="f32 f600 clr_dark_green mb-3">Subscribe to our Newsletter</h2>
                          <p class="f16 f400 clr_dark_green mb-3"> Subscribe to our newsletter to receive exclusive offers,
                            latest news and updates.
                          </p>
                          <div class="newsletter_input d-flex">
                            <input type="text" placeholder="Email address" class="clr_white f16 f400 w-100" />
                            <button class="clr_white f16 f500">Submit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-5">
                      <img src={Images.newsletter_side_img.default} alt="" class="w-100" />
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

export default Home;