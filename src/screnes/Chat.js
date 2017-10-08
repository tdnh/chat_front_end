import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import config from '../config';
import '../styles/Chat.css';

import { connect } from 'react-redux';


import io from 'socket.io-client';
const socket = io('http://localhost:30000');


const styles = theme => ({
  container: {
    // display: 'flex',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
});


function createRoom() {
  fetch(
    `${config.url}/rooms`,
    { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': ''
      },
      body: JSON.stringify({name: 'test'}) }
  ).then(resp => {
    return resp.json();
  }).then(data => {
    
    if (data.code === 200) {
      alert('Success');
      // _that.setState({exchange: 0, currency: '', fromDate: getDate(), toDate: getDate()});
    } else {
      alert(JSON.stringify(data));
    }
  }).catch(err => {
    console.log(err);
  });
}


class Chat extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      message: {},
      messages: [],
      user: props.user,
      roomId: ''
    };
    socket.on('connect', this.onConnect);
  }

  onConnect = () => {
    let that = this;

    // socket.emit('add-user', {username: that.state.name});

    // socket.on('user-joined', (data) => {
    //   console.log(data.username + " Join");
    // });
    // socket.emit('newMessage', {message: `test ${that.state.name}`});
    // socket.on('typing', (data) => {
    //   console.log(data.username + " Typing");
    // });
    socket.on('message', function (data) {
      console.log('on message data', data);
      let messages = that.state.messages.slice();
      messages.push(data);
      that.setState({
        messages: messages
      })
    });
    socket.emit('join', {roomId: '59cf5f6dbe94083b0bfb8221'});
    socket.on('newMessage', function(data){

      console.log('newMessage data', data);
      console.log(`User ${data.author.name} send new message ${data.body}`);
      let messages = that.state.messages.slice();
      messages.push(data);
      that.setState({
        messages: messages
      })
    });
    // socket.on('login', (data) => {
    //   console.log('login data', data);
    // });
    // socket.on('user-left', (d) => {
    //   console.log(`User ${d.username} left room`);
    // });
    socket.on('disconnect', function(d){
      console.log('disconnect ',d);
    });
  }

  onSend = (event) => {
    console.log('onSend.....', this.state.message);
    // let messages = this.state.messages.slice();
    // messages.push(this.state.message);
    // this.setState({
    //   messages: messages
    // })
    socket.emit('message', {user: this.state.user._id, roomId: '59cf5f6dbe94083b0bfb8221', message: this.state.message});
  }

  handleChange = (event) => {
    this.setState({message: event.target.value});
  }

  componentWillUnmount() {
    // socket.emit('leave-room', {roomId: ''});
  }

  render() {
    const classes = this.props.classes;

    let messages = this.state.messages.map(m => {
      return (<span key={m._id}>{m.body}</span>);
    });

    return (
      <div className={classes.container}>
        <div>
          <h1>Hello chat</h1>
        </div>
        <div>
          {messages}
        </div>
        <footer >
          <Input
            placeholder="Placeholder"
            className={classes.input}
            onChange={this.handleChange}
            inputProps={{
              'aria-label': 'Description',
            }}
          />
          <Button raised color="primary" className={classes.button} onClick={this.onSend}> Send </Button>
          <Button raised color="primary" className={classes.button} onClick={createRoom}> Create Room </Button>
      </footer>
      </div>
    );
  }
}

Chat.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user
  }
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
};


const ChatConnect = connect(mapStateToProps,mapDispatchToProps)(Chat);

// export default withStyles(styles)(Chat);
export default withStyles(styles)(ChatConnect);