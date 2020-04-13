import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/layouts/Footer';
import {Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Food from './components/pages/Food';
import Nightlife from './components/pages/Nightlife';
import Details from './components/pages/Details';
import Hotels from './components/pages/Hotels';
import ContactUs from './components/pages/ContactUs';
import NotFound from './components/pages/NotFound';
import DetailsFood from './components/pages/DetailsFood';
import DetailsNightlife from './components/pages/DetailsNightlife'

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/news" component={News}/>
        <Route path="/food" component={Food}/>
        <Route path="/nightlife" component={Nightlife}/>
        <Route path="/detailshotels" component={Details}/>
        <Route path="/detailsfood" component={DetailsFood}/>
        <Route path="/detailsnightlife" component={DetailsNightlife}/>
        <Route path="/hotels" component={Hotels}/>
        <Route path="/contactus" component={ContactUs}/>
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
