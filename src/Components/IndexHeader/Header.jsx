import React from 'react';
// import { Row, Col, Container } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';

import { Images } from 'Constants';
import { CommonNotifyModal, LoginModal } from 'Modals';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollHeaderClass: 'top',
      headerLogo: 'header',
      scrollSearchBox: 'show',
      userReviews: [
        { title: 'Lorem Ipsum is simply dummy text of the printing', check: false },
        { title: 'Lorem Ipsum is simply dummy text of the printing', check: false },
        { title: 'Lorem Ipsum is simply dummy text of the printing', check: false },
        { title: 'Lorem Ipsum is simply dummy text of the printing', check: false },
      ],

      interestedTopic: [
        {
          image: Images.seo.default,
          title: 'SEO',
          check: false
        },
        {
          image: Images.graphic_design.default,
          title: 'Graphic Design',
          check: false
        },
        {
          image: Images.ux_ui.default,
          title: 'UX / UI',
          check: false
        },
        {
          image: Images.development.default,
          title: 'Development',
          check: false
        },
        {
          image: Images.web_design.default,
          title: 'Web Design',
          check: false
        },
        {
          image: Images.application_development.default,
          title: 'Application Development',
          check: false
        },
        {
          image: Images.website_development.default,
          title: 'Website Development',
          check: false
        },
        {
          image: Images.digital_marketing.default,
          title: 'Digital Marketing',
          check: false
        },
        {
          image: Images.email_marketing.default,
          title: 'Email Marketing',
          check: false
        },
        {
          image: Images.branding.default,
          title: 'Branding',
          check: false
        },

      ],

      timeSlot:[
        {
          title: 'Mon, Mar 8 2021 | 8:00 PM'
        },
        {
          title: 'Tue, Mar 9 2021 | 9:00 PM'
        },
        {
          title: 'Wed, Mar 10 2021 | 10:00 PM'
        },
      ],
      
      
    }
  }


  componentDidMount() {
    window.addEventListener('scroll', () => {
      let scrollHeaderClass = 'bg_white';
      let headerLogo = 'footer';
      let scrollSearchBox = 'hide';

      if (window.scrollY === 0) {
        scrollHeaderClass = 'top';
        headerLogo = 'header'
        scrollSearchBox = 'show'
      }
      
      this.setState({ scrollHeaderClass, headerLogo, scrollSearchBox });
    });
  }

  componentWillUnmount() {

  }

  openDropdown = (dropName) => {
    this.setState({ [dropName]: !this.state[dropName] })
  }

  openModal = (modalName) => {
    this.setState({ [modalName]: true })
  }

  closeModal = (modalName) => {
    this.setState({ [modalName]: false })
  }

  openCloseModal = (closeModal, openModal) => {
    this.setState({ [closeModal]: false })
    this.setState({ [openModal]: true })
  }

  togglereview = (index, listname) => {
    let arr = [...this.state[listname]];
    arr[index]['check'] = arr[index]['check'] == false ? true : false;
    this.setState({ [listname]: arr });

  }

  timeSlot = (index) =>{
    this.setState({selectedTimeSlot: index})
  }



  render() {

    return (
      <React.Fragment>

        <header id="header_sec" className={`header_sec bg_dark_green ${this.state.scrollHeaderClass}`}>
          <div className="container">
            <div className="row">
              <div className="col-12">

                <div className="header_box">

                  <div className="header_logo mob_order_2">
                    {
                      this.state.headerLogo == 'header' ?
                        <Link to="/"><img src={Images.logo.default} alt="" className="w-100" /></Link>
                        :
                        <Link to="/"><img src={Images.footer_logo.default} alt="" className="w-100" /></Link>
                    }
                  </div>

                  <div className="wrapper d-flex align-items-center mob_order_3">
                    <div className={`sub_menu_closer ${this.state.technology_dropdown ? 'd-block' : ''}`} onClick={() => this.openDropdown('technology_dropdown')}></div>
                    <div className="categories d-none d-md-block">

                      <UncontrolledButtonDropdown className="">
                        <DropdownToggle className="drop_toggle">
                          <button className="dropdown-toggle clr_white f16 f500 no_after d-flex align-items-center drop_icon_rotate">
                            Categories <i className="fas fa-chevron-down ms-2"></i>
                          </button>
                        </DropdownToggle>
                        <DropdownMenu className='no_dropdown sub_drop_wrapper '>

                          <ul>
                            <li><Link to="/single-listing" className="dropdown-item">Entrepreneurship</Link></li>
                            <li><Link to="/single-listing" className="dropdown-item">Digital marketing</Link></li>
                            <li><Link to="/single-listing" className="dropdown-item">Start-ups</Link></li>
                            <li><Link to="/single-listing" className="dropdown-item">SMM</Link></li>
                            <li>
                              <button className="dropdown-item sub_dropdown_link" onClick={() => this.openDropdown('technology_dropdown')}>
                                Technology <i className='fa fa-chevron-right sub_drop_icon'></i>
                              </button>
                            </li>
                            <li><Link to="/single-listing" className="dropdown-item">Other menu</Link></li>
                            <li><Link to="/single-listing" className="dropdown-item">Other menu</Link></li>
                            <li><Link to="/single-listing" className="dropdown-item">Other menu</Link></li>
                          </ul>

                          <div className={`dropdown-menu category_sub_dropdown sub_menu no_dropdown ${this.state.technology_dropdown ? 'show' : ''}`}>
                            <div className="closer"></div>
                            <ul className="">
                              <li>
                                <h5 className="clr_black">Technology</h5>
                              </li>
                              <li><Link to="/" className="dropdown-item">Wordpress</Link></li>
                              <li><Link to="/" className="dropdown-item">Software development</Link></li>
                              <li><Link to="/" className="dropdown-item">Website design</Link></li>
                              <li><Link to="/" className="dropdown-item">Shopify</Link></li>
                              <li><Link to="/" className="dropdown-item">Woocommerce</Link></li>
                              <li><Link to="/" className="dropdown-item">Webflow</Link></li>
                              <li><Link to="/" className="dropdown-item">Angular js</Link></li>
                              <li><Link to="/" className="dropdown-item">PHP</Link></li>
                            </ul>
                          </div>

                        </DropdownMenu>
                      </UncontrolledButtonDropdown>

                    </div>

                    <div className="search_box d-none d-md-block">
                      <div className="cmn_input_box bg_green_ min_w_350">
                        <input type="text" className="cmn_input w-100 filter_toggle filter_input" placeholder="search" onClick={() => this.openDropdown('filterList')} />

                        {
                          this.state.filterList ?
                            <span><img src={Images.cross.default} alt="" className="cancel_btn" onClick={() => this.openDropdown('filterList')} /></span>
                            :
                            <span><img src={Images.search_icon.default} alt="" className="w-100 search_btn" /></span>
                        }


                      </div>

                      <div className={`filter_list_wrapper ${this.state.filterList ? 'show' : ''}`}>
                        <div className="closer" onClick={() => this.openDropdown('filterList')}></div>
                        <ul className={`filter_list`}>

                          <h5 className="f14 f500 clr_grey m_b_10 hdng_wt_icon">
                            <img src={Images.magic_wand.default} alt="" />Expertize
                          </h5>
                          <li>
                            <Link to="/" className="f500">web<span className="f600">site</span></Link>
                          </li>
                          <li>
                            <Link to="/" className="f500">web <span className="f600">development</span></Link>
                          </li>
                          <li>
                            <Link to="/" className="f500">web <span className="f600">design</span></Link>
                          </li>
                          <li>
                            <Link to="/" className="f500">website <span className="f600">wordpress</span></Link>
                          </li>
                          <li>
                            <Link to="/" className="f500">web<span className="f600">site shopify</span></Link>
                          </li>
                          <h5 className="f14 f500 clr_grey m_b_10 hdng_wt_icon m_t_10">
                            <img src={Images.user_icon.default} alt="" />Experts
                          </h5>
                          <li>
                            <Link to="/" className="f500">web<span className="f600">site</span></Link>
                          </li>
                          <li>
                            <Link to="/" className="f500">web <span className="f600">development</span></Link>
                          </li>
                          <li>
                            <Link to="/" className="f500">web <span className="f600">design</span></Link>
                          </li>
                          <li>
                            <Link to="/" className="f500">website <span className="f600">wordpress</span></Link>
                          </li>
                        </ul>
                      </div>

                    </div>


                  </div>

                  <div className={`header_link_closer ${this.state.mobDrawer ? 'd-block' : ''}`} onClick={() => this.openDropdown('mobDrawer')}></div>
                  <div className={`header_link ${this.state.mobDrawer ? 'show' : ''}`}>
                    <button className={`fas fa-times toggle_drawer drawer_closer clr_white ms-auto`} onClick={() => this.openDropdown('mobDrawer')}></button>
                    <ul>
                      <li className="main_links">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="main_links">
                        <Link to="/browse">Browse</Link>
                      </li>
                      <li className="main_links">
                        <Link to="/">Blog</Link>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="theme_outline_btn" onClick={() => this.openModal('loginModal')}>Login <img src={Images.login_key.default} alt="" /></a>
                      </li>
                      <li className="pe-0">
                        <a href="javascript:void(0)" className="theme_dark_btn" onClick={() => this.openModal('signupModal')}>Sign up <img src={Images.right_arrow.default} alt="" /></a>
                      </li>

                      <div className="d-block d-lg-none">
                        <ul className="categories_links">
                          <li><Link className="dropdown-item" to="/single-listing">Entrepreneurship</Link></li>

                          <li><Link className="dropdown-item" to="/single-listing">Digital marketing</Link></li>

                          <li><Link className="dropdown-item" to="/single-listing">Start-ups</Link></li>

                          <li><Link className="dropdown-item" to="/single-listing">SMM</Link></li>

                          <li><Link className="dropdown-item" to="/single-listing">Technology</Link></li>

                          <li><Link className="dropdown-item" to="/single-listing">Other menu</Link></li>

                          <li><Link className="dropdown-item" to="/single-listing">Other menu</Link></li>

                          <li><Link className="dropdown-item" to="/single-listing">Other menu</Link></li>
                        </ul>
                      </div>

                    </ul>



                  </div>

                  <div className="mob_drawer">

                    <button className="fas fa-bars clr_white toggle_drawer me-2" onClick={() => this.openDropdown('mobDrawer')}></button>

                  </div>

                </div>

                <div className={`header_box_2 mt-3 ${this.state.scrollSearchBox}`}>

                  <div className={`sub_menu_closer ${this.state.technology_dropdown ? 'd-block' : ''}`} onClick={() => this.openDropdown('technology_dropdown')}></div>

                  <div className="categories mb-3 p-0">
                    <UncontrolledButtonDropdown classNameName="">
                      <DropdownToggle classNameName="drop_toggle">
                        <button className="dropdown-toggle clr_white f16 f500 no_after d-flex align-items-center drop_icon_rotate">
                          Categories <i className="fas fa-chevron-down ms-2"></i>
                        </button>
                      </DropdownToggle>
                      <DropdownMenu className='no_dropdown sub_drop_wrapper '>

                        <ul>
                          <li><Link to="/single-listing" className="dropdown-item">Entrepreneurship</Link></li>
                          <li><Link to="/single-listing" className="dropdown-item">Digital marketing</Link></li>
                          <li><Link to="/single-listing" className="dropdown-item">Start-ups</Link></li>
                          <li><Link to="/single-listing" className="dropdown-item">SMM</Link></li>
                          <li>
                            <button className="dropdown-item sub_dropdown_link" onClick={() => this.openDropdown('technology_dropdown')}>
                              Technology <i className='fa fa-chevron-right sub_drop_icon'></i>
                            </button>
                          </li>
                          <li><Link to="/single-listing" className="dropdown-item">Other menu</Link></li>
                          <li><Link to="/single-listing" className="dropdown-item">Other menu</Link></li>
                          <li><Link to="/single-listing" className="dropdown-item">Other menu</Link></li>
                        </ul>

                        <div className={`dropdown-menu category_sub_dropdown sub_menu no_dropdown ${this.state.technology_dropdown ? 'show' : ''}`}>
                          <ul className="">
                            <li>
                              <h5 className="clr_black">Technology</h5>
                            </li>
                            <li><Link to="/" className="dropdown-item">Wordpress</Link></li>
                            <li><Link to="/" className="dropdown-item">Software development</Link></li>
                            <li><Link to="/" className="dropdown-item">Website design</Link></li>
                            <li><Link to="/" className="dropdown-item">Shopify</Link></li>
                            <li><Link to="/" className="dropdown-item">Woocommerce</Link></li>
                            <li><Link to="/" className="dropdown-item">Webflow</Link></li>
                            <li><Link to="/" className="dropdown-item">Angular js</Link></li>
                            <li><Link to="/" className="dropdown-item">PHP</Link></li>
                          </ul>
                        </div>

                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </div>

                  <div className="search_box w-100">
                    <div className="cmn_input_box bg_green_ min_w_350 w-100">
                      <input type="text" className="cmn_input w-100 filter_toggle filter_input" placeholder="search" onClick={() => this.openDropdown('filterList')} />

                      {
                        this.state.filterList ?
                          <span><img src={Images.cross.default} alt="" className="cancel_btn" onClick={() => this.openDropdown('filterList')} /></span>
                          :
                          <span><img src={Images.search_icon.default} alt="" className="w-100 search_btn" /></span>
                      }



                    </div>

                    <div className={`filter_list_wrapper ${this.state.filterList ? 'show' : ''}`}>
                      <div className="closer" onClick={() => this.openDropdown('filterList')}></div>
                      <ul className={`filter_list`}>

                        <h5 className="f14 f500 clr_grey m_b_10 hdng_wt_icon">
                          <img src={Images.magic_wand.default} alt="" />Expertize
                        </h5>
                        <li>
                          <Link to="/" className="f500">web<span className="f600">site</span></Link>
                        </li>
                        <li>
                          <Link to="/" className="f500">web <span className="f600">development</span></Link>
                        </li>
                        <li>
                          <Link to="/" className="f500">web <span className="f600">design</span></Link>
                        </li>
                        <li>
                          <Link to="/" className="f500">website <span className="f600">wordpress</span></Link>
                        </li>
                        <li>
                          <Link to="/" className="f500">web<span className="f600">site shopify</span></Link>
                        </li>
                        <h5 className="f14 f500 clr_grey m_b_10 hdng_wt_icon m_t_10">
                          <img src={Images.user_icon.default} alt="" />Experts
                        </h5>
                        <li>
                          <Link to="/" className="f500">web<span className="f600">site</span></Link>
                        </li>
                        <li>
                          <Link to="/" className="f500">web <span className="f600">development</span></Link>
                        </li>
                        <li>
                          <Link to="/" className="f500">web <span className="f600">design</span></Link>
                        </li>
                        <li>
                          <Link to="/" className="f500">website <span className="f600">wordpress</span></Link>
                        </li>
                      </ul>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
        </header>

        {/* Login modal */}

        <LoginModal open={(this.state.loginModal) ? true : false} toggle={() => this.closeModal('loginModal')} className={'loginModal'}>
          <div className="row m-0 b_radius_8">
            <div className="col-sm-6 bg_dark_green modal_left_side" style={{ backgroundImage: `url(${Images.modal_side_img.default})` }}>
              
            </div>

            <div className="col-sm-6">
              <div className="login_form_pdng">
                <span className="modal_closer" onClick={() => this.closeModal('loginModal')}><img src={Images.cross.default} alt="" /></span>
                <h2 className="clr_black f28 f600 mb-5 text-center">Login Account</h2>
                <form action="" method='post'>

                  <div className="theme_form_input mb-3">
                    <label htmlFor="email_1">Email</label>
                    <div className="input_wrapper">
                      <input type="email" placeholder="Enter email address" name="email_1" id="email_1" className="theme_input" />
                      <span><img src={Images.message_icon.default} alt="" className="w_18" /></span>
                    </div>
                  </div>

                  <div className="theme_form_input mb-3">
                    <label htmlFor="pwd">Password</label>
                    <div className="input_wrapper">
                      <input
                        type={this.state.showPassword ? 'text' : 'password'}
                        placeholder="Enter  Password"
                        name="pwd"
                        id="pwd"
                        className="theme_input"
                        ref={(ip) => this.myInp = ip} />

                      <span className="cursor_pointer toggle_password" onClick={() => { this.openDropdown("showPassword"); this.myInp.focus() }}>
                        {
                          this.state.showPassword ?
                            <img src={Images.lock_show_icon.default} alt="" className="w_15 lock_show_icon" />
                            :
                            <img src={Images.lock_icon.default} alt="" className="w_15 lock_icon" />
                        }
                      </span>
                    </div>
                  </div>
                  <button className="theme_dark_btn w-100 min_h_45 f16 f600">Login</button>
                  <p className="clr_black f15 f500 p_b_15 m_t_15 m_b_15 border_b_grey text-center">Don't have an account <Link className="clr_green" onClick={() => this.openCloseModal('loginModal', 'signupModal')}>Sign up</Link></p>

                  <Link to='/' className="border_grey login_social_btn w-100 m_b_10">
                    <img src={Images.google_icon.default} alt="" />
                    <span className="w-100 text-center">Login with google</span>
                  </Link>
                  <Link to='/' className="border_grey login_social_btn w-100 m_b_15">
                    <img src={Images.facebook_icon.default} alt="" />
                    <span className="w-100 text-center">Login with facebook</span>
                  </Link>

                </form>

                <button className="clr_green f15 f500 d-block w-100 text-center" onClick={() => this.openCloseModal('loginModal', 'forgotModal')}>Forogot Password ?</button>

                <p className="f12 f400 clr_grey text-center margin_lr_minus_50 mt-5">
                  By signing up, you agree to our <Link href="/" className="text_underline clr_grey">Terms of Use</Link> and <Link to="/" className="text_underline clr_grey">Privacy Policy</Link>,
                  and you confirm that you're 18 years old or over.
                </p>
              </div>
            </div>
          </div>
        </LoginModal>

        {/* Signup Modal */}
        <LoginModal open={(this.state.signupModal) ? true : false} toggle={() => this.closeModal('signupModal')} className={'signupModal'}>
          <div className="row m-0 b_radius_8">
            <div className="col-sm-6 bg_dark_green modal_left_side" style={{ backgroundImage: `url(${Images.modal_side_img.default})` }}>
              
            </div>
            <div className="col-sm-6 bg_white">
              <div className="login_form_pdng">
                <span className="modal_closer" onClick={() => this.closeModal('signupModal')}><img src={Images.cross.default} alt="" /></span>
                <h2 className="clr_black f28 f600 mb-5 text-center">Sign Up Account</h2>
                <form action="javascript:void(0)" method='post'>

                  <div className="theme_form_input mb-3">
                    <label htmlFor="fname">First name</label>
                    <div className="input_wrapper">
                      <input type="text" placeholder="Enter your First Name" name="fname" id="fname" className="theme_input" />
                      <span><img src="./assets/img/user-icon-green.png" alt="" className="w_18" /></span>
                    </div>
                  </div>
                  <div className="theme_form_input mb-3">
                    <label htmlFor="lname">Last name</label>
                    <div className="input_wrapper">
                      <input type="text" placeholder="Enter your Last Name" name="lname" id="lname" className="theme_input" />
                      <span><img src={Images.user_icon_green.default} alt="" className="w_18" /></span>
                    </div>
                  </div>

                  <div className="theme_form_input mb-3">
                    <label htmlFor="email_2">Email</label>
                    <div className="input_wrapper">
                      <input type="email" placeholder="Enter email address" name="email_2" id="email_2" className="theme_input" />
                      <span><img src={Images.message_icon.default} alt="" className="w_18" /></span>
                    </div>
                  </div>
                  <div className="theme_form_input mb-3">
                    <label htmlFor="pwd">Password</label>
                    <div className="input_wrapper">
                      <input
                        type={this.state.showPassword2 ? 'text' : 'password'}
                        placeholder="Enter Password"
                        name="pwd"
                        id="pwd"
                        className="theme_input"
                        ref={(id) => this.myInp2 = id} />

                      <span className="cursor_pointer toggle_password" onClick={() => { this.openDropdown("showPassword2"); this.myInp2.focus() }}>
                        {
                          this.state.showPassword2 ?
                            <img src={Images.lock_show_icon.default} alt="" className="w_15 lock_show_icon" />
                            :
                            <img src={Images.lock_icon.default} alt="" className="w_15 lock_icon" />
                        }

                      </span>
                    </div>
                  </div>
                  <button className="theme_dark_btn w-100 min_h_45 f16 f600" onClick={() => this.openCloseModal('signupModal', 'confirmMailModal')}>Sign Up</button>
                  <p className="clr_black f15 f500 m_t_15 text-center">Already a charles member? <a href="javascript:void(0)" className="clr_green" onClick={() => this.openCloseModal('signupModal', 'loginModal')}>Log In</a></p>

                  <p className="f12 f400 clr_grey text-center margin_lr_minus_50 mt-5">
                    By signing up, you agree to our <a href="javascript:void(0)" className="text_underline clr_grey">Terms of Use</a> and <a href="javascript:void(0)" className="text_underline clr_grey">Privacy Policy</a>,
                    and you confirm that you're 18 years old or over.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </LoginModal>

        {/* Forgot Passwor Modal */}
        <CommonNotifyModal open={(this.state.forgotModal) ? true : false} toggle={() => this.closeModal('forgotModal')} className={'forgotModal modal_w_450 modal_content_transparent custom_modal_pdng'}>
          <div className="row m-0 mb-3 b_radius_8">
            <div className="col-sm-12 bg_white">
              <div className="login_form_pdng">
                <span className="modal_closer" onClick={() => this.closeModal('forgotModal')}><img src={Images.cross.default} alt="" /></span>
                <h2 className="clr_black f28 f600 mb-3 text-center">Forgot Password</h2>
                <p className="f15 f400 clr_black mb-3 text-center">
                  Enter your email address below and
                  we'll send you reset instructions.
                </p>
                <form action="javascript:void(0)">

                  <div className="theme_form_input mb-3">
                    <label htmlFor="email">Email</label>
                    <div className="input_wrapper">
                      <input type="email" placeholder="Enter email address" name="email" id="email" className="theme_input" />
                      <span><img src={Images.message_icon.default} alt="" className="w_18" /></span>
                    </div>
                  </div>
                  <button className="theme_dark_btn w-100 min_h_45 f16 f600" onClick={() => this.openCloseModal('forgotModal', 'linkSendModal')}>Send Reset Link</button>
                  <p className="clr_black f15 f500 m_t_15 text-center">Already a charles member? <Link href="" className="clr_green" onClick={() => this.openCloseModal('forgotModal', 'loginModal')}>Log In</Link></p>

                </form>
              </div>
            </div>
          </div>
        </CommonNotifyModal>

        {/* Link send Modal */}
        <CommonNotifyModal open={(this.state.linkSendModal) ? true : false} toggle={() => this.closeModal('linkSendModal')} className={'linkSendModal link_send_popup custom_modal_pdng'}>
          <div className="acc_deactive_modal_body text-center">
            <img src={Images.check_fill.default} alt="" className="modal_top_img m_b_20" />
            <p className="f16 f400 clr_grey m_b_20">
              Link has to be send to your registerd
              email address
            </p>
            <a href="javascript:void(0)" className="theme_dark_btn cmn_btn" onClick={() => this.openCloseModal('linkSendModal', 'changePassModal')}>Ok</a>
          </div>
        </CommonNotifyModal>

        {/* Change Password Modal */}
        <CommonNotifyModal open={(this.state.changePassModal) ? true : false} toggle={() => this.closeModal('changePassModal')} className={'changePassModal modal_w_450 modal_content_transparent custom_modal_pdng'}>
          <div className="row m-0 mb-2">
            <div className="col-sm-12 bg_white brdr_r_10">
              <div className="login_form_pdng">
                <span className="modal_closer" data-dismiss="modal"><img src={Images.cross.default} alt="" /></span>
                <h2 className="clr_black f28 f600 mb-3 text-center">Change Password</h2>
                <form action="javascript:void(0)">

                  <div className="theme_form_input mb-3">
                    <label htmlFor="N_pwd">New Password</label>
                    <div className="input_wrapper">
                      <input
                        type={this.state.showPassword3 ? 'text' : 'password'}
                        placeholder="Enter New Password"
                        name="N_pwd"
                        id="N_pwd"
                        className="theme_input"
                        ref={(id) => this.myInp3 = id} />

                      <span className="cursor_pointer toggle_password" onClick={() => { this.openDropdown("showPassword3"); this.myInp3.focus() }}>
                        {
                          this.state.showPassword3 ?
                            <img src={Images.lock_show_icon.default} alt="" className="w_15 lock_show_icon" />
                            :
                            <img src={Images.lock_icon.default} alt="" className="w_15 lock_icon" />
                        }

                      </span>
                    </div>
                  </div>
                  <div className="theme_form_input mb-3">
                    <label htmlFor="c_N_pwd">Confirm New Password</label>
                    <div className="input_wrapper">
                      <input
                        type={this.state.showPassword4 ? 'text' : 'password'}
                        placeholder="Confirm New  Password"
                        name="c_N_pwd"
                        id="c_N_pwd"
                        className="theme_input"
                        ref={(id) => this.myInp4 = id} />

                      <span className="cursor_pointer toggle_password" onClick={() => { this.openDropdown("showPassword4"); this.myInp4.focus() }}>
                        {
                          this.state.showPassword4 ?
                            <img src={Images.lock_show_icon.default} alt="" className="w_15 lock_show_icon" />
                            :
                            <img src={Images.lock_icon.default} alt="" className="w_15 lock_icon" />
                        }

                      </span>
                    </div>
                  </div>
                  <button className="theme_dark_btn w-100 min_h_45 f16 f600" onClick={() => this.openCloseModal('changePassModal', 'passChangedModal')}>Confirm</button>
                  <p className="clr_black f15 f500 m_t_15 text-center">Already a charles member? <a href="javascript:void(0)" className="clr_green" onClick={() => this.openCloseModal('changePassModal', 'loginModal')}>Log In</a></p>

                </form>
              </div>
            </div>
          </div>
        </CommonNotifyModal>

        {/* Password successfully Changed Modal */}
        <CommonNotifyModal open={(this.state.passChangedModal) ? true : false} toggle={() => this.closeModal('passChangedModal')} className={'passChangedModal link_send_popup custom_modal_pdng'}>
          <div className="acc_deactive_modal_body text-center">
            <img src={Images.check_fill.default} alt="" className="modal_top_img m_b_20" />
            <p className="f16 f400 clr_grey m_b_20">
              Your password has been changed
              Successfully
            </p>
            <a href="javascript:void(0)" className="theme_dark_btn cmn_btn" onClick={() => this.openCloseModal('passChangedModal', 'loginModal')}>Ok</a>
          </div>
        </CommonNotifyModal>

        {/* Confirm Email modal */}
        <CommonNotifyModal open={(this.state.confirmMailModal) ? true : false} toggle={() => this.closeModal('confirmMailModal')} className={'confirmMailModal'}>
          <span className="modal_closer" onClick={() => this.closeModal('confirmMailModal')}><img src={Images.cross.default} alt="" /></span>
          <div className="acc_deactive_modal_body text-center">

            <h2 className="f18 f500 clr_black m_b_20">Confirm email</h2>
            <p className="f16 f400 clr_grey m_b_20">
              A Confirmation Email Has Been Sent To:
            </p>
            <div className="d-flex align-items-center m_b_20">
              <img src={Images.confirm_email.default} alt="" className="me-4" />
              <h4 className="f20 f600 clr_black">Alex_Maxwell@Gmail.Com</h4>
            </div>
            <p className="f16 f400 clr_black mb-4">Click on the confirmation link in the email to activate your account.</p>

            <p className="f14 f600 clr_black m_b_20">If you don't see this email you can:</p>
            <div className="d-flex align-items-center justify-content-center m_b_20">
              <Link to='/' className="f14 f400 clr_black junk_link">
                <img src={Images.junk_box.default} alt="" className="me-2" />
                <img src={Images.junk_box_green.default} alt="" className="me-2 hover_img" />
                Check your junk mail folder
              </Link>
            </div>
            <a href="javascript:void(0)" className="f14 f400 clr_green resend_link" onClick={() => this.openCloseModal('confirmMailModal', 'resendMailModal')}>Change or resend confirmation email</a>
          </div>
        </CommonNotifyModal>

        {/* Resend Email modal */}
        <CommonNotifyModal open={(this.state.resendMailModal) ? true : false} toggle={() => this.closeModal('resendMailModal')} className={'resendMailModal'}>
          <span className="modal_closer" onClick={() => this.closeModal('resendMailModal')}><img src={Images.cross.default} alt="" /></span>
          <div className="acc_deactive_modal_body text-center">

            <h2 className="f18 f500 clr_black m_b_20">Confirm email</h2>
            <p className="f16 f400 clr_grey m_b_20">
              A Confirmation Email Has Been Sent To:
            </p>
            <div className="d-flex align-items-center m_b_20">
              <img src={Images.confirm_email.default} alt="" className="me-4" />
              <h4 className="f20 f600 clr_black">Alex_Maxwell@Gmail.Com</h4>
            </div>
            <p className="f16 f400 clr_black mb-4">Click on the confirmation link in the email to activate your account.</p>

            <form action="javascript:void(0)" method="post">
              <div className="theme_form_input mb-3">
                <div className="input_wrapper">
                  <input type="email" placeholder="Enter email address" name="" id="" className="theme_input" />
                  <span><img src={Images.message_icon.default} alt="" className="w_18" /></span>
                </div>
              </div>
              <Link to="/" className="f14 f400 theme_dark_btn cmn_btn w-100" onClick={() => this.closeModal('resendMailModal')}>Resend Confirmation Link</Link>
            </form>
          </div>
        </CommonNotifyModal>

        {/* User Review modal */}
        <CommonNotifyModal open={(this.state.userReviewModal) ? true : false} toggle={() => this.closeModal('userReviewModal')} className={'userReviewModal user_review'}>
          {/* <span className="modal_closer" onClick={()=> this.closeModal('userReviewModal')}><img src={Images.cross.default} alt="" /></span> */}
          <div className="acc_deactive_modal_body text-center">

            <h2 className="f20 f600 clr_black mb-3 text-center border_b_grey pb-4">User Review</h2>
            <div className="single_expert_sec mb-4 bg_white border_none">

              <div className="sinle_expert_profile mt-0 p-0">
                <div className="profile_img">
                  <Link to="" className="d-block"><img src={Images.fav_expert_2.default} alt="" className="w-100" /></Link>
                </div>
                <h2 className="f24 f600  mb-3 text-center"><Link to="" className="clr_black">Alexjender Maxwell</Link></h2>
                <p className="f15 f400 clr_black mb-3 text-center">Rate the Expert call provided Sunday. Jan 9, 7:35 PM</p>

              </div>

              <div className='mb-3'>
                <StarRatings
                  rating={3}
                  starRatedColor="#FFD203"
                  starEmptyColor='#E4E5E7'
                  numberOfStars={5}
                  name='expertRating'
                  starDimension='30px'
                  starSpacing='0px'
                />
              </div>

              {
                this.state.userReviews.map((obj, key) => {
                  return (
                    <div className="col-12 mb-2" key={key}>
                      <div className={`custom_checkiee deactivate_check_wrapper ${obj.check ? 'active' : ''}`}>
                        <input type="checkbox" id={`check_${key}`} />
                        <label htmlhtmlFor={`check_${key}`} className="f16 f400 clr_black" onClick={() => this.togglereview(key, 'userReviews')}>{obj.title}</label>
                      </div>
                    </div>
                  )
                })
              }

              <div className="d-flex review_btn">
                <button className="cmn_outline_grey_btn cmn_btn clr_grey me-2" onClick={() => this.closeModal('userReviewModal')}>Not now</button>
                <button className="theme_dark_btn cmn_btn" onClick={() => this.closeModal('userReviewModal')}>Submit Review</button>
              </div>

            </div>

          </div>
        </CommonNotifyModal>

        {/* Expert Review modal */}
        <CommonNotifyModal open={(this.state.expertReviewModal) ? true : false} toggle={() => this.closeModal('expertReviewModal')} className={'expertReviewModal'}>
          {/* <span className="modal_closer" onClick={()=> this.closeModal('userReviewModal')}><img src={Images.cross.default} alt="" /></span> */}
          <div className="acc_deactive_modal_body text-center">

            <h2 className="f20 f600 clr_black mb-3 text-center border_b_grey pb-4">Expert Review</h2>
            <div className="single_expert_sec mb-4 bg_white border_none">

              <div className="sinle_expert_profile mt-0 p-0">
                <div className="profile_img">
                  <Link to="" className="d-block"><img src={Images.fav_expert_2.default} alt="" className="w-100" /></Link>
                </div>
                <h2 className="f24 f600  mb-3 text-center"><Link to="" className="clr_black">Kate Kendall</Link></h2>
                <p className="f15 f400 clr_black mb-3 text-center">Rate the Expert call provided Sunday. Jan 9, 7:35 PM</p>

              </div>

              <div className='mb-3'>
                <StarRatings
                  rating={3}
                  starRatedColor="#FFD203"
                  starEmptyColor='#E4E5E7'
                  numberOfStars={5}
                  name='expertRating'
                  starDimension='30px'
                  starSpacing='0px'
                />
              </div>

              <textarea
                name=""
                id=""
                cols=""
                rows="6"
                className="theme_input theme_input_2 mb-3"
                placeholder="Write you feedback"
              />

              <div className="d-flex review_btn">
                <button className="cmn_outline_grey_btn cmn_btn clr_grey me-2" onClick={() => this.closeModal('expertReviewModal')}>Not now</button>
                <button className="theme_dark_btn cmn_btn" onClick={() => this.closeModal('expertReviewModal')}>Submit Review</button>
              </div>

            </div>

          </div>
        </CommonNotifyModal>

        {/* Interested Topics modal */}
        <CommonNotifyModal open={(this.state.interestedTopicModal) ? true : false} toggle={() => this.closeModal('interestedTopicModal')} className={'interestedTopicModal modal-lg'}>
          <div className="modal-content border_none">
              <div className="interested_modal_body ">
                  <div className="d-flex justify-content-between align-items-center m_b_20">
                      <h2 className="f28 f600 clr_black">Tell us what you're interested in</h2>
                      <a href="javascript:void(0)" className="f16 f400 clr_grey">Skip</a>
                  </div>

                  <div className="theme_form_input mb-3">
                      <label for="interest_topics">Add interest/topics</label>
                      <div className="input_wrapper">
                          <input type="email" placeholder="Enter email address" name="" id="interest_topics" className="theme_grey_outline_input theme_input_2 w-100" />
                          <span><a href="javascript:void(0)"><img src={Images.search_icon_green.default} alt="" className="w_18" /></a></span>
                      </div>
                  </div>

                  <div className="intereted_topics_row row">

                    {
                      this.state.interestedTopic.map( (obj , key )=>{
                        return(
                          <div className="topic_column">
                            <div className={`intereted_topic_card cursor_pointer ${obj.check ? 'active' : ''}`} 
                              style={{backgroundImage: `url(${obj.image})`}}
                              onClick={()=> this.togglereview(key , 'interestedTopic')}
                            >
                              <img src={Images.card_check.default} alt="" className="card_checker" />
                              <h2 className="f15 f500 clr_white card_title">{obj.title}</h2>

                            </div>

                          </div>
                        )
                      })
                    }

                  </div>

                  <div className="row mt-4">
                    <div className="col-12 col-md-8 col-lg-7">
                      <p className="f16 f400 clr_black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum viverra quam at pulvinar.</p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-5">
                      <Link to="/index" className="theme_dark_btn f16 f600 w-100 cmn_btn">Let's Start</Link>
                    </div>
                  </div>

              </div>            
          </div>
        </CommonNotifyModal>

        {/* Time Slot modal */}
        <CommonNotifyModal open={(this.state.timeSlotModal) ? true : false} toggle={() => this.closeModal('timeSlotModal')} className={'timeSlotModal time_slot'}>
          <div>
            <h2 className="f20 f600 clr_black mb-3 border_b_grey pb-3">SELECT TIME SLOT</h2>
            
            <form action="javascript:void(0)" className="w-100">
                <div className="row">

                    {
                      this.state.timeSlot.map( (item , index)=> {
                        return(
                          <div className="col-12 mb-2">
                            <div className={`deactivate_radio_wrapper time_slot_radio ${this.state.selectedTimeSlot == index ? 'active' : ''}`}>
                              <img src={Images.calendar_icon.default} alt="" className='calendar_icon' />
                              <input type="radio" id={`slot_${index}`} name="time_slot" className="theme_radio" />
                              <label 
                                for={`slot_${index}`} 
                                className="f16 f400 clr_black"
                                onClick={()=> this.timeSlot(index)}
                              >
                                {item.title}
                              </label>
                            </div>
                          </div>
                        )
                      })
                    }
                    

                    <div className="col-12">
                        <div className="d-flex justify-content-end">
                            <button className="theme_dark_btn coupon_apply_btn cmn_btn" onClick={()=>this.closeModal('timeSlotModal')}>Accept Request</button>
                        </div>
                    </div>

                </div>
            </form>
          </div>
        </CommonNotifyModal>

      </React.Fragment>
    )
  }
}


export default Header;
