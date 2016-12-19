import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Alert from './bootstrap/Alert'
import Button from './bootstrap/Button'
import Jumbo from './bootstrap/Jumbo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Alert type='danger'>Warning you fiend!</Alert>
        <Alert>This is fine</Alert>
        <Button type='danger'>Don't Click!</Button>
        <Button type='success'>You can click, bro!</Button>
        <Jumbo heading='My heading' text='this is some text'></Jumbo>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
