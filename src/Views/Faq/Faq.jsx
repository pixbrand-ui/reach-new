import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/IndexHeader'
import FaqBanner from '../../Components/FaqBanner'
import { Images } from 'Constants';

class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faqList: [
        {
          title: 'Getting Started On Charles'
        },
        {
          title: 'Your Charles Account'
        },
        {
          title: 'Charles Live Membership'
        },
        {
          title: 'Member Faqs'
        },
        {
          title: 'Expert Faqs'
        },
        {
          title: 'Payments & Fees'
        },
        {
          title: 'Getting Started On Charles'
        },
        {
          title: 'Privacy & Security'
        },
        {
          title: 'Other Questions'
        },

      ],

      faqItem: [
        {
          title: 'What is Charles?'
        },
        {
          title: 'How does Charles work?'
        },
        {
          title: 'How do I sign up?'
        },
        {
          title: 'Are there guidelines or rules of conduct on'
        },
        {
          title: 'Charles?'
        },
        {
          title: 'Is Charles International?'
        },
      ]

    }
  }


  componentDidMount() {

  }

  componentWillUnmount = () => {

  }


  render() {

    return (
      <React.Fragment>

        <Header />

        <FaqBanner />

        <section id="faq_section" className="faq_section">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-3">
                        <h2 className="f24 f600 clr_black">Help Center</h2>
                    </div>

                    {
                      this.state.faqList.map( (obj , key)=> {
                        return(
                          <div className="col-12 col-md-6 col-lg-4" key={key}>
                              <div className="faq_list_wrapper">
                                <Link to="/faq-single" className="f20 f500 clr_green mb-3">{obj.title}</Link>
                                <ul className="faq_list mb-3">
                                  {
                                    this.state.faqItem.map( (item , index)=>{
                                      return(
                                        <li key={index}>
                                          <Link to="/faq-single" className="f16 f400 clr_black">{item.title}</Link>
                                        </li>
                                      )
                                    })
                                  }
                                </ul>
                                <Link to="/faq-single" className="cmn_outline_grey_btn clr_grey mb-2">View All</Link>
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



export default Faq;