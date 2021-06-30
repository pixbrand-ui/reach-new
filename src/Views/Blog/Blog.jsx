import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/UserHeader'
import { Images } from 'Constants';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigBlog: [
        {
          blogImg: Images.blog_img.default,
          smallHead: 'Mini Heading',
          mainHead: 'Daily essentials, delivered in minutes any area.',
          descrypt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          userImg: Images.user_img.default,
          userName: 'Charles',
        },
        {
          blogImg: Images.blog_img.default,
          smallHead: 'Mini Heading 2',
          mainHead: 'Daily essentials, delivered in minutes any area.',
          descrypt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          userImg: Images.user_img_2.default,
          userName: 'Kate Kendall',
        },
      ],

      smallBlog: [
        {
          blogImg: Images.blog_img.default,
          smallHead: 'Mini Heading',
          mainHead: 'Daily essentials, delivered in minutes any area.',
          descrypt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          userImg: Images.user_img.default,
          userName: 'Charles',
        },
        {
          blogImg: Images.blog_img.default,
          smallHead: 'Mini Heading 2',
          mainHead: 'Daily essentials, delivered in minutes any area.',
          descrypt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          userImg: Images.user_img_2.default,
          userName: 'Kate Kendall',
        },
        {
          blogImg: Images.blog_img.default,
          smallHead: 'Mini Heading 3',
          mainHead: 'Daily essentials, delivered in minutes any area.',
          descrypt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          userImg: Images.user_img_2.default,
          userName: 'Kate Kendall',
        },
        {
          blogImg: Images.blog_img.default,
          smallHead: 'Mini Heading 4',
          mainHead: 'Daily essentials, delivered in minutes any area.',
          descrypt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          userImg: Images.user_img_2.default,
          userName: 'Kate Kendall',
        },
        {
          blogImg: Images.blog_img.default,
          smallHead: 'Mini Heading 5',
          mainHead: 'Daily essentials, delivered in minutes any area.',
          descrypt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          userImg: Images.user_img_2.default,
          userName: 'Kate Kendall',
        },

      ],


    }
  }


  componentDidMount() {

  }

  componentWillUnmount() {
    
  };

  
  render() {

    return (
      <React.Fragment>

        <Header />

        <section id="blog_two_col_sec" className="blog_two_col_sec">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="blog_left_img">
                          <Link to="/single_blog">
                            <img src={Images.blog_top_left.default} alt="" className='w-100' />
                          </Link>
                        </div>
                    </div>

                    <div className="col-md-1 d-none d-md-block"></div>

                    <div className="col-12 col-md-5 d-flex align-items-center">
                        <div className="blog_right_content">
                            <Link to="/single_blog">
                              <p className="f16 clr_green f500 mb-1">BUSINESS MARKETING</p>
                              <h2 className="f40 f600 clr_black mb-3">
                                  Make faster & better
                                  decisions to grow your
                                  business.
                              </h2>
                              <p className="f16 f400 clr_black mb-5">
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley of type and scrambled it to make a type
                                  specimen book. It has survived not only five centuries, but also the leap into
                                  electronic typesetting, remaining essentially unchanged.
                              </p>
                            </Link>

                            <div className="user_img_info blog_user_img">
                              <Link to="/single_blog" className="d-flex align-items-center">
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
                    </div>
                </div>
            </div>
        </section>

        <section id="two_blog_sec" className="two_blog_sec">
            <div className="container">
                <div className="row">

                  {
                    this.state.bigBlog.map( (obj , key)=> {
                      return(
                        <div className="col-12 col-md-6">
                          <div className="blog_card">
                            <Link to="/single_blog">
                              <div className="blog_img">
                                <img src={obj.blogImg} alt="" className="w-100" />
                              </div>
                              <div className="blog_content">
                                <p className="f16 f500 clr_green mb-1">{obj.smallHead}</p>
                                <h4 className="f24 f600 clr_black mb-3">{obj.mainHead}</h4>
                                <p className="f16 f400 clr_black mb-4">
                                  {obj.descrypt}
                                </p>
                                <div className="user_img_info">
                                  <Link to="/single_blog" className="d-flex align-items-center">
                                      <div className="user_img">
                                          <img src={obj.userImg} alt="" />
                                      </div>
                                      <div className="user_info ms-3">
                                          <h6 className="f18 f600 clr_black mb-2">{obj.userName}</h6>
                                          <p className="f16 f400 clr_grey">11 Dec . 2 min read</p>
                                      </div>
                                  </Link>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      )
                    })
                  }

                </div>

                <div className="row">

                  {
                    this.state.smallBlog.map( (obj, key)=> {
                      return(
                        <div className="col-12 col-md-6 col-lg-4">
                          <div className="blog_card small">
                            <Link to="/single_blog">
                              <div className="blog_img">
                                <img src={obj.blogImg} alt="" className="w-100" />
                              </div>
                              <div className="blog_content">
                                <p className="f16 f500 clr_green mb-1">{obj.smallHead}</p>
                                <h4 className="f24 f600 clr_black mb-3">{obj.mainHead}</h4>
                                <p className="f16 f400 clr_black mb-4">
                                  {obj.descrypt}
                                </p>
                                <div className="user_img_info">
                                  <Link to="/single_blog" className="d-flex align-items-center">
                                      <div className="user_img">
                                          <img src={obj.userImg} alt="" />
                                      </div>
                                      <div className="user_info ms-3">
                                          <h6 className="f18 f600 clr_black mb-2">{obj.userName}</h6>
                                          <p className="f16 f400 clr_grey">11 Dec . 2 min read</p>
                                      </div>
                                  </Link>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      )
                    })
                  }

                </div>

            </div>
        </section>



      </React.Fragment>
    )
  }
}



export default Blog;