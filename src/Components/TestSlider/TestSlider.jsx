import React from 'react';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Images } from 'Constants';

class TestSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            obj: {}
        }
        this.myRef = React.createRef();
    }


    componentDidMount() {
        this.setState({ obj: this.props.data });
    }
    videoController = () => {
        let arr = this.state.obj;
        arr['player'] = arr['player'] == true ? false : true
        this.setState({ obj: arr })
    }

    render() {

        const { obj } = this.state;

        return (
            <React.Fragment>
                <div className="testi_slide cmn_slide_pdng" >
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="testi_video video_wrapper">
                                <video
                                    id={`${obj.videoId}`}
                                    src={obj.video}
                                    width="100%"
                                    height="100%"
                                    poster={obj.poster}
                                    ref={this.myRef} 
                                />
                                <button className={`video_controller ${obj.player ? 'pause' : ''}`} onClick={() => {this.videoController() }}>
                                    {
                                        obj.player ?
                                        <span><img src={Images.pause_icon.default} alt="" className="pause_btn video_btns" onClick={() => this.myRef.current.pause()} /></span>
                                        :
                                        <span><img src={Images.play_icon.default} alt="" className="play_btn video_btns ms-1" onClick={() => this.myRef.current.play()} /></span>
                                    }
                                </button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-flex align-items-center">
                            <div className="testi_content">
                                <p className="f22 f500 clr_black mb-5">
                                    "We've used Charles for Shopify web development, graphic design,
                                    and backend web development. Working with Fiverr makes my job a little
                                    easier every day."
                                </p>
                                <div className="user_img_info">
                                    <Link to="/" className="d-flex">
                                        <div className="user_img">
                                            <img src={Images.expert_2.default} alt="" />
                                        </div>
                                        <div className="user_info ms-3">
                                            <h6 className="f18 f500 clr_black mb-2">Kate kendall</h6>
                                            <p className="f13 f400 clr_grey">Founded CloudPeeps, The Fetch & Atto.VC.</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default TestSlider;