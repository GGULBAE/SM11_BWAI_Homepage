import React from 'react';

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import NavigationBar from './components/NavigationBar.js';
import Home from './sections/Home.js';
import Team from './sections/Team.js';
import Service from './sections/Service.js';
import Price from './sections/Price.js';
import Labelling from './components/Labelling.js';

var hist = createBrowserHistory();

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Router history={hist}>
        <Switch>
          <Route exact path="/team" component={Team}/>
          <Route exact path="/service" component={Service}/>
          <Route exact path="/price" component={Price}/>
          <Route exact path="/demo" component={Temp}/>
          <Route exact path="/labelling" component={Labelling}/>

          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

function Temp() {
  return <p>Not Prepared!</p>
}