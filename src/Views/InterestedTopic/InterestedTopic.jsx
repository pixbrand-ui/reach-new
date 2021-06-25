import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/ExpertHeader'
import TagsInput from 'react-tagsinput'
import "react-tagsinput/react-tagsinput.css";
import { Images } from 'Constants';

class InterestedTopic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ['Development' , 'Web applications' , 'websites-ui'],
      tag: '',
    }
  }


  goBack = () =>{
    window.history.back();
  }

  handleChange(tags) {
    this.setState({tags})
  }
 
  handleChangeInput(tag) {
    this.setState({tag})
  }

  componentDidMount() {

  }

  componentWillUnmount = () => {

  };


  render() {

    return (
      <React.Fragment>

        <Header></Header>

        <section id="basic_info_sec" className="basic_info_sec">
          <div className="container">
            <div className="row">

              <div className="col-12 mb-4">
                <button className="f16 f400 clr_black mb-4" onClick={()=> this.goBack()}>
                  <i className="fa fa-chevron-left me-2"></i>Go back
                </button>
                <h2 className="f32 f600 clr_black">
                  Interested Topics
                </h2>
              </div>

              <div className="col-12 col-lg-7">

                <div className="cmn_white_part">
                  <div className="row mx-0">

                    <form action="javascript:void(0)" className="w-100">

                        <div className="col-12 mb-2">
                          <div className="taginput">
                            <label for="bio" className="f16 f400 clr_black mb-2 cursor_pointer w-100">Add Interest/topics</label>
                            <TagsInput
                              value={this.state.tags}
                              onChange={(e)=> this.handleChange(e)}
                              inputValue={this.state.tag}
                              onChangeInput={(e)=> this.handleChangeInput(e)}
                            />

                          </div>
                        </div>

                        <div className="col-12">
                          <div className="d-flex justify-content-end">
                            <Link to='/' className="theme_dark_btn f18 f600">Save</Link>
                          </div>
                        </div>

                    </form>

                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-5">
                
                <img src={Images.interested_topics.default} className="w-100" />

              </div>
                      
            </div>
          </div>
        </section>

        </React.Fragment>
      )
    }
  }



export default InterestedTopic;