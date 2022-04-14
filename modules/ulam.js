import { Canvas } from "./canvas.js";
import { Props } from "./props.js";

const frame = {
    animationFrame: null
};
const canvas = new Canvas();
const context = canvas.context;
const props = new Props(canvas.width,canvas.height);

function isPrime(number) {
  if(number < 2) {
    return false;
  }  
  for(let i=2; i<=Math.sqrt(number); i++) {
    if(number % i == 0) {
      return false;
    }  
  } 
  return true;
}

function renderDot() {
  context.fillStyle = "#FFFF"
  context.beginPath();
  context.arc(props.x, props.y, 0.5, 0, 2 * Math.PI);
  context.closePath();
  context.fill();
}
    
function renderSpiral() {
  if(isPrime(props.num)) {
    renderDot(context,props.x,props.y,0.5);
  } 
    
  switch(props.state) {
    case 0:
      props.x += props.stepSize;
      break;
    case 1:
      props.y -= props.stepSize;
      break;
    case 2:
      props.x -= props.stepSize;
      break;
    case 3:
      props.y += props.stepSize;
      break;     
    }
    
  if(props.num % props.numSteps === 0) {
    props.state = (props.state + 1) % 4;
    props.turnCounter++;  
    if(props.turnCounter % 2 === 0) {
      props.numSteps++;
    }
  }
  
  props.num++;
  frame.animationFrame = window.requestAnimationFrame(renderSpiral);
}

export { renderSpiral, frame, canvas, props };