import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/IndexHeader'
import {CommonNotifyModal , LoginModal} from 'Modals';
import { Images } from 'Constants';

class DeactivateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      deactivateReason: [
        {reason: 'I have safety or privacy concerns.'},
        {reason: 'I can’t give my service anymore.'},
        {reason: "I can't comply with Terms of Service / Community Commitment."},
        {reason: "Other"},
      ],

      activeStep: '1',

    }
  }


  goBack = () =>{
    window.history.back();
  }

  reasonToggle = (key) => {
    this.setState({deactiveReason: key})
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

  componentDidMount() {

  }

  componentWillUnmount = () => {

  };


  render() {

    return (
      <React.Fragment>

        <Header />

        <section id="" className={`basic_info_sec deactiveSteps ${this.state.activeStep === '1' ? 'active' : ''}`}>
          <div className="container">
            <div className="row">

              <div className="col-12 mb-4">
                <p className="f18 f500 clr_green mb-4">Step 1</p>
                <h2 className="f32 f600 clr_black">
                  Deactivate Account
                </h2>
              </div>
              <div className="col-12 col-lg-7">

                <div className="cmn_white_part deactivate_steps">
                  <div className="row ms-0 me-0">

                    <form action="javascript:void(0)" method="POST" className="w-100 p-0">
                      <div className="row ms-0 me-0">

                        {
                          this.state.deactivateReason.map( ( obj , key )=> {
                            return(
                              <div className="col-12 mb-2">
                                <div className={`deactivate_radio_wrapper ${this.state.deactiveReason == key ? 'active' : ''}`}>
                                  <input type="radio" id={`reason${key}`} name="reason" className="theme_radio" />
                                  <label for={`reason${key}`} className="f16 f400 clr_black" onClick={()=> this.reasonToggle(key)}>{obj.reason}</label>
                                </div>
                              </div>
                            )
                          })
                        
                        }

                        <div className="col-12 mb-2">
                          <div>
                            <label for="bio" className="f16 f400 clr_black mb-2 cursor_pointer">Write you reason</label>
                            <textarea name="" id="bio" cols="" rows="4" className="theme_input theme_input_2 w-100" placeholder="Write you reason here"></textarea>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="d-flex justify-content-end">
                            <button className="theme_dark_btn f18 f600" onClick={()=> this.setState({activeStep: '2'})}>Continue</button>
                          </div>
                        </div>

                      </div>
                    </form>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="" className={`basic_info_sec deactiveSteps ${this.state.activeStep === '2' ? 'active' : ''}`}>
          <div className="container">
            <div className="row">

              <div className="col-12 mb-4">
                <h2 className="f32 f600 clr_black">
                  Deactivate Account
                </h2>
              </div>
              <div className="col-12 col-lg-7">

                <div className="cmn_white_part deactivate_step_2">
                  <h4 className="f18 f600 clr_black mb-4">
                        Dummymail123@gmail.com
                    </h4>
                    <p className="f16 f400 clr_black mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s, when an unknown printer took a galley of type 
                        and scrambled.
                    </p>
                    <p className="f16 f400 clr_black">
                        it to make a type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <div className="d-flex justify-content-end mt-4 deactivate_btn_2">
                        <button className="cmn_outline_grey_btn cmn_btn clr_grey me-3" onClick={()=> this.setState({activeStep: '1'})}>Go back</button>
                        <Link className="theme_dark_btn clr_grey cmn_btn" onClick={()=> this.openModal('deactivateModal')}>Deactivate account</Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Account Deactivated modal */}
        <CommonNotifyModal open={(this.state.deactivateModal) ? true : false} toggle={()=> this.closeModal('deactivateModal')} classNameName={'deactivateModal'}>
          {/* <span className="modal_closer" onClick={()=> this.closeModal('deactivateModal')}><img src={Images.cross.default} alt="" /></span> */}
          <div className="acc_deactive_modal_body text-center">
            <img src={Images.check_fill.default} alt="" className="modal_top_img m_b_20" />
            <h2 className="f28 f600 clr_black m_b_20">Account Deactivated</h2>
            <p className="f16 f400 clr_grey m_b_20">
                Your account has been deactivated 
                successfully
            </p>
            <Link to="/" className="theme_dark_btn cmn_btn">Back to home</Link>
          </div>
        </CommonNotifyModal>

        </React.Fragment>
      )
    }
  }



export default DeactivateAccount;