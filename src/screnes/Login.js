import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import '../styles/Login.css';
import config from '../config';
import { userLogin } from '../actions';
import { connect } from 'react-redux';


const styles = theme => ({
  container: {
    // display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});



function login({email, password}) {
  fetch(
    `${config.url}/users/login`,
    { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}) }
  ).then(resp => {
    return resp.json();
  }).then(data => {
    console.log(data);
    if (data.code === 200) {
      alert('Success');
    } else {
      alert(JSON.stringify(data));
    }
  }).catch(err => {
    console.log(err);
  });
};



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'n@n.com',
      password: 'n@n.com'
    }
  }


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  // responseFacebook = (response) => {
  //   console.log(response);
  // }

  // loginFacebook = () => {
  //   return (
  //     <FacebookLogin
  //       appId="1088597931155576"
  //       autoLoad={true}
  //       fields="name,email,picture"
  //       callback={ this.responseFacebook }
  //       cssClass="my-facebook-button-class"
  //       icon="fa-facebook"
  //     />
  //   );
  // }

  handleLogin = (event) => {
    this.props.dispatch(userLogin({email: this.state.email, password: this.state.password}));
    event.preventDefault();
  }

  render() {
    const { classes, user } = this.props;
    if (Object.keys(user).length != 0 && user.constructor === Object) {
      return (<h1>Hello {user.name}</h1>);
    }

    return (
      <div>
        <h1>User Login</h1>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            required
            id="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange('email')}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="email"
            margin="normal"
          />
          <TextField
            required
            id="password"
            label="Password"
            className={classes.textField}
            type="password"
            onChange={this.handleChange('password')}
            autoComplete="current-password"
            placeholder="password"
            InputLabelProps={{
                shrink: true,
              }}
            margin="normal"
          />
          <Button raised color="primary" className={classes.button} onClick={this.handleLogin}>
            Login
          </Button>
        </form>
      </div>
    )
  }
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};



function mapStatetoProps(state) {
  return {
    user: state.user
  }
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
};

const LoginComponent = connect(mapStatetoProps, mapDispatchToProps)(Login);

export default withStyles(styles)(LoginComponent);
