import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import config from '../config';


import io from 'socket.io-client';
const socket = io('http://localhost:30000');


const styles = theme => ({
  container: {
    display: 'flex',
    // flexWrap: 'wrap',
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
    this.state = {
      message: '',
      messages: [],
      name: '',
      roomId: ''
    };
    socket.on('connect', this.onConnect);
  }

  onConnect = () => {
    let that = this;
    console.log(socket);

    // socket.emit('add-user', {username: that.state.name});

    // socket.on('user-joined', (data) => {
    //   console.log(data.username + " Join");
    // });
    // socket.emit('newMessage', {message: `test ${that.state.name}`});
    // socket.on('typing', (data) => {
    //   console.log(data.username + " Typing");
    // });
    socket.emit('join', {roomId: '1111111'});
    socket.on('newMessage', function(data){

      console.log('newMessage data', data);
      console.log(`User ${data.username} send new message ${data.message}`);
      let messages = that.state.messages.slice();
      messages.push(data.message);
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
      console.log('disconnec ',d);
    });
  }

  onSend = (event) => {
    console.log('.....');
    let messages = this.state.messages.slice();
    messages.push(this.state.message);
    this.setState({
      messages: messages
    })
    socket.emit('message', {user: socket.id, roomId: '1111111', message: this.state.message});
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
      return (<span key={m}>{m}</span>);
    });

    return (
      <div className={classes.container}>
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
        <div>{messages}</div>
      </div>
    );
  }
}

Chat.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chat);