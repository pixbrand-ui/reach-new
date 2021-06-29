import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/IndexHeader'
import { Images } from 'Constants';

class Error extends React.Component {
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

        <section id="error_msg_sec" className="error_msg_sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="error-content text-center">
                            <div className="error_heading d-flex align-items-center justify-content-center">
                                <img src={Images.error.default} alt="" className="w-100 mb-3" />
                            </div>
                            <h4 className="f16 clr_dark_green f700  m_b_25">Error 404</h4>
                            <h2 className="clr_dark_green f32 f600 text-center m_b_25">
                                You must have been looking for
                                something strange to find this page.
                            </h2>
                            <h5 className="f20 f500 clr_dark_green m_b_35 opc_07">
                                It might not even exist. maybe the link was a mirage.
                                Orr did you mistype it? Check again. Nothing to see here.
                            </h5>
                            <Link to='/' className="theme_dark_btn p_7_30">Back to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </React.Fragment>
      )
    }
  }



export default Error;