import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import Home from './Views/Home'
import UserProfile from './Views/UserProfile'
import EditProfile from './Views/EditProfile'
import BasicInformation from './Views/BasicInformation'
import Timezone from './Views/Timezone'
import InterestedTopic from './Views/InterestedTopic'
import PaymentBilling from './Views/PaymentBilling'
import PaymentMethod from './Views/PaymentMethod'


import Footer from 'Components/Footer'

import './App.scss';
import './responsive.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }


  componenetDidMount(){

  }

  render(){

    return(

      <React.Fragment>

        <section className={'app-root'}>

          <BrowserRouter>

            <ScrollToTop>
              <Switch>
                <Route path={'/'} exact component={(props) => <Home {...props} />} />
                <Route path={'/user-profile'} exact component={(props) => <UserProfile {...props} />} />
                <Route path={'/edit-profile'} exact component={(props) => <EditProfile {...props} />} />
                <Route path={'/basic-information'} exact component={(props) => <BasicInformation {...props} />} />
                <Route path={'/timezone'} exact component={(props) => <Timezone {...props} />} />
                <Route path={'/interested-topic'} exact component={(props) => <InterestedTopic {...props} />} />
                <Route path={'/payment-billing'} exact component={(props) => <PaymentBilling {...props} />} />
                <Route path={'/payment-method'} exact component={(props) => <PaymentMethod {...props} />} />
              </Switch>
            </ScrollToTop>

            <Footer />

          </BrowserRouter>




        </section>

      </React.Fragment>
    )



  }
}

export default App;
