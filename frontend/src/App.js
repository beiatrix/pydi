import React, { Component } from 'react';
import './App.css';
import {Posts} from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>hello world</h1>
          <Posts />
        </header>
      </div>
    );
  }
}

export default App;
