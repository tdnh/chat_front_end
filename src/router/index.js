import React from 'react';
// import { Router, Route, browserHistory } from 'react-router';
import { Route, Switch, Link } from 'react-router-dom';
import Screnes from '../screnes';

export default () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link>/<Link to="/register">Register</Link></li>
      <li><Link to="/chat">Chat</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
    <div>
      <Switch>
        <Route exact path="/" component={Screnes.Home}/>
        <Route path="/login" component={Screnes.Login} />
        <Route path="/register" component={Screnes.Register} />
        <Route path="/chat" component={Screnes.Chat} />
        <Route path="/about" component={Screnes.About} />
        <Route component={Screnes.NotFound} />
      </Switch>
    </div>
  </div>
)
