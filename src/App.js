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
import Score from './Score';


export default function App() {
  let [cardArr, nextCard] = useState(new Array(19).fill(0));
  //cardArr.splice(0, 1, 1);

  let [counter, nextCount] = useState(0);
  let [finalScore, nextFinalScore] = useState(counter);

function checkImage(e) {
  const clickedVal = parseInt(e.target.id);
  console.log(clickedVal);
  if (clickedVal === cardArr[clickedVal]) {
    if (counter > finalScore) {
      nextFinalScore(finalScore = counter);
    }
    nextCard(cardArr = new Array(19).fill(0));
    //cardArr.splice(0, 1, 1);
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


  return (
    <div>
      <Score counter={counter} finalScore={finalScore} />,
      <div className='container'>
        <div className='card'>
          <img className='siberian' alt='' src={Siberian} id='1' onClick={checkImage}></img>
          <p>Siberian</p>
        </div>
        <div className='card'>
          <img className='tabby' alt='' src={Tabby} id='2' onClick={checkImage}></img>
          <p>Tabby</p>
        </div>
        <div className='card'>
          <img className='savannah' alt='' src={Savannah} id='3' onClick={checkImage}></img>
          <p>Savannah</p>
        </div>
        <div className='card'>
          <img className='abyssinian' alt='' src={Abyssinian} id='4' onClick={checkImage}></img>
          <p>Abyssinian</p>
        </div>
        <div className='card'>
          <img className='bengal' alt='' src={Bengal} id='5' onClick={checkImage}></img>
          <p>Bengal</p>
        </div>
        <div className='card'>
          <img className='black' alt='' src={Black} id='6' onClick={checkImage}></img>
          <p>Black Cat</p>
        </div>
        <div className='card'>
          <img className='blue' alt='' src={Blue} id='7' onClick={checkImage}></img>
          <p>Blue Eyes</p>
        </div>
        <div className='card'>
          <img className='Calico' alt='' src={Calico} id='8' onClick={checkImage}></img>
          <p>Calico</p>
        </div>
        <div className='card'>
          <img className='Egpytian' alt='' src={Egyptian} id='9' onClick={checkImage}></img>
          <p>Egyptian</p>
        </div>
        <div className='card'>
          <img className='Gray' alt='' src={Gray} id='10' onClick={checkImage}></img>
          <p>Gray Cat</p>
        </div>
        <div className='card'>
          <img className='Half' alt='' src={Half} id='11' onClick={checkImage}></img>
          <p>Half-Face</p>
        </div>
        <div className='card'>
          <img className='Mackeral' alt='' src={Mackeral} id='12' onClick={checkImage}></img>
          <p>Mackeral</p>
        </div>
        <div className='card'>
          <img className='Maine' alt='' src={Maine} id='13' onClick={checkImage}></img>
          <p>Maine-Coon</p>
        </div>
        <div className='card'>
          <img className='Munchkin' alt='' src={Munchkin} id='14' onClick={checkImage}></img>
          <p>Munchkin</p>
        </div>
        <div className='card'>
          <img className='Tortoise' alt='' src={Tortoise} id='15' onClick={checkImage}></img>
          <p>Tortoise</p>
        </div>
        <div className='card'>
          <img className='Kitten' alt='' src={Kitten} id='16' onClick={checkImage}></img>
          <p>Kitten</p>
        </div>
        <div className='card'>
          <img className='Orange' alt='' src={Orange} id='17' onClick={checkImage}></img>
          <p>Orange Cat</p>
        </div>
        <div className='card'>
          <img className='Persian' alt='' src={Persian} id='18' onClick={checkImage}></img>
          <p>Persian</p>
        </div>
        <div className='card'>
          <img className='Russian' alt='' src={Russian} id='19' onClick={checkImage}></img>
          <p>Russian Blue</p>
        </div>
        <div className='card'>
          <img className='Rex' alt='' src={Rex} id='20' onClick={checkImage}></img>
          <p>Devon Rex</p>
        </div>
      </div>
    </div>
  )
}