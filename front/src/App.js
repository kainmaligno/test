import React, { Component } from 'react';
import Nav from './Components/Nav';
import Login from './Components/auth/Login';


class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Login/>
      </div>
    );
  }
}

export default App;
