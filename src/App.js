import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h3>welcome!</h3>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
