import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/IndexHeader'
import { Images } from 'Constants';

import { Collapse, Button, CardBody, Card } from 'reactstrap';

class HowItWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userMemberTab: 'userList'
    }
  }


  componentDidMount() {

  }

  componentWillUnmount = () => {

  }

  userMemberTab = (tabName) =>{
    this.setState({userMemberTab: tabName})
  }

  faqToggle = (toggle)=>{
    let id = toggle == this.state.faqOpen ? false : toggle ;
    this.setState({faqOpen: id})
  }


  render() {

    return (
      <React.Fragment>

        <Header />

        <section id="how_it_work_banner" className="how_it_work_banner">
          <div className="w-100 how_work_banner text-center" style={{backgroundImage: `url(${Images.how_it_work_banner.default})`}}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                  <h1 className="f40 f600 clr_white mb-3">How it works</h1>
                  <p className="f16 f400 clr_white mb-3">It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout.
                  </p>
                  <div className="how_work_banner_btn">
                    <Link to='' className="theme_dark_btn me-2 f16 f600">Find expert</Link>
                    <Link to='' className="theme_dark_btn f16 f600">Become an expert</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="user_member_sec" className="user_member_sec">
            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-12">
                        <div className="user_mem_tab text-center">
                            <button  
                                className={`f20 f500 clr_grey text-center ${this.state.userMemberTab == 'userList' ? 'active' : ''}`} 
                                data-id="user_list"
                                onClick={()=> this.userMemberTab('userList')}
                                >
                                    For User
                            </button>

                            <button  
                                className={`f20 f500 clr_grey text-center ${this.state.userMemberTab == 'memList' ? 'active' : ''}`} 
                                data-id="mem_list"
                                onClick={()=> this.userMemberTab('memList')}
                            >
                                For Member
                            </button>

                        </div>
                    </div>

                    <div className="col-12 col-lg-10 user_mem_tab_row">

                        <ul className={`user_mem_list ${this.state.userMemberTab == 'userList' ? 'show' : ''}`}>
                            <li>
                                <div className="user_mem_img">
                                    <img src={Images.dummy_image_round.default} alt="" />
                                </div>
                                <h5 className="f24 f600 clr_black mb-3">Heading name</h5>
                                <p className="f16 f400 clr_grey">
                                    Browse our community of experts to find the right one
                                    for you.
                                </p>
                            </li>

                            <li>
                                <div className="user_mem_img">
                                    <img src={Images.dummy_image_round.default} alt="" />
                                </div>
                                <h5 className="f24 f600 clr_black mb-3">Heading name</h5>
                                <p className="f16 f400 clr_grey">
                                    Browse our community of experts to find the right one
                                    for you.
                                </p>
                            </li>

                            <li>
                                <div className="user_mem_img">
                                    <img src={Images.dummy_image_round.default} alt="" />
                                </div>
                                <h5 className="f24 f600 clr_black mb-3">Heading name</h5>
                                <p className="f16 f400 clr_grey">
                                    Browse our community of experts to find the right one
                                    for you.
                                </p>
                            </li>


                        </ul>

                        <ul className={`user_mem_list ${this.state.userMemberTab == 'memList' ? 'show' : ''}`}>
                            <li>
                                <div className="user_mem_img">
                                    <img src={Images.dummy_image_round.default} alt="" />
                                </div>
                                <h5 className="f24 f600 clr_black mb-3">Heading name</h5>
                                <p className="f16 f400 clr_grey">
                                    Browse our community of experts to find the right one
                                    for you.
                                </p>
                            </li>

                            <li>
                                <div className="user_mem_img">
                                    <img src={Images.dummy_image_round.default} alt="" />
                                </div>
                                <h5 className="f24 f600 clr_black mb-3">Heading name</h5>
                                <p className="f16 f400 clr_grey">
                                    Browse our community of experts to find the right one
                                    for you.
                                </p>
                            </li>

                            <li>
                                <div className="user_mem_img">
                                    <img src={Images.dummy_image_round.default} alt="" />
                                </div>
                                <h5 className="f24 f600 clr_black mb-3">Heading name</h5>
                                <p className="f16 f400 clr_grey">
                                    Browse our community of experts to find the right one
                                    for you.
                                </p>
                            </li>

                            <li>
                                <div className="user_mem_img">
                                    <img src={Images.dummy_image_round.default} alt="" />
                                </div>
                                <h5 className="f24 f600 clr_black mb-3">Heading name</h5>
                                <p className="f16 f400 clr_grey">
                                    Browse our community of experts to find the right one
                                    for you.
                                </p>
                            </li>


                        </ul>
                    
                    </div>

                </div>

                <div className="row two_col_row">

                    <div className="col-12 col-md-6 order_md_2">
                        <div className="content">
                            <h2 className="f32 f600 clr_black mb-3">
                                1. Schedule a Call <br />
                                randomised words which.
                            </h2>
                            <p className="f16 f400 clr_grey">
                                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
                                Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S,
                                When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type
                                Specimen Book.
                            </p>
                            <p className="f16 f400 clr_grey">
                                It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting,
                                Remaining Essentially Unchanged. It Was Popularised In The 1960S With The Release Of Letraset.
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <img src={Images.schedule_a_call.default} alt="" className="w-100" />
                    </div>
                    
                </div>

                <div className="row two_col_row">

                    <div className="col-12 col-md-6">
                        <img src={Images.schedule_a_call_2.default} alt="" className="w-100" />
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="content">
                            <h2 className="f32 f600 clr_black mb-3">
                                2. Get Confirmation <br />
                                don't look even slightly.
                            </h2>
                            <p className="f16 f400 clr_grey">
                                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
                                Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S,
                                When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type
                                Specimen Book.
                            </p>
                            <p className="f16 f400 clr_grey">
                                It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting,
                                Remaining Essentially Unchanged. It Was Popularised In The 1960S With The Release Of Letraset.
                            </p>
                        </div>
                    </div>
                    
                </div>

                <div className="row two_col_row">
                    <div className="col-12 col-md-6 order_md_2">
                        <div className="content">
                            <h2 className="f32 f600 clr_black mb-3">
                                3. Connect, Talk & Pay <br />
                                randomised words.
                            </h2>
                            <p className="f16 f400 clr_grey">
                                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
                                Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S,
                                When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type
                                Specimen Book.
                            </p>
                            <p className="f16 f400 clr_grey">
                                It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting,
                                Remaining Essentially Unchanged. It Was Popularised In The 1960S With The Release Of Letraset.
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <img src={Images.schedule_a_call_3.default} alt="" className="w-100" />
                    </div>
                </div>

                <div className="row two_col_row justify-content-center">
                    <div className="col-12 col-lg-7">
                        <h2 className="f32 f600 clr_black text-center mb-3">
                            There are many variations of passages
                        </h2>
                        <p className="f16 f400 clr_grey text-center mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                        </p>
                    </div>

                    <div className="col-12">
                        <div className="variation_img">
                            <img src={Images.how_it_work_variation.default} className="w-100" />
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <secction id="faq_section" className="faq_section how_it_works_faq">
            <div className="container">
                <div className="row">
                    <h2 className="f32 f600 clr_black mb-4 text-center">Frequently Asked Questions</h2>

                    <div className="faq_accordion">
                        <div className="">

                            <div>
                                <Button className="toggle_btn f20 f600 clr_black" onClick={()=> this.faqToggle('1')}>
                                    <span>What are the offer benefits with Mastercards ?</span>
                                    <span>+</span>
                                </Button>
                                <Collapse isOpen={this.state.faqOpen == 1 ? true : false}>
                                    <Card>
                                    <CardBody>
                                        <p className="f16 f400 clr_black">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </CardBody>
                                    </Card>
                                </Collapse>
                            </div>

                            <div>
                                <Button className="toggle_btn f20 f600 clr_black" onClick={()=> this.faqToggle('2')}>
                                    <span>What is the term of the offer?</span>
                                    <span>+</span>
                                </Button>
                                <Collapse isOpen={this.state.faqOpen == 2 ? true : false}>
                                    <Card>
                                    <CardBody>
                                        <p className="f16 f400 clr_black">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </CardBody>
                                    </Card>
                                </Collapse>
                            </div>

                            <div>
                                <Button className="toggle_btn f20 f600 clr_black" onClick={()=> this.faqToggle('3')}>
                                    <span>How can I tell if I have an Express membership?</span>
                                    <span>+</span>
                                </Button>
                                <Collapse isOpen={this.state.faqOpen == 3 ? true : false}>
                                    <Card>
                                    <CardBody>
                                        <p className="f16 f400 clr_black">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </CardBody>
                                    </Card>
                                </Collapse>
                            </div>

                            <div>
                                <Button className="toggle_btn f20 f600 clr_black" onClick={()=> this.faqToggle('4')}>
                                    <span>Can I cancel the membership before my card is charged?</span>
                                    <span>+</span>
                                </Button>
                                <Collapse isOpen={this.state.faqOpen == 4 ? true : false}>
                                    <Card>
                                    <CardBody>
                                        <p className="f16 f400 clr_black">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </CardBody>
                                    </Card>
                                </Collapse>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </secction>


      </React.Fragment>
    )
  }
}



export default HowItWork;