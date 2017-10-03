import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props);
    console.log('LOGIN');
    this.state = {
      email: '',
      password: ''
    }
  }

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

  handleSubmit = (event) => {
    alert('An essay was submitted: ' + this.state.email + ' ' + this.state.password);
    event.preventDefault();
  }

  handleEmail = (event) => {
    this.setState({email: event.target.value});
  }

  handlePassword = (event) => {
    this.setState({password: event.target.value});
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" name="email" value={this.state.email} onChange={this.handleEmail} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handlePassword} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
};


// Login.propTypes = {
//   values: PropTypes.number.isRequired
// };


export default Login;
