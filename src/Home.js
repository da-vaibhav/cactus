import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  componentWillMount = () => {
    fetch('http://localhost:4000/po')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
  }

  render() {
    return (
      <div>
        <p>Home</p>
        Please <a href="login">login</a>
      </div>
    );
  }
}

export default Home;