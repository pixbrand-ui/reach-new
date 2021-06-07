import React from 'react';
// import { Row, Col, Container } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";

import { Images } from 'Constants';
import {CommonNotifyModal, LoginModal} from 'Modals';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      technology_dropdown: false,
      showPassword: false,
    }
  }


  componentDidMount() {

  }

  openDropdown = (dropName) => {
    this.setState({[dropName]: !this.state[dropName]})
  }

  openModal = (modalName) =>{
    this.setState({[modalName] : true })
  }
  
  closeModal = (modalName) =>{
    this.setState({[modalName] : false })
  }

  openCloseModal = (closeModal , openModal) =>{
    this.setState({[closeModal]: false})
    this.setState({[openModal]: true})
  }


  render() {



    return (
      <React.Fragment>

        <header id="header_sec" className="header_sec bg_dark_green">
          <div className="container">
            <div className="row">
              <div className="col-12">

                <div className="header_box">

                  <div className="header_logo mob_order_2">
                    <Link to="/"><img src={Images.logo.default} alt="" className="w-100" /></Link>
                  </div>

                  <div className="wrapper d-flex align-items-center mob_order_3">
                      <div className={`sub_menu_closer ${this.state.technology_dropdown ? 'd-block' : ''}`} onClick={()=>this.openDropdown('technology_dropdown')}></div>
                    <div className="categories d-none d-md-block">

                        <UncontrolledButtonDropdown className="">
                            <DropdownToggle className="drop_toggle">
                              <button className="dropdown-toggle clr_white f16 f500 no_after d-flex align-items-center drop_icon_rotate">
                                Categories <i className="fas fa-chevron-down ms-2"></i>
                              </button>
                            </DropdownToggle>
                            <DropdownMenu className='no_dropdown sub_drop_wrapper '>

                              <ul>
                                <li><Link to="/" className="dropdown-item">Entrepreneurship</Link></li>
                                <li><Link to="/" className="dropdown-item">Digital marketing</Link></li>
                                <li><Link to="/" className="dropdown-item">Start-ups</Link></li>
                                <li><Link to="/" className="dropdown-item">SMM</Link></li>
                                <li>
                                  <Link className="dropdown-item sub_dropdown_link" onClick={()=> this.openDropdown('technology_dropdown')}>
                                    Technology <i className='fa fa-chevron-right sub_drop_icon'></i>
                                  </Link>
                                </li>
                                <li><Link to="/" className="dropdown-item">Other menu</Link></li>
                                <li><Link to="/" className="dropdown-item">Other menu</Link></li>
                                <li><Link to="/" className="dropdown-item">Other menu</Link></li>
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
                        <input type="text" className="cmn_input w-100 filter_toggle filter_input" placeholder="search" onClick={()=> this.openDropdown('filterList')} />

                        {
                        this.state.filterList ? 
                          <span><img src={Images.cross.default} alt="" className="cancel_btn" onClick={()=> this.openDropdown('filterList')}/></span>
                        :
                          <span><img src={Images.search_icon.default} alt="" className="w-100 search_btn" /></span>
                        }

                        
                      </div>

                      <div className={`filter_list_wrapper ${this.state.filterList ? 'show' : ''}`}>
                        <div className="closer" onClick={()=> this.openDropdown('filterList')}></div>
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

                  <div class={`header_link ${this.state.mobDrawer ? 'show' : ''}`}>
                    <div className={`closer ${this.state.mobDrawer ? 'd-block' : ''}`} onClick={()=> this.openDropdown('mobDrawer')}></div>
                      <button class={`fas fa-times toggle_drawer drawer_closer clr_white ms-auto`} onClick={()=> this.openDropdown('mobDrawer')}></button>
                      <ul>
                          <li class="main_links">
                              <Link to="/">Home</Link>
                          </li>
                          <li class="main_links">
                              <Link to="/">Browse</Link>
                          </li>
                          <li class="main_links">
                              <Link to="/">Blog</Link>
                          </li>
                          <li>
                              <Link class="theme_outline_btn" onClick={()=> this.openModal('loginModal')}>Login <img src={Images.login_key.default} alt="" /></Link>
                          </li>
                          <li class="pe-0">
                              <Link class="theme_dark_btn" onClick={()=> this.openModal('signupModal')}>Sign up <img src={Images.right_arrow.default} alt="" /></Link>
                          </li>

                          <div class="d-block d-lg-none">
                            <ul class="categories_links">
                                <li><Link class="dropdown-item" to="category_listing_page.php">Entrepreneurship</Link></li>

                                <li><Link class="dropdown-item" to="category_listing_page.php">Digital marketing</Link></li>

                                <li><Link class="dropdown-item" to="category_listing_page.php">Start-ups</Link></li>

                                <li><Link class="dropdown-item" to="category_listing_page.php">SMM</Link></li>

                                <li><Link class="dropdown-item" to="category_listing_page.php">Technology</Link></li>

                                <li><Link class="dropdown-item" to="category_listing_page.php">Other menu</Link></li>

                                <li><Link class="dropdown-item" to="category_listing_page.php">Other menu</Link></li>

                                <li><Link class="dropdown-item" to="category_listing_page.php">Other menu</Link></li>
                            </ul>
                          </div>

                      </ul>

                          

                  </div>

                  <div className="mob_drawer">

                    <button className="fas fa-bars clr_white toggle_drawer me-2" onClick={()=> this.openDropdown('mobDrawer')}></button>

                  </div>

                </div>

                <div className="header_box_2 mt-3">

                  <div className={`sub_menu_closer ${this.state.technology_dropdown ? 'd-block' : ''}`} onClick={()=>this.openDropdown('technology_dropdown')}></div>

                  <div className="categories mb-3 p-0">
                        <UncontrolledButtonDropdown classNameName="">
                            <DropdownToggle classNameName="drop_toggle">
                              <button className="dropdown-toggle clr_white f16 f500 no_after d-flex align-items-center drop_icon_rotate">
                                Categories <i className="fas fa-chevron-down ms-2"></i>
                              </button>
                            </DropdownToggle>
                            <DropdownMenu className='no_dropdown sub_drop_wrapper '>

                              <ul>
                                <li><Link to="/" className="dropdown-item">Entrepreneurship</Link></li>
                                <li><Link to="/" className="dropdown-item">Digital marketing</Link></li>
                                <li><Link to="/" className="dropdown-item">Start-ups</Link></li>
                                <li><Link to="/" className="dropdown-item">SMM</Link></li>
                                <li>
                                  <Link className="dropdown-item sub_dropdown_link" onClick={()=> this.openDropdown('technology_dropdown')}>
                                    Technology <i className='fa fa-chevron-right sub_drop_icon'></i>
                                  </Link>
                                </li>
                                <li><Link to="/" className="dropdown-item">Other menu</Link></li>
                                <li><Link to="/" className="dropdown-item">Other menu</Link></li>
                                <li><Link to="/" className="dropdown-item">Other menu</Link></li>
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
                      <input type="text" className="cmn_input w-100 filter_toggle filter_input" placeholder="search" onClick={()=> this.openDropdown('filterList')} />

                      {
                        this.state.filterList ? 
                          <span><img src={Images.cross.default} alt="" className="cancel_btn" onClick={()=> this.openDropdown('filterList')}/></span>
                        :
                          <span><img src={Images.search_icon.default} alt="" className="w-100 search_btn" /></span>
                      }

                      
                      
                    </div>

                    <div className={`filter_list_wrapper ${this.state.filterList ? 'show' : ''}`}>
                        <div className="closer" onClick={()=> this.openDropdown('filterList')}></div>
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

        <LoginModal open={(this.state.loginModal) ? true : false} toggle={() => this.closeModal('loginModal')}  className={'loginModal'}>
              <div class="row m-0 b_radius_8">
                <div class="col-sm-6 bg_dark_green modal_left_side" style={{backgroundImage: `url(${Images.modal_side_img.default})`}}>
                    <div class="modal_padding login_modal_content h-100">
                         {/* <h2 class="f28 f500 clr_white">
                            <span class="clr_green">Welcome!</span> find your best
                            expert in few minutes!
                        </h2>  */}
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="login_form_pdng">
                        <span class="modal_closer" onClick={() => this.closeModal('loginModal')}><img src={Images.cross.default} alt="" /></span>
                        <h2 class="clr_black f28 f600 mb-5 text-center">Login Account</h2>
                          <form action="" method='post'>

                            <div class="theme_form_input mb-3">
                                <label for="email_1">Email</label>
                                <div class="input_wrapper">
                                    <input type="email" placeholder="Enter email address" name="email_1" id="email_1" class="theme_input" />
                                    <span><img src={Images.message_icon.default} alt="" class="w_18" /></span>
                                </div>
                            </div>

                            <div class="theme_form_input mb-3">
                                <label for="pwd">Password</label>
                                <div class="input_wrapper">
                                    <input 
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    placeholder="Enter  Password" 
                                    name="pwd" 
                                    id="pwd" 
                                    class="theme_input"
                                    ref={(ip) => this.myInp = ip} />

                                    <span class="cursor_pointer toggle_password" onClick={()=> { this.openDropdown("showPassword") ; this.myInp.focus()}}>
                                      {
                                        this.state.showPassword ? 
                                          <img src={Images.lock_show_icon.default} alt="" class="w_15 lock_show_icon" />
                                        :
                                          <img src={Images.lock_icon.default} alt="" class="w_15 lock_icon" />
                                      }
                                    </span>
                                </div>
                            </div>
                            <button class="theme_dark_btn w-100 min_h_45 f16 f600">Login</button>
                            <p class="clr_black f15 f500 p_b_15 m_t_15 m_b_15 border_b_grey text-center">Don't have an account <Link class="clr_green" onClick={()=> this.openCloseModal('loginModal' , 'signupModal')}>Sign up</Link></p>

                            <Link to='/' class="border_grey login_social_btn w-100 m_b_10"> 
                                <img src={Images.google_icon.default} alt="" />
                                <span class="w-100 text-center">Login with google</span>
                            </Link>
                            <Link to='/' class="border_grey login_social_btn w-100 m_b_15">
                                <img src={Images.facebook_icon.default} alt="" />
                                <span class="w-100 text-center">Login with facebook</span>
                            </Link>

                          </form>

                          <button class="clr_green f15 f500 d-block w-100 text-center" onClick={()=> this.openCloseModal('loginModal' , 'forgotModal')}>Forogot Password ?</button>

                          <p class="f12 f400 clr_grey text-center margin_lr_minus_50 mt-5">
                              By signing up, you agree to our <a href="javascript:void(0)" class="text_underline clr_grey">Terms of Use</a> and <a href="javascript:void(0)" class="text_underline clr_grey">Privacy Policy</a>,
                              and you confirm that you're 18 years old or over.
                          </p>
                    </div>
                </div>
            </div>
        </LoginModal>

        {/* Signup Modal */}
        <LoginModal open={(this.state.signupModal) ? true : false} toggle={() => this.closeModal('signupModal')}  className={'signupModal'}>
              <div class="row m-0 b_radius_8">
                <div class="col-sm-6 bg_dark_green modal_left_side" style={{backgroundImage: `url(${Images.modal_side_img.default})`}}>
                    <div class="modal_padding login_modal_content h-100">
                        {/* <h2 class="f28 f500 clr_white">
                            <span class="clr_green">Welcome!</span> find your best
                            expert in few minutes!
                        </h2>  */}
                    </div>
                </div>
                <div class="col-sm-6 bg_white">
                    <div class="login_form_pdng">
                        <span class="modal_closer"onClick={() => this.closeModal('signupModal')}><img src={Images.cross.default} alt="" /></span>
                        <h2 class="clr_black f28 f600 mb-5 text-center">Sign Up Account</h2>
                        <form action="javascript:void(0)" method='post'>

                            <div class="theme_form_input mb-3">
                                <label for="fname">First name</label>
                                <div class="input_wrapper">
                                    <input type="text" placeholder="Enter your First Name" name="fname" id="fname" class="theme_input" />
                                    <span><img src="./assets/img/user-icon-green.png" alt="" class="w_18" /></span>
                                </div>
                            </div>
                            <div class="theme_form_input mb-3">
                                <label for="lname">Last name</label>
                                <div class="input_wrapper">
                                    <input type="text" placeholder="Enter your Last Name" name="lname" id="lname" class="theme_input" />
                                    <span><img src={Images.user_icon_green.default} alt="" class="w_18" /></span>
                                </div>
                            </div>

                            <div class="theme_form_input mb-3">
                                <label for="email_2">Email</label>
                                <div class="input_wrapper">
                                    <input type="email" placeholder="Enter email address" name="email_2" id="email_2" class="theme_input" />
                                    <span><img src={Images.message_icon.default} alt="" class="w_18" /></span>
                                </div>
                            </div>
                            <div class="theme_form_input mb-3">
                                <label for="pwd">Password</label>
                                <div class="input_wrapper">
                                    <input 
                                    type={this.state.showPassword2 ? 'text' : 'password'}
                                    placeholder="Enter Password" 
                                    name="pwd" 
                                    id="pwd" 
                                    class="theme_input"
                                    ref={(id) => this.myInp2 = id} />

                                    <span class="cursor_pointer toggle_password" onClick={()=> { this.openDropdown("showPassword2") ; this.myInp2.focus()}}>
                                      {
                                        this.state.showPassword2 ? 
                                          <img src={Images.lock_show_icon.default} alt="" class="w_15 lock_show_icon" />
                                        :
                                          <img src={Images.lock_icon.default} alt="" class="w_15 lock_icon" />
                                      }
                                      
                                    </span>
                                </div>
                            </div>
                            <button class="theme_dark_btn w-100 min_h_45 f16 f600" onClick={()=> this.openCloseModal('signupModal' , 'confirmMailModal')}>Sign Up</button>
                            <p class="clr_black f15 f500 m_t_15 text-center">Already a charles member? <a href="javascript:void(0)" class="clr_green" onClick={()=> this.openCloseModal('signupModal' , 'loginModal')}>Log In</a></p>

                            <p class="f12 f400 clr_grey text-center margin_lr_minus_50 mt-5">
                                By signing up, you agree to our <a href="javascript:void(0)" class="text_underline clr_grey">Terms of Use</a> and <a href="javascript:void(0)" class="text_underline clr_grey">Privacy Policy</a>,
                                and you confirm that you're 18 years old or over.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </LoginModal>

        {/* Forgot Passwor Modal */}
        <CommonNotifyModal open={(this.state.forgotModal) ? true : false} toggle={()=> this.closeModal('forgotModal')} className={'forgotModal modal_w_450 modal_content_transparent custom_modal_pdng'}>
          <div class="row m-0 mb-3 b_radius_8">
              <div class="col-sm-12 bg_white">
                  <div class="login_form_pdng">
                      <span class="modal_closer" onClick={()=> this.closeModal('forgotModal')}><img src={Images.cross.default} alt="" /></span>
                      <h2 class="clr_black f28 f600 mb-3 text-center">Forgot Password</h2>
                      <p class="f15 f400 clr_black mb-3 text-center">
                          Enter your email address below and
                          we'll send you reset instructions.
                      </p>
                      <form action="javascript:void(0)">

                          <div class="theme_form_input mb-3">
                              <label for="email">Email</label>
                              <div class="input_wrapper">
                                  <input type="email" placeholder="Enter email address" name="email" id="email" class="theme_input" />
                                  <span><img src={Images.message_icon.default} alt="" class="w_18" /></span>
                              </div>
                          </div>
                          <button class="theme_dark_btn w-100 min_h_45 f16 f600" onClick={()=> this.openCloseModal('forgotModal' , 'linkSendModal')}>Send Reset Link</button>
                          <p class="clr_black f15 f500 m_t_15 text-center">Already a charles member? <Link href="" class="clr_green" onClick={()=> this.openCloseModal('forgotModal' , 'loginModal')}>Log In</Link></p>

                      </form>
                  </div>
              </div>
          </div>
        </CommonNotifyModal>

        {/* Link send Modal */}
        <CommonNotifyModal open={(this.state.linkSendModal) ? true : false} toggle={()=> this.closeModal('linkSendModal')} className={'linkSendModal link_send_popup custom_modal_pdng'}>
          <div class="acc_deactive_modal_body text-center">
              <img src={Images.check_fill.default} alt="" class="modal_top_img m_b_20" />
              <p class="f16 f400 clr_grey m_b_20">
                  Link has to be send to your registerd 
                  email address
              </p>
              <a href="javascript:void(0)" class="theme_dark_btn cmn_btn" onClick={()=> this.openCloseModal('linkSendModal' , 'changePassModal')}>Ok</a>
          </div>
        </CommonNotifyModal>

        {/* Change Password Modal */}
        <CommonNotifyModal open={(this.state.changePassModal) ? true : false} toggle={()=> this.closeModal('changePassModal')} className={'changePassModal modal_w_450 modal_content_transparent custom_modal_pdng'}>
            <div class="row m-0 mb-2">
                <div class="col-sm-12 bg_white brdr_r_10">
                    <div class="login_form_pdng">
                        <span class="modal_closer" data-dismiss="modal"><img src={Images.cross.default} alt="" /></span>
                        <h2 class="clr_black f28 f600 mb-3 text-center">Change Password</h2>
                        <form action="javascript:void(0)">

                            <div class="theme_form_input mb-3">
                                <label for="N_pwd">New Password</label>
                                <div class="input_wrapper">
                                  <input 
                                    type={this.state.showPassword3 ? 'text' : 'password'}
                                    placeholder="Enter New Password" 
                                    name="N_pwd" 
                                    id="N_pwd" 
                                    class="theme_input"
                                    ref={(id) => this.myInp3 = id} />

                                    <span class="cursor_pointer toggle_password" onClick={()=> { this.openDropdown("showPassword3") ; this.myInp3.focus()}}>
                                      {
                                        this.state.showPassword3 ? 
                                          <img src={Images.lock_show_icon.default} alt="" class="w_15 lock_show_icon" />
                                        :
                                          <img src={Images.lock_icon.default} alt="" class="w_15 lock_icon" />
                                      }
                                      
                                    </span>
                                </div>
                            </div>
                            <div class="theme_form_input mb-3">
                                <label for="c_N_pwd">Confirm New Password</label>
                                <div class="input_wrapper">
                                  <input 
                                    type={this.state.showPassword4 ? 'text' : 'password'}
                                    placeholder="Confirm New  Password" 
                                    name="c_N_pwd" 
                                    id="c_N_pwd" 
                                    class="theme_input"
                                    ref={(id) => this.myInp4 = id} />

                                    <span class="cursor_pointer toggle_password" onClick={()=> { this.openDropdown("showPassword4") ; this.myInp4.focus()}}>
                                      {
                                        this.state.showPassword4 ? 
                                          <img src={Images.lock_show_icon.default} alt="" class="w_15 lock_show_icon" />
                                        :
                                          <img src={Images.lock_icon.default} alt="" class="w_15 lock_icon" />
                                      }
                                      
                                    </span>
                                </div>
                            </div>
                            <button class="theme_dark_btn w-100 min_h_45 f16 f600" onClick={()=> this.openCloseModal('changePassModal' , 'passChangedModal')}>Confirm</button>
                            <p class="clr_black f15 f500 m_t_15 text-center">Already a charles member? <a href="javascript:void(0)" class="clr_green" onClick={()=> this.openCloseModal('changePassModal' , 'loginModal')}>Log In</a></p>

                        </form>
                    </div>
                </div>
            </div>
        </CommonNotifyModal>

        {/* Password successfully Changed Modal */}
        <CommonNotifyModal open={(this.state.passChangedModal) ? true : false} toggle={()=> this.closeModal('passChangedModal')} className={'passChangedModal link_send_popup custom_modal_pdng'}>
          <div class="acc_deactive_modal_body text-center">
              <img src={Images.check_fill.default} alt="" class="modal_top_img m_b_20" />
              <p class="f16 f400 clr_grey m_b_20">
                  Your password has been changed
                  Successfully
              </p>
              <a href="javascript:void(0)" class="theme_dark_btn cmn_btn" onClick={()=> this.openCloseModal('passChangedModal' , 'loginModal')}>Ok</a>
          </div>
        </CommonNotifyModal>

        {/* Confirm Email modal */}
        <CommonNotifyModal open={(this.state.confirmMailModal) ? true : false} toggle={()=> this.closeModal('confirmMailModal')} className={'confirmMailModal'}>
          <span class="modal_closer" onClick={()=> this.closeModal('confirmMailModal')}><img src={Images.cross.default} alt="" /></span>
          <div class="acc_deactive_modal_body text-center">
              
              <h2 class="f18 f500 clr_black m_b_20">Confirm email</h2>
              <p class="f16 f400 clr_grey m_b_20">
                  A Confirmation Email Has Been Sent To:
              </p>
              <div class="d-flex align-items-center m_b_20">
                  <img src={Images.confirm_email.default} alt="" class="me-4" />
                  <h4 class="f20 f600 clr_black">Alex_Maxwell@Gmail.Com</h4>
              </div>
              <p class="f16 f400 clr_black mb-4">Click on the confirmation link in the email to activate your account.</p>

              <p class="f14 f600 clr_black m_b_20">If you don't see this email you can:</p>
              <div class="d-flex align-items-center justify-content-center m_b_20">
                  <Link to='/' class="f14 f400 clr_black junk_link">
                    <img src={Images.junk_box.default} alt="" class="me-2" />
                    <img src={Images.junk_box_green.default} alt="" class="me-2 hover_img" />
                    Check your junk mail folder
                  </Link>
              </div>
              <a href="javascript:void(0)" class="f14 f400 clr_green resend_link" onClick={()=> this.openCloseModal('confirmMailModal' , 'resendMailModal')}>Change or resend confirmation email</a>
          </div>
        </CommonNotifyModal>

        {/* Resend Email modal */}
        <CommonNotifyModal open={(this.state.resendMailModal) ? true : false} toggle={()=> this.closeModal('resendMailModal')} className={'resendMailModal'}>
          <span class="modal_closer" onClick={()=> this.closeModal('resendMailModal')}><img src={Images.cross.default} alt="" /></span>
          <div class="acc_deactive_modal_body text-center">
              
              <h2 class="f18 f500 clr_black m_b_20">Confirm email</h2>
              <p class="f16 f400 clr_grey m_b_20">
                  A Confirmation Email Has Been Sent To:
              </p>
              <div class="d-flex align-items-center m_b_20">
                  <img src={Images.confirm_email.default} alt="" class="me-4" />
                  <h4 class="f20 f600 clr_black">Alex_Maxwell@Gmail.Com</h4>
              </div>
              <p class="f16 f400 clr_black mb-4">Click on the confirmation link in the email to activate your account.</p>

              <form action="javascript:void(0)" method="post">
                <div class="theme_form_input mb-3">
                    <div class="input_wrapper">
                        <input type="email" placeholder="Enter email address" name="" id="" class="theme_input" />
                        <span><img src={Images.message_icon.default} alt="" class="w_18" /></span>
                    </div>
                </div>
                <Link to="/" class="f14 f400 theme_dark_btn cmn_btn w-100" onClick={()=> this.closeModal('resendMailModal')}>Resend Confirmation Link</Link>
              </form>
          </div>
        </CommonNotifyModal>


      </React.Fragment>
    )
  }
}


export default Header;
