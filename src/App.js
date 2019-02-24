import React, { Component } from 'react';
import './App.css';
import Actu from './Components/Actu';
import Footer from './Components/Footer';
import Partner from './Components/Partner';

class App extends Component {
  render() {
    return (
      <div>
        <Partner />
        <Footer /> 
      </div>
    );
  }
}

export default App;
