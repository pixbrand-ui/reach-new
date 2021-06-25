import React from 'react';
import { Link } from "react-router-dom";
// import Header from '../../Components/UserHeader'
import StarRatings from 'react-star-ratings';
import CommonNotifyModal from 'Modals/CommonNotifyModal';
import { Images } from 'Constants';

class VideoCall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userReviews: [
        { title: 'Lorem Ipsum is simply dummy text of the printing', check: false },
        { title: 'Lorem Ipsum is simply dummy text of the printing', check: false },
        { title: 'Lorem Ipsum is simply dummy text of the printing', check: false },
        { title: 'Lorem Ipsum is simply dummy text of the printing', check: false },
      ],

      chatMsgs: [
        {},
        {},
        {},
        {},
        {},
        {},
      ],

      chatSection: false

    }
  }


  componentDidMount() {

  }

  componentWillUnmount = () => {

  }

  togglereview = (index, listname) => {
    let arr = [...this.state[listname]];
    arr[index]['check'] = arr[index]['check'] == false ? true : false;
    this.setState({ [listname]: arr });

  }

  goBack = () =>{
    window.history.back();
  }

  openModal = (modalName) => {
    this.setState({ [modalName]: true })
  }

  closeModal = (modalName) => {
    this.setState({ [modalName]: false })
  }

  render() {

    return (
      <React.Fragment>

        {/* <Header></Header> */}
        
        <section id="video_call_sec" className="video_call_sec">

          {/* <!-- ---------video section------- --> */}

          <div className={`video_sec ${this.state.chatSection ? '' : 'expand'}`}>
            <button className='f16 f400 clr_white mb-4' onClick={()=>this.goBack()}>
              Exit
            </button>

            <div className="video_part">
              <div className="user_profile">
                <img src={Images.user_profile_img.default} alt="" className="w-100" />
              </div>
              <video src=""></video>
            </div>

            <div className="video_footer_opt">
              <div className="your_profile">
                <Link to="" className="d-flex w-100 h-100">
                  <img src={Images.fav_expert_1.default} alt="" className="w-100" />
                  <video src=""></video>
                  <h5 className="f18 f500 clr_white">You</h5>
                </Link>
              </div>

              <div className="video_controls">
                <ul>
                  <li>
                    <button title="More Options" className={`toggle_video_option ${this.state.options ? 'active' : ''}`} onClick={()=> this.setState({options: !this.state.options})}>
                      <img src={Images.option_dot.default} alt="" />
                    </button>
                  </li>

                  <li>
                    <button title="Full Screen" className={`${this.state.fullScreen ? 'active' : ''}`} onClick={()=> this.setState({fullScreen: !this.state.fullScreen})}><img src={Images.option_fullscreen.default} alt=""  /></button>
                  </li>

                  <li>
                    <button title="Mute Audio" className={`${this.state.micToggle ? 'active' : ''}`} onClick={()=> this.setState({micToggle: !this.state.micToggle})}><img src={Images.option_audio.default} alt=""  /></button>
                  </li>

                  <li>
                    <button title="Start Video" className={`${this.state.videoToggle ? 'active' : ''}`} onClick={()=> this.setState({videoToggle: !this.state.videoToggle})} ><img src={Images.option_video_pause.default} alt="" /></button>
                  </li>

                  <li>
                    <button title="Chat" className={`${this.state.chatSection ? 'active' : ''}`} onClick={()=> this.setState({chatSection: !this.state.chatSection})}><img src={Images.option_chat.default} alt="" /></button>
                  </li>

                  <li>
                    <button title="Dismiss call" className="call_dismiss" onClick={()=> this.openModal('userReviewModal')}>
                      <img src={Images.option_call_dismiss.default} alt="" />
                    </button>
                  </li>

                </ul>
              </div>


            </div>

          </div>

          <div className={`chat_view video_chat_sec ${this.state.chatSection ? 'show' : ''}`}>

            <div className="chat_view_header border_b_grey">

              <div className="single_chat_profile">
                <Link to="" className='d-flex align-items-center'>
                  <div>
                    <img src={Images.user_img.default} alt="" className="w-100" />
                  </div>
                  <p className="f18 f600 clr_black ms-2">Allie Grater</p>
                </Link>
              </div>

              <div>
                <button className="toggle_chatbox"><img src={Images.cross.default} alt="" onClick={()=> this.setState({chatSection: false})} /></button>
              </div>

            </div>

            <div className="chatting_sec">

              {
                this.state.chatMsgs.map( ()=>{
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
                <button><img src={Images.chat_msg_send.default} alt="" /></button>
              </div>
            </div>

          </div>

        </section>
        
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
                      <div className={`custom_checkiee deactivate_check_wrapper ${obj.check ? 'active' : ''}`} >
                        <input type="checkbox" id={`check_${key}`} checked={obj.check} />
                        <label 
                          htmlFor={`check_${key}`} 
                          className="f16 f400 clr_black text-start" 
                          onClick={() => this.togglereview(key, 'userReviews')}
                        >
                          {obj.title}
                        </label>
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

        </React.Fragment>
      )
    }
  }



export default VideoCall;