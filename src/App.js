import React from 'react';

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import NavigationBar from './components/NavigationBar.js';
import Home from './sections/Home.js';

var hist = createBrowserHistory();

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Router history={hist}>
        <Switch>
          <Route exact path="/team" component={Temp}/>
          <Route exact path="/service" component={Temp}/>
          <Route exact path="/price" component={Temp}/>
          <Route exact path="/demo" component={Temp}/>
          <Route exact path="/labelling" component={Temp}/>

          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

function Temp() {
  return <p>kk</p>
}
// const style_imageWrapper = {
//   width: "100vw",
//   height: "100vh",
//   textAlign: "center"
// }

// const style_imageSVG = {
//   // width: "auto",
//   // height: "auto",
//   maxWidth: "100%",
//   // maxHeight: "100%"
//   // height: "100%"
// }