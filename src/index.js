import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import printMe from './print.js'

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['ToDo', 'Listr'], ' ');
    element.classList.add('hello');

  const myIcon = new Image(); 
  myIcon.src = Icon;
  element.appendChild(myIcon);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

    return element;
  }

 document.body.appendChild(component());