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
