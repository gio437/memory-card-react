import React from 'react';
import './App.css';
import { useState } from 'react';
import Siberian from './images/siberian.png';
import Tabby from './images/tabby.png';
import Abyssinian from './images/abyssinian.png';
import Bengal from './images/bengal.png';
import Black from './images/black.png';
import Blue from './images/blue.png';
import Calico from './images/calico.png';
import Egyptian from './images/egyptian.png';
import Gray from './images/gray.png';
import Half from './images/half-face.png';
import Mackeral from './images/mackeral.png';
import Maine from './images/maine.png';
import Munchkin from './images/munchkin.png';
import Tortoise from './images/orange-black.png';
import Kitten from './images/orange-kitten.png';
import Orange from './images/orange.png';
import Persian from './images/persian.png';
import Rex from './images/rex.png';
import Russian from './images/russian.png';
import Savannah from './images/savannah.png';


function App() {
  let [cardArr, nextCard] = useState(new Array(19).fill(0));
  cardArr[0] = 1;

  let [counter, nextCount] = useState(0);

function checkImage(e) {
  const clickedVal = parseInt(e.target.id);
  console.log(clickedVal);
  if (clickedVal === cardArr[clickedVal]) {
    nextCard(cardArr = new Array(19).fill(0));
    cardArr[0] = 1;
    console.log(cardArr);
    RandomAssort();
    nextCount(counter = 0);
    console.log('counter= ' + counter);
  }
  else {ImageClicked(e)};
}

function ImageClicked(e) {
  const clickedVal = parseInt(e.target.id);
  cardArr.splice(clickedVal, 1, clickedVal);
  console.log(cardArr);
  nextCount(counter + 1);
  console.log('counter= ' + counter);
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
      <div>Score: {counter}</div>
      <img className='siberian' alt='' src={Siberian} id='0' onClick={checkImage}></img>
      <img className='tabby' alt='' src={Tabby} id='1' onClick={checkImage}></img>
      <img className='savannah' alt='' src={Savannah} id='2' onClick={checkImage}></img>
      <img className='abyssinian' alt='' src={Abyssinian} id='3' onClick={checkImage}></img>
      <img className='bengal' alt='' src={Bengal} id='4' onClick={checkImage}></img>
      <img className='black' alt='' src={Black} id='5' onClick={checkImage}></img>
      <img className='blue' alt='' src={Blue} id='6' onClick={checkImage}></img>
      <img className='tabby' alt='' src={Calico} id='7' onClick={checkImage}></img>
      <img className='tabby' alt='' src={Egyptian} id='8' onClick={checkImage}></img>
      <img className='tabby' alt='' src={Gray} id='9' onClick={checkImage}></img>
      <img className='tabby' alt='' src={Half} id='10' onClick={checkImage}></img>
      <img className='tabby' alt='' src={Mackeral} id='11' onClick={checkImage}></img>
      <img className='tabby' alt='' src={Maine} id='12' onClick={checkImage}></img>
      <img className='tabby' alt='' src={Munchkin} id='13' onClick={checkImage}></img>
      <img className='tabby' alt='' src={Tortoise} id='14' onClick={checkImage}></img>
      <img className='tabby' alt='' src={Kitten} id='15' onClick={checkImage}></img>
      <img className='tabby' alt='' src={Orange} id='16' onClick={checkImage}></img>
      <img className='tabby' alt='' src={Persian} id='17' onClick={checkImage}></img>
      <img className='tabby' alt='' src={Russian} id='18' onClick={checkImage}></img>
      <img className='tabby' alt='' src={Rex} id='19' onClick={checkImage}></img>
    </div>
  )

}

export default App;
