import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Video from "./video";
import Team from "./team";
import Contact from "./contact";
import SignIn from "./signIn";
import Register from "./register";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/video" component={Video} />
    <Route exact path="/team" component={Team} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/signin" component={SignIn} />
    <Route exact path="/register" component={Register} />
  </Switch>
);

export default Main;
