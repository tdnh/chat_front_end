import React from 'react';
// import { Router, Route, browserHistory } from 'react-router';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import Screnes from '../screnes';
import { connect } from 'react-redux';
import 'materialize-css';

function checkUserInfo(user) {
  if (!user) return false;
  return Object.keys(user).length && user.constructor === Object;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkUserInfo(rest.user) ? (
      <Component {...props} />
    ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
  )} />
)

const RoutesApp = (props) => {
  console.log('this.props');
  console.log(props);

  return (
    (
      <div >
          <nav>
          <Link to="/" className="brand-logo">Home</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/chat">Chat</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        <main className="main">
          <Switch>
            <Route exact path="/" component={Screnes.Home} />
            <Route path="/login" component={Screnes.Login} />
            <Route path="/register" component={Screnes.Register} />
            <PrivateRoute path="/chat" user={props.user} component={Screnes.Chat} />
            <Route path="/about" component={Screnes.About} />
            <Route component={Screnes.NotFound} />
          </Switch>
        </main>
        <a className="btn btn-floating pulse"><i className="material-icons">menu</i></a>
      </div>
    )
  )
};



function mapStateToProps(state) {
  return {
    user: state.user,
    location: state.router.location
  }
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
};


const RouteConnect = connect(mapStateToProps, mapDispatchToProps)(RoutesApp);

export default RouteConnect;