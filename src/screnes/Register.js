import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import '../styles/Login.css';
import config from '../config';
import { userRegister } from '../actions';
import { connect } from 'react-redux';




class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleRegister = (event) => {
    this.props.dispatch(userRegister({
      email: this.state.email,
      password: this.state.password,
      name: this.state.name
    }));
    event.preventDefault();
  }


  componentDidMount() { }
  componentWillUnmount() { }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <h1>User Register</h1>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            required
            id="name"
            label="Fist and Last Name"
            value={this.state.name}
            onChange={this.handleChange('name')}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Fist and Last Name"
            margin="normal"
          />
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
          <Button raised color="primary" className={classes.button} onClick={this.handleRegister}>
            Login
          </Button>
        </form>
      </div>
    )
  }
}



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


Register.propTypes = {
  classes: PropTypes.object.isRequired,
};



function mapStatetoProps(state) {
  return {
    state
  }
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
};

const RegisterComponent = connect(mapStatetoProps, mapDispatchToProps)(Register);

export default withStyles(styles)(RegisterComponent);
