import React, {useState} from "react";
import ReactDOM from "react-dom";
import {labels} from './labels.js'

function App () {
    const photos = ['https://images.unsplash.com/photo-1587425644576-20b32e0f86ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    'https://images.unsplash.com/photo-1587491439780-f5a8885888e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1587497963548-2b766c58dd7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1587497063995-9a131dcaff7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=936&q=80',
    'https://images.unsplash.com/photo-1587481822949-5155d07961a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
   ];
   const [index,setIndex] = useState(0);
   const [score,setScore] = useState(0);
   const [gameOver,setGameOver] = useState(false)
   const [roundOver,setRoundOver] = useState(false)

   let handleAnswerClick = (event) => {
    let points = parseInt(event.target.value)
    let newScore = score + points
    setScore(newScore)
    setRoundOver(true)
   }

  let shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  let renderChoiceButtons = () => {
    if (!roundOver && !gameOver){
      let buttons = labels[index].map( ({description}, i) => {
        return (
          <div key={i} >
            <br/>
              <button 
                className='button' 
                value={5 - i}
                ranking={i+1}
                onClick={handleAnswerClick}
              >
                {description}
              </button>
            <br/>
          </div>
         )
        } 
      )
      return shuffle(buttons)
    } else {
      return labels[index].map( ({description}, i) => {
        return (
          <div key={i} >
            <br/>
              <button 
                className='button' 
              >
                {i+1}. {description}
              </button>
            <br/>
          </div>
        )
      } 
      )
    }
  }

  let handleNext = () => {
    setRoundOver(false)
    if (index < 4) {
      setIndex(index + 1)
    } else {
      setGameOver(true)
    }
  }

  let renderNextButton = () => {
    if (roundOver){
      return <button className="button" onClick={handleNext}>NEXT</button>
    }
  }

  return (
    <div>
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              ai.Spy
            </h1>
            <h2 className="subtitle">
              Can you guess what the Google Vision API sees?
            </h2>
          </div>
        </div>
      </section>
        <br/>
    <div className='columns is-centered is-vcentered is-mobile'>
      <div className='column'/>
      <div className='column'>
        <div className="box">
          Score: {score}
        </div>
        {renderChoiceButtons()}
      </div>
      <div className='column'/>
      <div className='column is-narrow is-centered'>
        <div className='box'>
          <img height="400rem" width="300rem" src={photos[index]}/>
        </div>
        {renderNextButton()}
      </div>
      <div className='column'/>
    </div>      
    </div>
  );
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);

