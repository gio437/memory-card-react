import React from 'react';
import './App.css';
import { useState } from 'react';
import Siberian from './images/siberian.png';
import Tabby from './images/tabby.png';

function App() {
  let [cardArr, nextCard] = useState(new Array(20).fill(0));

// useEffect
function checkImage(e) {
  const clickedVal = parseInt(e.target.id);
  console.log(clickedVal);
  if (clickedVal === cardArr[clickedVal]) {
    nextCard(cardArr = new Array(20).fill(0));
    console.log(cardArr);
    RandomAssort();
  }
  else {ImageClicked(e)};
}

function ImageClicked(e) {
  const clickedVal = parseInt(e.target.id);
  cardArr.splice(clickedVal, 1, clickedVal);
  console.log(cardArr);
  RandomAssort();
}

function RandomAssort() {
  // let [imgArr, nextImg] = useState([Siberian, Tabby]);

   const container = document.querySelector('.container');
   console.log(container)
   for (let i = container.children.length; i >= 0; i--) {
      container.appendChild(container.children[Math.random() * i | 0]);
   }
}


// how will you re arrange the images?
  return (
    <div className='container'>
      <img className='siberian' alt='' src={Siberian} id='1' onClick={ImageClicked}></img>
      <img className='tabby' alt='' src={Tabby} id='2' onClick={ImageClicked}></img>
    </div>
  )

}

export default App;
