import React, { Component } from 'react';
import kit0 from './assets/kit0.jpg';
import kit1 from './assets/kit1.jpg';
import kit2 from './assets/kit2.jpg';
import kit3 from './assets/kit3.jpg';
import kit4 from './assets/kit4.jpg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 'none'
    }
  }

  handleClick = () => {
    let images = document.getElementsByClassName('.img')
    return console.log(images) 
  }

  render() {

    return (
      <div className="App">
        <p onClick={this.handleClick()}>
          kdsjflajsdf
        </p>
          <h1 className="App-title">Click on the button to chose a kitten</h1>
          <button onClick={this.handleClick()}>Wally</button>
          <button onClick={this.handleClick()}>Polly</button>
          <button onClick={this.handleClick()}>Alice</button>
          <button onClick={this.handleClick()}>Debby</button>
          <button onClick={this.handleClick()}>Abby</button>
        <img className='image' style={{display: this.state.visible}} src={kit0} alt="kitten"/>
        <img className='image' style={{display: this.state.visible}} src={kit1} alt="kitten"/>
        <img className='image' style={{display: this.state.visible}} src={kit2} alt="kitten"/>
        <img className='image' style={{display: this.state.visible}} src={kit3} alt="kitten"/>
        <img className='image' style={{display: this.state.visible}} src={kit4} alt="kitten"/>
      </div>
    );
  }
}

export default App;
