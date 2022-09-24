
//import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import OwnerHome from './Screen/OwnerHome';
//import Footer from './Componets/Footer';
import AddBus from './Screen/AddBus';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Screen/home';
//import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';

import "./styles/header.scss";
import "./styles/footer.scss";

import React from "react";

import "./styles/menu.scss";
import Footer from './Componets/Footer';
import Signup from './Componets/Signup';

import Login2 from './Componets/Login2';
import AdminHome from './Screen/AdminHome';
import AddRouteScreen from './Screen/AddRouteScreen';
import BusScheduleScreen from './Screen/BusScheduleScreen';
import PassangerHome from './Screen/PassangerHome';
import ViewBusScreen from './Screen/ViewBusScreen';

function App() {
  return (
    <div>
      <Router>
        <Switch>
       
        <Route path='/add-bus' component={AddBus} />
        <Route path='/owner-home' component={OwnerHome}/>
        <Route path='/sign-up' component={Signup} />
        <Route path='/log-in' component={Login2} />
        <Route path='/admin' component={AdminHome} />
        <Route path='/add-rotes' component={AddRouteScreen} />
        <Route path='/bus-schedule' component={BusScheduleScreen} />
        

        <Route path='/passanger' component={PassangerHome} />
        <Route path='/view-bus' component={ViewBusScreen} />
        

        <Route path='/' component={Home} />

     
      
      </Switch>
      
      <Footer/>
      </Router>
      
      
    </div>
  );
}

export default App;
