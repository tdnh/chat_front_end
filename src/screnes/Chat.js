import React, { Component } from 'react';
import io from 'socket.io-client';
const socket = io('http://localhost:30000');


class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      roomId: ''
    };
  }

  handleSubmit = (event) => {
    let that = this;
    // alert('An essay was submitted: ' + this.state.name);
    socket.on('connect', function(){
      socket.emit('add-user', {username: that.state.name});

      socket.on('user-joined', (data) => {
        console.log(data.username + " Join");
      });
      socket.emit('new-message', {message: `test ${that.state.name}`});
      socket.on('typing', (data) => {
        console.log(data.username + " Typing");
      });
      socket.on('new-message', function(data){
        console.log(`User ${data.username} send new message ${data.message}`);
      });
      socket.on('login', (data) => {
        console.log('login data', data);
      });
      socket.on('user-left', (d) => {
        console.log(`User ${d.username} left room`);
      });
      socket.on('disconnect', function(d){
        console.log('disconnec ',d);
      });
    });
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({name: event.target.value});
  }

  componentWillUnmount() {
    socket.emit('leave-room', {roomId: ''});
  }

  render() {
    return (
      <div>
        <h1>CHAT</h1>
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <textarea value={this.state.name} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default Chat;
