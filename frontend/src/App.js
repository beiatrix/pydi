import React, { Component } from 'react';
import './App.css';
import {Posts, AddPost} from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>pydi</h1>
          <p>digital diary app</p>
        </header>
        <AddPost />
        <Posts />
      </div>
    );
  }
}

export default App;
