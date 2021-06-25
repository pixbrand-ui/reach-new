import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
import { Images } from 'Constants';

class SingleBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }


  componentDidMount() {

  }

  componentWillUnmount() {
    
  }

  goBack = () => {
    window.history.back();
  }

  likeDislike = (item)=> {
    let value = this.state.likeDislike == item ? false : item ;
    this.setState({likeDislike: value})
  }

  
  render() {

    return (
      <React.Fragment>

        <Header />

        <section id="single_blog_head" className="single_blog_head">
          <div className="container">
              <div className="row justify-content-center">

                  <div className="col-12 col-md-9">
                      <div className="row">
                          <div className="col-12 mb-4">
                            <button className="f16 f400 clr_black mb-4" onClick={() => this.goBack()}>
                              <i className="fa fa-chevron-left me-2"></i>Go back
                            </button>
                            <p className="f16 f500 clr_green">BUSINESS MARKETING</p>
                            <h1 className="f50 f600 clr_black mb-4">
                              Make faster & better decisions to grow your business.
                            </h1>
                          </div>

                          <div className="col-12 col-lg-4">
                              <div className="user_img_info single_blog_user_img">
                                <Link to="" className="d-flex align-items-center">
                                  <div className="user_img">
                                    <img src={Images.user_img.default} alt="" />
                                  </div>
                                  <div className="user_info ms-3">
                                    <h6 className="f18 f600 clr_black mb-2">Charles</h6>
                                    <p className="f16 f400 clr_grey">11 Dec . 2 min read</p>
                                  </div>
                                </Link>
                              </div>
                          </div>

                          <div className="col-12 col-lg-8">
                              <div className="blog_social_media h-100 d-flex justify-content-end align-items-center">
                                  <button 
                                    className={`like_dislike_btn ${this.state.likeDislike == 'like' ? 'active' : '' }`} onClick={()=> this.likeDislike('like')}>
                                      Like <img src={Images.thumbs_up.default} alt="" className="mb-1" />
                                    </button>
                                  <button 
                                    className={`like_dislike_btn ${this.state.likeDislike == 'dislike' ? 'active' : '' }`} onClick={()=> this.likeDislike('dislike')}>
                                      Dislike <img src={Images.thumbs_down.default} alt="" />
                                    </button>

                                  <ul>
                                      <li>
                                          <Link to='/' className="social_icons"><i className="fab fa-facebook-f"></i></Link>
                                      </li>
                                      <li>
                                          <Link to='/' className="social_icons"><i className="fab fa-twitter"></i></Link>
                                      </li>
                                      <li>
                                          <Link to='/' className="social_icons"><i className="fab fa-instagram"></i></Link>
                                      </li>
                                      <li>
                                          <Link to='/' className="social_icons"><i className="fas fa-rss"></i></Link>
                                      </li>
                                  </ul>
                              </div>
                          </div>

                          <div className="col-12 mt-4">
                              <p className="f18 f400 clr_black">
                                  Lorem Ipsum is simply dummy text of the printing and 
                                  typesetting industry. Lorem Ipsum has been the industry's 
                                  standard dummy text ever since the 1500s, when an unknown 
                                  printer took a galley of type and scrambled it to make a type 
                                  specimen book. It has survived not only five centuries, but also 
                                  the leap into electronic typesetting, remaining essentially unchanged. 
                                  It was popularised in the 1960s with the release of Letraset sheets 
                                  containing Lorem Ipsum passages, and more recently with desktop publishing 
                                  software like Aldus PageMaker including versions of Lorem Ipsum.
                              </p>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
        </section>

        <section id="blog_info_sec" className='blog_info_sec'>
            <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-9">

                    <div className="row">

                        <div className="col-12 mb-4">
                          <img src={Images.single_blog.default} alt="" className="w-100" />
                        </div>

                        <div className="col-12">
                          <p className="f18 f400 clr_grey mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged. It was popularised in 
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including 
                            versions of Lorem Ipsum.
                          </p>

                          <p className="f18 f400 clr_grey mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged. It was popularised in 
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including 
                            versions of Lorem Ipsum.
                          </p>

                        </div>

                    </div>

                    <div className="row">

                      <div className="col-12 mb-4">
                        <img src={Images.single_blog_2.default} alt="" className="w-100" />
                      </div>

                      <div className="col-12">
                          <div className="single_blog_content">
                            <h2 className="f20 f600 clr_black mb-3">
                              Daily essentials, delivered in minutes
                            </h2>
                            <p className="f18 f400 clr_grey">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                              when an unknown printer took a galley of type and scrambled it to make a type 
                              specimen book. It has survived not only five centuries, but also the leap into 
                              electronic typesetting, remaining essentially unchanged. It was popularised in 
                              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                              and more recently with desktop publishing software like Aldus PageMaker including 
                              versions of Lorem Ipsum.
                            </p>
                          </div>

                          <div className="single_blog_content">
                            <h2 className="f20 f600 clr_black mb-3">
                              Daily essentials, delivered in minutes
                            </h2>
                            <p className="f18 f400 clr_grey">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                              when an unknown printer took a galley of type and scrambled it to make a type 
                              specimen book. It has survived not only five centuries, but also the leap into 
                              electronic typesetting, remaining essentially unchanged. It was popularised in 
                              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                              and more recently with desktop publishing software like Aldus PageMaker including 
                              versions of Lorem Ipsum.
                            </p>
                          </div>

                          <div className="single_blog_content">
                            <h2 className="f20 f600 clr_black mb-3">
                              Daily essentials, delivered in minutes
                            </h2>
                            <p className="f18 f400 clr_grey">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                              when an unknown printer took a galley of type and scrambled it to make a type 
                              specimen book. It has survived not only five centuries, but also the leap into 
                              electronic typesetting, remaining essentially unchanged. It was popularised in 
                              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                              and more recently with desktop publishing software like Aldus PageMaker including 
                              versions of Lorem Ipsum.
                            </p>
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



export default SingleBlog;