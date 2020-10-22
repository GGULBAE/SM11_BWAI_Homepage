import React from 'react';

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";


import Home from './sections/Home.js';
import Team from './sections/Team.js';
import Service from './sections/Service.js';
import Price from './sections/Price.js';
import Demo from './components/Demo.js';
import Labelling from './components/Labelling.js';
import DashBoard from './components/DashBoard.js';

var hist = createBrowserHistory();

function App() {
  window.server = "http://api.bwai.io";
  return (
    <React.Fragment>
      <Router history={hist}>
        <Switch>
          <Route exact path="/team" component={Team}/>
          <Route exact path="/service" component={Service}/>
          <Route exact path="/price" component={Price}/>
          <Route exact path="/demo" component={Demo}/>
          <Route exact path="/labelling" component={Labelling}/>
          <Route path="/dashboard" component={DashBoard}/>
          {/* <Route exact path="/test" component={test}/> */}
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;