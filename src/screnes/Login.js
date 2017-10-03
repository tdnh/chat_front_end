import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import '../styles/Login.css';


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




class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
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
    alert('An essay was submitted: ' + this.state.email + ' ' + this.state.password);
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;

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
};

export default withStyles(styles)(Login);
