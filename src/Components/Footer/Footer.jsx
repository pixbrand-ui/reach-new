import React from 'react';
import {Row, Col, Container} from 'reactstrap';
// import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import { Images } from 'Constants';

class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    componentDidMount() {

    }

    render() {

        return(
            <React.Fragment>
                <footer id="footer_sec" className="footer_sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="footer_logo">
                                    <Link to="index.php"><img src={Images.footer_logo.default} alt="" className="w-100" /></Link>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-lg-3">
                                <h4 className="f24 f500 clr_black mb-3">Categories</h4>
                                <ul className="footer_links">
                                    <li>
                                        <Link to="" className="f16 f400 clr_grey">Entrepreneurship</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="f16 f400 clr_grey">Digital marketing</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="f16 f400 clr_grey">Start-ups</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="f16 f400 clr_grey">Social media marketing</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-6 col-lg-3">
                                <h4 className="f24 f500 clr_black mb-3">About</h4>
                                <ul className="footer_links">
                                    <li>
                                        <Link to="" className="f16 f400 clr_grey">About us</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="f16 f400 clr_grey">How it work</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="f16 f400 clr_grey">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="f16 f400 clr_grey">Contact us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <h4 className="f24 f500 clr_black mb-3">More</h4>
                                <ul className="footer_links">
                                    <li>
                                        <Link to="" className="f16 f400 clr_grey">Term & condition</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="f16 f400 clr_grey">Privacy and policy</Link>
                                    </li>
                                    <li>
                                        <Link to="" className="f16 f400 clr_grey">FAQ</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>

                <footer id="copyright_sec" className="copyright_sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <p className="f14 f400 clr_grey">Copyright © 2021 Charles.com. All rights reserved.</p>
                            </div>
                            <div className="col-6">
                                <div className="w-100 d-flex justify-content-end">
                                    <ul className="footer_social_link">
                                        <li>
                                            <Link to='/'><i className="clr_grey f18 fab fa-facebook-f"></i></Link>
                                        </li>
                                        <li>
                                            <Link to='/'><i className="clr_grey f18 fab fa-instagram"></i></Link>
                                        </li>
                                        <li>
                                            <Link to='/'><i className="clr_grey f18 fab fa-linkedin-in"></i></Link>
                                        </li>
                                        <li>
                                            <Link to='/'><i className="clr_grey f18 fab fa-twitter"></i></Link>
                                        </li>
                                        <li>
                                            <Link to='/'><i className="clr_grey f18 fab fa-pinterest-p"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </React.Fragment>
        )
    }
}

export default Footer;