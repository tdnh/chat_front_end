import React from 'react';
// import { Router, Route, browserHistory } from 'react-router';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import Screnes from '../screnes';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';


const styles = theme => ({
  header: {
    width: '100%',
    height: 400
  },
});

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
  const { classes } = props;

  return (
    (
      <div >
        <nav className={classes.header}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/chat">Chat</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={Screnes.Home} />
            <Route path="/login" component={Screnes.Login} />
            <Route path="/register" component={Screnes.Register} />
            <PrivateRoute path="/chat" user={props.user} component={Screnes.Chat} />
            <Route path="/about" component={Screnes.About} />
            <Route component={Screnes.NotFound} />
          </Switch>
        </main>
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

// export default RouteConnect;
export default withStyles(styles)(RouteConnect);