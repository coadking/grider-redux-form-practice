import React, { Component } from 'react';
import './App.css';
import Header from './components/header'; 

class App extends Component {
  render() {
    return (
      <div> 
      <div className="">
      <Header /> 
      {this.props.children}
      </div>
      </div>
    );
  }
}

export default App;
