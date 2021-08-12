import React from "react";
import Nav from "./Nav";
import CardMultiper from "./CardMultiper";import Image from "./Images";
import { Route,Switch } from "react-router-dom";
import Home from "./Home"
import "./App.css"
import Price from "./Price";

let App=()=>
{
  return(<><Nav/>
  <Switch>
    <Route path="/" component={Home} exact/>
  <Route path="/price" component={Price} exact />
  <Route path="/card" component={CardMultiper} exact>
  <CardMultiper/>
  </Route>
  </Switch>
  
  </>);
}
export default App;