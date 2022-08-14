import './App.css';
import mouse from './res/mouse.png';
import cow from './res/cow.png';
import tiger from './res/tiger.png';
import rabbit from './res/rabbit.png';
import dragon from './res/dragon.png';
import snake from './res/snake.png';
import horse from './res/horse.png';
import sheep from './res/sheep.png';
import monkey from './res/monkey.png';
import chicken from './res/chicken.png';
import dog from './res/dog.png';
import pig from './res/pig.png';


// import { useState } from 'react';

const Header = (props) => {
  return (
    <h1>
      {props.name}
    </h1>
  )
}


//USER INPUT EVENT HAPPENED
const dateSubmit = (event) => {
    
  event.preventDefault();
  const input = document.querySelector('input');
  // console.log(input.value);

  //CONTROL USER INPUT
  const datePattern = /^\d{4}\/[0-1]?\d\/[0-3]?\d/;
  if (!datePattern.test(input.value)){
    alert("Incorrect format! Please enter the date correctly.")
    input.value = null;
    return
  }

  //LOGIC TO DECIDE WHAT ANIMAL TO SHOW
  const standardDate = new Date(1900, 0, 0);
  const userInput = input.value.split('/');
  // console.log(userInput);
  const userDate = new Date(userInput[0], parseInt(userInput[1])-1, userInput[2]);
  // console.log(userDate);
  const diffDate = Math.floor((userDate.getTime() - standardDate.getTime())/(1000 * 60 * 60 * 24));
  // console.log(diffDate%12);

  let char;

  switch (Math.floor(diffDate%12)) {
    case 0:
      char = mouse;
      break;
    case 1:
      char = cow;
      break;
    case 2:
      char = tiger;
      break;
    case 3:
      char = rabbit;
      break;
    case 4:
      char = dragon;
      break;
    case 5:
      char = snake;
      break;
    case 6:
      char = horse;
      break;
    case 7:
      char = sheep;
      break;
    case 8:
      char = monkey;
      break;
    case 9:
      char = chicken;
      break;
    case 10: 
      char = dog;
      break;
    case 11: 
      char = pig
      break;
  }

  //RESET THE INPUT BAR 
  input.value = null;

  //SHOW THE PROPER MESSAGE AND IMAGE TO THE USER
  const div = document.getElementById("result");

  if (!document.querySelector('img')) {
    const img = document.createElement('img');
    const message = document.createElement('div');
    // div.id = "message";
    div.appendChild(message);
    div.appendChild(img);
    message.textContent = "YOUR FAVORITE ANIMAL IS:"
    img.src = char;
    img.width = "300";
    img.height = "300";
  }
  else {
    const img = document.querySelector('img');
    img.src = char;
  }
 
}

const Input = () => {

  return (
    <div class="form">
      <form onSubmit = {dateSubmit}>
        <input 
          type = "text" 
          maxLength = "10"
          placeholder ="yyyy/mm/dd"
        >
        </input> 
        <button type="submit">Find</button>
        <div id="result"></div>
      </form>
      
  
    </div> 
  )
}

const App = () => {

  return (
    <div>
      <Header name ="The Finder" />
      <Input/>
    </div>
  );
}

export default App;
