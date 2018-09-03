import React, { Component } from 'react';
import kit0 from './assets/kit0.jpg';
import kit1 from './assets/kit1.jpg';
import kit2 from './assets/kit2.jpg';
import kit3 from './assets/kit3.jpg';
import kit4 from './assets/kit4.jpg';
import './App.css';

class App extends Component {

  handleClick = (e) => {
    let images = document.getElementsByClassName('list')
    let attribute = e.target.getAttribute('id')
    //images is HTMLCollection. to map through the HTMLCollection I have to convert it to array
    //to get attay from HTMLCollection - spread operator is used
    let array = [...images]
    //map method has two arguments image - iterable element of array and i - that counts number of time it loops, so we can use it as index
    array.map((image, i) => {
      //			let index = image.getAttribute('id')
      if( i == attribute ) {
        return(image.setAttribute('style', 'display: block;'))
      }
      else {
        return(image.setAttribute('style', 'display: none'))
      }
    })
  }

  onImageClick = (e) => {
    const clickNumber = e.target.previousSibling
    const integer = parseInt(clickNumber.innerHTML)
    clickNumber.innerHTML = (integer + 1)
  }

  render() {
    return (
      <div className='App'>
        <div>
          <h1 className='App-title'>Click on the button to chose a kitten</h1>
          <button id='0' onClick={this.handleClick}>Wally</button>
          <button id='1' onClick={this.handleClick}>Polly</button>
          <button id='2' onClick={this.handleClick}>Alice</button>
          <button id='3' onClick={this.handleClick}>Debby</button>
          <button id='4' onClick={this.handleClick}>Abby</button>
        </div>
        <ul>
          <li className='list' style={{display: 'none'}}>
            <h2>Wally</h2>
            <h4 style={{display: 'flex-root'}}>Clicks:</h4>
            <p style={{display: 'flex-root'}}>0</p>
            <img onClick={this.onImageClick} src={kit0} alt="kitten"/>
          </li>
          <li className='list' style={{display: 'none'}}>
            <h2>Polly</h2>
            <h4 style={{display: 'flex-root'}}>Clicks:</h4>
            <p style={{display: 'flex-root'}}>0</p>
            <img onClick={this.onImageClick} src={kit1} alt="kitten"/>
          </li>
          <li className='list' style={{display: 'none'}}>
            <h2>Alice</h2>
            <h4 style={{display: 'flex-root'}}>Clicks:</h4>
            <p style={{display: 'flex-root'}}>0</p>
            <img onClick={this.onImageClick} src={kit2} alt="kitten"/>
          </li>
          <li className='list' style={{display: 'none'}}>
            <h2>Dabby</h2>
            <h4 style={{display: 'flex-root'}}>Clicks:</h4>
            <p style={{display: 'flex-root'}}>0</p>
            <img onClick={this.onImageClick} src={kit3} alt="kitten"/>
          </li>
          <li className='list' style={{display: 'none'}}>
            <h2>Abby</h2>
            <h4 style={{display: 'flex-root'}}>Clicks:</h4>
            <p style={{display: 'flex-root'}}>0</p>
            <img onClick={this.onImageClick} src={kit4} alt="kitten"/>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
