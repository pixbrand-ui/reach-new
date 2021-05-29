import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import Footer from 'Components/Footer'
import Home from './Views/Home'



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
