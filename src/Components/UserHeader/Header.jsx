import React from 'react';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";

import { Images } from 'Constants';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      technology_dropdown: false,
      filterList: false,
      mobDrawer: false,
      scrollHeaderClass: 'top',
      headerLogo: 'header',
      scrollSearchBox: 'show',
    }
  }


  componentDidMount() {
    window.addEventListener('scroll', () => {
      let scrollHeaderClass = 'bg_white';
      let scrollSearchBox  = 'hide';
      let headerLogo  = 'footer';
      
      if(window.scrollY === 0){
        scrollHeaderClass = 'top';
        headerLogo = 'header';
        scrollSearchBox = 'show';
      }
      
      this.setState({ scrollHeaderClass , headerLogo , scrollSearchBox });
   });
  }

  componentWillUnmount(){
    // window.removeEventListener("scroll");
  }

  openDropdown = (dropName) => {
    this.setState({[dropName]: !this.state[dropName]})
  }


  render() {



    return (
      <React.Fragment>

        <header id="header_sec" className={`header_sec bg_dark_green border_b_none ${this.state.scrollHeaderClass}`}>
          <div className="container">
            <div className="row">
              <div className="col-12">

                <div className="header_box">
                <div className={`sub_menu_closer ${this.state.technology_dropdown ? 'd-block' : ''}`} onClick={()=>this.openDropdown('technology_dropdown')}></div>

                  <div className="header_logo mob_order_2">
                    {
                      this.state.headerLogo == 'header' ?
                      <Link to="/"><img src={Images.logo.default} alt="" className="w-100" /></Link>
                      :
                      <Link to="/"><img src={Images.footer_logo.default} alt="" className="w-100" /></Link>
                    }
                  </div>

                  <div className="wrapper d-flex align-items-center mob_order_3">
                    <div className="categories d-none d-md-block">

                        <UncontrolledButtonDropdown classNameName="">
                            <DropdownToggle classNameName="drop_toggle">
                              <button className="dropdown-toggle clr_white f16 f500 no_after d-flex align-items-center drop_icon_rotate">
                                Categories <i className="fas fa-chevron-down ms-2"></i>
                              </button>
                            </DropdownToggle>
                            <DropdownMenu className='no_dropdown sub_drop_wrapper '>

                              <ul>
                                <li><Link to="/category-list" className="dropdown-item">Entrepreneurship</Link></li>
                                <li><Link to="/category-list" className="dropdown-item">Digital marketing</Link></li>
                                <li><Link to="/category-list" className="dropdown-item">Start-ups</Link></li>
                                <li><Link to="/category-list" className="dropdown-item">SMM</Link></li>
                                <li>
                                  <button className="dropdown-item sub_dropdown_link" onClick={()=> this.openDropdown('technology_dropdown')}>
                                    Technology <i className='fa fa-chevron-right sub_drop_icon'></i>
                                  </button>
                                </li>
                                <li><Link to="/category-list" className="dropdown-item">Other menu</Link></li>
                                <li><Link to="/category-list" className="dropdown-item">Other menu</Link></li>
                                <li><Link to="/category-list" className="dropdown-item">Other menu</Link></li>
                              </ul>

                              <div className={`dropdown-menu category_sub_dropdown sub_menu no_dropdown ${this.state.technology_dropdown ? 'show' : ''}`}>
                                <ul className="">
                                  <li>
                                    <h5 className="clr_black">Technology</h5>
                                  </li>
                                  <li><Link to="/sub-category-list" className="dropdown-item">Wordpress</Link></li>
                                  <li><Link to="/sub-category-list" className="dropdown-item">Software development</Link></li>
                                  <li><Link to="/sub-category-list" className="dropdown-item">Website design</Link></li>
                                  <li><Link to="/sub-category-list" className="dropdown-item">Shopify</Link></li>
                                  <li><Link to="/sub-category-list" className="dropdown-item">Woocommerce</Link></li>
                                  <li><Link to="/sub-category-list" className="dropdown-item">Webflow</Link></li>
                                  <li><Link to="/sub-category-list" className="dropdown-item">Angular js</Link></li>
                                  <li><Link to="/sub-category-list" className="dropdown-item">PHP</Link></li>
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
                          <span><img src={Images.cross.default} alt="" className="cancel_btn" onClick={()=> this.openDropdown('filterList')} /></span>
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

                  <div className={`header_link_closer ${this.state.mobDrawer ? 'd-block' : 'd-none'}`} onClick={()=> this.openDropdown('mobDrawer')}></div>
                  <div className={`header_link ${this.state.mobDrawer ? 'show' : ''}`}>
                      <button className={`fas fa-times toggle_drawer drawer_closer clr_white ms-auto`} onClick={()=> this.openDropdown('mobDrawer')}></button>
                    <ul>
                      
                      <li className="main_links">
                        <Link to="/">Home</Link>
                      </li>
                      
                      <li className="main_links">
                        <Link to="/browse">Browse</Link>
                      </li>

                      <div className="d-block d-lg-none">
                        <ul className="">
                          <li><Link className="main_links" to="/category-list">Entrepreneurship</Link></li>

                          <li><Link className="main_links" to="/category-list">Digital marketing</Link></li>

                          <li><Link className="main_links" to="/category-list">Start-ups</Link></li>

                          <li><Link className="main_links" to="/category-list">SMM</Link></li>

                          <li><Link className="main_links" to="/category-list">Technology</Link></li>

                          <li><Link className="main_links" to="/category-list">Other menu</Link></li>

                          <li><Link className="main_links" to="/category-list">Other menu</Link></li>

                          <li><Link className="main_links" to="/category-list">Other menu</Link></li>
                        </ul>
                      </div>


                      <li className="notification_tab_pc">

                        <UncontrolledButtonDropdown classNameName="">
                            <DropdownToggle classNameName="drop_toggle">
                            <div className="user_img_info notification_drop">
                              <Link className="notification_bell"><i className="far fa-bell"><span className="count clr_white f12">2</span></i></Link>
                            </div>
                            </DropdownToggle>
                            <DropdownMenu className='user_notification_dropdown expert_noti_dropdown'>

                                <ul>
                                  <li>
                                    <div className="user_img_info">
                                      <Link to="/" className="d-flex align-items-center">
                                        <div className="user_img">
                                          <img src={Images.user_img_2.default} alt="" className="ms-0" />
                                        </div>
                                        <div className="user_info ms-3">
                                          <h6 className="f15 f500 clr_black">Kate Kendall <span className="f400 clr_grey">Send you call request.</span></h6>
                                          <Link to="/" className="theme_dark_btn cmn_btn no_effect_btn me-2">Accept</Link>
                                          <Link to="/" className="cmn_outline_grey_btn clr_grey cmn_btn no_effect_btn">Reject</Link>

                                          <p className="f14 f400 clr_grey text-end mt-2">2 day ago</p>
                                        </div>
                                      </Link>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="user_img_info">
                                      <Link to="/" className="d-flex align-items-center">
                                        <div className="user_img">
                                          <img src={Images.user_img.default} alt="" className="ms-0" />
                                        </div>
                                        <div className="user_info ms-3">
                                          <h6 className="f15 f500 clr_black">Kate Kendall <span className="f400 clr_grey">Send you call request.</span></h6>
                                          <Link to="/" className="cmn_outline_grey_btn clr_grey cmn_btn no_effect_btn">Rejected</Link>

                                          <p className="f14 f400 clr_grey text-end mt-2">2 day ago</p>
                                        </div>
                                      </Link>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="user_img_info">
                                      <Link to="/" className="d-flex align-items-center">
                                        <div className="user_img">
                                          <img src={Images.user_img_2.default} alt="" className="ms-0" />
                                        </div>
                                        <div className="user_info ms-3">
                                          <h6 className="f15 f500 clr_black">Kate Kendall <span className="f400 clr_grey">Send you call request.</span></h6>
                                          <Link to="/" className="cmn_outline_grey_btn clr_grey cmn_btn no_effect_btn">Cancelled</Link>
                                          <p className="f14 f400 clr_grey text-end mt-2">2 day ago</p>
                                        </div>
                                      </Link>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="user_img_info">
                                      <Link to="/" className="d-flex align-items-center">
                                        <div className="user_img">
                                          <img src={Images.user_img_2.default} alt="" className="ms-0" />
                                        </div>
                                        <div className="user_info ms-3">
                                          <h6 className="f15 f500 clr_black">Kate Kendall <span className="f400 clr_grey">Send you call request.</span></h6>
                                          <Link to="/" className="theme_dark_btn cmn_btn no_effect_btn me-2">Accept</Link>
                                          <Link to="/" className="cmn_outline_grey_btn clr_grey cmn_btn no_effect_btn">Reject</Link>

                                          <p className="f14 f400 clr_grey text-end mt-2">2 day ago</p>
                                        </div>
                                      </Link>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="user_img_info">
                                      <Link to="/" className="d-flex align-items-center">
                                        <div className="user_img">
                                          <img src={Images.user_img.default} alt="" className="ms-0" />
                                        </div>
                                        <div className="user_info ms-3">
                                          <h6 className="f15 f500 clr_black">Kate Kendall <span className="f400 clr_grey">Send you call request.</span></h6>
                                          <Link to="/" className="cmn_outline_grey_btn clr_grey cmn_btn no_effect_btn">Rejected</Link>

                                          <p className="f14 f400 clr_grey text-end mt-2">2 day ago</p>
                                        </div>
                                      </Link>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="user_img_info">
                                      <Link to="/" className="d-flex align-items-center">
                                        <div className="user_img">
                                          <img src={Images.user_img_2.default} alt="" className="ms-0" />
                                        </div>
                                        <div className="user_info ms-3">
                                          <h6 className="f15 f500 clr_black">Kate Kendall <span className="f400 clr_grey">Send you call request.</span></h6>
                                          <Link to="/" className="cmn_outline_grey_btn clr_grey cmn_btn no_effect_btn">Cancelled</Link>
                                          <p className="f14 f400 clr_grey text-end mt-2">2 day ago</p>
                                        </div>
                                      </Link>
                                    </div>
                                  </li>

                                </ul>

                            </DropdownMenu>
                        </UncontrolledButtonDropdown>

                        
                      </li>
                      
                      <li>

                        <UncontrolledButtonDropdown className="user_info_dropdown drop_icon_rotate">

                            <DropdownToggle classNameName="drop_toggle">
                              <div className="user_img_info  " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <button className="d-flex align-items-center">
                                  <div className="user_img">
                                    <img src={Images.user_img.default} alt="" className="m-0" />
                                  </div>
                                  <div className="user_info ms-3">
                                    <h6 className="f16 f500 clr_white m-0 d-flex align-items-end">Alexjender <i className="fas fa-chevron-down ms-2"></i> </h6>
                                  </div>
                                </button>
                              </div>
                            </DropdownToggle>

                            <DropdownMenu className='user_account_dropdown no_dropdown'>
                              <ul>
                                <li>
                                  <Link className="dropdown-item f16 f400" to="/user-profile">Account</Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item f16 f400" to="/favourite-list">Favorite</Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item f16 f400" to="/">Messages</Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item f16 f400" to="">Call</Link>
                                </li>
                              </ul>

                              <ul>
                                <li>
                                  <Link className="dropdown-item f16 f400" to="edit-profile">Edit Profile</Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item f16 f400" to="/setting">Setting</Link>
                                </li>
                              </ul>

                              <ul>
                                <li>
                                  <Link className="dropdown-item f16 f400" to="/support">Support</Link>
                                </li>
                              </ul>

                              <ul>
                                <li>
                                  <Link to="/" className="dropdown-item f16 f400">Logout</Link>
                                </li>
                              </ul>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>




                        {/* <div className="dropdown">
                          <div className="user_img_info drop_icon_rotate user_info_dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <a href="" className="d-flex align-items-center">
                              <div className="user_img">
                                <img src={Images.user_img.default} alt="" className="m-0" />
                              </div>
                              <div className="user_info ms-3">
                                <h6 className="f16 f500 clr_white m-0 d-flex align-items-end">Alexjender <i className="fas fa-chevron-down ms-2"></i> </h6>
                              </div>
                            </a>
                          </div>
                          <div className="dropdown-menu user_account_dropdown" aria-labelledby="dropdownMenuButton">

                            
                          </div>
                        </div> */}
                      </li>
                    
                    </ul>
                    
                  </div>

                  <div className="mob_drawer">

                    <button className="fas fa-bars clr_white toggle_drawer me-2" onClick={()=> this.openDropdown('mobDrawer')}></button>

                    <ul className="d-inline-block">

                      <li>
                      <UncontrolledButtonDropdown classNameName="">
                            <DropdownToggle classNameName="drop_toggle">
                            <div className="user_img_info notification_drop" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <Link className="notification_bell"><i className="far fa-bell"><span className="count clr_white f12">2</span></i></Link>
                            </div>
                            </DropdownToggle>
                            <DropdownMenu className='user_notification_dropdown expert_noti_dropdown'>

                                <ul>
                                  <li>
                                    <div className="user_img_info">
                                      <a href="/" className="d-flex align-items-center">
                                        <div className="user_img">
                                          <img src={Images.user_img_2.default} alt="" className="ms-0" />
                                        </div>
                                        <div className="user_info ms-3">
                                          <h6 className="f15 f500 clr_black">Kate Kendall <span className="f400 clr_grey">Send you call request.</span></h6>
                                          <a href="/" className="theme_dark_btn cmn_btn no_effect_btn me-2">Accept</a>
                                          <a href="/" className="cmn_outline_grey_btn clr_grey cmn_btn no_effect_btn">Reject</a>

                                          <p className="f14 f400 clr_grey text-end mt-2">2 day ago</p>
                                        </div>
                                      </a>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="user_img_info">
                                      <a href="/" className="d-flex align-items-center">
                                        <div className="user_img">
                                          <img src={Images.user_img.default} alt="" className="ms-0" />
                                        </div>
                                        <div className="user_info ms-3">
                                          <h6 className="f15 f500 clr_black">Kate Kendall <span className="f400 clr_grey">Send you call request.</span></h6>
                                          <a href="/" className="cmn_outline_grey_btn clr_grey cmn_btn no_effect_btn">Rejected</a>

                                          <p className="f14 f400 clr_grey text-end mt-2">2 day ago</p>
                                        </div>
                                      </a>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="user_img_info">
                                      <a href="/" className="d-flex align-items-center">
                                        <div className="user_img">
                                          <img src={Images.user_img_2.default} alt="" className="ms-0" />
                                        </div>
                                        <div className="user_info ms-3">
                                          <h6 className="f15 f500 clr_black">Kate Kendall <span className="f400 clr_grey">Send you call request.</span></h6>
                                          <a href="/" className="cmn_outline_grey_btn clr_grey cmn_btn no_effect_btn">Cancelled</a>
                                          <p className="f14 f400 clr_grey text-end mt-2">2 day ago</p>
                                        </div>
                                      </a>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="user_img_info">
                                      <a href="/" className="d-flex align-items-center">
                                        <div className="user_img">
                                          <img src={Images.user_img_2.default} alt="" className="ms-0" />
                                        </div>
                                        <div className="user_info ms-3">
                                          <h6 className="f15 f500 clr_black">Kate Kendall <span className="f400 clr_grey">Send you call request.</span></h6>
                                          <a href="/" className="theme_dark_btn cmn_btn no_effect_btn me-2">Accept</a>
                                          <a href="/" className="cmn_outline_grey_btn clr_grey cmn_btn no_effect_btn">Reject</a>

                                          <p className="f14 f400 clr_grey text-end mt-2">2 day ago</p>
                                        </div>
                                      </a>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="user_img_info">
                                      <a href="/" className="d-flex align-items-center">
                                        <div className="user_img">
                                          <img src={Images.user_img.default} alt="" className="ms-0" />
                                        </div>
                                        <div className="user_info ms-3">
                                          <h6 className="f15 f500 clr_black">Kate Kendall <span className="f400 clr_grey">Send you call request.</span></h6>
                                          <a href="/" className="cmn_outline_grey_btn clr_grey cmn_btn no_effect_btn">Rejected</a>

                                          <p className="f14 f400 clr_grey text-end mt-2">2 day ago</p>
                                        </div>
                                      </a>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="user_img_info">
                                      <a href="/" className="d-flex align-items-center">
                                        <div className="user_img">
                                          <img src={Images.user_img_2.default} alt="" className="ms-0" />
                                        </div>
                                        <div className="user_info ms-3">
                                          <h6 className="f15 f500 clr_black">Kate Kendall <span className="f400 clr_grey">Send you call request.</span></h6>
                                          <a href="/" className="cmn_outline_grey_btn clr_grey cmn_btn no_effect_btn">Cancelled</a>
                                          <p className="f14 f400 clr_grey text-end mt-2">2 day ago</p>
                                        </div>
                                      </a>
                                    </div>
                                  </li>

                                </ul>

                            </DropdownMenu>
                        </UncontrolledButtonDropdown> 
                      </li>
                    </ul>

                  </div>

                </div>

                <div className={`header_box_2 mt-3 ${this.state.scrollSearchBox}`}>
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

                  <div className="search_box w-100">
                    <div className="cmn_input_box bg_green_ min_w_350 w-100">
                      <input type="text" className="cmn_input w-100 filter_toggle filter_input" placeholder="search" onClick={()=> this.openDropdown('filterList')} />

                        {
                          this.state.filterList ? 
                          <span><img src={Images.cross.default} alt="" className="cancel_btn" onClick={()=> this.openDropdown('filterList')} /></span>
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

      </React.Fragment>
    )
  }
}


export default Header;
