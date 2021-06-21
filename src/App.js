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
import BillingAddress from './Views/BillingAddress'
import PayoutDetails from './Views/PayoutDetails'
import UnderMaintenance from './Views/UnderMaintenance'
import SocialMedia from './Views/SocialMedia'
import UserSetting from './Views/UserSetting'
import Notification from './Views/Notification'
import PromotionalOffers from './Views/PromotionalOffers'
import ChangePassword from './Views/ChangePassword'
import Support from './Views/Support'
import DeactivateAccount from './Views/DeactivateAccount'
import FavouriteList from './Views/FavouriteList'
import FavouriteGrid from './Views/FavouriteGrid'
import UserCall from './Views/UserCall'
import CategoryListing from './Views/CategoryListing'
import SubCategoryListing from './Views/SubCategoryListing'
import SearchResult from './Views/SearchResult'
import RelationTopic from './Views/RelationTopic'
import Browse from './Views/Browse'
import SingleListing from './Views/SingleListing'
import BecomeExpert from './Views/BecomeExpert'
import PersonalizeProfile from './Views/PersonalizeProfile'
import AddExpertise from './Views/AddExpertise'
import NewExpertise from './Views/NewExpertise'
import NewExpertiseImg from './Views/NewExpertiseImg'
import AddExpertiseList from './Views/AddExpertiseList'
import EditExpertise from './Views/EditExpertise'
import AccountVerify from './Views/AccountVerify'
import ExpertProfile from './Views/ExpertProfile'
import ExpertSetting from './Views/ExpertSetting'
import ExpertList from './Views/ExpertList'
import ExpertEdit from './Views/ExpertEdit'
import ExpertHourlyRate from './Views/ExpertHourlyRate'
import ExpertAvailability from './Views/ExpertAvailability'
import ExpertPayoutDetails from './Views/ExpertPayoutDetails'
import ExpertSingleList from './Views/ExpertSingleList'
import ProvideCall from './Views/ProvideCall'


import Error from './Views/Error'

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
                <Route path={'/billing-address'} exact component={(props) => <BillingAddress {...props} />} />
                <Route path={'/payout-details'} exact component={(props) => <PayoutDetails {...props} />} />
                <Route path={'/under-maintenance'} exact component={(props) => <UnderMaintenance {...props} />} />
                <Route path={'/social-media'} exact component={(props) => <SocialMedia {...props} />} />
                <Route path={'/setting'} exact component={(props) => <UserSetting {...props} />} />
                <Route path={'/notification'} exact component={(props) => <Notification {...props} />} />
                <Route path={'/promotional-offers'} exact component={(props) => <PromotionalOffers {...props} />} />
                <Route path={'/change-password'} exact component={(props) => <ChangePassword {...props} />} />
                <Route path={'/support'} exact component={(props) => <Support {...props} /> } />
                <Route path={'/deactivate-account'} exact component={(props) => <DeactivateAccount {...props} /> } />
                <Route path={'/favourite-list'} exact component={(props) => <FavouriteList {...props} /> } />
                <Route path={'/favourite-grid'} exact component={(props) => <FavouriteGrid {...props} /> } />
                <Route path={'/user-call'} exact component={(props) => <UserCall {...props} /> } />
                <Route path={'/category-list'} exact component={(props) => <CategoryListing {...props} /> } />
                <Route path={'/sub-category-list'} exact component={(props) => <SubCategoryListing {...props} /> } />
                <Route path={'/search-result'} exact component={(props) => <SearchResult {...props} /> } />
                <Route path={'/relation-topic'} exact component={(props) => <RelationTopic {...props} /> } />
                <Route path={'/browse'} exact component={(props) => <Browse {...props} /> } />
                <Route path={'/single-listing'} exact component={(props) => <SingleListing {...props} /> } />
                <Route path={'/become-expert'} exact component={(props) => <BecomeExpert {...props} /> } />
                <Route path={'/personalise-profile'} exact component={(props) => <PersonalizeProfile {...props} /> } />
                <Route path={'/add-expertise'} exact component={(props) => <AddExpertise {...props} /> } />
                <Route path={'/new-expertise'} exact component={(props) => <NewExpertise {...props} /> } />
                <Route path={'/new-expertise-img'} exact component={(props) => <NewExpertiseImg {...props} /> } />
                <Route path={'/add-expertise-list'} exact component={(props) => <AddExpertiseList {...props} /> } />
                <Route path={'/edit-expertise'} exact component={(props) => <EditExpertise {...props} /> } />
                <Route path={'/account-verify'} exact component={(props) => <AccountVerify {...props} /> } />
                <Route path={'/expert-profile'} exact component={(props) => <ExpertProfile {...props} /> } />
                <Route path={'/expert-setting'} exact component={(props) => <ExpertSetting {...props} /> } />
                <Route path={'/expert-list'} exact component={(props) => <ExpertList {...props} /> } />
                <Route path={'/expert-edit'} exact component={(props)=> <ExpertEdit {...props} />} />
                <Route path={'/hourly-rate'} exact component={(props)=> <ExpertHourlyRate {...props} />} />
                <Route path={'/availability'} exact component={(props)=> <ExpertAvailability {...props} />} />
                <Route path={'/expert-payout'} exact component={(props)=> <ExpertPayoutDetails {...props} />} />
                <Route path={'/expert-single-list'} exact component={(props)=> <ExpertSingleList {...props} />} />
                <Route path={'/provide-call'} exact component={(props)=> <ProvideCall {...props} />} />
                  

                <Route path={'*'} exact component={(props) => <Error {...props} />} />
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
