import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
import { Images } from 'Constants';

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      allMsg: [
        {
          image: Images.fav_expert_1.default,
          name: 'Kate Kendall',
          time: '5:39 PM',
          message: 'Bio Start-up Equity: I can help you determine exactly how much equity each person.',
          online: true
        },
        {
          image: Images.fav_expert_2.default,
          name: 'Ali Grater',
          time: '6:00 PM',
          message: 'User Interface Design, User Experience, UX/UI - Focus on Retention & Engagement',
          online: false
        },
        {
          image: Images.fav_expert_3.default,
          name: 'John Dey',
          time: '7:00 PM',
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          online: true
        },
        {
          image: Images.fav_expert_1.default,
          name: 'Kate Kendall',
          time: '5:39 PM',
          message: 'Bio Start-up Equity: I can help you determine exactly how much equity each person.',
          online: false
        },
        {
          image: Images.fav_expert_2.default,
          name: 'Ali Grater',
          time: '6:00 PM',
          message: 'User Interface Design, User Experience, UX/UI - Focus on Retention & Engagement',
          online: true
        },
        {
          image: Images.fav_expert_3.default,
          name: 'John Dey',
          time: '7:00 PM',
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          online: false
        },

      ],

      unreadMsg: [
        {
          image: Images.fav_expert_1.default,
          name: 'Kate Kendall',
          time: '5:39 PM',
          message: 'Bio Start-up Equity: I can help you determine exactly how much equity each person.',
          online: true
        },
        {
          image: Images.fav_expert_2.default,
          name: 'Ali Grater',
          time: '6:00 PM',
          message: 'User Interface Design, User Experience, UX/UI - Focus on Retention & Engagement',
          online: false
        },
        {
          image: Images.fav_expert_3.default,
          name: 'John Dey',
          time: '7:00 PM',
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          online: true
        },
        {
          image: Images.fav_expert_1.default,
          name: 'Kate Kendall',
          time: '5:39 PM',
          message: 'Bio Start-up Equity: I can help you determine exactly how much equity each person.',
          online: false
        },
      ],
      chatMsgs: [
        {},
        {},
        {},
        {},
        {},
        {},
      ],

      msgTab: 'all',
      callTab: 'active',

    }
  }


  componentDidMount() {

  }

  componentWillUnmount = () => {

  }

  goBack = () =>{
    window.history.back();
  }

  render() {

    return (
      <React.Fragment>

        <Header></Header>
        
        <section id="basic_info_sec" className="basic_info_sec bg_white chat_board_sec">
          <div className="container">
            <div className="row">

              <div className="col-12 mb-4">
                <button className="f16 f400 clr_black mb-4" onClick={()=> this.goBack()}>
                  <i className="fa fa-chevron-left me-2"></i>Go back
                </button>
                <h2 className="f32 f600 clr_black">
                  Messages
                </h2>
              </div>

              <div className="col-12">
                <div className={`chat_box ${this.state.userProfile ? 'show_side_panel' : ''}`}>

                  {/* Chat list section */}

                  <div className={`chat_list ${this.state.chatSection ? 'hide' : 'show'}`}>

                    <div className="chat_list_head d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <h4 className="f20 f600 clr_black">Chats</h4>
                      </div>
                      <div>
                        <button 
                          className={`f16 me-3 cmn_tab_btn ${this.state.msgTab == 'unread' ? 'clr_black f600' : 'clr_grey f500'}`} 
                          onClick={()=> this.setState({msgTab: 'unread'})}
                          >
                          Unread
                        </button>
                        <button 
                          className={`f16 cmn_tab_btn ${this.state.msgTab == 'all' ? 'clr_black f600' : 'clr_grey f500'} `} 
                          onClick={()=> this.setState({msgTab: 'all'})}
                          >
                          All
                          </button>
                      </div>
                    </div>

                    <div className="search_member_input mb-3">
                      <input type="text" placeholder="Search member" className='theme_input theme_input_2 chat_list_filter' />
                      <span>
                        <Link to="/chat">
                          <img src={Images.search_icon_grey.default} alt="" />
                        </Link>
                      </span>
                    </div>

                    <div className={`chat_list_wrapper cmn_tabs ${this.state.msgTab == 'all' ? 'show' : ''}`} id="all_msg">

                        {
                          this.state.allMsg.map( (obj , key)=> {
                            return(
                              <div className="contct_chat_">
                                <Link className="align-items-center" onClick={()=> this.setState({chatSection: true})}>
                                  <div className="contact_status">
                                    <div className="contact_profile flex-shrink-0">
                                      <img src={obj.image} alt="" className="w-100" />
                                    </div>
                                    {
                                      obj.online ?
                                        <span className='online'></span>
                                      : ''
                                    }
                                  </div>
        
                                  <div className="contact_info">
                                    <div className="">
                                      <div className="d-flex justify-content-between mb-2">
                                        <h6 className="f16 f600 clr_black">{obj.name}</h6>
                                        <p className="f14 f400 clr_grey">{obj.time}</p>
                                      </div>
                                    </div>
                                    <p className="f14 f400 clr_grey one_line_msg">
                                      {obj.message}
                                    </p>
                                  </div>
                                </Link>
                              </div>
                            )
                          })
                        }

                    </div>

                    <div className={`chat_list_wrapper cmn_tabs ${this.state.msgTab == 'unread' ? 'show' : ''}`} id="unread_msg">

                        {
                          this.state.unreadMsg.map( (obj , key)=> {
                            return(
                              <div className="contct_chat_">
                                <Link className="align-items-center active" onClick={()=> this.setState({chatSection: true})}>
                                  <div className="contact_status">
                                    <div className="contact_profile flex-shrink-0">
                                      <img src={obj.image} alt="" className="w-100" />
                                    </div>
                                    {
                                      obj.online ?
                                        <span className='online'></span>
                                      : ''
                                    }
                                  </div>
        
                                  <div className="contact_info">
                                    <div className="">
                                      <div className="d-flex justify-content-between mb-2">
                                        <h6 className="f16 f600 clr_black">{obj.name}</h6>
                                        <p className="f14 f400 clr_grey">{obj.time}</p>
                                      </div>
                                    </div>
                                    <p className="f14 f400 clr_grey one_line_msg">
                                      {obj.message}
                                    </p>
                                  </div>
                                </Link>
                              </div>
                            )
                          })
                        }

                    </div>

                  </div>

                  {/* Chat View Section */}

                  <div className={`chat_view ${this.state.userProfile ? '' : 'expand'} ${this.state.chatSection ? 'show' : ''}`}>
                    {/* user Information div Closer for device less than 1300px */}
                    <div className={`user_info_closer ${this.state.userProfile ? 'show' : ''}`} onClick={()=> this.setState({userProfile: false})}></div>

                    <div className="chat_view_header">

                      <div className="single_chat_profile">
                        <Link className='d-flex align-items-center toggle_list_view' onClick={()=> this.setState({chatSection: false})}>
                          <div>
                            <img src={Images.user_img.default} alt="" className="w-100" />
                          </div>
                          <p className="f18 f600 clr_black ms-2">Allie Grater</p>
                        </Link>
                      </div>

                      <div>
                        <button 
                          className={`profile_cmn_btn cmn_btn ${this.state.userProfile ? 'd-block' : 'd-none'}`}
                          onClick={()=>this.setState({userProfile: false})}
                          >
                            Hide <i className="fas fa-chevron-right ms-2"></i>
                          </button>

                        <button 
                          className={`profile_cmn_btn cmn_btn ${this.state.userProfile ? 'd-none' : 'd-block'}`}
                          onClick={()=>this.setState({userProfile: true})}
                          >
                            <i className="fas fa-chevron-left me-2"></i>View
                        </button>
                      </div>

                    </div>

                    <div className="chatting_sec">

                      {
                        this.state.chatMsgs.map( ()=> {
                          return(
                            <React.Fragment>
                              <div className="chat_row sender_row">
                                <div className="profile_pic">
                                  <img src={Images.user_img.default} alt="" className="w-100" />
                                </div>
                                <div className="sender_msg">
                                  <p className="f15 f400 clr_black">
                                    Bio Start-up Equity: I can help you determine exactly
                                    how much equity each person. Bio Start-up Equity: I can help you
                                    determine exactly how much equity each person. Bio Start-up Equity:
                                    I can help you determine exactly how much equity.
                                  </p>
                                </div>
                              </div>

                              <p className="f14 f400 text-center clr_grey">Mar 02 2021 6:46 AM</p>

                              <div className="chat_row receiver_row">
                                <div className="receiver_msg">
                                  <p className="f15 f400 clr_white">
                                    Hello Kate kendall, how is doing...
                                  </p>
                                </div>
                                <div className="profile_pic">
                                  <img src={Images.user_img.default} alt="" className="w-100" />
                                </div>
                              </div>
                            </React.Fragment>
                          )
                        })
                      }

                    </div>

                    <div className="chat_input_wrapper">
                      <div className="chat_input">
                        <input type="text" placeholder="Write your message here" />
                        <button to="">
                          <img src={Images.chat_msg_send.default} alt="" />
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* <!-- -------user information section------- --> */}

                  <div className={`user_information ${this.state.userProfile ? 'show' : ''}`}>

                    <span className="closer cursor_pointer" onClick={()=> this.setState({userProfile: false})}>
                      <img src={Images.cross.default} alt="" />
                    </span>

                    <div className="sinle_expert_profile expert_figures mt-0 border_b_grey">
                      <div className="user_status">
                        <div className="profile_img position_relative">
                          <Link to="/chat" className="d-block">
                            <img src={Images.fav_expert_2.default} alt="" className="w-100" />
                          </Link>
                          <span className="online"></span>
                        </div>
                      </div>
                      <h2 className="f24 f600  mb-3 text-center">
                        <Link to="/chat" className="clr_black">Kate Kendall</Link>
                      </h2>
                      <div className="d-flex justify-content-center align-items-center mb-3">
                        <img src={Images.location.default} alt="" className="me-2" />
                        <p className="f15 f400 clr_grey">San Francisco, CA</p>
                      </div>
                      <ul className="mb-3">
                        <li>
                          <img src={Images.star_icon.default} alt="" />
                          <p className="f16 f400 clr_grey ms-2">5</p>
                        </li>

                        <li>
                          <img src={Images.phone_icon.default} alt="" />
                          <p className="f16 f400 clr_grey ms-2">18</p>
                        </li>

                        <li>
                          <img src={Images.chat_icon.default} alt="" />
                          <p className="f16 f400 clr_grey ms-2">23</p>
                        </li>
                      </ul>

                      <p className="f14 f400 clr_black text-center mb-2">
                        Bio Start-up Equity: I can help you determine exactly how much equity
                        each person in your start up deserves. Inventor of the Grunt Fund, author of...
                      </p>

                    </div>

                    <div className="p_15_20 d-flex f_wrap justify-content-between border_b_grey">
                      <div>
                        <h4 className="f20 f600 clr_black mb-2">$5</h4>
                        <p className="f12 f400 clr_grey">Per minute</p>
                      </div>
                      <div className="flex-shrink-0">
                        <Link to="/chat" className="theme_dark_btn user_call_btn">Request a call</Link>
                      </div>
                    </div>

                    <div className="p_15_20">
                      <div className="d-flex f_wrap justify-content-between mb-3">
                        <h5 className="f18 f600 clr_black">Expertise</h5>
                        <Link to="/chat" className="f14 f400 clr_black text_underline">View all</Link>
                      </div>

                      <div className="expertise_list_wrapper">

                        <div className="expertise_list mb-3">
                          <div className="expertise_img">
                            <img src={Images.expertise_1.default} alt="" className="w-100" />
                          </div>
                          <p className="f14 f400 clr_black">
                            User Interface Design, User Experience, UX/UI - Focus on Retention & Engagement
                          </p>
                        </div>

                        <div className="expertise_list mb-3">
                          <div className="expertise_img">
                            <img src={Images.expertise_1.default} alt="" className="w-100" />
                          </div>
                          <p className="f14 f400 clr_black">
                            User Interface Design, User Experience, UX/UI - Focus on Retention & Engagement
                          </p>
                        </div>

                      </div>

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



export default ChatScreen;