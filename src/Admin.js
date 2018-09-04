import React, { Component } from 'react';

const Admin = (props) => {
  return(
    <section style={{margin: '2%'}}>
      <input id="nameInput" style={{marginBottom: '2%'}} type="text"></input><br/>
      <button onClick={(e) => {props.inputCatChanger(document.getElementById('nameInput'))}}>Submit</button>
      <button onClick={(e) => {document.getElementById('nameInput').value = ''}}>Cancel</button>
    </section>
  )
}

export default Admin
