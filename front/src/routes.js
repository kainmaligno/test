import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//AUTH
import Login from "./Components/auth/Login";
import Private from "./Components/auth/Private";
import Home from './Components/Home';
import Personnel from './Components/Personnel';
import Person from './Components/Person';
import PersonEdit from './Components/PersonEdit';
export default () => <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/private" component={Private} />
        <Route path="/login" component={Login} />
        <Route path="/personnel" component ={Personnel}/>
        <Route path="/details/:id" component={Person}/>
        <Route path='/edit/:id' component={PersonEdit}/>
      </Switch>
    </div>
</Router>
