import {renderSpiral,frame,canvas,props} from "./modules/ulam.js";

let running = false;
props.init();
canvas.render();

canvas.canvas.addEventListener('click',() => {
  if (!running) {
    frame.animationFrame = window.requestAnimationFrame(renderSpiral);
    running = true;
  }
  else{
    window.cancelAnimationFrame(frame.animationFrame);
    running = false;
  }
});

canvas.canvas.addEventListener('dblclick',() => {
  window.cancelAnimationFrame(frame.animationFrame);
  running = false;     
  canvas.clear();
  canvas.render();
  props.reset();
});