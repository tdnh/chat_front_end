import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotFound extends Component {
  constructor(props) {
    super(props);
    console.log('..............');
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }


  render() {
    return (
      <div>
        <h1>404</h1>
        <h1>PAGE NOT FOUND</h1>
      </div>
    )
  }
};


export default NotFound;
