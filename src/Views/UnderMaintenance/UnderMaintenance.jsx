import React, { useRef } from 'react';
// import { Row, Col, Container } from 'reactstrap';
// import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import Header from '../../Components/MaintenanceHeader'
// import Slider from "react-slick";
// import {CommonNotifyModal} from 'Modals';
import { Images } from 'Constants';

class UnderMaintenance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  goBack = () =>{
    window.history.back();
  }

  componentDidMount() {

  }

  componentWillUnmount = () => {

  };


  render() {

    return (
      <React.Fragment>

        <Header />

        <section id="error_msg_sec" class="error_msg_sec bg_dark_green maintenance_sec">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8 col-lg-6">
                        <div class="error-content text-center">
                            <div class="error_heading d-flex align-items-center justify-content-center mb-5">
                                <img src={Images.maintenance.default} alt="" className='maintenance_img' />
                            </div>
                            <h2 class="clr_white f32 f600 text-center m_b_25">
                                This site is under maintenance
                            </h2>
                            <h5 class="f24 f500 clr_white opc_07">
                                We're preparing to serve you better
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        </React.Fragment>
      )
    }
  }



export default UnderMaintenance;