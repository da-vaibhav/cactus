import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <form action="">
          <input type="text" required />
          <input type="password" required />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default Login;