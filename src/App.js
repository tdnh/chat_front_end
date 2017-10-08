import React from 'react';
// import PropTypes from 'prop-types';
import Routers from './router';
// import Header from './components/Header';
// import { connect } from 'react-redux';



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Routers />
      </div>
    )
  }
};


export default App;