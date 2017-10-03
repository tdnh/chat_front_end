import React from 'react';
import PropTypes from 'prop-types';
import Routers from './router';
import Header from './components/Header';



class App extends React.Component {


  render() {
    return (
      <div>
        <Routers />
      </div>
    )
  }
};



export default App;