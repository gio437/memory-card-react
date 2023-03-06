import React from 'react';
import './App.css';
import { useState } from 'react';
import Siberian from './siberian.png';

function App() {
  let [cardArr, nextCard] = useState(new Array(20).fill(0));

// reverse function order
function checkImage(e) {
  const selectedIndex = parseInt(e.target.id);
  console.log(selectedIndex);
  if (selectedIndex === cardArr[selectedIndex]) {
    nextCard(cardArr = new Array(20).fill(0));
    console.log(cardArr);
  }
  else {ImageClicked(e)};
}

function ImageClicked(e) {
  const selectedIndex = parseInt(e.target.id);
  cardArr.splice(selectedIndex, 1, selectedIndex);
  console.log(cardArr);
}


  return (
    <img className='siberian' alt='' src={Siberian} id='12' onClick={checkImage}></img>
  )

}

export default App;
